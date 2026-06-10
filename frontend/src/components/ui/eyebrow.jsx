import React from "react";
import { cn } from "../../utils/cn";

export function Eyebrow({ children, text, className, ...props }) {
  return (
    <div 
      className={cn("flex items-center gap-3 text-[14px] font-semibold text-ink uppercase tracking-widest", className)}
      {...props}
    >
      <span className="inline-block w-6 h-[2px] bg-primary"></span>
      <span>{text || children}</span>
    </div>
  );
}
