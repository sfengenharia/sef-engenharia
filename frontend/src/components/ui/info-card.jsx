import React from "react";
import { cn } from "../../utils/cn";

export function InfoCard({
  title,
  description,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 rounded-xl border-l-4 border-primary bg-surface-muted p-8 sm:p-10 w-full",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="font-sans text-[24px] font-semibold leading-tight tracking-tight text-ink">
          {title}
        </h3>
      )}
      {description && (
        <p className="font-sans text-[16px] text-body max-w-[800px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
