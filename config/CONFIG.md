# 📋 Guía de Configuración del Portfolio

Esta guía te permitirá personalizar tu portfolio fácilmente, **sin necesidad de conocimientos técnicos**. Puedes cambiar colores, textos, imágenes y agregar proyectos modificando un solo archivo.

## 🎯 Archivo Principal: `config/portfolio.ts`

Todo el contenido de tu portfolio se controla desde este archivo. Es como un "panel de control" donde puedes cambiar cualquier aspecto de tu sitio web.

---

## 🎨 **1. CAMBIAR COLORES**

### Color Principal (Amarillo)
```typescript
// En la sección THEME > colors:
accent: "#FBBF24", // 👈 Cambia este código por el color que quieras
```

**Cómo obtener códigos de color:**
- Ve a [color-hex.com](https://www.color-hex.com/color-palettes/)
- Busca el color que te gusta
- Copia el código (siempre empieza con #)
- Pégalo reemplazando `#FBBF24`

**Ejemplos de colores:**
- Rosa: `#F472B6`
- Verde: `#22D3EE` 
- Morado: `#A855F7`
- Naranja: `#FB923C`

---

## ✏️ **2. CAMBIAR TEXTOS**

Todos los textos están en la sección `CONTENT`. Puedes cambiarlos libremente:

### Tu nombre y datos personales:
```typescript
personal: {
  name: "Tu Nombre",                    // 👈 Tu nombre
  businessName: "tu negocio",           // 👈 Nombre de tu marca  
  tagline: "tu descripción",            // 👈 Qué haces
  phone: "+54 9 11 1234-5678",         // 👈 Tu teléfono
  location: "Tu Ciudad, País",          // 👈 Tu ubicación
}
```

### Textos de la página principal:
```typescript
hero: {
  title: "tu marca",                    // 👈 Título principal
  subtitle: "x Tu Nombre",              // 👈 Subtítulo
  description: "lo que haces"           // 👈 Descripción
}
```

### Sección "Sobre mí":
```typescript
about: {
  title: "hola, soy [Tu Nombre]",       // 👈 Título de la sección
  paragraphs: [
    "Primer párrafo sobre ti...",       // 👈 Tu historia 
    "Segundo párrafo..."                // 👈 Más información
  ]
}
```

---

## 🖼️ **3. CAMBIAR Y AGREGAR PROYECTOS**

### Para **cambiar** un proyecto existente:

1. **Busca el proyecto** en la sección `PORTFOLIO > works`
2. **Cambia los datos:**
```typescript
{
  id: 1,                                    // ❌ NO cambiar
  image: "/nueva-imagen.jpg",               // 👈 Nueva imagen
  title: "Nuevo Título",                    // 👈 Nuevo título
  description: "Nueva descripción",         // 👈 Nueva descripción  
  category: "alfombra"                      // 👈 "alfombra", "cuadro" o "proceso"
}
```

### Para **agregar** un nuevo proyecto:

1. **Sube tu imagen** a la carpeta `public/`
2. **Agrega al final** de la lista en `PORTFOLIO > works`:
```typescript
{
  id: 10,                                   // 👈 Siguiente número disponible
  image: "/mi-proyecto.jpg",                // 👈 Nombre de tu imagen
  title: "Mi Nuevo Proyecto",               // 👈 Título del proyecto
  description: "Descripción del trabajo",   // 👈 Qué representa
  category: "alfombra"                      // 👈 Tipo de trabajo
}
```

### Para **quitar** un proyecto:
- Simplemente borra todo el bloque `{ id: X, ... }` completo

---

## 🛠️ **4. MODIFICAR SERVICIOS**

Puedes cambiar qué servicios ofreces en la sección `SERVICES > items`:

```typescript
{
  title: "Nombre del Servicio",             // 👈 Qué ofreces
  description: "Explicación del servicio",  // 👈 Detalles
  color: "from-primary to-secondary",       // ❌ Mejor no cambiar
  iconName: "Ruler"                         // ❌ Mejor no cambiar
}
```

**Para agregar un servicio:** copia un bloque completo y modifica título y descripción.
**Para quitar un servicio:** borra el bloque completo.

---

## 📋 **5. CAMBIAR EL PROCESO DE TRABAJO**

En la sección `PROCESS_STEPS > steps` puedes modificar tu proceso:

```typescript
{
  text: "paso de tu proceso",               // 👈 Descripción del paso
  iconName: "MessageCircle"                // ❌ Mejor no cambiar
}
```

---

## 📞 **6. CONFIGURAR CONTACTO**

### WhatsApp:
```typescript
whatsappUrl: "https://wa.me/5491140674342",  // 👈 Tu número de WhatsApp
```

**Cómo obtener tu enlace de WhatsApp:**
1. Ve a [wa.me](https://wa.me)
2. Pon tu número con código de país (Argentina: 54)
3. Ejemplo: para +54 911 4067-4342 usa `5491140674342`

### Otros enlaces:
```typescript
// En la sección SOCIAL_LINKS:
instagram: "https://instagram.com/tu_usuario",  // 👈 Tu Instagram
facebook: "https://facebook.com/tu_pagina",     // 👈 Tu Facebook  
email: "mailto:tu@email.com",                   // 👈 Tu email
```

---

## 🖼️ **7. CAMBIAR IMÁGENES**

### Imagen de perfil:
```typescript
about: {
  image: "/tu-foto.jpg",                    // 👈 Tu foto de perfil
  imageAlt: "Descripción de la foto"        // 👈 Descripción para accesibilidad
}
```

### **Cómo subir nuevas imágenes:**

1. **Ve a la carpeta `public/`** en tu proyecto
2. **Arrastra tu imagen** allí
3. **Usa el nombre** en el config con `/` al inicio
4. **Ejemplo:** si subes `mi-foto.png`, úsala como `"/mi-foto.png"`

**Formatos recomendados:**
- `.jpg` para fotos
- `.png` para imágenes con transparencia
- Tamaño recomendado: máximo 1200px de ancho

---

## 🔧 **8. CONFIGURACIÓN SEO (Opcional)**

Para que tu sitio aparezca bien en Google:

```typescript
seo: {
  title: "Tu Marca | Descripción",          // 👈 Título en Google
  description: "Descripción de tu negocio", // 👈 Lo que aparece en Google
  keywords: "palabras, clave, negocio",     // 👈 Palabras importantes
  url: "https://tu-sitio.com"              // 👈 URL de tu sitio
}
```

---

## ⚠️ **IMPORTANTE - QUÉ NO CAMBIAR**

❌ **NO modifiques estas partes** a menos que sepas programación:
- Números de `id` en proyectos
- Nombres de `iconName`
- Valores que empiecen con `hsl(var(` 
- Palabras como `const`, `export`, `as const`

✅ **SÍ puedes cambiar libremente:**
- Todos los textos entre comillas `""`
- Códigos de color que empiecen con `#`
- URLs e imágenes

---

## 🆘 **SOLUCIÓN DE PROBLEMAS**

### Si algo no se ve bien:

1. **Revisa las comillas:** todos los textos deben tener `"` al inicio y final
2. **Revisa las comas:** cada línea debe terminar en `,` excepto la última de cada sección  
3. **Revisa las imágenes:** deben estar en `public/` y empezar con `/`

### Si necesitas ayuda:
- Guarda una copia del archivo antes de modificarlo
- Si algo se rompe, restaura la copia original
- Los cambios se ven automáticamente al guardar el archivo

---

## 📱 **CÓMO VER LOS CAMBIOS**

1. **Modifica** el archivo `config/portfolio.ts`
2. **Guarda** el archivo (Ctrl+S)
3. **Actualiza** tu navegador para ver los cambios

¡Tu sitio web se actualiza automáticamente! 🎉