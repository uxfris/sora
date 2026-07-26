"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export const CopyButton = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(message);
    toast.add({ title: "Copied to clipboard" });
  };
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            onClick={(e) => {
              console.log(e);
              handleCopy();
            }}
            variant={"ghost"}
            size={"icon-lg"}
            className={cn(className)}
          >
            <HugeiconsIcon icon={CopyIcon} />
          </Button>
        }
      />
      <TooltipContent side="bottom">
        <p>Copy response</p>
      </TooltipContent>
    </Tooltip>
  );
};
