'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { ColoredTitle } from "@/components/ui/colored-title"
import { CONTENT, THEME } from "../../../config/portfolio"

export const Hero: React.FC = () => {
  return (
    <Section id="hero" className="min-h-[80vh] flex items-center justify-center text-center">
      <div className="space-y-8 animate-fade-in-up">
        <div className="flex flex-col items-center gap-4">
          <h1 className="leading-none">
            <ColoredTitle 
              text={CONTENT.texts.hero.title} 
              colors={THEME.colors.titleGradient}
              fontSize="clamp(60px, 10vw, 120px)"
              fontWeight={700}
            />
          </h1>
          <p
            className="text-foreground/80"
            style={{ fontFamily: THEME.fonts.display, fontSize: "17px" }}
          >
            {CONTENT.texts.hero.subtitle}
          </p>
        </div>

        <p
          className="text-foreground font-light leading-relaxed max-w-2xl"
          style={{ fontFamily: THEME.fonts.body, fontSize: THEME.fonts.sizes.body }}
        >
          {CONTENT.texts.hero.description}
        </p>
      </div>
    </Section>
  )
}