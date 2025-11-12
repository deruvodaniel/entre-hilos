import type { Work } from "@/lib/types"
import { 
  THEME, 
  CONTENT, 
  PORTFOLIO, 
  SERVICES, 
  PROCESS_STEPS,
  TECHNICAL_CONFIG,
  SOCIAL_LINKS,
  NAVIGATION 
} from "../../config/portfolio"

// ====================================
// 🔍 TIPOS PARA VALIDACIÓN
// ====================================

interface ValidationError {
  field: string
  message: string
  severity: 'error' | 'warning'
}

interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
  warnings: ValidationError[]
}

// ====================================
// 🛡️ VALIDADORES ESPECÍFICOS
// ====================================

/**
 * Valida que un valor sea una cadena no vacía
 */
const validateRequiredString = (value: unknown, fieldName: string): ValidationError[] => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return [{
      field: fieldName,
      message: `${fieldName} debe ser un texto no vacío`,
      severity: 'error'
    }]
  }
  return []
}

/**
 * Valida que un color sea un código hexadecimal válido
 */
const validateHexColor = (color: unknown, fieldName: string): ValidationError[] => {
  const errors: ValidationError[] = []
  
  if (typeof color !== 'string') {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe ser un texto`,
      severity: 'error'
    })
    return errors
  }

  const hexPattern = /^#[0-9A-Fa-f]{6}$/
  if (!hexPattern.test(color)) {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe ser un color hexadecimal válido (ej: #FBBF24)`,
      severity: 'error'
    })
  }

  return errors
}

/**
 * Valida que una URL sea válida
 */
