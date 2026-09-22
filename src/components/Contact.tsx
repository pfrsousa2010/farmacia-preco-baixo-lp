import { Clock, MapPin, MessageCircle } from "lucide-react"
import InstagramIcon from "./InstagramIcon"
import { mapsLink, site } from "../data/site"
import WhatsAppButton from "./WhatsAppButton"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Contact() {
  return (
    <section id="contato" className="bg-brand-50/60 py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
          <img
            src="/images/fachada.png"
            alt={`Fachada da ${site.name} em ${site.city}`}
            className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
            width={727}
            height={414}
          />
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Venha nos visitar
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            A sua farmácia no coração de {site.city}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/60">
            Passe na loja para conferir as ofertas ou fale com a gente pelo WhatsApp. Agradecemos a
            confiança e a preferência!
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-4">
              <MessageCircle className="mt-0.5 size-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold text-ink">WhatsApp</dt>
                <dd className="text-ink/60">{site.whatsapp.display}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold text-ink">Endereço</dt>
                <dd className="text-ink/60">
                  {site.city} — {site.state}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold text-ink">Funcionamento</dt>
                <dd className="text-ink/60">
                  {site.hours.map((entry) => (
                    <span key={entry.days} className="block">
                      {entry.days}: {entry.open} às {entry.close}
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton>
              <WhatsAppIcon className="size-5" />
              Falar no WhatsApp
            </WhatsAppButton>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-600 px-7 py-3.5 font-display font-bold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Ver no mapa
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-14 place-items-center rounded-full bg-white text-brand-600 ring-1 ring-brand-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
            >
              <InstagramIcon className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
