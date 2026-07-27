"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { ArrowUp02Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChatStatus } from "ai";
import { useState } from "react";

export default function ChatComposer({
  status,
  sendMessage,
}: {
  status: ChatStatus;
  sendMessage: (text: string) => void;
}) {
  const [input, setInput] = useState("");

  return (
    <div className="mx-auto w-full max-w-2xl mb-8 rounded-3xl p-3 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.15)]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim() && status === "ready") {
            sendMessage(input);
            setInput("");
          }
        }}
      >
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          placeholder="Ask Sora"
          className="resize-none min-h-10 max-h-50 overflow-y-auto border-0 py-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 leading-relaxed text-base!"
        />
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon-lg">
            <HugeiconsIcon icon={PlusSignIcon} size={6} className="size-6!" />
          </Button>
          <Button
            type="submit"
            disabled={status !== "ready" || !input.trim()}
            size="icon-lg"
            className="rounded-full"
          >
            <HugeiconsIcon icon={ArrowUp02Icon} size={6} className="size-6!" />
          </Button>
        </div>
      </form>
    </div>
  );
}
