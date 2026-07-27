"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowDown01Icon, Pin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { appRoutes } from "@/routes";
import Link from "next/link";
import { Chat } from "@/generated/prisma/client";

export default function AppSidebarContent({
  initialChats,
}: {
  initialChats: Chat[];
}) {
  const [recentOpen, recentOnOpenChange] = useState(true);

  const pathname = usePathname();

  const [chats, setChats] = useState(initialChats);

  useEffect(() => {
    const es = new EventSource("/api/sidebar/events");

    es.addEventListener("chat-created", (event) => {
      const chat = JSON.parse(event.data);

      setChats((prev) => {
        if (prev.some((c) => c.id === chat.id)) {
          return prev;
        }

        return [chat, ...prev];
      });
    });

    return () => es.close();
  }, []);

  return (
    <SidebarContent>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <Collapsible open={recentOpen} onOpenChange={recentOnOpenChange}>
          <SidebarGroupLabel
            className="gap-1 cursor-pointer w-full group/label"
            render={
              <CollapsibleTrigger>
                <span className="truncate">Recents</span>
                <HugeiconsIcon
                  size={3}
                  icon={ArrowDown01Icon}
                  className={cn(
                    "size-3! transition-all duration-100 group-hover/label:opacity-100 opacity-0",
                    recentOpen ? "rotate-0" : "-rotate-90",
                  )}
                />
              </CollapsibleTrigger>
            }
          />
          <SidebarGroupContent>
            <CollapsibleContent>
              <SidebarMenu>
                {chats.map((chat, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      isActive={pathname === appRoutes.chat.detail(chat.id)}
                      className="justify-between"
                      render={(props) => (
                        <Link href={appRoutes.chat.detail(chat.id)} {...props}>
                          <span className="truncate">{chat.title}</span>
                          {
                            // chat.isPinned
                            false && (
                              <HugeiconsIcon
                                icon={Pin02Icon}
                                className="shrink-0"
                              />
                            )
                          }
                        </Link>
                      )}
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroupContent>
        </Collapsible>
      </SidebarGroup>
    </SidebarContent>
  );
}
