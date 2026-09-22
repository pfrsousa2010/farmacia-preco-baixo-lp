import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { mapsLink, site } from "../data/site"

/**
 * Marcador da loja: gota vermelha com um ícone de loja branco dentro.
 * Vai como divIcon porque o marcador padrão do Leaflet não aceita SVG inline.
 */
const markerSvg = `
<svg width="56" height="70" viewBox="0 0 56 70" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="28" cy="65" rx="9" ry="3.5" fill="rgba(0,0,0,.28)" />
  <path
    d="M28 1C14.2 1 3 12.2 3 26c0 17.5 21.3 36.6 22.2 37.4a4 4 0 0 0 5.6 0C31.7 62.6 53 43.5 53 26 53 12.2 41.8 1 28 1Z"
    fill="#dc1019" stroke="#fff" stroke-width="3"
  />
  <g transform="translate(14.5 13.5)" fill="none" stroke="#fff" stroke-width="2.2"
     stroke-linecap="round" stroke-linejoin="round">
    <path d="M1.5 6.5 3.2 1.4A2 2 0 0 1 5.1 0h16.8a2 2 0 0 1 1.9 1.4l1.7 5.1" />
    <path d="M2.5 6.5h22v13a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2Z" />
    <path d="M1.5 6.5a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0 6.5 4" />
    <path d="M10.5 21.5v-6h6v6" />
  </g>
</svg>`

/**
 * Provedor dos tiles. O OpenStreetMap serve sem chave de API e sem conta — a
 * CARTO passou a exigir chave e estampava "API KEY REQUIRED" sobre o mapa.
 * Para trocar de provedor depois, basta mexer aqui.
 */
const TILES = {
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 19,
}

export default function StoreMap() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const { lat, lng } = site.address.coords
    const map = L.map(container.current, {
      center: [lat, lng],
      zoom: 17,
      // A rolagem da página não deve virar zoom quando o dedo passa pelo mapa.
      scrollWheelZoom: false,
      attributionControl: true,
    })

    L.tileLayer(TILES.url, {
      attribution: TILES.attribution,
      maxZoom: TILES.maxZoom,
    }).addTo(map)

    const marker = L.marker([lat, lng], {
      title: `${site.name} ${site.city}`,
      alt: `Localização da ${site.name} em ${site.city}`,
      icon: L.divIcon({
        html: markerSvg,
        className: "store-marker",
        iconSize: [56, 70],
        // A ponta da gota é que marca o ponto, não o centro do desenho.
        iconAnchor: [28, 68],
        popupAnchor: [0, -60],
      }),
    }).addTo(map)

    marker
      .bindPopup(
        `<strong>${site.name}</strong><br>${site.address.street}<br>` +
          `<a href="${mapsLink}" target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>`,
      )
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div
      ref={container}
      role="application"
      aria-label={`Mapa com a localização da ${site.name} em ${site.city}`}
      className="h-[320px] w-full sm:h-[420px]"
    />
  )
}
