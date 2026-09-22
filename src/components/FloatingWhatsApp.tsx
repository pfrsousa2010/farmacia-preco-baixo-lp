import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { defaultMessage, whatsappLink } from "../data/site"

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className={`fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-display font-bold text-white shadow-xl shadow-black/25 transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5a] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden sm:inline">Pedir no WhatsApp</span>
    </a>
  )
}
