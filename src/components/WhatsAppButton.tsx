import type { ReactNode } from "react"
import { defaultMessage, whatsappLink } from "../data/site"

type Props = {
  children: ReactNode
  message?: string
  variant?: "solid" | "light" | "outline"
  className?: string
}

const variants = {
  solid:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/30 hover:shadow-brand-700/40",
  light: "bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-black/10",
  outline: "border-2 border-white/70 text-white hover:bg-white/10",
} as const

export default function WhatsAppButton({
  children,
  message = defaultMessage,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-display text-base font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
