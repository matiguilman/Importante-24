import { MessageCircle, Truck, MapPin } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5491162152890"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-foreground">
              24<span className="text-primary">Import</span>
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu destino para relojes de alta gama. Calidad premium, 
              atención personalizada y envíos a todo el país.
            </p>
          </div>

          {/* Quick info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Información</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span>Envíos a todo el país</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Entrega en mano en Buenos Aires</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Atención personalizada por WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-[#25D366] text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-[#22c55e] hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribinos por WhatsApp</span>
            </a>
            <p className="text-xs text-muted-foreground">
              Respondemos en minutos
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} 24Import. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Argentina</p>
        </div>
      </div>
    </footer>
  )
}
