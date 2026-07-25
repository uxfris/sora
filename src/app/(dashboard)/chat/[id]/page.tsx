"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen02Icon,
  Delete02Icon,
  Download01Icon,
  Edit03Icon,
  GoogleDocIcon,
  MoreVerticalIcon,
  Pin02Icon,
  Share03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Chat() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <span>Conversation</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={(props) => (
            <Button
              variant={"ghost"}
              size={"icon-lg"}
              className="absolute top-3 right-3"
              {...props}
            >
              <HugeiconsIcon
                icon={MoreVerticalIcon}
                size={5}
                className="size-5!"
              />
            </Button>
          )}
        />
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>
            <HugeiconsIcon icon={Share03Icon} /> Share conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Pin02Icon} /> Pin
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Edit03Icon} /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Download01Icon} /> Download
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={GoogleDocIcon} /> Export to docs
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={BookOpen02Icon} />
            Add to notebook
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Delete02Icon} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
