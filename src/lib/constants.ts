// Typography styles following DRY principle
export const TYPOGRAPHY = {
  robotoMono16: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: "16px"
  },
  robotoMono30: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: "30px"
  }
} as const

// Common section classes
export const SECTION_CLASSES = {
  base: "py-12 px-4 sm:px-6 lg:px-8",
  container: "max-w-6xl mx-auto",
  yellowBg: "rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4"
} as const

// Color palette
export const COLORS = {
  yellow: "#FBBF24",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
} as const

// Animation configurations
export const ANIMATIONS = {
  baseDuration: 300,
  staggerDelay: 100,
  scaleHover: 1.05,
} as const

// Animation delays helper
export const getAnimationDelay = (index: number, baseDelay: number = ANIMATIONS.staggerDelay) => 
  `${index * baseDelay}ms`

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const