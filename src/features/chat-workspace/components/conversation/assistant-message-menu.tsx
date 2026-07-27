import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

export function AssistantMessageMenu({
  message,
  isLast,
}: {
  message: string;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 transition-opacity",
        isLast ? "opacity-100" : "opacity-0 group-hover/message:opacity-100",
      )}
    >
      <CopyButton message={message} />
    </div>
  );
}
