import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const buttonVariants = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover hover:text-white",
  secondary:
    "bg-[#FAB50F]/40 text-primary hover:bg-primary hover:text-on-primary",
};

const Button = forwardRef(
  ({ className, variant = "primary", ...props }, ref) => {
    // Base classes baseadas no Figma properties:
    // gap-2 px-8 py-3 rounded-md font-semibold text-sm
    const baseClasses =
      "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md font-sans font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    return (
      <button
        ref={ref}
        className={cn(baseClasses, buttonVariants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
