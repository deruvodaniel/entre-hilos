'use client'

import React from "react"
import Image from "next/image"
import { contactInfo } from "@/lib/data"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image 
            src="/logo.png" 
            alt="entre hilos × cande" 
            width={100} 
            height={35} 
            className="h-auto w-20" 
          />

          {/* Name */}
          <p className="font-semibold text-foreground" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}>
            {contactInfo.name}
          </p>

          {/* WhatsApp Link */}
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <img
              src="https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span className="text-sm">Contactar por WhatsApp</span>
          </a>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Entre Hilos × Cande Corpacci</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}