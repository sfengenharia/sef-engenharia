import React from "react";
import { Send } from "lucide-react";
import { cn } from "../../utils/cn";

export function NewsletterInput({ className, ...props }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        "flex w-full overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-shadow",
        className
      )}
      {...props}
    >
      <input
        type="email"
        placeholder="E-mail"
        required
        className="flex-1 min-w-0 bg-black/20 px-4 py-2.5 font-sans text-[14px] text-white placeholder-white/60 outline-none focus:outline-none focus:ring-0"
      />
      <button
        type="submit"
        aria-label="Assinar newsletter"
        className="flex-shrink-0 flex items-center justify-center px-4 bg-primary text-ink hover:bg-primary-hover transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
