import Hero from "@/components/hero"
import About from "@/components/about"
import Process from "@/components/process"
import Portfolio from "@/components/portfolio"
import Orders from "@/components/orders"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Orders />
    </main>
  )
}
