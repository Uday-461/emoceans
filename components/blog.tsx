"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const blogPosts = [
  {
    title: "The myth of closure",
    excerpt: "Why waiting for closure keeps you stuck, and what to do instead.",
    category: "Relationships",
    readTime: "5 min read",
    color: "var(--rust)",
  },
  {
    title: "Anger isn't the enemy",
    excerpt: "Understanding what your anger is trying to tell you about your boundaries.",
    category: "Emotions",
    readTime: "7 min read",
    color: "var(--navy)",
  },
  {
    title: "The stories we inherit",
    excerpt: "How family patterns shape our emotional responses and what we can do about it.",
    category: "Family",
    readTime: "6 min read",
    color: "var(--navy-dark)",
  },
]

export function Blog() {
  const headerAnim = useScrollAnimation()
  const cardsAnim = useScrollAnimation()

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={headerAnim.ref}
          className={`flex justify-between items-end mb-16 transition-all duration-700 ${
            headerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">Thoughts & insights</h2>
            <p className="text-xl text-muted-foreground">Reflections on the human experience</p>
          </div>
        </div>

        <div
          ref={cardsAnim.ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-[var(--orange)]/50 cursor-pointer duration-700 ${
                cardsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 text-white"
                style={{ backgroundColor: post.color }}
              >
                {post.category}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-balance">{post.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="text-sm text-muted-foreground">{post.readTime}</div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
