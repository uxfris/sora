"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { toast } from "@/components/ui/toast";
import { appRoutes } from "@/routes";
import { authClient } from "@/services/auth/client";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function AppSidebarFooter() {
  const { data: session } = authClient.useSession();

  const signOut = async () => {
    const res = await authClient.signOut();
    if (res.data?.success) {
      toast.add({
        type: "success",
        description: "Logout success",
      });
    }
  };
  return (
    <SidebarFooter className="py-2 gap-1">
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton>
                    <div className="w-5 h-5 bg-gray-900 rounded-full shrink-0" />
                    <span className="whitespace-nowrap text-sm font-medium group-data-[collapsible=icon]:hidden">
                      {session?.user.name ?? "Guest"}
                    </span>
                  </SidebarMenuButton>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuItem>Toggle Dark Mode</DropdownMenuItem>
                <DropdownMenuSeparator />
                {session && (
                  <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
                )}
                {!session && (
                  <DropdownMenuItem>
                    <Link href={appRoutes.signin}>Log in to your account</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <SidebarMenuAction>
              <HugeiconsIcon icon={ArrowUp01Icon} />
            </SidebarMenuAction>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      {/* <AccountButton /> */}
    </SidebarFooter>
  );
}
