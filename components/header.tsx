"use client"

import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b-2 border-muted z-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/logo.png"
            alt="entre hilos × cande"
            width={120}
            height={40}
            className="h-auto w-24 sm:w-28"
            priority
          />
        </div>

        <div className="flex-1" />
      </div>
    </header>
  )
}
