import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export function DropdownLink({ title, items = [], className, ...props }) {
  return (
    <div className={cn("group relative inline-block", className)} {...props}>
      {/* Trigger */}
      <button className="flex items-center gap-1 font-sans font-medium text-[16px] text-ink pb-1 border-b-2 border-transparent group-hover:border-primary transition-colors duration-300 cursor-default">
        {title}
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="flex flex-col min-w-[200px] bg-canvas border border-border rounded-md shadow-md overflow-hidden">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="px-4 py-3 font-sans font-medium text-[14px] text-ink transition-colors duration-200 hover:bg-primary hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
