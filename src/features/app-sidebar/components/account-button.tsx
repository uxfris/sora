"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AccountButton() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant={"ghost"} className={"pl-0 hover:bg-transparent"}>
            <Avatar className="shrink-0" size="sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div
              className="
              text-left
              overflow-hidden
              transition-all duration-200
              group-data-[collapsible=icon]:w-0
              group-data-[collapsible=icon]:opacity-0
              group-data-[collapsible=icon]:ml-0
            "
            >
              <p className="whitespace-nowrap text-sm font-medium">Fris El</p>
              <p className="whitespace-nowrap text-xs text-muted-foreground">
                Plus
              </p>
            </div>
          </Button>
        }
      />
      <TooltipContent
        side="right"
        align="end"
        className={"flex flex-col items-start gap-1 bg-foreground/70"}
      >
        <span>Google Account</span>
        <div className="flex flex-col">
          <span className="text-popover/70">Fris El</span>
          <span className="text-popover/70">uxfris@dev.com</span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
