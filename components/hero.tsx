"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const anim = useScrollAnimation()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={anim.ref}
          className={`max-w-4xl transition-all duration-700 ${
            anim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 text-balance">
            Navigate your <span className="text-[var(--orange)]">emotional</span> depths
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Dive beneath the surface. Explore the currents of your inner world. Transform the way you relate to yourself
            and others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[var(--bleu-oxford)] hover:bg-[var(--bleu-oxford)]/90 text-white rounded-full text-lg px-8"
            >
              <Link href="#contact">
                Start Your Journey <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[var(--orange)] text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white rounded-full text-lg px-8 bg-transparent"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
