'use client'

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { contactInfo } from "@/lib/data"

export const Header: React.FC = () => {
  const navItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#portfolio", label: "Trabajos" },
    { href: "#process", label: "Proceso" },
    { href: "#orders", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="entre hilos × cande" 
            width={120} 
            height={40} 
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
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
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
            "transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          Hacer pedido
        </a>
      </div>
    </header>
  )
}