import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Droplets, ClipboardCheck, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    icon: AlertTriangle,
    title: "Fire Fighting Equipment Installation",
    description: "Installation of all kinds of fire fighting equipment.",
    href: "/services#equipment",
  },
  {
    icon: Wrench,
    title: "Fire Extinguisher Refilling",
    description: "Professional refilling services for all types of fire extinguishers.",
    href: "/services#refilling",
  },
  {
    icon: Droplets,
    title: "Hydrant System Installation",
    description: "Expert installation of fire hydrant systems for reliable water supply.",
    href: "/services#hydrant",
  },
  {
    icon: ClipboardCheck,
    title: "Sprinkler & Alarm System Installation",
    description: "Installation of automatic sprinkler and fire alarm systems.",
    href: "/services#sprinkler-alarm",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Fire Safety Installation Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are specialists in the installation of fire fighting systems. Our services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
