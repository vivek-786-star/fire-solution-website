"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Metro Corporate Tower",
    location: "Downtown Metro City",
    type: "Commercial",
    description: "Complete fire detection and suppression system installation for a 40-story corporate building.",
    image: "/modern-corporate-tower-building-fire-safety-instal.jpg",
  },
  {
    id: 2,
    title: "Sunrise Manufacturing Plant",
    location: "Industrial District",
    type: "Industrial",
    description: "Specialized foam suppression and hydrant system for a large-scale manufacturing facility.",
    image: "/industrial-manufacturing-plant-fire-safety-system.jpg",
  },
  {
    id: 3,
    title: "Grand Hotel & Resort",
    location: "Coastal City",
    type: "Hospitality",
    description: "Comprehensive fire safety solution including sprinklers, alarms, and emergency evacuation systems.",
    image: "/luxury-hotel-resort-fire-safety-sprinkler-system.jpg",
  },
  {
    id: 4,
    title: "City Central Hospital",
    location: "Health District",
    type: "Healthcare",
    description:
      "Life-safety systems integration with advanced detection and suppression for critical healthcare facility.",
    image: "/hospital-building-fire-safety-medical-facility.jpg",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Successful Installations</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const project = projects[(currentIndex + offset) % projects.length]
            return (
              <Card key={`${project.id}-${offset}`} className="group overflow-hidden bg-card border-border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
