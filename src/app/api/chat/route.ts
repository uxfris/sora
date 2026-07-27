import { Prisma } from "@/generated/prisma/client";
import { auth } from "@/services/auth/server";
import { prisma } from "@/services/db/client";
import {
  UIMessage,
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  smoothStream,
  streamText,
  toUIMessageStream,
} from "ai";

export async function POST(req: Request) {
  const { messages, id: chatId }: { messages: UIMessage[]; id: string } =
    await req.json();

  const { data: session } = await auth.getSession();

  const MAX_MESSAGES = 10;
  const recentMessages = messages.slice(-MAX_MESSAGES);

  if (session?.user) {
    const isFirstMessage = messages.length === 1;
    if (isFirstMessage) {
      const parts = messages[0].parts;
      let title = "New chat";
      if ("text" in parts) {
        title = parts.text as string;
      }
      await prisma.chat.create({
        data: {
          id: chatId,
          userId: session.user.id,
          title: title,
        },
      });
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role === "user") {
      await prisma.message.create({
        data: {
          id: lastMessage.id,
          attachments: [],
          parts: lastMessage.parts as Prisma.InputJsonValue,
          role: "lastMessage.role",
          chatId,
        },
      });
    }
  }

  const stream = createUIMessageStream({
    execute: async ({ writer: dataStream }) => {
      const result = streamText({
        model: "inclusionai/ling-3.0-flash-free",
        instructions: "You are a helpful assistant",
        messages: await convertToModelMessages(recentMessages),
        experimental_transform: smoothStream({
          delayInMs: 20, // Optional: defaults to 10ms
          chunking: "line", // Optional: options are 'word' or 'line' (defaults to 'word')
        }),
      });

      dataStream.merge(
        toUIMessageStream({
          stream: result.stream,
        }),
      );
    },
    onEnd: async ({ messages: finishedMessages }) => {
      if (!session?.user || finishedMessages.length === 0) return;
      const assistantMessages = finishedMessages.filter(
        (m) => m.role === "assistant",
      );
      await prisma.message.createMany({
        data: assistantMessages.map((m) => ({
          id: m.id,
          attachments: [],
          parts: m.parts as Prisma.InputJsonValue,
          role: m.role,
          chatId,
        })),
      });
    },
  });

  return createUIMessageStreamResponse({
    stream,
  });
}
