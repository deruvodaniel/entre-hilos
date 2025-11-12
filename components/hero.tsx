export default function Hero() {
  return (
    <section className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl w-full text-center animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center gap-0">
            <h1
              className="leading-none"
              style={{ fontFamily: "'Winky Rough', cursive", fontSize: "120px", fontWeight: "700" }}
            >
              <span style={{ color: "#EF4444" }}>e</span>
              <span style={{ color: "#EF4444" }}>n</span>
              <span style={{ color: "#F97316" }}>t</span>
              <span style={{ color: "#F97316" }}>r</span>
              <span style={{ color: "#FBBF24" }}>e</span>
              <span style={{ color: "#EC4899" }}> </span>
              <span style={{ color: "#EC4899" }}>h</span>
              <span style={{ color: "#EC4899" }}>i</span>
              <span style={{ color: "#EF4444" }}>l</span>
              <span style={{ color: "#EF4444" }}>o</span>
              <span style={{ color: "#F97316" }}>s</span>
            </h1>
            <p
              className="text-sm sm:text-base font-light mt-1 text-foreground w-full text-right"
              style={{ fontFamily: "'Funnel Display', serif", fontSize: "17px" }}
            >
              x Cande Corpacci
            </p>
          </div>
        </div>

        <p
          className="text-foreground font-light leading-relaxed"
          style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}
        >
          alfombras y cuadros personalizados hechos con la técnica de tufting
        </p>
      </div>
    </section>
  )
}
