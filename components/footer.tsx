import { MapPin, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-muted">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image src="/logo.png" alt="entre hilos × cande" width={100} height={35} className="h-auto w-20" />

          {/* Name */}
          <p className="font-semibold text-foreground" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}>Cande Corpacci</p>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/5491140674342"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm">+54 9 11 4067 4342</span>
          </a>

          {/* Ubicación */}
          <div className="flex items-center gap-2 text-foreground">
            <MapPin size={18} />
            Buenos Aires, Argentina
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:contact@entrehlios.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
