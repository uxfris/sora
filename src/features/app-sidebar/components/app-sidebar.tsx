import { Sidebar } from "@/components/ui/sidebar";

import AppSidebarHeader from "./sidebar-header";
import AppSidebarFooter from "./sidebar-footer";
import AppSidebarContent from "./sidebar-content";

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <AppSidebarHeader />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
