"use client";

import { SidebarFooter } from "@/components/ui/sidebar";
import { SettingButton } from "./setting-button";
import { AccountButton } from "./account-button";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter className="px-3 py-3 gap-1">
      <div className="flex justify-center">
        <SettingButton className="hidden pl-1 group-data-[collapsible=icon]:flex" />
      </div>
      <div className="flex items-center justify-between h-10">
        <AccountButton />
        <SettingButton className="group-data-[collapsible=icon]:hidden" />
      </div>
    </SidebarFooter>
  );
}
