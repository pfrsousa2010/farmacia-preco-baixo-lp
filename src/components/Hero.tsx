import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react"
import { mapsLink, site } from "../data/site"
import WhatsAppButton from "./WhatsAppButton"

const highlights = [
  { icon: ShieldCheck, label: "Genéricos com preços especiais" },
  { icon: Clock, label: "Aberto todos os dias" },
  { icon: MapPin, label: `Entrega em ${site.city}` },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-700 pt-20">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-24 -z-10 size-[28rem] rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 -z-10 size-[32rem] rounded-full bg-brand-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-12 py-16 md:py-24 xl:grid-cols-[1.05fr_1fr] xl:gap-16">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-display text-xs font-semibold tracking-wide uppercase backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-green-400" />
            {site.city} — {site.state}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            Remédio barato
            <br />
            <span className="text-yellow-300">de verdade.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Medicamentos, genéricos, perfumaria e muito mais com o menor preço de {site.city}. Faça
            seu pedido pelo WhatsApp e receba em casa — <strong className="font-semibold text-white">pediu, chegou!</strong>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton variant="light" className="px-8 py-4 text-lg">
              Pedir pelo WhatsApp
              <ArrowRight className="size-5" aria-hidden="true" />
            </WhatsAppButton>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/60 px-7 py-3.5 font-display font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Como chegar
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <Icon className="size-4.5 text-yellow-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mb-8 xl:mb-0">
          <div className="animate-float overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl shadow-black/40">
            <img
              src="/images/fachada.png"
              alt={`Fachada da ${site.name} em ${site.city}`}
              className="aspect-[16/10] w-full object-cover object-center"
              width={727}
              height={414}
            />
          </div>

          <div className="absolute -bottom-7 -left-3 hidden rounded-2xl bg-white px-5 py-3.5 shadow-xl shadow-black/25 sm:block">
            <p className="font-display text-xl font-extrabold text-brand-600 sm:text-2xl">
              {site.whatsapp.display}
            </p>
            <p className="text-xs font-medium tracking-wide text-ink/60 uppercase">
              Peça pelo WhatsApp
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 py-4 backdrop-blur-sm">
        <p className="container-page text-center font-display text-sm font-semibold tracking-wide text-white/90 sm:text-base">
          {site.slogan} &nbsp;•&nbsp; {site.tagline}
        </p>
      </div>
    </section>
  )
}
