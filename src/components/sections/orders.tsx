'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { TYPOGRAPHY } from "@/lib/constants"
import { contactInfo } from "@/lib/data"

export const Orders: React.FC = () => {
  return (
    <Section id="orders" className="bg-white">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 
          className="text-[30px] font-light mb-8 text-foreground" 
          style={TYPOGRAPHY.robotoMono30}
        >
          querés encargar una pieza? escribime :)
        </h2>

        <div className="flex flex-col items-center gap-6">
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:scale-110 transition-transform duration-300 p-4 rounded-2xl border border-border hover:shadow-lg"
          >
            <img
              src="https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000"
              alt="WhatsApp"
              className="w-16 h-16"
            />
            <div className="text-left">
              <p
                className="text-foreground font-light text-lg"
                style={TYPOGRAPHY.robotoMono16}
              >
                {contactInfo.name}
              </p>
              <p className="text-muted-foreground text-sm">
                Toca para escribir por WhatsApp
              </p>
            </div>
          </a>

          <Button 
            size="lg"
            onClick={() => window.open(contactInfo.whatsappUrl, '_blank')}
          >
            Hacer mi pedido
          </Button>
        </div>
      </div>
    </Section>
  )
}