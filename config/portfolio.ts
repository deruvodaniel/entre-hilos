/**
 * 🎨 CONFIGURACIÓN PRINCIPAL DEL PORTFOLIO
 * 
 * Este archivo contiene TODA la configuración visual y de contenido del portfolio.
 * Puedes personalizar colores, textos, imágenes y contenido sin tocar código.
 * 
 * 📝 GUÍA RÁPIDA:
 * 1. Cambia los colores en la sección THEME
 * 2. Modifica textos en la sección CONTENT  
 * 3. Agrega/quita proyectos en PORTFOLIO
 * 4. Personaliza servicios en SERVICES
 * 5. Ajusta el proceso en PROCESS_STEPS
 */

// ====================================
// 🎨 CONFIGURACIÓN VISUAL Y TEMA
// ====================================

export const THEME = {
  // Colores principales - Cambia estos valores por códigos hexadecimales
  colors: {
    // Color de fondo de las secciones amarillas (About, Process)
    accent: "#FBBF24", // Amarillo actual
    
    // Colores del gradiente del título principal (cada letra tendrá un color diferente)
    titleGradient: [
      "#ff6b6b", // Rojo coral
      "#ff8e53", // Naranja
      "#ff6b9d", // Rosa
      "#c44569", // Rosa oscuro  
      "#f8b500", // Amarillo
      "#4834d4", // Azul (para el espacio)
    ],
    
    // Colores de la interfaz (mejor no cambiar a menos que sepas CSS)
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    muted: "hsl(var(--muted))",
    card: "hsl(var(--card))",
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
  },

  // Fuentes - Cambia por nombres de Google Fonts
  fonts: {
    // Fuente principal para títulos grandes (Winky Rough para el título principal)
    display: "'Winky Rough', cursive",
    
    // Fuente principal para todo el texto
    body: "'Roboto Mono', monospace",
    
    // Tamaños de fuente
    sizes: {
      title: "30px",      // Títulos de secciones  
      body: "16px",       // Texto normal
      hero: "120px",      // Título principal (Winky Rough)
      heroSm: "60px",     // Título principal en móvil
    }
  },

  // Espaciados y tamaños
  spacing: {
    section: "py-12 px-4 sm:px-6 lg:px-8", // Espaciado de secciones
    container: "max-w-6xl mx-auto",         // Ancho máximo del contenido
    rounded: "rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4", // Secciones redondeadas
  },

  // Animaciones
  animations: {
    duration: 300,        // Duración de animaciones en ms
    staggerDelay: 100,    // Retraso entre elementos animados
    scaleHover: 1.05,     // Escala al hacer hover
  }
} as const

// ====================================
// 📝 CONTENIDO Y TEXTOS
// ====================================

export const CONTENT = {
  // Información personal
  personal: {
    name: "Cande Corpacci",
    businessName: "entre hilos",
    tagline: "alfombras y cuadros personalizados hechos con la técnica de tufting",
    phone: "+54 9 11 4067-4342",
    whatsappUrl: "https://wa.me/5491140674342",
    location: "Buenos Aires, Argentina",
  },

  // Textos de la página
  texts: {
    // Sección Hero (página principal)
    hero: {
      title: "entre hilos",
      subtitle: "x Cande Corpacci", 
      description: "alfombras y cuadros personalizados hechos con la técnica de tufting"
    },

    // Sección Sobre mí
    about: {
      title: "hola, soy Cande",
      paragraphs: [
        "soy profesional del área de it desde hace más de 16 años. pero en el tufting encontré algo especial: ese punto dulce entre lo técnico y lo creativo que me apasiona.",
        "cada proyecto es una oportunidad para crear algo único que refleje tu personalidad y visión. me enfoco en los detalles, en la calidad del trabajo y en que cada pieza sea especial."
      ],
      // Imagen de perfil (debe estar en public/)
      image: "/about-img.png",
      imageAlt: "Cande Corpacci trabajando en tufting"
    },

    // Sección Portfolio
    portfolio: {
      title: "algunos de mis trabajos",
      // Número de columnas en escritorio (2, 3, o 4)
      columns: 3
    },

    // Sección Servicios
    services: {
      title: "servicios"
    },

    // Sección Proceso
    process: {
      // Sin título visible, solo los pasos
    },

    // Sección Contacto
    contact: {
      title: "querés encargar una pieza? escribime :)",
      buttonText: "Hacer mi pedido",
      whatsappText: "Toca para escribir por WhatsApp"
    },

    // Footer
    footer: {
      copyright: "Entre Hilos × Cande Corpacci",
      whatsappText: "Contactar por WhatsApp"
    }
  },

  // SEO y metadatos
  seo: {
    title: "entre hilos × cande | Tufting Personalizado",
    description: "Alfombras y cuadros tufting personalizados, hechos a pedido en Buenos Aires. Cada pieza es única, creada con diseño, color y textura en equilibrio.",
    keywords: "tufting, alfombras, cuadros personalizados, Buenos Aires, arte textil, diseño",
    url: "https://entre-hilos.vercel.app"
  }
} as const

