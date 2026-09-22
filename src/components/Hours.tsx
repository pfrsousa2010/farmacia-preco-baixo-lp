import { useEffect, useState } from "react"
import { CalendarClock, HeartPulse, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { site } from "../data/site"
import { getOpenState } from "../lib/openingHours"

const promises = [
  { icon: HeartPulse, label: "Cuidando da sua saúde" },
  { icon: ShieldCheck, label: "Confiança e qualidade" },
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Sparkles, label: "Tudo em um só lugar" },
]

export default function Hours() {
  const [state, setState] = useState(() => getOpenState())

  useEffect(() => {
    const id = setInterval(() => setState(getOpenState()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="horarios" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Horário de funcionamento
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            Prontos para cuidar de você nos melhores horários
          </h2>

          <p
            className={`mt-6 inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-display text-sm font-bold ${
              state.isOpen ? "bg-green-100 text-green-800" : "bg-brand-50 text-brand-700"
            }`}
            aria-live="polite"
          >
            <span
              className={`size-2.5 rounded-full ${state.isOpen ? "animate-pulse bg-green-500" : "bg-brand-500"}`}
            />
            {state.isOpen
              ? `Aberto agora — até as ${state.today.close}`
              : `Fechado agora — abre as ${state.today.open}`}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {site.hours.map((entry) => (
            <div
              key={entry.days}
              className="rounded-3xl border-2 border-brand-100 bg-gradient-to-br from-white to-brand-50/60 p-8 text-center transition-colors hover:border-brand-300"
            >
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand-600 text-white">
                <CalendarClock className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-sm font-bold tracking-widest text-brand-700 uppercase">
                {entry.days}
              </h3>
              <p className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {entry.open} <span className="text-xl text-ink/40">às</span> {entry.close}
              </p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-3 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-bold text-ink/75">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
