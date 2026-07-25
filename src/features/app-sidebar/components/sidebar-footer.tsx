import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarFooter } from "@/components/ui/sidebar";
import { Setting07Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter className="px-3 py-3 gap-1">
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="icon-lg"
          className="hidden group-data-[collapsible=icon]:flex"
        >
          <HugeiconsIcon icon={Setting07Icon} className="size-4" />
        </Button>
      </div>
      <div className="flex items-center justify-between h-10">
        <div className="flex items-center gap-2">
          <Avatar className="shrink-0" size="sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div
            className="
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
        </div>
        <Button
          variant="ghost"
          size="icon-lg"
          className="group-data-[collapsible=icon]:hidden"
        >
          <HugeiconsIcon icon={Setting07Icon} className="size-4" />
        </Button>
      </div>
    </SidebarFooter>
  );
}
