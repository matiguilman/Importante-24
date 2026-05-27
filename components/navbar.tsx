"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/5491162152890"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-foreground">
              24<span className="text-primary">Import</span>
            </span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
