export const site = {
  name: "Farmácia Preço Baixo",
  city: "Benevides",
  state: "PA",
  tagline: "Sua saúde, nosso compromisso!",
  slogan: "Mais saúde, menos preço.",
  whatsapp: {
    display: "(91) 98842-3220",
    e164: "5591988423220",
  },
  mapsQuery: "Farmácia Preço Baixo, Benevides - PA",
  instagram: {
    handle: "@benevidesfarmaciaprecobaixo",
    url: "https://www.instagram.com/benevidesfarmaciaprecobaixo",
  },
  hours: [
    { days: "Segunda a Sábado", open: "07:30", close: "21:00" },
    { days: "Domingo", open: "08:00", close: "20:00" },
  ],
} as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(message)}`
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery,
)}`

export const defaultMessage =
  "Olá! Vim pelo site da Farmácia Preço Baixo Benevides e gostaria de fazer um pedido."
