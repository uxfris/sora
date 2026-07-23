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
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={
              "https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
            }
            width={24}
            height={24}
            alt={"Brand Logo"}
          />
          <span className="font-medium">Gemini</span>
        </Link>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger
              render={(props) => (
                <SidebarTrigger className={"cursor-pointer"} {...props} />
              )}
            ></TooltipTrigger>
            <TooltipContent side="right">
              <p>Close sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton
              className="gap-3"
              isActive={pathname === item.url}
              render={(props) => (
                <Link href={item.url} {...props}>
                  <HugeiconsIcon icon={item.icon} />
                  <span>{item.title}</span>{" "}
                </Link>
              )}
            />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarHeader>
  );
}
