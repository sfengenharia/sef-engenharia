import React from "react";
import { cn } from "../../utils/cn";

export function FeatureCard({
  icon: Icon,
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
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      )}
      
      {title && (
        <h4 className="font-sans text-[20px] font-semibold leading-tight tracking-tight text-ink md:text-[24px]">
          {title}
        </h4>
      )}
      
      {description && (
        <p className="font-sans text-[16px] text-body max-w-[600px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
