import { Sidebar } from "@/components/ui/sidebar";

import AppSidebarHeader from "./sidebar-header";
import AppSidebarFooter from "./sidebar-footer";
import AppSidebarContent from "./sidebar-content";
import { prisma } from "@/services/db/client";
import { auth } from "@/services/auth/server";

export async function AppSidebar() {
  const { data: session } = await auth.getSession();
  const chats = await prisma.chat.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Sidebar className="border-none bg-background" collapsible="icon">
      <AppSidebarHeader />
      <AppSidebarContent initialChats={chats} />
      <AppSidebarFooter />
    </Sidebar>
  );
}
