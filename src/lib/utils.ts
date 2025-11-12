import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Optimized image loader for Next.js
export const imageLoader = ({ src, width, quality }: {
  src: string
  width: number
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\+54\s9\s)(\d{2})(\s)(\d{4})-(\d{4})/, '$1$2$3$4-$5')
}

// Generate WhatsApp message URL
export const generateWhatsAppUrl = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}