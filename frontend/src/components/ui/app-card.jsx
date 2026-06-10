import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./button";

export function AppCard({
  variant = "image", // "image" | "icon"
  imageSrc,
  icon: Icon,
  title,
  description,
  buttonText,
  buttonVariant = "secondary",
  className,
  ...props
}) {
  const isImageVariant = variant === "image";

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl min-h-[480px] p-8 sm:p-10 w-full group",
        isImageVariant ? "justify-end" : "justify-between bg-[#FFF4DB]",
        className
      )}
      {...props}
    >
      {/* Background for image variant */}
      {isImageVariant && (
        <>
          <div className="absolute inset-0">
            <img
              src={imageSrc}
              alt={title || ""}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
        </>
      )}

      {/* Icon for icon variant (Placed at the top) */}
      {!isImageVariant && Icon && (
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" strokeWidth={2} />
        </div>
      )}

      {/* Content wrapper (Placed at the bottom) */}
      <div className="relative flex flex-col items-start gap-4 z-10 w-full mt-auto">
        <h3
          className={cn(
            "font-sans text-[22px] font-semibold leading-tight tracking-tight md:text-[24px]",
            isImageVariant ? "text-primary" : "text-ink"
          )}
        >
          {title}
        </h3>

        {description && (
          <p
            className={cn(
              "font-sans text-[15px] md:text-[16px] leading-relaxed",
              isImageVariant ? "text-white/90" : "text-body"
            )}
          >
            {description}
          </p>
        )}

        {/* Optional Button */}
        {buttonText && (
          <div className="pt-2">
            <Button variant={buttonVariant}>
              {buttonText} <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
