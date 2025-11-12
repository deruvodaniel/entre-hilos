'use client'

import React from "react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { CONTENT, THEME, TECHNICAL_CONFIG } from "../../../config/portfolio"

export const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      className="py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4"
      backgroundColor={THEME.colors.accent}
    >
      <h2
        className="font-light mb-12 text-foreground animate-fade-in-up"
        style={{ 
          fontFamily: THEME.fonts.body,
          fontSize: THEME.fonts.sizes.title
        }}
      >
        {CONTENT.texts.about.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="animate-slide-in-left">
          <div 
            className="aspect-square bg-background rounded-3xl overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow mx-auto"
            style={{ maxWidth: `${TECHNICAL_CONFIG.images.aboutImageMaxWidth}px` }}
          >
            <Image
              src={CONTENT.texts.about.image}
              alt={CONTENT.texts.about.imageAlt}
              width={TECHNICAL_CONFIG.images.aboutImageMaxWidth}
              height={TECHNICAL_CONFIG.images.aboutImageMaxWidth}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto */}
        <div className="space-y-6 animate-fade-in">
          {CONTENT.texts.about.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-foreground font-light leading-relaxed" 
              style={{ 
                fontFamily: THEME.fonts.body,
                fontSize: THEME.fonts.sizes.body
              }}
            >
              {index === 1 && paragraph.includes('tu personalidad') ? (
                <>
                  {paragraph.split('tu personalidad')[0]}
                  <span className="font-medium text-foreground">tu personalidad</span>
                  {paragraph.split('tu personalidad')[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}