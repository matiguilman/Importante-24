"use client"

import { WatchCard, Watch } from "./watch-card"

interface CatalogSectionProps {
  id: string
  brand: string
  watches: Watch[]
}

export function CatalogSection({ id, brand, watches }: CatalogSectionProps) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center tracking-wide">
            <span className="text-primary">♛</span>
            <span className="mx-3 uppercase">{brand}</span>
            <span className="text-primary">♛</span>
            <span className="ml-2 text-sm sm:text-base font-sans font-normal text-muted-foreground">
              AAA+
            </span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Watch grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  )
}
