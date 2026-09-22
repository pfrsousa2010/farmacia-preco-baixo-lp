import { Clock, MapPin, Navigation } from "lucide-react"
import InstagramIcon from "./InstagramIcon"
import LazyStoreMap from "./LazyStoreMap"
import { fullAddress, mapsLink, site } from "../data/site"
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
              <WhatsAppIcon className="mt-0.5 size-6 shrink-0 text-brand-600" />
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
                  <span className="block">{site.address.street}</span>
                  <span className="block">
                    {site.address.city} — {site.address.state}, {site.address.zip}
                  </span>
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
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-display font-bold text-brand-700 ring-1 ring-brand-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:ring-brand-600"
            >
              <InstagramIcon className="size-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-14">
        <div className="isolate overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-brand-100">
          <LazyStoreMap />
          <div className="flex flex-col items-start gap-4 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-ink/70">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
              <span>{fullAddress}</span>
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 font-display font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <Navigation className="size-5" aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
