import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Protect Your Property?
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Get a free site assessment and customized fire safety proposal. Our experts are ready to help you create a
            safer environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+1800FIREGUARD">
                <Phone className="mr-2 h-5 w-5" />
                1-800-FIREGUARD
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
