import { Bike, MapPin, MessageCircle, PackageCheck } from "lucide-react"
import { site } from "../data/site"
import WhatsAppButton from "./WhatsAppButton"

const steps = [
  {
    icon: MessageCircle,
    title: "1. Chame no WhatsApp",
    text: "Mande o nome do medicamento ou a foto da receita. Simples assim.",
  },
  {
    icon: PackageCheck,
    title: "2. Confirme o pedido",
    text: "A gente confere disponibilidade, passa o valor e você escolhe a forma de pagamento.",
  },
  {
    icon: Bike,
    title: "3. Receba em casa",
    text: "Nosso entregador sai com seu pedido. Pediu, chegou!",
  },
]

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="relative isolate overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 py-20 text-white md:py-28"
    >
      <div
        className="absolute -top-24 -left-24 -z-10 size-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-yellow-300 uppercase">
              Delivery
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
              Faça seu pedido sem sair de casa!
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              Praticidade no seu dia a dia, segurança e medicamentos de qualidade entregues
              diretamente na sua porta.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
              <MapPin className="size-6 shrink-0 text-yellow-300" aria-hidden="true" />
              <p className="text-sm leading-snug font-medium">
                Entregas somente na cidade de{" "}
                <strong className="font-bold text-yellow-300 uppercase">{site.city}</strong>.
              </p>
            </div>

            <div className="mt-9">
              <WhatsAppButton
                variant="light"
                className="px-8 py-4 text-lg"
                message={`Olá! Quero fazer um pedido com entrega em ${site.city}.`}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                {site.whatsapp.display}
              </WhatsAppButton>
            </div>
          </div>

          <ol className="space-y-4">
            {steps.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-5 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-brand-600">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1 leading-relaxed text-white/80">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
