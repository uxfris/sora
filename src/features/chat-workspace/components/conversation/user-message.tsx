"use client";

import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";
import { Edit03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function UserMessage({ text }: { text: string }) {
  return (
    <div className="group flex flex-col gap-1 items-end">
      <div className="max-w-xl bg-muted px-7 py-5 rounded-[32px] whitespace-pre-wrap">
        {text}
      </div>
      <div className="flex items-center gap-1 mr-4">
        <CopyButton
          message={text}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant={"ghost"}
                size={"icon-lg"}
                className={
                  "opacity-0 group-hover:opacity-100 transition-opacity"
                }
              >
                <HugeiconsIcon icon={Edit03Icon} />
              </Button>
            }
          />
          <TooltipContent side="bottom">
            <p>Edit Prompt</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
