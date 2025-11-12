import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "entre hilos × cande | Tufting Personalizado",
  description:
    "Alfombras y cuadros tufting personalizados, hechos a pedido en Buenos Aires. Cada pieza es única, creada con diseño, color y textura en equilibrio.",
  keywords: "tufting, alfombras, cuadros personalizados, Buenos Aires",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Gamja+Flower&family=Hi+Melody&family=Hind:wght@300;400;500;600;700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Shantell+Sans:ital,wght@0,300..800;1,300..800&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
