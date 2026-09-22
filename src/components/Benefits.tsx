import { HandHeart, PackageCheck, ShieldCheck, Sparkles, Timer, Wallet } from "lucide-react"

const benefits = [
  {
    icon: Wallet,
    title: "Preço baixo de verdade",
    text: "Comparamos e praticamos os melhores preços da região, todos os dias — sem letras miúdas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e confiança",
    text: "Medicamentos de qualidade, armazenados corretamente e com orientação de quem entende.",
  },
  {
    icon: Timer,
    title: "Atendimento rápido",
    text: "Você chega, é atendido e sai resolvido. Sem fila interminável, sem enrolação.",
  },
  {
    icon: PackageCheck,
    title: "Tudo em um só lugar",
    text: "Medicamentos, genéricos, higiene, perfumaria, infantil e cuidados do dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Genéricos com desconto",
    text: "A mesma eficácia da marca de referência pagando bem menos. Pergunte ao nosso time.",
  },
  {
    icon: HandHeart,
    title: "Cuidado com respeito",
    text: "Atendimento humano, paciente e atencioso — do balcão até a porta da sua casa.",
  },
]

export default function Benefits() {
  return (
    <section id="vantagens" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Por que escolher a gente
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            Cuidando da sua saúde com amor e respeito
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Mais do que vender remédio, a gente resolve o seu problema — gastando menos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <span className="grid size-13 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-6.5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
