import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Calendar,
  ClipboardCheck,
  Building,
  HardHat,
  FileCheck,
  Users,
} from "lucide-react"

const regulations = [
  {
    title: "National Fire Protection Association (NFPA)",
    description: "NFPA codes and standards are the most widely adopted fire prevention guidelines in the world.",
    codes: [
      "NFPA 1 - Fire Code",
      "NFPA 13 - Sprinkler Systems",
      "NFPA 72 - Fire Alarm Systems",
      "NFPA 101 - Life Safety Code",
    ],
  },
  {
    title: "International Building Code (IBC)",
    description:
      "The IBC provides minimum regulations for building systems using prescriptive and performance-related provisions.",
    codes: [
      "Chapter 9 - Fire Protection",
      "Chapter 10 - Means of Egress",
      "Fire-Resistance Construction",
      "High-Rise Requirements",
    ],
  },
  {
    title: "Occupational Safety & Health (OSHA)",
    description:
      "OSHA regulations ensure workplace fire safety through emergency action plans and prevention measures.",
    codes: [
      "29 CFR 1910.38 - Emergency Plans",
      "29 CFR 1910.39 - Fire Prevention",
      "Portable Fire Extinguishers",
      "Fixed Extinguishing Systems",
    ],
  },
]

const auditProcess = [
  {
    step: 1,
    title: "Initial Assessment",
    description: "Comprehensive walkthrough of your facility to identify fire hazards and existing safety measures.",
    icon: Building,
  },
  {
    step: 2,
    title: "Documentation Review",
    description: "Review of existing fire safety plans, maintenance records, and compliance certificates.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Equipment Inspection",
    description:
      "Thorough inspection of all fire safety equipment including alarms, extinguishers, and suppression systems.",
    icon: ClipboardCheck,
  },
  {
    step: 4,
    title: "Risk Analysis",
    description: "Detailed risk assessment identifying potential fire hazards and mitigation strategies.",
    icon: AlertTriangle,
  },
  {
    step: 5,
    title: "Compliance Report",
    description: "Comprehensive report with findings, recommendations, and a compliance roadmap.",
    icon: FileCheck,
  },
  {
    step: 6,
    title: "Implementation Support",
    description: "Ongoing support to implement recommendations and achieve full compliance.",
    icon: HardHat,
  },
]

const amcBenefits = [
  "Scheduled preventive maintenance",
  "Priority emergency response",
  "Regular equipment testing & calibration",
  "Compliance certificate maintenance",
  "Detailed service documentation",
  "Spare parts at discounted rates",
  "24/7 technical support",
  "Annual compliance audit included",
]

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Compliance & Safety</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Fire Safety Compliance Made Simple</h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Stay compliant with fire safety regulations through our comprehensive audit services and annual
                maintenance contracts. We help you navigate complex requirements with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Regulations Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Key Regulations</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Fire Safety Standards & Codes
              </h2>
              <p className="text-muted-foreground">
                Understanding the regulatory landscape is essential for fire safety compliance. Here are the key
                standards that govern fire protection requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {regulations.map((reg) => (
                <Card key={reg.title} className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{reg.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reg.description}</p>
                    <div className="space-y-2 pt-2">
                      {reg.codes.map((code) => (
                        <div key={code} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{code}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Fire Safety Audit Process
              </h2>
              <p className="text-muted-foreground">
                Our systematic approach ensures thorough evaluation and actionable recommendations for your facility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditProcess.map((step) => (
                <Card key={step.step} className="bg-card border-border relative overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20">
                        {step.step.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AMC Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Annual Maintenance</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  AMC Services for Continuous Compliance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our Annual Maintenance Contracts ensure your fire safety systems remain in optimal condition
                  year-round. Regular maintenance not only extends equipment life but also maintains your compliance
                  status.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {amcBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Get AMC Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">AMC Coverage Options</h3>
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Basic Plan</h4>
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">Quarterly</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />4 scheduled visits per year
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Basic equipment inspection
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        Service reports included
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl p-6 border-2 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Premium Plan</h4>
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        Recommended
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Monthly visits + on-call support
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Priority emergency response
                      </li>
                      <li className="flex items-center gap-2">
                        <ClipboardCheck className="h-4 w-4 text-primary" />
                        Full compliance management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Don't Risk Non-Compliance
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule a fire safety audit today and ensure your facility meets all regulatory requirements. Protect
              your business from penalties and potential hazards.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">
                Schedule Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
