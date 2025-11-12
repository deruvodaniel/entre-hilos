'use client'

import React from "react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { TYPOGRAPHY, SECTION_CLASSES, COLORS } from "@/lib/constants"

export const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      className={SECTION_CLASSES.yellowBg}
      backgroundColor={COLORS.yellow}
    >
      <h2
        className="text-[30px] font-light mb-12 text-foreground animate-fade-in-up"
        style={TYPOGRAPHY.robotoMono30}
      >
        hola, soy Cande
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="animate-slide-in-left">
          <div className="aspect-square bg-background rounded-3xl overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow max-w-[320px] mx-auto">
            <Image
              src="/about-img.png"
              alt="Sobre mí - Cande"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto */}
        <div className="space-y-6 animate-fade-in">
          <p 
            className="text-foreground font-light leading-relaxed" 
            style={TYPOGRAPHY.robotoMono16}
          >
            soy profesional del área de it desde hace más de 16 años. pero en el tufting encontré algo especial: ese
            punto dulce entre lo técnico y lo creativo que me apasiona.
          </p>
          <p 
            className="text-foreground font-light leading-relaxed" 
            style={TYPOGRAPHY.robotoMono16}
          >
            cada proyecto es una oportunidad para crear algo único que refleje{" "}
            <span className="font-medium text-foreground">tu personalidad</span> y visión. me enfoco en los detalles,
            en la calidad del trabajo y en que cada pieza sea especial.
          </p>
        </div>
      </div>
    </Section>
  )
}