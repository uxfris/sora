"use client";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { appRoutes } from "@/routes";
import { Edit02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "New Chat",
    url: appRoutes.chat.root,
    icon: Edit02Icon,
  },
  {
    title: "Search Chat",
    url: appRoutes.search,
    icon: Search01Icon,
  },
];

export default function AppSidebarHeader() {
  const pathname = usePathname();

  return (
    <SidebarHeader className="px-3 gap-4">
      <SidebarMenu>
        <div className="flex items-center justify-between pl-2 h-10">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="relative group/brand flex">
              <Image
                src={
                  "https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
                }
                width={20}
                height={20}
                alt={"Brand Logo"}
                className="shrink-0 opacity-100 group-data-[collapsible=none]:group-hover/brand:opacity-0 transition-opacity duration-100"
              />
              <div
                className="absolute inset-0
flex items-center justify-center
opacity-0
pointer-events-none
group-data-[collapsible=icon]:group-hover/brand:opacity-100
group-data-[collapsible=icon]:pointer-events-auto
transition-opacity"
              >
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <SidebarTrigger
                        className={"cursor-pointer"}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      />
                    }
                  ></TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Close sidebar</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <span
              className="font-medium transition-all duration-100
            group-data-[collapsible=icon]:w-0
            group-data-[collapsible=icon]:opacity-0
            group-data-[collapsible=icon]:ml-0"
            >
              Gemini
            </span>
          </Link>
          <div className="group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:pointer-events-none">
            <Tooltip>
              <TooltipTrigger
                render={<SidebarTrigger className={"cursor-pointer"} />}
              ></TooltipTrigger>
              <TooltipContent side="right">
                <p>Close sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </SidebarMenu>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton
              className="gap-3"
              isActive={pathname === item.url}
              render={
                <Link href={item.url}>
                  <HugeiconsIcon icon={item.icon} />
                  <span>{item.title}</span>{" "}
                </Link>
              }
            />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarHeader>
  );
}
