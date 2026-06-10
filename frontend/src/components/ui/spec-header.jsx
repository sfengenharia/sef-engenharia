import { FileText } from "lucide-react";
import { cn } from "../../utils/cn";

const variantStyles = {
  primary: {
    container: "bg-primary-soft hover:bg-primary",
    icon: "text-primary group-hover:text-on-primary",
    text: "text-muted group-hover:text-on-primary",
  },
  neutral: {
    container: "bg-surface-muted hover:bg-ink",
    icon: "text-ink group-hover:text-on-dark",
    text: "text-muted group-hover:text-on-dark",
  },
};

export function SpecHeader({
  title,
  icon: Icon = FileText,
  variant = "primary",
  className,
  ...props
}) {
  const styles = variantStyles[variant] || variantStyles.primary;

  return (
    <div
      className={cn(
        "group flex w-full items-center gap-4 p-5 rounded-[10px] transition-colors duration-300 cursor-default",
        styles.container,
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center shrink-0">
        <Icon
          className={cn(
            "w-6 h-6 transition-colors duration-300",
            styles.icon
          )}
        />
      </div>
      <p
        className={cn(
          "font-sans font-medium text-[18px] leading-tight transition-colors duration-300 flex-1 whitespace-nowrap",
          styles.text
        )}
      >
        {title}
      </p>
    </div>
  );
}
