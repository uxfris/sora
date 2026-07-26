"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp02Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ChatComposer() {
  return (
    <div className="mx-auto w-full max-w-2xl mb-8 rounded-3xl p-3 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.15)]">
      <Textarea
        rows={1}
        placeholder="Ask"
        className="resize-none min-h-10 max-h-50 overflow-y-auto border-0 py-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 leading-relaxed text-base!"
      />
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon-lg">
          <HugeiconsIcon icon={PlusSignIcon} size={6} className="size-6!" />
        </Button>
        <Button size="icon-lg" className="rounded-full">
          <HugeiconsIcon icon={ArrowUp02Icon} size={6} className="size-6!" />
        </Button>
      </div>
    </div>
  );
}
