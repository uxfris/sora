import { CopyButton } from "@/components/ui/copy-button";

export function AssistantMessageMenu({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2">
      <CopyButton message={message} />
    </div>
  );
}