// ====================================
// 🖼️ PORTFOLIO - PROYECTOS
// ====================================

export const PORTFOLIO = {
  // 📸 INSTRUCCIONES PARA AGREGAR PROYECTOS:
  // 1. Sube tu imagen a la carpeta public/ 
  // 2. Agrega un nuevo objeto aquí con:
  //    - id: número único (siguiente disponible)
  //    - image: "/nombre-archivo.jpg" (debe comenzar con /)
  //    - title: nombre del proyecto
  //    - description: descripción breve
  //    - category: tipo de trabajo
  
  works: [
    {
      id: 1,
      image: "/azul-amarillo.jpg",
      title: "Alfombra Azul y Amarilla", 
      description: "Diseño geométrico en tonos vibrantes",
      category: "alfombra"
    },
    {
      id: 2, 
      image: "/flores-rojo-negro.jpg",
      title: "Flores Rojo y Negro",
      description: "Patrón floral elegante en contraste",
      category: "cuadro"
    },
    {
      id: 3,
      image: "/multicolor-arcoiris.jpg", 
      title: "Arcoíris Multicolor",
      description: "Explosión de colores y texturas",
      category: "alfombra"
    },
    {
      id: 4,
      image: "/ondas-multicolor.jpg",
      title: "Ondas Multicolor", 
      description: "Diseño fluido con degradados",
      category: "cuadro"
    },
    {
      id: 5,
      image: "/proceso-trabajo.jpg",
      title: "Proceso Creativo",
      description: "Detrás de cámaras del trabajo",
      category: "proceso"
    },
    {
      id: 6,
      image: "/rojo-negro-lineas.jpg",
      title: "Líneas Rojo y Negro",
      description: "Geometría moderna y sofisticada", 
      category: "alfombra"
    },
    {
      id: 7,
      image: "/rojo-negro-ondulante.jpg",
      title: "Ondulante Rojo y Negro",
      description: "Movimiento y dinamismo textil",
      category: "cuadro"
    },
    {
      id: 8,
      image: "/tonos-calidos.jpg",
      title: "Tonos Cálidos",
      description: "Calidez y confort para el hogar",
      category: "alfombra"
    },
    {
      id: 9,
      image: "/verde-lima.jpg", 
      title: "Verde Lima",
      description: "Frescura y energía natural",
      category: "alfombra"
    }
    
    // 👆 PARA AGREGAR MÁS PROYECTOS:
    // Copia uno de los objetos anteriores, cambia el id al siguiente número,
    // sube tu imagen a public/ y actualiza los datos
    
    // Ejemplo de cómo agregar un proyecto nuevo:
    // {
    //   id: 10,
    //   image: "/mi-nuevo-proyecto.jpg",
    //   title: "Mi Nuevo Proyecto",
    //   description: "Descripción del nuevo trabajo",
    //   category: "alfombra" // o "cuadro" o "proceso"
    // }
  ]
} as const

// ====================================
// 🛠️ SERVICIOS OFRECIDOS
// ====================================

