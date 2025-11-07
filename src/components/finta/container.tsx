import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-5xl w-full mx-auto px-2 md:py-1", className)}>
      {children}
    </div>
  );
}
