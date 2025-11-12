'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { ImageGallery } from "@/components/ui/image-gallery"
import { CONTENT, THEME, PORTFOLIO } from "../../../config/portfolio"

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-background">
      <h2
        className="font-light mb-16 text-foreground text-center animate-fade-in-up"
        style={{ 
          fontFamily: THEME.fonts.body,
          fontSize: THEME.fonts.sizes.title
        }}
      >
        {CONTENT.texts.portfolio.title}
      </h2>

      <ImageGallery works={PORTFOLIO.works} columns={CONTENT.texts.portfolio.columns} />
    </Section>
  )
}