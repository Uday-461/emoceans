"use client"

import { Card } from "@/components/ui/card"
import { User, Users, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    description:
      "Deep dive into your personal narrative. Uncover patterns, challenge beliefs, and chart new emotional territories.",
    color: "var(--orange)",
  },
  {
    icon: Sparkles,
    title: "Workshops",
    description:
      "Collective exploration of emotional intelligence. Learn practical tools for navigating life's waves with others.",
    color: "var(--vista-bleu)",
  },
  {
    icon: Users,
    title: "Relational Work",
    description:
      "Explore the dynamics between you and others. Strengthen connections and communicate with authenticity.",
    color: "var(--bleu-oxford)",
  },
]

export function Services() {
  const headerAnim = useScrollAnimation()
  const cardsAnim = useScrollAnimation()

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={headerAnim.ref}
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            headerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">How we work together</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Every person's journey is unique. Choose the approach that resonates with where you are right now.
          </p>
        </div>

        <div
          ref={cardsAnim.ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-lg transition-all border-2 hover:border-[var(--orange)]/50 duration-700 ${
                cardsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: service.color }}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
