import React from "react";
import { cn } from "../../utils/cn";

/**
 * BlogCard — card de artigo para a seção de posts recentes / blog.
 * Fundo claro (`canvas`) com hairline sutil e elevação leve que ganha peso no
 * hover (`shadow-sm` → `shadow-md`). A imagem (16:9) sofre um zoom suave no hover
 * do card (efeito `group-hover`).
 *
 * Props: image, title, excerpt, date, className.
 */
export function BlogCard({ image, title, excerpt, date, className, ...props }) {
  return (
    <article
      className={cn(
        "group bg-canvas rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {/* Imagem topo — aspecto 16:9 fixo + zoom no hover */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-muted">
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-2">
        {date && (
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {date}
          </span>
        )}
        {title && (
          <h3 className="text-lg font-semibold text-ink leading-snug">{title}</h3>
        )}
        {excerpt && (
          <p className="text-ink/70 text-sm leading-relaxed">{excerpt}</p>
        )}
      </div>
    </article>
  );
}
