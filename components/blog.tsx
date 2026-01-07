import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The myth of closure",
    excerpt: "Why waiting for closure keeps you stuck, and what to do instead.",
    category: "Relationships",
    readTime: "5 min read",
    color: "var(--orange)",
  },
  {
    title: "Anger isn't the enemy",
    excerpt: "Understanding what your anger is trying to tell you about your boundaries.",
    category: "Emotions",
    readTime: "7 min read",
    color: "var(--vista-bleu)",
  },
  {
    title: "The stories we inherit",
    excerpt: "How family patterns shape our emotional responses and what we can do about it.",
    category: "Family",
    readTime: "6 min read",
    color: "var(--bleu-oxford)",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">Thoughts & insights</h2>
            <p className="text-xl text-muted-foreground">Reflections on the human experience</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-[var(--orange)]/50 cursor-pointer"
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
