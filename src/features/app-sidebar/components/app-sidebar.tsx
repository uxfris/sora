import { Sidebar } from "@/components/ui/sidebar";

import AppSidebarHeader from "./sidebar-header";
import AppSidebarFooter from "./sidebar-footer";
import AppSidebarContent from "./sidebar-content";

export function AppSidebar() {
  return (
    <Sidebar className="border-none bg-background" collapsible="icon">
      <AppSidebarHeader />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
