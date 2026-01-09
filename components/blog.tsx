"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { blogPosts } from "@/lib/blog-posts"

const basePath = process.env.NODE_ENV === "production" ? "/emoceans" : ""

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
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">From my side of the Couch</h2>
            <p className="text-xl text-muted-foreground">Reflections on the human experience</p>
          </div>
        </div>

        <div
          ref={cardsAnim.ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
              <Card
                className={`p-8 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-[var(--orange)]/50 cursor-pointer duration-700 h-full ${
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
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
