"use client"

import { useState, useRef } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/5491162152890"

export interface Watch {
  id: string
  name: string
  brand: string
  image: string
  video?: string
}

interface WatchCardProps {
  watch: Watch
}

export function WatchCard({ watch }: WatchCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && watch.video) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el modelo ${watch.name}. ¿Podrían darme más información?`
  )

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border/50 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
        {/* Image */}
        <img
          src={watch.image}
          alt={watch.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-500",
            isHovered && watch.video ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />

        {/* Video overlay */}
        {watch.video && (
          <video
            ref={videoRef}
            src={watch.video}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Watch info */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-sm sm:text-base font-medium text-foreground line-clamp-2 text-balance">
          {watch.name}
        </h3>
        
        {/* Consultar button */}
        <a
          href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/30 text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar</span>
        </a>
      </div>
    </div>
  )
}
