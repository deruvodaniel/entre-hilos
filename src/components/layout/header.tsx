'use client'

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ColoredTitle } from "@/components/ui/colored-title"
import { CONTENT, NAVIGATION, THEME } from "../../../config/portfolio"

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Mostrar header cuando scrolleamos hacia abajo después de cierto punto
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true)
      } 
      // Ocultar cuando scrolleamos hacia arriba o estamos arriba del todo
      else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Colorido */}
        <div className="flex items-center">
          <ColoredTitle 
            text={CONTENT.texts.hero.title} 
            colors={THEME.colors.titleGradient}
            fontSize="24px"
            fontWeight={700}
          />
        </div>

        {/* Navigation - Oculto temporalmente */}
        <nav className="hidden">
          {NAVIGATION.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={CONTENT.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
            "transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          {NAVIGATION.ctaText}
        </a>
      </div>
    </header>
  )
}