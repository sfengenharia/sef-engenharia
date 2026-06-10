import { CheckCircle2 } from "lucide-react";
import { cn } from "../../utils/cn";

export function ChecklistItem({ children, variant = "primary", className, ...props }) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={cn(
        "flex items-start gap-1.5",
        className
      )}
      {...props}
    >
      <CheckCircle2
        className={cn(
          "w-4 h-4 shrink-0 mt-[2px]",
          isPrimary ? "text-primary" : "text-ink"
        )}
      />
      <p className="font-sans font-medium text-[16px] leading-tight text-muted">
        {children}
      </p>
    </div>
  );
}
