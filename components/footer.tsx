"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[var(--bleu-oxford)] text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Emoceans</h3>
            <p className="text-white/80 leading-relaxed max-w-md">
              Therapy that respects your intelligence. Navigate your emotional depths with clarity and courage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-white/80 hover:text-[var(--orange)] transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-white/80 hover:text-[var(--orange)] transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => scrollToSection(e, "blog")} className="text-white/80 hover:text-[var(--orange)] transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")} className="text-white/80 hover:text-[var(--orange)] transition-colors cursor-pointer">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">© {currentYear} Emoceans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
