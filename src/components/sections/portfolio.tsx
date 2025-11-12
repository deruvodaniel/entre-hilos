'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { ImageGallery } from "@/components/ui/image-gallery"
import { TYPOGRAPHY } from "@/lib/constants"
import { works } from "@/lib/data"

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-background">
      <h2
        className="text-[30px] font-light mb-16 text-foreground text-center animate-fade-in-up"
        style={TYPOGRAPHY.robotoMono30}
      >
        algunos de mis trabajos
      </h2>

      <ImageGallery works={works} columns={3} />
    </Section>
  )
}