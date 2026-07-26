// Add near your other imports
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react"; // or any icon set you use
import { useRef, useState } from "react";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative">
      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 z-10 h-8 w-8 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
      >
        <div className="relative h-4 w-4">
          <Check
            className={cn(
              "absolute inset-0 h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-200",
              copied && "opacity-100",
            )}
          />
          <Copy
            className={cn(
              "absolute inset-0 h-4 w-4 text-muted-foreground opacity-100 transition-opacity duration-200",
              copied && "opacity-0",
            )}
          />
        </div>
      </Button>
      <pre ref={preRef} className="bg-muted p-0! overflow-x-auto rounded-2xl">
        {children}
      </pre>
    </div>
  );
}
