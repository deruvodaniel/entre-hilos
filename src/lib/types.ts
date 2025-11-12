export interface Work {
  id: number
  image: string
  alt?: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string; size?: number }>
  title: string
  description: string
  color: string
}

export interface ProcessStep {
  icon: React.ComponentType<{ className?: string; size?: number }>
  text: string
}

export interface ContactInfo {
  phone: string
  whatsappUrl: string
  name: string
}

export interface SiteMetadata {
  title: string
  description: string
  keywords: string
  author: string
  url: string
}

// Component Props
export interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
  backgroundColor?: string
}

export interface ImageGalleryProps {
  works: Work[]
  columns?: number
  className?: string
}

export interface AnimatedElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
}