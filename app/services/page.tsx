import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  AlertTriangle,
  Droplets,
  ClipboardCheck,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  Flame,
  Bell,
  Gauge,
  Zap,
  Shield,
  FileCheck,
  Users,
  Calendar,
  Settings,
} from "lucide-react"

const services = [
  {
    id: "equipment-installation",
    icon: Wrench,
    title: "Fire Fighting Equipment Installation",
    description: "We are authorised installers for all kinds of fire fighting equipment. Our expert team ensures that your equipment is installed to the highest standards for optimal performance and reliability.",
    features: [
      { icon: Shield, text: "Installation of Fire Extinguishers" },
      { icon: Shield, text: "Installation of Fire Hose Reels" },
      { icon: Shield, text: "Installation of Fire Pumps" },
      { icon: Shield, text: "Installation of Fire Cabinets" },
    ],
    benefits: [
      "Professional and compliant installation",
      "Ensures optimal equipment performance",
      "Reduces risk of equipment failure",
      "Peace of mind knowing your equipment is installed correctly",
    ],
    image: "/professional-fire-safety-equipment-installation-te.jpg",
  },
  {
    id: "extinguisher-refilling",
    icon: Flame,
    title: "Fire Extinguisher Refilling",
    description: "We provide professional fire extinguisher refilling services for all types of extinguishers. We ensure that your extinguishers are always ready for an emergency.",
    features: [
      { icon: CheckCircle, text: "Refilling of all extinguisher types (ABC, CO2, Water, Foam)" },
      { icon: CheckCircle, text: "Pressure testing and certification" },
      { icon: CheckCircle, text: "On-site and off-site refilling services" },
      { icon: CheckCircle, text: "Compliance with safety standards" },
    ],
    benefits: [
      "Ensures extinguishers are always ready",
      "Extends the life of your equipment",
      "Cost-effective solution",
      "Compliance with fire safety regulations",
    ],
    image: "/abc-dry-chemical-fire-extinguisher-red-portable.jpg",
  },
  {
    id: "hydrant-installation",
    icon: Droplets,
    title: "Hydrant System Installation",
    description: "Our team specializes in the design and installation of hydrant systems for residential, commercial, and industrial properties. We ensure a reliable water supply for firefighting.",
    features: [
      { icon: Settings, text: "Design and layout of hydrant systems" },
      { icon: Wrench, text: "Installation of wet and dry riser systems" },
      { icon: Shield, text: "Installation of fire pumps and tanks" },
      { icon: CheckCircle, text: "Testing and commissioning of the system" },
    ],
    benefits: [
      "Reliable water supply for firefighting",
      "Compliance with building codes",
      "Increased safety for occupants",
      "Reduced risk of property damage",
    ],
    image: "/fire-hydrant-valve-brass-chrome-industrial.jpg",
  },
  {
    id: "sprinkler-alarm-installation",
    icon: Bell,
    title: "Sprinkler & Alarm System Installation",
    description: "We install state-of-the-art sprinkler and alarm systems for automatic fire detection and suppression. Our systems are designed to provide early warnings and minimize damage.",
    features: [
      { icon: Bell, text: "Installation of smoke detectors and heat sensors" },
      { icon: Droplets, text: "Installation of automatic sprinkler systems" },
      { icon: Zap, text: "Integration with building management systems" },
      { icon: Users, text: "User training and system handover" },
    ],
    benefits: [
      "Early detection and warning",
      "Automatic fire suppression",
      "Reduced risk of injury and property damage",
      "24/7 protection for your property",
    ],
    image: "/fire-sprinkler-system-wet-pipe-commercial-installa.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Services</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Fire Fighting System Installation Services</h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Specializing in the installation of fire fighting equipment, hydrant systems, sprinkler systems, alarm systems, and providing fire extinguisher refilling services.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature.text} className="flex items-start gap-3">
                          <feature.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="bg-muted rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">Key Benefits</h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold text-primary-foreground mb-2 text-balance">
                  Need a Custom Fire Safety Solution?
                </h2>
                <p className="text-primary-foreground/80">
                  Our experts will assess your needs and design a tailored solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
