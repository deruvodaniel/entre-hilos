import { MessageCircle, Ruler as Rulers, Eye, Sparkles } from "lucide-react"

const steps = [
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

export default function Process() {
  return (
    <section id="process" className="py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4" style={{ backgroundColor: '#FBBF24' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Icon size={40} className="text-foreground" />
                </div>
                <p className="text-foreground font-light leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}>{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
