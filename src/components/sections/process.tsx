'use client'

import React from "react"
import { Section } from "@/components/ui/section"
import { TYPOGRAPHY, SECTION_CLASSES, COLORS, getAnimationDelay } from "@/lib/constants"
import { processSteps } from "@/lib/data"

export const Process: React.FC = () => {
  return (
    <Section 
      id="process" 
      className={SECTION_CLASSES.yellowBg}
      backgroundColor={COLORS.yellow}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
        {processSteps.map((step, idx) => {
          const Icon = step.icon
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: getAnimationDelay(idx) }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Icon size={40} className="text-foreground" />
              </div>
              <p 
                className="text-foreground font-light leading-relaxed" 
                style={TYPOGRAPHY.robotoMono16}
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