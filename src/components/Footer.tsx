import { Heart, MapPin } from "lucide-react"
import { mapsLink, site, whatsappLink } from "../data/site"
import InstagramIcon from "./InstagramIcon"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Footer() {
  return (
    <footer className="bg-brand-900 py-14 text-white/80">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            src="/images/logo.png"
            alt={`${site.name} ${site.city}`}
            className="h-14 w-auto"
            loading="lazy"
          />
          <p className="max-w-md leading-relaxed">
            {site.slogan} {site.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href={whatsappLink(`Olá! Falo com a ${site.name} ${site.city}?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
              {site.whatsapp.display}
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <InstagramIcon className="size-4" />
              {site.instagram.handle}
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {site.address.street}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {site.name} {site.city}. Todos os direitos reservados.
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5">
            Feito com <Heart className="size-3.5 fill-current text-brand-400" aria-hidden="true" />{" "}
            para cuidar de você
          </p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://microfocus.dev.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60"
            >
              Microfocus
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
