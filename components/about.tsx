import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path fill="var(--vista-bleu)" d="M0,50 C360,80 720,20 1080,50 C1280,65 1440,50 1440,50 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-balance text-center">About the work</h2>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--vista-bleu)]/30">
              <Image
                src="/assets/reetika.jpeg"
                alt="Reetika - Therapist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
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
            <p className="font-semibold text-foreground text-xl">
              Something I want to give a heads up on is that my role is not to fix you, but to sit with you long enough
              for insight, self-compassion, and meaningful choice to slowly emerge.
            </p>
          </div>

          {/* Schools of thought section */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border-2 border-border">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">Approaches I work with</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["CBT", "DBT", "ACT", "IFS", "Attachment Work", "Trauma Work", "Mindfulness"].map((approach) => (
                <div
                  key={approach}
                  className="bg-background rounded-full px-6 py-3 text-center font-medium border-2 border-[var(--vista-bleu)]/30 hover:border-[var(--vista-bleu)] transition-colors"
                >
                  {approach}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
