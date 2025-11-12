// Estructura de carpetas recomendada

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Componentes React
│   ├── sections/          # Secciones de la página
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── portfolio.tsx
│   │   ├── process.tsx
│   │   └── orders.tsx
│   ├── ui/               # Componentes reutilizables
│   │   ├── button.tsx
│   │   ├── image-gallery.tsx
│   │   └── section.tsx
│   └── layout/           # Componentes de layout
│       ├── header.tsx
│       └── footer.tsx
├── lib/                  # Utilidades y configuración
│   ├── constants.ts     
│   ├── utils.ts
│   ├── types.ts         # Tipos TypeScript
│   └── data.ts          # Data estática
├── styles/              # Estilos globales
└── public/             # Assets estáticos
    ├── images/
    │   ├── gallery/
    │   └── icons/
    └── fonts/
```