import { Palette, Ruler, Sparkles, Target } from "lucide-react"

const services = [
  {
    icon: Ruler,
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
    title: "Precisión y detalle",
    description: "Cada punto cuenta. Nos enfocamos en la calidad de cada trabajo que creamos.",
    color: "from-primary via-secondary to-accent",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-foreground text-center animate-fade-in-up">
          Qué hago
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-background border-2 border-muted p-8 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground font-medium" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
