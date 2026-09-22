import { ChevronDown } from "lucide-react"

const faq = [
  {
    q: "Preciso de receita para comprar genéricos?",
    a: "Depende do medicamento. Alguns exigem receita (com ou sem retenção), outros não. Se tiver dúvida, manda o nome do remédio no WhatsApp que a gente confirma antes de você vir até a loja.",
  },
  {
    q: "Vocês entregam em qual região?",
    a: "As entregas são só dentro de Benevides.",
  },
  {
    q: "Tem valor mínimo para o delivery?",
    a: "Sim, a partir de R$ 30,00.",
  },
  {
    q: "Quanto tempo demora a entrega?",
    a: "Em média 45 minutos.",
  },
  {
    q: "Posso parcelar a compra?",
    a: "Sim, no cartão de crédito em até 3x sem juros.",
  },
  {
    q: "Como faço um pedido?",
    a: "É só chamar no WhatsApp com o nome do remédio ou a foto da receita. A gente confirma disponibilidade e valor, você escolhe a forma de pagamento e o pedido sai para entrega.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand-600 uppercase">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
            Ficou com alguma dúvida?
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map(({ q, a }) => (
            <details key={q} className="faq-item group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100/70">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown
                  className="faq-chevron size-5 shrink-0 text-brand-600 transition-transform duration-200"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-ink/60">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
