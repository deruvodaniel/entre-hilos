'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { SECTION_CLASSES } from "@/lib/constants"
import type { SectionProps } from "@/lib/types"

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children, 
  backgroundColor 
}) => {
  const style = backgroundColor ? { backgroundColor } : undefined

  return (
    <section 
      id={id}
      className={cn(SECTION_CLASSES.base, className)}
      style={style}
    >
      <div className={SECTION_CLASSES.container}>
        {children}
      </div>
    </section>
  )
}