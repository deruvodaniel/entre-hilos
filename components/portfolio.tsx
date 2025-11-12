"use client"

const works = [
  {
    id: 1,
    image: "/azul-amarillo.jpg",
  },
  {
    id: 2,
    image: "/flores-rojo-negro.jpg",
  },
  {
    id: 3,
    image: "/multicolor-arcoiris.jpg",
  },
  {
    id: 4,
    image: "/ondas-multicolor.jpg",
  },
  {
    id: 5,
    image: "/proceso-trabajo.jpg",
  },
  {
    id: 6,
    image: "/rojo-negro-lineas.jpg",
  },
  {
    id: 7,
    image: "/rojo-negro-terminado.jpg",
  },
  {
    id: 8,
    image: "/tonos-calidos.jpg",
  },
  {
    id: 9,
    image: "/verde-lima.jpg",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[30px] font-light mb-16 text-foreground text-center animate-fade-in-up"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          algunos de mis trabajos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="aspect-square bg-muted rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in group cursor-pointer border-2 border-border hover:border-primary"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt="Trabajo de tufting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
