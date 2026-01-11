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
    id: "detection",
    icon: AlertTriangle,
    title: "Fire Detection Systems",
    description:
      "Advanced fire detection solutions that provide early warning and protect your premises from potential fire hazards.",
    features: [
      { icon: Bell, text: "Conventional & Addressable Fire Alarm Systems" },
      { icon: Gauge, text: "Smoke Detectors & Heat Sensors" },
      { icon: Zap, text: "Beam Detectors & Flame Detectors" },
      { icon: Shield, text: "Integrated Building Management Systems" },
    ],
    benefits: [
      "Early fire detection within seconds",
      "Reduced false alarms with intelligent sensors",
      "24/7 monitoring capabilities",
      "Compliance with fire safety codes",
    ],
    image: "/fire-detection-system-smoke-detector-installation.jpg",
  },
  {
    id: "suppression",
    icon: Droplets,
    title: "Fire Suppression Systems",
    description:
      "Comprehensive fire suppression solutions designed to quickly contain and extinguish fires, minimizing damage.",
    features: [
      { icon: Droplets, text: "Automatic Sprinkler Systems" },
      { icon: Flame, text: "CO2 & Clean Agent Flooding Systems" },
      { icon: Gauge, text: "Foam Suppression Systems" },
      { icon: Shield, text: "Kitchen Hood Suppression Systems" },
    ],
    benefits: [
      "Rapid fire containment",
      "Minimal water damage with targeted suppression",
      "Protection for sensitive equipment",
      "Insurance premium reductions",
    ],
    image: "/fire-suppression-sprinkler-system-commercial.jpg",
  },
  {
    id: "audits",
    icon: ClipboardCheck,
    title: "Safety Audits & Training",
    description:
      "Comprehensive fire safety assessments and training programs to ensure your organization is prepared for emergencies.",
    features: [
      { icon: FileCheck, text: "Complete Fire Risk Assessment" },
      { icon: ClipboardCheck, text: "Compliance Audits & Documentation" },
      { icon: Users, text: "Staff Fire Safety Training" },
      { icon: Shield, text: "Emergency Evacuation Planning" },
    ],
    benefits: [
      "Identify and mitigate fire risks",
      "Meet regulatory compliance requirements",
      "Trained staff for emergency response",
      "Documented safety procedures",
    ],
    image: "/fire-safety-audit-inspection-professional.jpg",
  },
  {
    id: "amc",
    icon: Wrench,
    title: "AMC Services",
    description:
      "Annual Maintenance Contracts to keep your fire safety systems in optimal condition with regular inspections and servicing.",
    features: [
      { icon: Calendar, text: "Scheduled Preventive Maintenance" },
      { icon: Settings, text: "System Testing & Calibration" },
      { icon: Wrench, text: "Emergency Repair Services" },
      { icon: FileCheck, text: "Detailed Service Reports" },
    ],
    benefits: [
      "Extended equipment lifespan",
      "Reduced breakdown risks",
      "Priority emergency support",
      "Maintained compliance status",
    ],
    image: "/fire-safety-equipment-maintenance-service.jpg",
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Comprehensive Fire Safety Solutions</h1>
              <p className="text-lg text-background/80 leading-relaxed">
                From detection to suppression, audits to maintenance - we provide end-to-end fire safety services
                tailored to your specific requirements.
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
