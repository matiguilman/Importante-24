"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  name: string
  city: string
  watchModel: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Excelente calidad y atención. El reloj llegó en perfectas condiciones. 100% recomendado.",
    name: "Martín G.",
    city: "Buenos Aires",
    watchModel: "Rolex Submariner",
    initial: "M"
  },
  {
    id: "2",
    quote: "Segunda compra con ellos. Siempre puntuales y productos impecables. Muy profesionales.",
    name: "Lucas R.",
    city: "Córdoba",
    watchModel: "Tag Heuer Monaco",
    initial: "L"
  },
  {
    id: "3",
    quote: "Increíble relación calidad-precio. La atención por WhatsApp fue muy rápida y clara.",
    name: "Federico S.",
    city: "Rosario",
    watchModel: "Rolex Daytona",
    initial: "F"
  },
  {
    id: "4",
    quote: "Llegó antes de lo esperado. Excelente empaque y el reloj es hermoso. Volveré a comprar.",
    name: "Nicolás P.",
    city: "Mendoza",
    watchModel: "Rolex GMT-Master",
    initial: "N"
  },
  {
    id: "5",
    quote: "Muy contento con mi compra. El acabado es impresionante. Recomiendo a todos.",
    name: "Alejandro M.",
    city: "Mar del Plata",
    watchModel: "Tag Heuer Carrera",
    initial: "A"
  }
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            Más de <span className="text-primary">500 relojes</span> entregados con éxito
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-foreground flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-foreground flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hidden sm:flex"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <div className="h-full p-6 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm flex flex-col gap-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
                      {testimonial.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.city} • {testimonial.watchModel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
