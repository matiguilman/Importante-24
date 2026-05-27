"use client"

import { useState } from "react"
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
  cartierWatches,
  tagHeuerWatches,
} from "@/lib/watch-data"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const showRolex    = activeCategory === "Todos" || activeCategory === "Rolex"
  const showPatek    = activeCategory === "Todos" || activeCategory === "Patek Philippe"
  const showCartier  = activeCategory === "Todos" || activeCategory === "Cartier"
  const showTagHeuer = activeCategory === "Todos" || activeCategory === "Tag Heuer"

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
