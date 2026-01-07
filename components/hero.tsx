import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background waves */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            className="wave opacity-20"
            fill="var(--vista-bleu)"
            d="M0,400 C320,500 640,300 960,400 C1280,500 1440,400 1440,400 L1440,800 L0,800 Z"
          />
          <path
            className="wave opacity-30"
            fill="var(--orange)"
            d="M0,500 C360,600 720,400 1080,500 C1280,550 1440,500 1440,500 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
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
