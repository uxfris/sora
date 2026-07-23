import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarFooter } from "@/components/ui/sidebar";
import { Setting07Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter className="px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>Fris El</span>
            <span className="text-xs text-muted-foreground">Plus</span>
          </div>
        </div>
        <Button variant={"ghost"} size={"icon-lg"}>
          <HugeiconsIcon size={5} icon={Setting07Icon} className="size-4!" />
        </Button>
      </div>
    </SidebarFooter>
  );
}
