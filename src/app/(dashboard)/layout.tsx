import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/features/app-sidebar/components/app-sidebar";
import "katex/dist/katex.min.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main className="flex-1 bg-background">{children}</main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
