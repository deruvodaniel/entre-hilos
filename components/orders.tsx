export default function Orders() {
  return (
    <section id="orders" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-[30px] font-light mb-8 text-foreground" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          querés encargar una pieza? escribime :)
        </h2>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://wa.me/5491140674342"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src="https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000"
              alt="WhatsApp"
              className="w-16 h-16"
            />
          </a>
          <p
            className="text-foreground font-light"
            style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "16px" }}
          >
            Cande Corpacci
          </p>
        </div>
      </div>
    </section>
  )
}
