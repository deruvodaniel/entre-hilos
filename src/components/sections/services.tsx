'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { CONTENT, THEME, SERVICES } from "../../../config/portfolio"
import * as LucideIcons from "lucide-react"

// Helper para obtener delay de animación
const getAnimationDelay = (index: number): string => `${index * 100}ms`

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-background">
      <h2
        className="font-light mb-16 text-foreground text-center animate-fade-in-up"
        style={{ 
          fontFamily: THEME.fonts.body,
          fontSize: THEME.fonts.sizes.title
        }}
      >
        {CONTENT.texts.services.title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.items.map((service, idx) => {
          // Obtener el icono dinámicamente desde Lucide
          const IconComponent = LucideIcons[service.iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
          
          return (
            <div
              key={service.title}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: getAnimationDelay(idx) }}
            >
              <div
                className={`w-12 h-12 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p 
                className="text-foreground font-medium" 
                style={{ 
                  fontFamily: THEME.fonts.body,
                  fontSize: THEME.fonts.sizes.body
                }}
              >
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}