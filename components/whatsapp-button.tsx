"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5491162152890"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 animate-pulse-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </a>
  )
}
