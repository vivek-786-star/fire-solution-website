"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Building, Calendar, ArrowRight } from "lucide-react"

const categories = ["All", "Commercial", "Industrial", "Healthcare", "Hospitality", "Residential", "Educational"]

const projects = [
  {
    id: 1,
    title: "Metro Corporate Tower",
    location: "Downtown Metro City",
    category: "Commercial",
    year: "2023",
    description:
      "Complete fire detection and suppression system installation for a 40-story corporate headquarters building.",
    scope: ["Addressable Fire Alarm System", "Sprinkler System", "Emergency Lighting", "Fire Pumps"],
    image: "/modern-corporate-tower-building-fire-safety-instal.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Sunrise Manufacturing Plant",
    location: "Industrial District",
    category: "Industrial",
    year: "2023",
    description:
      "Specialized foam suppression and hydrant system for a large-scale pharmaceutical manufacturing facility.",
    scope: ["Foam Suppression System", "Hydrant Network", "Hazmat Detection", "Emergency Response System"],
    image: "/industrial-manufacturing-plant-fire-safety-system.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Grand Hotel & Resort",
    location: "Coastal City",
    category: "Hospitality",
    year: "2022",
    description:
      "Comprehensive fire safety solution for a 5-star luxury resort including guest rooms and conference facilities.",
    scope: ["Smoke Detection", "Sprinkler System", "Kitchen Suppression", "Evacuation System"],
    image: "/luxury-hotel-resort-fire-safety-sprinkler-system.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "City Central Hospital",
    location: "Health District",
    category: "Healthcare",
    year: "2023",
    description:
      "Life-safety systems integration with advanced detection and suppression for a 500-bed tertiary care hospital.",
    scope: ["Intelligent Detection", "Clean Agent Suppression", "Nurse Call Integration", "Zone-wise Control"],
    image: "/hospital-building-fire-safety-medical-facility.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Parkview Residential Complex",
    location: "Suburban Heights",
    category: "Residential",
    year: "2022",
    description: "Fire safety systems for a 200-unit high-rise residential complex with common amenities.",
    scope: ["Smoke Detectors", "Sprinkler System", "Fire Alarm Network", "Stairwell Pressurization"],
    image: "/residential-apartment-building-fire-safety.jpg",
  },
  {
    id: 6,
    title: "TechHub Office Park",
    location: "Innovation District",
    category: "Commercial",
    year: "2022",
    description: "Modern fire protection for a tech campus with data center and office buildings.",
    scope: ["FM-200 Suppression", "VESDA Detection", "Access Integration", "Fire Curtains"],
    image: "/tech-office-park-modern-building-fire-safety.jpg",
  },
  {
    id: 7,
    title: "Central University Campus",
    location: "Academic Quarter",
    category: "Educational",
    year: "2021",
    description: "Campus-wide fire safety upgrade including dormitories, labs, and administrative buildings.",
    scope: ["Networked Alarm System", "Lab-specific Suppression", "PA Integration", "Fire Drill Systems"],
    image: "/university-campus-building-fire-safety.jpg",
  },
  {
    id: 8,
    title: "AutoParts Factory",
    location: "Manufacturing Zone",
    category: "Industrial",
    year: "2021",
    description: "High-hazard fire protection system for automotive parts manufacturing with paint booths.",
    scope: ["Deluge System", "Paint Booth Suppression", "Warehouse Sprinklers", "Fire Hydrants"],
    image: "/automotive-factory-fire-safety-industrial.jpg",
  },
  {
    id: 9,
    title: "Wellness Medical Center",
    location: "Medical Row",
    category: "Healthcare",
    year: "2021",
    description: "Outpatient medical facility with specialized protection for imaging and surgical areas.",
    scope: ["MRI Room Protection", "Surgical Suite System", "Pharmacy Detection", "Emergency Power"],
    image: "/medical-center-clinic-fire-safety.jpg",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Projects</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Successful Installations Portfolio</h1>
              <p className="text-lg text-background/80 leading-relaxed">
                Explore our portfolio of completed fire safety projects across various sectors. Each installation
                reflects our commitment to quality and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50M+</p>
                <p className="text-sm text-muted-foreground">Sq. Ft. Protected</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Industry Sectors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Projects */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border hover:bg-muted bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className={`group overflow-hidden bg-card border-border ${
                    project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Scope of Work</p>
                      <div className="flex flex-wrap gap-2">
                        {project.scope.map((item) => (
                          <span key={item} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <blockquote className="text-2xl font-medium text-foreground leading-relaxed mb-6 text-balance">
                "Ramdas G Fabricator delivered exceptional service for our hospital project. Their attention to healthcare
                compliance and patient safety was impressive. The system has been running flawlessly."
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">Dr. James Wilson</p>
                <p className="text-sm text-muted-foreground">Director, City Central Hospital</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us design and implement a fire safety solution tailored to your facility's unique requirements.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">
                Discuss Your Project
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
