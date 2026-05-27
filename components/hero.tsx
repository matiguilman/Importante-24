"use client"

import { Truck, MapPin, CreditCard, MessageCircle } from "lucide-react"

const trustBadges = [
  {
    icon: Truck,
    title: "Contra Entrega",
    description: "Pagás cuando recibís"
  },
  {
    icon: MapPin,
    title: "Envíos a Todo el País",
    description: "Llegamos a cada rincón"
  },
  {
    icon: CreditCard,
    title: "Pago Flexible",
    description: "Efectivo o transferencia"
  },
  {
    icon: MessageCircle,
    title: "Atención WhatsApp",
    description: "Respuesta inmediata"
  }
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30 pointer-events-none" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Experience badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm">
          <span className="text-primary text-lg">✦</span>
          <span className="text-sm sm:text-base text-muted-foreground">
            5 años de experiencia en el rubro
          </span>
          <span className="text-primary text-lg">✦</span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-balance">
          Relojes de{" "}
          <span className="italic text-primary">Alta Gama</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed text-pretty">
          Atención personalizada por WhatsApp, entrega en mano en Buenos Aires 
          y envíos a todo el país. Tu próximo reloj te espera.
        </p>

        {/* Trust badges grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl bg-secondary/30 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30"
            >
              <badge.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              <span className="font-semibold text-sm sm:text-base text-foreground">
                {badge.title}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground text-center">
                {badge.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Explorar
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
