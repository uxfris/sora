"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ChatMenu } from "@/features/chat-workspace/components/toolbar";
import { Conversation } from "@/features/chat-workspace/components/conversation";
import ChatComposer from "@/features/chat-workspace/components/composer";
import { mockInitialMessages } from "@/mock/mockInitialMessages";

export default function Chat() {
  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    messages: mockInitialMessages,
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <section className="relative h-screen flex flex-col">
      <Conversation
        messages={messages}
        status={status}
        error={error}
        regenerate={regenerate}
      />
      <ChatComposer sendMessage={sendMessage} status={status} />
      <ChatMenu />
    </section>
  );
}
