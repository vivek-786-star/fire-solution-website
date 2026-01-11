import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Target, Eye, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

const milestones = [
  { year: "2003", title: "Company Founded", description: "Started with a vision to make fire safety accessible." },
  { year: "2008", title: "ISO Certification", description: "Achieved ISO 9001:2008 quality management certification." },
  { year: "2012", title: "National Expansion", description: "Expanded operations to serve clients nationwide." },
  { year: "2018", title: "500+ Projects", description: "Completed our 500th successful installation project." },
  { year: "2023", title: "Industry Leader", description: "Recognized as a leading fire safety solutions provider." },
]

const team = [
  {
    name: "Robert Chen",
    role: "CEO & Founder",
    image: "/professional-business-executive-ceo-portrait.jpg",
  },
  {
    name: "Sarah Martinez",
    role: "Technical Director",
    image: "/professional-woman-engineer-director-portrait.jpg",
  },
  {
    name: "Michael Thompson",
    role: "Operations Manager",
    image: "/professional-operations-manager-man-portrait.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Customer Relations",
    image: "/professional-customer-relations-woman-portrait.jpg",
  },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "Fire Department Approved Vendor",
  "Licensed Fire Protection Contractor",
  "NFPA Member Organization",
  "Certified Fire Safety Trainers",
  "Authorized Dealer - Major Brands",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Protecting Lives & Property Since 2003
              </h1>
              <p className="text-lg text-background/80 leading-relaxed">
                FireGuard Pro Solutions is a leading fire safety company dedicated to providing comprehensive fire
                protection services. With over two decades of experience, we've helped hundreds of businesses and
                institutions create safer environments.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional fire safety solutions that protect lives, property, and business continuity.
                    We are committed to delivering innovative, reliable, and cost-effective fire protection systems
                    while maintaining the highest standards of quality and customer service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted name in fire safety, recognized for our expertise, innovation, and unwavering
                    commitment to protecting communities. We envision a future where every building has access to
                    world-class fire protection systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Story</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  Two Decades of Excellence in Fire Safety
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2003 by fire safety veteran Robert Chen, FireGuard Pro Solutions began as a small team
                    passionate about making professional fire safety accessible to businesses of all sizes.
                  </p>
                  <p>
                    What started as a local operation has grown into a nationwide service provider, but our core values
                    remain unchanged: integrity, quality, and an unwavering commitment to our clients' safety.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 clients across commercial, industrial, healthcare, and
                    hospitality sectors, with a team of certified experts and partnerships with leading equipment
                    manufacturers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/fire-safety-company-office-team-meeting.jpg"
                  alt="FireGuard Pro team meeting"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Key Milestones</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex flex-col md:flex-row items-center gap-4 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <Card className="inline-block bg-card border-border">
                        <CardContent className="p-6">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-lg font-semibold text-foreground mt-2">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full z-10 flex-shrink-0" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Leadership</h2>
              <p className="text-muted-foreground">Experienced professionals dedicated to your safety.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="bg-card border-border overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Certifications & Accreditations
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  Licensed, Certified & Trusted
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our certifications demonstrate our commitment to quality and compliance with industry standards. We
                  maintain all necessary licenses and accreditations to deliver professional fire safety services.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <p className="text-3xl font-bold text-foreground">ISO</p>
                  <p className="text-sm text-muted-foreground">9001:2015</p>
                </div>
                <div className="bg-muted p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <p className="text-3xl font-bold text-foreground">Licensed</p>
                  <p className="text-sm text-muted-foreground">Contractor</p>
                </div>
                <div className="bg-muted p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <p className="text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-muted p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <p className="text-3xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Work With Us?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust FireGuard Pro for their fire safety needs.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">
                Contact Us Today
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
