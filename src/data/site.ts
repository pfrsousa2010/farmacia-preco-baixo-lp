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
  address: {
    street: "R. Vinte e Nove de Dezembro, 89",
    city: "Benevides",
    state: "PA",
    zip: "68795-000",
  },
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

export const fullAddress = `${site.address.street} — ${site.address.city}, ${site.address.state}, ${site.address.zip}`

const mapsQuery = encodeURIComponent(
  `Farmácia Preço Baixo, ${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`,
)

/**
 * Universal Google Maps URL: opens the Maps app when it is installed and falls
 * back to the browser otherwise — on any platform, with no app-specific scheme.
 */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

/** Keyless embed used by the iframe on the contact section. */
export const mapsEmbedLink = `https://www.google.com/maps?q=${mapsQuery}&hl=pt-BR&z=17&output=embed`

export const defaultMessage =
  "Olá! Vim pelo site da Farmácia Preço Baixo Benevides e gostaria de fazer um pedido."
