import { cn } from "../../utils/cn";

export function ContactLink({ icon: Icon, text, href, className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-1.5 cursor-pointer",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon className="w-6 h-6 text-primary shrink-0 transition-colors duration-300" />
      )}
      <span className="font-sans font-medium text-[18px] leading-none text-muted transition-colors duration-300 group-hover:text-primary whitespace-nowrap">
        {text}
      </span>
    </a>
  );
}
