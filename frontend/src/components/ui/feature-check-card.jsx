import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

export function FeatureCheckCard({ title, description, className, ...props }) {
  return (
    <div
      className={cn(
        "group flex items-start gap-2 p-5 bg-[#FFF4DB]/50 rounded-[15px] cursor-default",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-[46px] h-[46px] shrink-0 rounded-[10px] bg-success/10 text-success transition-colors duration-300 group-hover:bg-success group-hover:text-white">
        <Check className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-start leading-[1.2]">
        <h3 className="font-sans font-semibold text-[18px] text-primary mb-1">
          {title}
        </h3>
        <p className="font-sans font-normal text-[14px] text-muted tracking-[-0.7px]">
          {description}
        </p>
      </div>
    </div>
  );
}
