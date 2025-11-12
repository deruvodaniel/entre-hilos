'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { THEME, PROCESS_STEPS } from "../../../config/portfolio"
import * as LucideIcons from "lucide-react"

// Helper para obtener delay de animación
const getAnimationDelay = (index: number): string => `${index * 100}ms`

export const Process: React.FC = () => {
  return (
    <Section 
      id="process" 
      className="py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4"
      backgroundColor={THEME.colors.accent}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
        {PROCESS_STEPS.steps.map((step, idx) => {
          // Obtener el icono dinámicamente desde Lucide
          const IconComponent = LucideIcons[step.iconName as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>
          
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: getAnimationDelay(idx) }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <IconComponent size={40} className="text-foreground" />
              </div>
              <p 
                className="text-foreground font-light leading-relaxed" 
                style={{ 
                  fontFamily: THEME.fonts.body,
                  fontSize: THEME.fonts.sizes.body
                }}
              >
                {step.text}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}