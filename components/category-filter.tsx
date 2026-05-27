"use client"

import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryFilterProps) {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category)
    
    // Smooth scroll to section if not "Todos"
    if (category !== "Todos") {
      const sectionId = category.toLowerCase().replace(/\s+/g, "-")
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100 // Account for sticky nav + filter
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
