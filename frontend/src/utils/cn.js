import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classes condicionais (clsx) e resolve conflitos de utilitários
 * Tailwind (tailwind-merge). Use em todo componente que aceite `className`.
 *
 * @example cn('px-base text-ink', isActive && 'text-primary', className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
