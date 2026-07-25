"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { SidebarFooter } from "@/components/ui/sidebar";
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

export default function AppSidebarFooter() {
  return (
    <SidebarFooter className="px-3 py-3 gap-1">
      <div className="flex justify-center">
        <SettingButton className="hidden group-data-[collapsible=icon]:flex" />
      </div>
      <div className="flex items-center justify-between h-10">
        <AccountButton />
        <SettingButton className="group-data-[collapsible=icon]:hidden" />
      </div>
    </SidebarFooter>
  );
}

function SettingButton({ className }: { className: string }) {
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

function AccountButton() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={(props) => (
          <Button
            variant={"ghost"}
            className={"pl-0 hover:bg-transparent"}
            {...props}
          >
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
        )}
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
