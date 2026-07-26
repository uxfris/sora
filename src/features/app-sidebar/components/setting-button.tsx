"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AiImageFreeIcons,
  DarkModeIcon,
  HistoryIcon,
  Setting07Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Check } from "lucide-react";

export function SettingButton({ className }: { className: string }) {
  return (
    <DropdownMenu>
      <Tooltip>
        <DropdownMenuTrigger
          render={(dropdownProps) => (
            <TooltipTrigger
              render={(tooltipProps) => (
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className={className}
                  {...tooltipProps}
                  {...dropdownProps}
                >
                  <HugeiconsIcon icon={Setting07Icon} className="size-4" />
                </Button>
              )}
            />
          )}
        />
        <TooltipContent side="right">
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="start" className="w-64">
        <DropdownMenuItem>
          <HugeiconsIcon icon={HistoryIcon} size={20} className="size-5" />
          Activity
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={AiImageFreeIcons} size={20} className="size-5" />
          Personal Intelligence
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <HugeiconsIcon icon={DarkModeIcon} size={20} className="size-5" />
            Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-44">
            <DropdownMenuItem className="justify-between">
              System
              <Check />
            </DropdownMenuItem>
            <DropdownMenuItem>Light</DropdownMenuItem>
            <DropdownMenuItem>Dark</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
