import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { site } from "../data/site"
import WhatsAppButton from "./WhatsAppButton"

const links = [
  { href: "#vantagens", label: "Vantagens" },
  { href: "#delivery", label: "Delivery" },
  { href: "#pagamento", label: "Pagamento" },
  { href: "#produtos", label: "Produtos" },
  { href: "#horarios", label: "Horários" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "Dúvidas" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${site.name} ${site.city}`}>
          <img
            src="/images/logo.png"
            alt={`${site.name} ${site.city}`}
            className={`h-11 w-auto transition-all duration-300 md:h-12 ${
              scrolled || open ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-semibold transition-colors ${
                scrolled ? "text-ink/70 hover:text-brand-600" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppButton
              variant={scrolled ? "solid" : "light"}
              className="px-5 py-2.5 text-sm whitespace-nowrap"
            >
              <Phone className="size-4" aria-hidden="true" />
              Pedir agora
            </WhatsAppButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled || open ? "bg-brand-50 text-brand-700" : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white shadow-xl lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-50 py-3.5 font-display font-semibold text-ink/80 last:border-0 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton className="mt-4 mb-2 w-full">
              <Phone className="size-4" aria-hidden="true" />
              Pedir pelo WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  )
}
