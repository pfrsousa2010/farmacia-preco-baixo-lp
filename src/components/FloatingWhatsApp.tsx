import { defaultMessage, site, whatsappLink } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir pelo WhatsApp ${site.whatsapp.display}`}
      className="fixed right-4 bottom-[76px] z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] p-4 font-display font-bold text-white shadow-xl shadow-black/30 transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-[84px] sm:px-6 sm:py-4"
    >
      <WhatsAppIcon className="size-7 shrink-0" />
      <span className="hidden sm:inline">Pedir no WhatsApp</span>
    </a>
  )
}
