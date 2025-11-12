import { MessageCircle, Ruler as Rulers, Eye, Sparkles, Palette, Target } from "lucide-react"
import type { Work, Service, ProcessStep, ContactInfo, SiteMetadata } from "./types"

export const works: Work[] = [
  {
    id: 1,
    image: "/azul-amarillo.jpg",
    alt: "Alfombra tufting azul y amarilla"
  },
  {
    id: 2,
    image: "/flores-rojo-negro.jpg",
    alt: "Diseño de flores en rojo y negro"
  },
  {
    id: 3,
    image: "/multicolor-arcoiris.jpg",
    alt: "Alfombra multicolor estilo arcoíris"
  },
  {
    id: 4,
    image: "/ondas-multicolor.jpg",
    alt: "Diseño de ondas multicolor"
  },
  {
    id: 5,
    image: "/proceso-trabajo.jpg",
    alt: "Proceso de trabajo tufting"
  },
  {
    id: 6,
    image: "/rojo-negro-lineas.jpg",
    alt: "Diseño geométrico rojo y negro"
  },
  {
    id: 7,
    image: "/rojo-negro-ondulante.jpg",
    alt: "Patrón ondulante rojo y negro"
  },
  {
    id: 8,
    image: "/tonos-calidos.jpg",
    alt: "Alfombra en tonos cálidos"
  },
  {
    id: 9,
    image: "/verde-lima.jpg",
    alt: "Alfombra verde lima vibrante"
  },
]

export const services: Service[] = [
  {
    icon: Rulers,
    title: "Alfombras a medida",
    description: "Diseñamos y creamos alfombras personalizadas según tus dimensiones y preferencias.",
    color: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "Cuadros tufting",
    description: "Obras de arte textil únicas que transforman cualquier espacio con textura y color.",
    color: "from-secondary to-accent",
  },
  {
    icon: Sparkles,
    title: "Diseños personalizados",
    description: "Llevamos tus ideas a la realidad con la precisión y creatividad que merecen.",
    color: "from-accent to-primary",
  },
  {
    icon: Target,
    title: "Asesoramiento completo",
    description: "Te acompañamos en todo el proceso, desde la idea inicial hasta la entrega final.",
    color: "from-primary to-accent",
  },
]

export const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    text: "conversamos sobre tu idea: diseño, colores y estilo",
  },
  {
    icon: Rulers,
    text: "definimos tamaño y formato (alfombra o cuadro)",
  },
  {
    icon: Eye,
    text: "transpaso el diseño al lienzo para tu aprobación",
  },
  {
    icon: Sparkles,
    text: "¡manos a la obra! tu pieza llega lista en 4-10 semanas según el tamaño",
  },
]

export const contactInfo: ContactInfo = {
  phone: "+54 9 11 4067-4342",
  whatsappUrl: "https://wa.me/5491140674342",
  name: "Cande Corpacci"
}

export const siteMetadata: SiteMetadata = {
  title: "entre hilos × cande | Tufting Personalizado",
  description: "Alfombras y cuadros tufting personalizados, hechos a pedido en Buenos Aires. Cada pieza es única, creada con diseño, color y textura en equilibrio.",
  keywords: "tufting, alfombras, cuadros personalizados, Buenos Aires, arte textil, diseño",
  author: "Cande Corpacci",
  url: "https://entre-hilos.vercel.app"
}