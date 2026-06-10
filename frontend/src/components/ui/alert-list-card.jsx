import React from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "../../utils/cn";

export function AlertListCard({
  icon: Icon = AlertTriangle,
  items = [],
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 border-y border-primary bg-transparent py-8 px-0 sm:px-2",
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 pt-1">
        <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
      </div>
      
      {items.length > 0 && (
        <ul className="flex flex-col gap-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="font-sans text-[16px] md:text-[18px] text-muted leading-relaxed flex items-start"
            >
              <span className="mr-2 text-muted">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
