"use client";

import { cn } from "@/lib/utils";
import { UIMessage, useChat } from "@ai-sdk/react";
import { ChatStatus } from "ai";
import { ThreeDotsBounce } from "@/components/ui/three-dots-loading";
import { ConversationError } from "./conversation/conversation-error";
import { AssistantMessage } from "./conversation/assistant-message";
import { AssistantMessageMenu } from "./conversation/assistant-message-menu";
import { UserMessage } from "./conversation/user-message";

export type ConversationProps = {
  messages: UIMessage[];
  status: ChatStatus;
  error: Error | undefined;
  regenerate: ReturnType<typeof useChat>["regenerate"];
};

export function Conversation({
  messages,
  status,
  error,
  regenerate,
}: ConversationProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-10">
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <div
              key={message.id}
              className={cn("flex", isUser && "justify-end")}
            >
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  if (isUser) {
                    return <UserMessage key={index} text={part.text} />;
                  }
                  return (
                    <div key={index}>
                      <AssistantMessage text={part.text} />
                      {true && <AssistantMessageMenu message={part.text} />}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
        {status === "submitted" && <ThreeDotsBounce />}
        {error && <ConversationError regenerate={regenerate} />}
      </div>
    </div>
  );
}
