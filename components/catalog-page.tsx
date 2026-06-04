"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CategoryFilter } from "@/components/category-filter"
import { CatalogSection } from "@/components/catalog-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  categories,
  rolexAAAWatches,
  rolexAutoWatches,
  patekWatches,
  nautilusWatches,
  aquanautWatches,
  seamasterWatches,
  cartierWatches,
  tagHeuerWatches,
} from "@/lib/watch-data"

interface CatalogPageProps {
  scrollTo?: string
}

export function CatalogPage({ scrollTo }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const showRolex    = activeCategory === "Todos" || activeCategory === "Rolex"
  const showPatek    = activeCategory === "Todos" || activeCategory === "Patek Philippe"
  const showOmega    = activeCategory === "Todos" || activeCategory === "Omega"
  const showCartier  = activeCategory === "Todos" || activeCategory === "Cartier"
  const showTagHeuer = activeCategory === "Todos" || activeCategory === "Tag Heuer"

  useEffect(() => {
    if (!scrollTo) return
    // Small delay to let the page render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(scrollTo)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 300)
    return () => clearTimeout(timer)
  }, [scrollTo])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="bg-gradient-to-b from-background to-card/20">
        {showRolex && (
          <CatalogSection
            id="rolex-aaa"
            brand="Rolex"
            watches={rolexAAAWatches}
          />
        )}

        {showRolex && (
          <CatalogSection
            id="rolex-auto"
            brand="Rolex Automáticos"
            watches={rolexAutoWatches}
          />
        )}

        {showPatek && (
          <CatalogSection
            id="patek-philippe"
            brand="Patek Philippe"
            watches={patekWatches}
          />
        )}

        {showPatek && (
          <CatalogSection
            id="patek-nautilus"
            brand="Patek Philippe — Nautilus"
            watches={nautilusWatches}
          />
        )}

        {showPatek && (
          <CatalogSection
            id="patek-aquanaut"
            brand="Patek Philippe — Aquanaut"
            watches={aquanautWatches}
          />
        )}

        {showOmega && (
          <CatalogSection
            id="omega-seamaster"
            brand="Omega — Seamaster"
            watches={seamasterWatches}
          />
        )}

        {showCartier && (
          <CatalogSection
            id="cartier"
            brand="Cartier"
            watches={cartierWatches}
          />
        )}

        {showTagHeuer && (
          <CatalogSection
            id="tag-heuer"
            brand="Tag Heuer"
            watches={tagHeuerWatches}
          />
        )}
      </div>

      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