const validateUrl = (url: unknown, fieldName: string, required = true): ValidationError[] => {
  const errors: ValidationError[] = []
  
  if (!required && (url === '' || url === null || url === undefined)) {
    return [] // URL opcional vacía es válida
  }

  if (typeof url !== 'string') {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe ser un texto`,
      severity: 'error'
    })
    return errors
  }

  if (required && url.trim().length === 0) {
    errors.push({
      field: fieldName,
      message: `${fieldName} es requerido`,
      severity: 'error'
    })
    return errors
  }

  if (url.trim().length > 0) {
    try {
      new URL(url)
    } catch {
      errors.push({
        field: fieldName,
        message: `${fieldName} debe ser una URL válida`,
        severity: 'error'
      })
    }
  }

  return errors
}

/**
 * Valida que una imagen exista (solo check básico de ruta)
 */
const validateImagePath = (imagePath: unknown, fieldName: string): ValidationError[] => {
  const errors: ValidationError[] = []
  
  if (typeof imagePath !== 'string') {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe ser un texto`,
      severity: 'error'
    })
    return errors
  }

  if (!imagePath.startsWith('/')) {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe comenzar con / (ej: "/mi-imagen.jpg")`,
      severity: 'error'
    })
  }

  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
  const hasValidExtension = validExtensions.some(ext => 
    imagePath.toLowerCase().endsWith(ext)
  )

  if (!hasValidExtension) {
    errors.push({
      field: fieldName,
      message: `${fieldName} debe tener una extensión válida: ${validExtensions.join(', ')}`,
      severity: 'warning'
    })
  }

  return errors
}

/**
 * Valida un array de trabajos del portfolio
 */
const validatePortfolioWorks = (works: unknown): ValidationError[] => {
  const errors: ValidationError[] = []

  if (!Array.isArray(works)) {
    errors.push({
      field: 'PORTFOLIO.works',
      message: 'Los trabajos del portfolio deben ser un array',
      severity: 'error'
    })
    return errors
  }

  if (works.length === 0) {
    errors.push({
      field: 'PORTFOLIO.works',
      message: 'Debe haber al menos un trabajo en el portfolio',
      severity: 'warning'
    })
  }

  works.forEach((work: any, index: number) => {
    const workPath = `PORTFOLIO.works[${index}]`

    // Validar estructura del trabajo
    if (!work || typeof work !== 'object') {
      errors.push({
        field: `${workPath}`,
        message: `Trabajo ${index + 1} debe ser un objeto`,
        severity: 'error'
      })
      return
    }

    // Validar campos requeridos
    errors.push(...validateRequiredString(work.id, `${workPath}.id`))
    errors.push(...validateImagePath(work.image, `${workPath}.image`))
    errors.push(...validateRequiredString(work.title, `${workPath}.title`))
    errors.push(...validateRequiredString(work.description, `${workPath}.description`))
    errors.push(...validateRequiredString(work.category, `${workPath}.category`))

    // Validar categorías válidas
    const validCategories = ['alfombra', 'cuadro', 'proceso']
    if (work.category && !validCategories.includes(work.category)) {
      errors.push({
        field: `${workPath}.category`,
        message: `Categoría debe ser una de: ${validCategories.join(', ')}`,
        severity: 'warning'
      })
    }

    // Validar IDs únicos
    const duplicateIds = works.filter((w: any) => w.id === work.id).length
    if (duplicateIds > 1) {
      errors.push({
        field: `${workPath}.id`,
        message: `ID ${work.id} está duplicado`,
        severity: 'error'
      })
    }
  })

  return errors
}

// ====================================
// 🔍 VALIDADOR PRINCIPAL
// ====================================

/**
 * Valida toda la configuración del portfolio
 */
export const validatePortfolioConfig = (): ValidationResult => {
  const errors: ValidationError[] = []
  const warnings: ValidationError[] = []

  try {
    // Validar THEME
    errors.push(...validateHexColor(THEME.colors.accent, 'THEME.colors.accent'))
    errors.push(...validateRequiredString(THEME.fonts.display, 'THEME.fonts.display'))
    errors.push(...validateRequiredString(THEME.fonts.body, 'THEME.fonts.body'))

    // Validar CONTENT.personal
    errors.push(...validateRequiredString(CONTENT.personal.name, 'CONTENT.personal.name'))
    errors.push(...validateRequiredString(CONTENT.personal.businessName, 'CONTENT.personal.businessName'))
    errors.push(...validateRequiredString(CONTENT.personal.phone, 'CONTENT.personal.phone'))
    errors.push(...validateUrl(CONTENT.personal.whatsappUrl, 'CONTENT.personal.whatsappUrl'))

    // Validar CONTENT.texts principales
    errors.push(...validateRequiredString(CONTENT.texts.hero.title, 'CONTENT.texts.hero.title'))
    errors.push(...validateRequiredString(CONTENT.texts.about.title, 'CONTENT.texts.about.title'))
    errors.push(...validateImagePath(CONTENT.texts.about.image, 'CONTENT.texts.about.image'))

    // Validar PORTFOLIO
    errors.push(...validatePortfolioWorks(PORTFOLIO.works))

    // Validar SERVICES
    if (!Array.isArray(SERVICES.items)) {
      errors.push({
        field: 'SERVICES.items',
        message: 'Los servicios deben ser un array',
        severity: 'error'
      })
    } else if ((SERVICES.items as any[]).length === 0) {
      errors.push({
        field: 'SERVICES.items',
        message: 'Debe haber al menos un servicio configurado',
        severity: 'warning'
      })
    }

    // Validar PROCESS_STEPS
    if (!Array.isArray(PROCESS_STEPS.steps)) {
      errors.push({
        field: 'PROCESS_STEPS.steps',
        message: 'Los pasos del proceso deben ser un array',
        severity: 'error'
      })
    } else if ((PROCESS_STEPS.steps as any[]).length === 0) {
      errors.push({
        field: 'PROCESS_STEPS.steps',
        message: 'Debe haber al menos un paso en el proceso',
        severity: 'warning'
      })
    }

    // Validar SEO
    errors.push(...validateRequiredString(CONTENT.seo.title, 'CONTENT.seo.title'))
    errors.push(...validateRequiredString(CONTENT.seo.description, 'CONTENT.seo.description'))
    errors.push(...validateUrl(CONTENT.seo.url, 'CONTENT.seo.url'))

    // Validar NAVIGATION
    if (!Array.isArray(NAVIGATION.items)) {
      errors.push({
        field: 'NAVIGATION.items',
        message: 'Los elementos de navegación deben ser un array',
        severity: 'error'
      })
    } else if ((NAVIGATION.items as any[]).length === 0) {
      errors.push({
        field: 'NAVIGATION.items',
        message: 'Debe haber al menos un elemento de navegación',
        severity: 'warning'
      })
    }

    // Separar errores de warnings
    const actualErrors = errors.filter(e => e.severity === 'error')
    const actualWarnings = errors.filter(e => e.severity === 'warning')

    return {
      isValid: actualErrors.length === 0,
      errors: actualErrors,
      warnings: actualWarnings
    }

  } catch (error) {
    return {
      isValid: false,
      errors: [{
        field: 'CONFIG_GENERAL',
        message: `Error al validar configuración: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        severity: 'error'
      }],
      warnings: []
    }
  }
}

// ====================================
// 🎯 FUNCIÓN DE DIAGNÓSTICO
// ====================================

/**
 * Ejecuta validación y muestra resultados en consola (solo en desarrollo)
 */
export const diagnoseMissingFiles = async () => {
  if (process.env.NODE_ENV !== 'development') return

  const validation = validatePortfolioConfig()
  
  if (!validation.isValid) {
    console.group('🔍 Portfolio Configuration Issues')
    
    if (validation.errors.length > 0) {
      console.group('❌ Errores (deben corregirse):')
      validation.errors.forEach(error => {
        console.error(`${error.field}: ${error.message}`)
      })
      console.groupEnd()
    }

    if (validation.warnings.length > 0) {
      console.group('⚠️ Advertencias (recomendado corregir):')
      validation.warnings.forEach(warning => {
        console.warn(`${warning.field}: ${warning.message}`)
      })
      console.groupEnd()
    }

    console.groupEnd()
  } else {
    console.log('✅ Configuración del portfolio válida')
  }

  return validation
}

// ====================================
// 🚀 EXPORTACIONES
// ====================================

export type {
  ValidationError,
  ValidationResult
}

// Auto-ejecutar diagnóstico en desarrollo
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  diagnoseMissingFiles()
}