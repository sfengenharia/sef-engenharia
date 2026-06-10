import { cn } from "../../utils/cn";

export function TextLink({ children, href, active, className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        "font-sans font-medium text-[16px] text-ink transition-colors duration-300 pb-1 border-b-2",
        active ? "border-primary" : "border-transparent hover:border-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
