'use client'

import React from "react"
import { THEME } from "../../../config/portfolio"

interface ColoredTitleProps {
  text: string
  colors: readonly string[]
  fontSize?: string
  fontWeight?: number
  className?: string
}

export const ColoredTitle: React.FC<ColoredTitleProps> = ({ 
  text, 
  colors, 
  fontSize,
  fontWeight = 700,
  className = ""
}) => {
  return (
    <span 
      className={className}
      style={{ 
        fontFamily: THEME.fonts.display,
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
    >
      {text.split('').map((letter, index) => (
        <span 
          key={index}
          style={{ 
            color: colors[index % colors.length],
            display: letter === ' ' ? 'inline' : 'inline' 
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}