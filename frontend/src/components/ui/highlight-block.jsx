import React from "react";
import { cn } from "../../utils/cn";

export function HighlightBlock({
  children,
  className,
  ...props
}) {
  return (
    <blockquote
      className={cn(
        "border-l-[3px] border-primary pl-4 md:pl-5 py-1 font-sans text-[18px] text-muted leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
