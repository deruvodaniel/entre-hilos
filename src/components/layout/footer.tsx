'use client'

import React from "react"
import Image from "next/image"
import { ColoredTitle } from "@/components/ui/colored-title"
import { CONTENT, THEME } from "../../../config/portfolio"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo Colorido */}
          <ColoredTitle 
            text={CONTENT.texts.hero.title} 
            colors={THEME.colors.titleGradient}
            fontSize="32px"
            fontWeight={700}
          />

          {/* Name */}
          <p 
            className="font-semibold text-foreground" 
            style={{ 
              fontFamily: THEME.fonts.body, 
              fontSize: THEME.fonts.sizes.body 
            }}
          >
            {CONTENT.personal.name}
          </p>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {CONTENT.texts.footer.copyright}</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}