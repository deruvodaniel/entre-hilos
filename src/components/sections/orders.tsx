'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { CONTENT, THEME } from "../../../config/portfolio"

export const Orders: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 
          className="font-light mb-8 text-foreground" 
          style={{ 
            fontFamily: THEME.fonts.body,
            fontSize: THEME.fonts.sizes.title
          }}
        >
          {CONTENT.texts.contact.title}
        </h2>

        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg"
            onClick={() => window.open(CONTENT.personal.whatsappUrl, '_blank')}
            className="text-lg px-8 py-4"
          >
            {CONTENT.texts.contact.buttonText}
          </Button>
        </div>
      </div>
    </Section>
  )
}