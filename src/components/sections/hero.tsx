'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { TYPOGRAPHY } from "@/lib/constants"
import { contactInfo } from "@/lib/data"

export const Hero: React.FC = () => {
  return (
    <Section id="hero" className="min-h-[80vh] flex items-center justify-center text-center">
      <div className="space-y-8 animate-fade-in-up">
        <div className="flex flex-col items-center gap-4">
          <h1 
            className="text-[50px] sm:text-[70px] font-light text-foreground leading-none"
            style={{ fontFamily: "'Funnel Display', serif" }}
          >
            entre hilos
          </h1>
          <p
            className="text-foreground/80"
            style={{ fontFamily: "'Funnel Display', serif", fontSize: "17px" }}
          >
            x {contactInfo.name}
          </p>
        </div>

        <p
          className="text-foreground font-light leading-relaxed max-w-2xl"
          style={TYPOGRAPHY.robotoMono16}
        >
          alfombras y cuadros personalizados hechos con la técnica de tufting
        </p>
      </div>
    </Section>
  )
}