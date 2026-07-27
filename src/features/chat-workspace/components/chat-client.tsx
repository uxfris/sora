"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, UIMessage } from "ai";
import { ChatMenu } from "@/features/chat-workspace/components/toolbar";
import { Conversation } from "@/features/chat-workspace/components/conversation";
import ChatComposer from "@/features/chat-workspace/components/composer";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import { apiRoutes } from "@/routes";

export function ChatClient({
  id,
  initialMessages,
}: {
  id: string;
  initialMessages: UIMessage[];
}) {
  const router = useRouter();

  const hasNavigationRef = useRef(!!id);

  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    messages: initialMessages,
    id: id,
    transport: new DefaultChatTransport({
      api: apiRoutes.chat,
      body: {
        id: id,
      },
    }),
  });

  const handleSendMessage = useCallback(
    (text: string) => {
      sendMessage({ text });

      if (!hasNavigationRef.current) {
        hasNavigationRef.current = true;
        router.replace(`chat/${id}`);
      }
    },
    [sendMessage, id, router],
  );

  const isNewChat = messages.length === 0;

  return (
    <section className="relative h-screen flex flex-col">
      {isNewChat ? (
        <div className="flex-1 flex flex-col gap-2 items-center justify-center text-center">
          <h1 className="text-2xl font-medium">What can I help with?</h1>
          <p className="text-sm text-muted-foreground">
            Ask a question, write code, or explore ideas
          </p>
        </div>
      ) : (
        <Conversation
          messages={messages}
          status={status}
          error={error}
          regenerate={regenerate}
        />
      )}
      <ChatComposer
        sendMessage={(text) => handleSendMessage(text)}
        status={status}
      />
      <ChatMenu />
    </section>
  );
}
