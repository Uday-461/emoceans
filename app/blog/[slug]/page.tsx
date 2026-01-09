import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getAllSlugs } from "@/lib/blog-posts"


export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="container mx-auto px-4 lg:px-8 py-12 max-w-3xl">
        {/* Back button */}
        <Link href="/#blog">
          <Button
            variant="ghost"
            className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to home
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 text-white"
            style={{ backgroundColor: post.color }}
          >
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance leading-tight">
            {post.title}
          </h1>
          <p className="text-muted-foreground">{post.readTime}</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl md:text-3xl font-serif font-bold mt-12 mb-6"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl md:text-2xl font-serif font-semibold mt-10 mb-4"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              )
            }

            // Handle horizontal rules
            if (paragraph.trim() === "---") {
              return <hr key={index} className="my-12 border-border" />
            }

            // Handle list items
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
              return (
                <ul key={index} className="my-6 space-y-2">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="text-lg text-muted-foreground leading-relaxed pl-2"
                    >
                      {renderTextWithBold(item.replace("- ", ""))}
                    </li>
                  ))}
                </ul>
              )
            }

            // Handle numbered lists
            if (/^\d+\.\s/.test(paragraph)) {
              const items = paragraph.split("\n").filter((line) => /^\d+\.\s/.test(line))
              return (
                <ol key={index} className="my-6 space-y-2 list-decimal list-inside">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      {renderTextWithBold(item.replace(/^\d+\.\s/, ""))}
                    </li>
                  ))}
                </ol>
              )
            }

            // Regular paragraph with bold text support
            return (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                {renderTextWithBold(paragraph)}
              </p>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/#contact">
            <Button className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white rounded-full">
              Ready to start your journey? Connect with me
            </Button>
          </Link>
        </footer>
      </article>
    </div>
  )
}

// Helper function to render text with **bold** markdown
function renderTextWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}
