import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./button";
import { Eyebrow } from "./eyebrow";

export function CtaCard({
  eyebrowText,
  titleMain,
  titleHighlight,
  description,
  buttonText,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-6 rounded-xl border-l-4 border-primary bg-surface-muted p-8 sm:p-10 w-full",
        className
      )}
      {...props}
    >
      {eyebrowText && <Eyebrow>{eyebrowText}</Eyebrow>}

      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-[24px] font-semibold leading-tight tracking-tight text-ink md:text-[28px]">
          {titleMain}
          {titleHighlight && (
            <span className="text-primary italic font-semibold"> {titleHighlight}</span>
          )}
        </h2>
        {description && (
          <p className="font-sans text-[16px] text-bold max-w-[600px] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {buttonText && (
        <div className="pt-2">
          <Button variant="primary">
            {buttonText} <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
