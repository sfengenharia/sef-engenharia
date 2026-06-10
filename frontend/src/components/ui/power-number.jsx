import { cn } from "../../utils/cn";

export function PowerNumber({ icon: Icon, value, label, className, ...props }) {
  return (
    <div
      className={cn("group flex items-center gap-4 shrink-0 md:shrink cursor-default", className)}
      {...props}
    >
      <div className="flex items-center justify-center w-[46px] h-[46px] shrink-0 rounded-[10px] bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-ink">
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      <div className="flex flex-col items-start justify-center whitespace-nowrap md:whitespace-normal">
        <span className="font-sans font-semibold text-[20px] tracking-[-0.6px] text-primary">
          {value}
        </span>
        <span className="font-sans font-normal text-sm lg:text-base leading-snug text-ink mt-0.5">
          {label}
        </span>
      </div>
    </div>
  );
}
