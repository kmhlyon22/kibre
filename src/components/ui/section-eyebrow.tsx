import { Network } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 mb-3 text-sm font-bold uppercase tracking-wider text-primary", className)}>
      <Network className="w-5 h-5" />
      <span>{children}</span>
    </div>
  );
}
