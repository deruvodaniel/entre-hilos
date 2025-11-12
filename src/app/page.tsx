import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Orders } from "@/components/sections/orders"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Orders />
    </main>
  )
}