export const SERVICES = {
  // 📝 INSTRUCCIONES PARA MODIFICAR SERVICIOS:
  // Cada servicio tiene: icono, título, descripción y color de gradiente
  // Los iconos son de la librería Lucide React (no cambiar a menos que sepas)
  
  items: [
    {
      title: "Alfombras a medida",
      description: "Diseñamos y creamos alfombras personalizadas según tus dimensiones y preferencias.",
      // Color del ícono (gradiente de Tailwind)
      color: "from-primary to-secondary",
      // Icono de Lucide (mejor no cambiar)
      iconName: "Ruler"
    },
    {
      title: "Cuadros tufting", 
      description: "Obras de arte textil únicas que transforman cualquier espacio con textura y color.",
      color: "from-secondary to-accent",
      iconName: "Palette"
    },
    {
      title: "Diseños personalizados",
      description: "Llevamos tus ideas a la realidad con la precisión y creatividad que merecen.",
      color: "from-accent to-primary", 
      iconName: "Sparkles"
    },
    {
      title: "Asesoramiento completo",
      description: "Te acompañamos en todo el proceso, desde la idea inicial hasta la entrega final.",
      color: "from-primary to-accent",
      iconName: "Target"
    }
  ]
} as const

// ====================================
// 📋 PROCESO DE TRABAJO
// ====================================

export const PROCESS_STEPS = {
  // 📝 INSTRUCCIONES PARA MODIFICAR EL PROCESO:
  // Cada paso tiene un ícono y texto descriptivo
  // Puedes cambiar los textos libremente
  
  steps: [
    {
      text: "conversamos sobre tu idea: diseño, colores y estilo",
      iconName: "MessageCircle"
    },
    {
      text: "definimos tamaño y formato (alfombra o cuadro)", 
      iconName: "Ruler"
    },
    {
      text: "transpaso el diseño al lienzo para tu aprobación",
      iconName: "Eye"
    },
    {
      text: "¡manos a la obra! tu pieza llega lista en 4-10 semanas según el tamaño",
      iconName: "Sparkles"
    }
  ]
} as const

// ====================================
// ⚙️ CONFIGURACIÓN TÉCNICA
// ====================================

export const TECHNICAL_CONFIG = {
  // Configuración de imágenes
  images: {
    // Calidad de compresión (1-100, 75 es buena opción)
    quality: 75,
    
    // Tamaños responsivos para la galería
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    
    // Tamaño máximo del contenedor de imagen en About
    aboutImageMaxWidth: 320
  },
  
  // Configuración de analytics (opcional)
  analytics: {
    // Si tienes Google Analytics, pon tu ID aquí
    googleAnalyticsId: "", // Ejemplo: "G-XXXXXXXXXX"
  }
} as const

// ====================================
// 🔗 ENLACES Y REDES SOCIALES 
// ====================================

export const SOCIAL_LINKS = {
  // 📱 INSTRUCCIONES PARA REDES SOCIALES:
  // Agrega o quita enlaces según tus redes
  // Deja vacío ("") si no quieres mostrar esa red
  
  whatsapp: "https://wa.me/5491140674342",
  instagram: "", // Ejemplo: "https://instagram.com/tu_usuario"
  facebook: "",  // Ejemplo: "https://facebook.com/tu_pagina"
  tiktok: "",    // Ejemplo: "https://tiktok.com/@tu_usuario"
  email: "",     // Ejemplo: "mailto:tu@email.com"
  website: "",   // Otro sitio web si tienes
} as const

// ====================================
// 📊 CONFIGURACIÓN DE NAVEGACIÓN
// ====================================

export const NAVIGATION = {
  // Elementos del menú principal
  // Puedes cambiar los textos pero no los href (deben coincidir con las secciones)
  items: [
    { href: "#about", label: "Sobre mí" },
    // { href: "#services", label: "Servicios" }, // Temporalmente oculto
    { href: "#portfolio", label: "Trabajos" }, 
    { href: "#process", label: "Proceso" },
    { href: "#contact", label: "Contacto" },
  ],
  
  // Texto del botón principal
  ctaText: "Hacer pedido"
} as const