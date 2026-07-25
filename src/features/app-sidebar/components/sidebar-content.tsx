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
import {
  ArrowDown01Icon,
  BookOpen02Icon,
  MoreHorizontalIcon,
  Pin02Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { appRoutes } from "@/routes";
import Link from "next/link";

export default function AppSidebarContent() {
  const [recentOpen, recentOnOpenChange] = useState(true);
  const [notebookOpen, notebookOnOpenChange] = useState(true);

  const pathname = usePathname();

  return (
    <SidebarContent>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <Collapsible open={notebookOpen} onOpenChange={notebookOnOpenChange}>
          <SidebarGroupLabel
            className="gap-1 cursor-pointer w-full group/label"
            render={(props) => (
              <CollapsibleTrigger {...props}>
                <span>Notebooks</span>
                <HugeiconsIcon
                  size={3}
                  icon={ArrowDown01Icon}
                  className={cn(
                    "size-3! transition-all duration-100 group-hover/label:opacity-100 opacity-0",
                    notebookOpen ? "rotate-0" : "-rotate-90",
                  )}
                />
              </CollapsibleTrigger>
            )}
          />
          <SidebarGroupContent>
            <CollapsibleContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname === appRoutes.notebook.create}
                    className="gap-3"
                    render={(props) => (
                      <Link href={appRoutes.notebook.create} {...props}>
                        <HugeiconsIcon icon={PlusSignIcon} />
                        <span>New Notebook</span>
                      </Link>
                    )}
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname === appRoutes.notebook.detail("1")}
                    className="justify-between"
                    render={(props) => (
                      <Link href={appRoutes.notebook.detail("1")} {...props}>
                        <div className="flex items-center gap-3">
                          <HugeiconsIcon icon={BookOpen02Icon} />
                          <span className="truncate">My first Notebook</span>
                        </div>
                        <HugeiconsIcon icon={Pin02Icon} className="shrink-0" />
                      </Link>
                    )}
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={pathname === appRoutes.notebook.view}
                    className="gap-3"
                    render={(props) => (
                      <Link href={appRoutes.notebook.view} {...props}>
                        <HugeiconsIcon icon={MoreHorizontalIcon} />
                        <span>All Notebooks</span>
                      </Link>
                    )}
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroupContent>
        </Collapsible>
      </SidebarGroup>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <Collapsible open={recentOpen} onOpenChange={recentOnOpenChange}>
          <SidebarGroupLabel
            className="gap-1 cursor-pointer w-full group/label"
            render={(props) => (
              <CollapsibleTrigger {...props}>
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
            )}
          />
          <SidebarGroupContent>
            <CollapsibleContent>
              <SidebarMenu>
                {Array.from({ length: 100 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      isActive={pathname === ""} //TODO: update the conditional once data is persisted
                      className="justify-between"
                      render={(
                        props, // TODO: update link url based on real data
                      ) => (
                        <Link href={"/"} {...props}>
                          <span className="truncate">
                            Modern UX Design Process Research
                          </span>
                          <HugeiconsIcon
                            icon={Pin02Icon}
                            className="shrink-0"
                          />
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
