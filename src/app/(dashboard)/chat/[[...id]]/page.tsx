import { ChatClient } from "@/features/chat-workspace/components/chat-client";
import { appRoutes } from "@/routes";
import { auth } from "@/services/auth/server";
import { getChatWithMessages } from "@/services/db/queries/chat.queries";
import { UIMessage } from "ai";
import { redirect } from "next/navigation";

type ChatProps = {
  params: Promise<{ id?: string[] }>;
};

// page.tsx (Server Component)
export default async function Chat({ params }: ChatProps) {
  const resolvedParams = await params;
  const idArray = resolvedParams.id as string[] | undefined;
  const existingId = idArray?.[0];
  const chatId = existingId ?? crypto.randomUUID();
  const isNewChatId = !existingId; // <-- flag eksplisit, bukan nebak dari id

  const { data: session } = await auth.getSession();

  if (!session?.user) {
    return (
      <ChatClient id={chatId} initialMessages={[]} isNewChatId={isNewChatId} />
    );
  }

  try {
    const chat = await getChatWithMessages({ id: chatId });

    if (!chat || chat.userId !== session.user.id) {
      return (
        <ChatClient
          id={chatId}
          initialMessages={[]}
          isNewChatId={isNewChatId}
        />
      );
    }

    const initialMessages: UIMessage[] = chat.messages.map((m) => ({
      id: m.externalId,
      role: m.role as UIMessage["role"],
      parts: m.parts as UIMessage["parts"],
    }));

    return (
      <ChatClient
        id={chatId}
        initialMessages={initialMessages}
        isNewChatId={isNewChatId}
      />
    );
  } catch (error) {
    redirect(appRoutes.chat.root);
  }
}
