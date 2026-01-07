"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blog" },
    { href: "#reviews", label: "Reviews" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center cursor-pointer"
          >
            <span className="text-3xl font-serif font-bold text-foreground">Emoceans</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-foreground hover:text-[var(--orange)] transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white rounded-full">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Connect</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-foreground hover:text-[var(--orange)] transition-colors font-medium py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white rounded-full w-full">
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                  Connect
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
