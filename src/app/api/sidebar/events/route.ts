import { Chat } from "@/generated/prisma/client";
import { chatEvents } from "@/lib/chat-events";

const encoder = new TextEncoder();

export async function GET() {
  let handler: ((chat: Chat) => void) | undefined;

  const stream = new ReadableStream({
    start(controller) {
      handler = (chat) => {
        controller.enqueue(
          encoder.encode(
            `event: chat-created\n` + `data: ${JSON.stringify(chat)}\n\n`,
          ),
        );
      };

      chatEvents.on("chat-created", handler);
    },

    cancel() {
      if (handler) {
        chatEvents.off("chat-created", handler);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
