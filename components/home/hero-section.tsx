import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Phone, ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              ISO 9001:2015 Certified
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Complete Fire Safety Solutions for Your
              <span className="text-primary"> Peace of Mind</span>
            </h1>

            <p className="text-lg text-background/80 leading-relaxed max-w-xl">
              From detection systems to suppression equipment, we provide comprehensive fire protection services backed
              by 20+ years of expertise. Protecting lives and property is our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent"
              >
                <a href="tel:+1800FIREGUARD">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {["24/7 Emergency Response", "Free Site Assessment", "Nationwide Coverage"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-background/80">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[500px]">
            <div className="relative h-full rounded-2xl overflow-hidden">
              <img
                src="/professional-fire-safety-equipment-installation-te.jpg"
                alt="Professional fire safety installation"
                className="w-full h-full object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">100+</p>
                    <p className="text-xs text-muted-foreground">Projects Done</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">20+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">98%</p>
                    <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
