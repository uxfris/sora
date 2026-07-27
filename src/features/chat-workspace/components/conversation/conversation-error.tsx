import { Button } from "@/components/ui/button";
import { useChat } from "@ai-sdk/react";

export function ConversationError({
  regenerate,
}: {
  regenerate: ReturnType<typeof useChat>["regenerate"];
}) {
  return (
    <div className="mx-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-center justify-between">
      <span>Something went wrong while generating response.</span>
      <Button onClick={() => regenerate()} variant="destructive">
        Retry
      </Button>
    </div>
  );
}
