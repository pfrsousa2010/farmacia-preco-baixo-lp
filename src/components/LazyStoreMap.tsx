import { Suspense, lazy, useEffect, useRef, useState } from "react"

const StoreMap = lazy(() => import("./StoreMap"))

const placeholder = (
  <div className="grid h-[320px] w-full place-items-center bg-brand-50 sm:h-[420px]">
    <span className="text-sm font-medium text-ink/40">Carregando mapa…</span>
  </div>
)

/**
 * O Leaflet pesa mais que o resto do site somado, e o mapa fica bem abaixo da
 * dobra — então só é baixado quando o visitante chega perto dele.
 */
export default function LazyStoreMap() {
  const sentinel = useRef<HTMLDivElement>(null)
  // Sem IntersectionObserver não há como adiar, então já entra visível.
  const [visible, setVisible] = useState(() => !("IntersectionObserver" in window))

  useEffect(() => {
    const node = sentinel.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "400px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={sentinel}>
      {visible ? <Suspense fallback={placeholder}>{<StoreMap />}</Suspense> : placeholder}
    </div>
  )
}
