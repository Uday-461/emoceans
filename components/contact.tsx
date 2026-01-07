import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--vista-bleu)"
            d="M0,100 C360,150 720,50 1080,100 C1280,125 1440,100 1440,100 L1440,200 L0,200 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Ready to dive in?</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The first step is reaching out. Let's talk about what you're looking for and see if we're a good fit.
            </p>
          </div>

          <Card className="p-8 md:p-12 border-2 mb-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 bg-[#25D366]"
                >
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick questions or to schedule</p>
                <Button asChild className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white rounded-full">
                  <a href="https://api.whatsapp.com/send?phone=919211320949&text=Hi%20Reetika%2C%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20know%20more%20about%20therapy%20sessions." target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110"
                  style={{ backgroundColor: "var(--vista-bleu)" }}
                >
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">For detailed inquiries</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[var(--vista-bleu)] text-[var(--vista-bleu)] hover:bg-[var(--vista-bleu)] hover:text-white rounded-full bg-transparent"
                >
                  <a href="mailto:therapy.reetikashah@gmail.com">Send an Email</a>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110"
                  style={{ backgroundColor: "var(--bleu-oxford)" }}
                >
                  <Linkedin className="text-white" size={28} />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">Connect professionally</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[var(--bleu-oxford)] text-[var(--bleu-oxford)] hover:bg-[var(--bleu-oxford)] hover:text-white rounded-full bg-transparent"
                >
                  <a href="https://www.linkedin.com/in/reetikashah" target="_blank" rel="noopener noreferrer">View Profile</a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-foreground mb-2">Online Therapy Only</p>
            <p className="text-muted-foreground">Sessions available worldwide via secure video platform</p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Typical response time: <span className="font-semibold text-foreground">24-48 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
