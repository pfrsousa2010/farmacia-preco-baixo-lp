import { Banknote, CreditCard, QrCode } from "lucide-react"

const methods = [
  {
    icon: QrCode,
    title: "Pix",
    text: "Aprovação na hora, sem taxa.",
  },
  {
    icon: CreditCard,
    title: "Cartão de débito",
    text: "Todas as bandeiras.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    text: "Parcelamos em até 3x sem juros.",
  },
  {
    icon: Banknote,
    title: "Dinheiro",
    text: "Na loja ou na entrega.",
  },
]

export default function Payment() {
  return (
    <section id="pagamento" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Formas de pagamento
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            Pague do jeito que for melhor pra você
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <span className="grid size-13 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="size-6.5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
