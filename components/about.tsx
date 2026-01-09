"use client"

import Image from "next/image"
import { useState } from "react"
import { Info } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const basePath = process.env.NODE_ENV === "production" ? "/emoceans" : ""

const approaches = [
  {
    name: "CBT",
    description: "Spot automatic thought loops and question them. Learn kinder, more realistic ways of thinking."
  },
  {
    name: "DBT",
    description: "Build emotional stability with tools for calming storms. Handle conflicts without exploding or shutting down."
  },
  {
    name: "ACT",
    description: "Make space for difficult emotions without fighting them. Choose actions that match who you want to be."
  },
  {
    name: "IFS",
    description: "Understand your inner parts and why they exist. Build a kinder relationship with yourself."
  },
  {
    name: "Trauma",
    description: "Feel safer in your body and understand your triggers. Gently process past experiences at your pace."
  },
  {
    name: "Mindfulness",
    description: "Slow the inner noise and return to the present moment. Learn to pause, breathe, and respond instead of react."
  },
]

export function About() {
  const [hoveredApproach, setHoveredApproach] = useState<string | null>(null)
  const heroAnim = useScrollAnimation()
  const approachesAnim = useScrollAnimation()

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-balance text-center">About the work</h2>

          {/* Image left, text right layout */}
          <div
            ref={heroAnim.ref}
            className={`flex flex-col lg:flex-row gap-12 items-center mb-16 transition-all duration-700 ${
              heroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[var(--vista-bleu)]/30">
                <Image
                  src={`${basePath}/assets/reetika.jpeg`}
                  alt="Reetika - Therapist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Therapy with me is a space where you don't have to arrive clear, calm, or put together. We often begin in
                confusion, with emotions that feel tangled, contradictory, or hard to name. I work deeply with the
                emotional layers beneath your present struggles, helping you notice how earlier experiences, family
                patterns, and unspoken pain continue to shape your relationships and inner world.
              </p>
              <p>
                I have a special interest in working with individuals who have experienced adverse childhood experiences
                and those with attachment- and relationship-based concerns. I also do my best to create a trauma and
                grief-informed space for every version of you (even the versions you have been running away from).
              </p>
              <p className="text-foreground">
                Something I want to give a heads up on is that my role is not to fix you, but to sit with you long enough
                for insight, self-compassion, and meaningful choice to slowly emerge.
              </p>
            </div>
          </div>

          {/* Schools of thought section */}
          <div
            ref={approachesAnim.ref}
            className={`bg-muted/30 rounded-3xl p-8 md:p-12 border-2 border-border transition-all duration-700 delay-200 ${
              approachesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">Approaches I work with</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {approaches.map((approach) => (
                <div
                  key={approach.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredApproach(approach.name)}
                  onMouseLeave={() => setHoveredApproach(null)}
                >
                  <div className="bg-background rounded-full px-4 py-2.5 text-center text-sm font-medium border-2 border-[var(--vista-bleu)]/30 hover:border-[var(--vista-bleu)] transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    {approach.name}
                    <Info size={12} className="text-muted-foreground flex-shrink-0" />
                  </div>
                  {hoveredApproach === approach.name && (
                    <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-4 bg-background rounded-xl shadow-lg border-2 border-[var(--vista-bleu)]/30">
                      <p className="text-sm text-muted-foreground leading-relaxed">{approach.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
