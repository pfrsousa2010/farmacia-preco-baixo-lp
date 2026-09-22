import { Baby, Droplets, HeartPulse, Pill, Sparkles, Stethoscope } from "lucide-react"
import { defaultMessage } from "../data/site"
import WhatsAppButton from "./WhatsAppButton"

const categories = [
  { icon: Pill, title: "Medicamentos", text: "Referência, similares e de uso contínuo." },
  { icon: HeartPulse, title: "Genéricos", text: "Mesma eficácia pagando bem menos." },
  { icon: Stethoscope, title: "Saúde e bem-estar", text: "Vitaminas, suplementos e acessórios." },
  { icon: Sparkles, title: "Perfumaria", text: "Beleza, cabelo, pele e cuidados diários." },
  { icon: Droplets, title: "Higiene pessoal", text: "O básico da casa sempre com preço baixo." },
  { icon: Baby, title: "Infantil", text: "Fraldas, lenços e cuidados para o bebê." },
]

export default function Products() {
  return (
    <section id="produtos" className="bg-brand-50/60 py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Nossos produtos
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Não achou o que procura? Chame no WhatsApp que a gente verifica para você.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-600/10"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton message={`${defaultMessage} Vocês têm disponível: `}>
            Consultar um produto
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
