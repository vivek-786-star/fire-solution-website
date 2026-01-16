import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"

const featuredProducts = [
  {
    name: "Fire Sprinkler Systems",
    description:
      "Automatic sprinkler systems including wet pipe, dry pipe, pre-action, and deluge configurations for comprehensive fire protection.",
    image: "/fire-sprinkler-system-wet-pipe-commercial-installa.jpg",
    types: ["Wet Pipe", "Dry Pipe", "Pre-Action", "Deluge"],
  },
  {
    name: "Dry Chemical Powder",
    description:
      "High-quality fire suppression powders including ABC, BC, and DCP for various fire classes and industrial applications.",
    image: "/dry-chemical-powder-fire-extinguisher-abc-dcp.jpg",
    types: ["ABC Powder", "BC Powder", "DCP"],
  },
  {
    name: "Audible/Visual Alarms",
    description:
      "Emergency notification devices including hooters, strobe lights, and combination units for immediate fire alerts.",
    image: "/fire-alarm-hooter-strobe-light-red-emergency.jpg",
    types: ["Hooters", "Strobe Lights", "Combination Units"],
  },
  {
    name: "Manual Call Points",
    description:
      "Break glass and pull station units for manual fire alarm activation, compliant with all safety standards.",
    image: "/manual-call-point-pull-station-break-glass-fire-al.jpg",
    types: ["Break Glass", "Pull Stations", "Resettable"],
  },
  {
    name: "Fire Alarm Panels",
    description:
      "Central control units for fire detection and alarm systems, from 2-zone to addressable multi-zone configurations.",
    image: "/fire-alarm-control-panel-grey-digital-display.jpg",
    types: ["2-Zone", "4-Zone", "8-Zone", "Addressable"],
  },
  {
    name: "Fire Hose & Accessories",
    description: "High-pressure fire hoses, nozzles, couplings, and cabinets for professional firefighting operations.",
    image: "/fire-hose-reel-red-cabinet-nozzle.jpg",
    types: ["Hose Reels", "Lay Flat Hose", "Nozzles", "Couplings"],
  },
]

const productCategories = [
  {
    id: "extinguishers",
    title: "Fire Extinguishers",
    description: "Wide range of portable fire extinguishers for different fire classes and applications.",
    products: [
      {
        name: "ABC Dry Chemical Extinguisher",
        capacity: "2kg / 4kg / 6kg / 9kg",
        application: "General purpose - Class A, B, C fires",
        image: "/abc-dry-chemical-fire-extinguisher-red-portable.jpg",
      },
      {
        name: "CO2 Fire Extinguisher",
        capacity: "2kg / 4.5kg / 6.5kg",
        application: "Electrical fires & flammable liquids",
        image: "/co2-carbon-dioxide-fire-extinguisher-black.jpg",
      },
      {
        name: "Water-Based Extinguisher",
        capacity: "6L / 9L",
        application: "Class A fires - Wood, paper, textiles",
        image: "/water-fire-extinguisher-red-cylinder.jpg",
      },
      {
        name: "Foam Extinguisher",
        capacity: "6L / 9L",
        application: "Class A & B fires - Solids & liquids",
        image: "/foam-fire-extinguisher-cream-red.jpg",
      },
    ],
  },
  {
    id: "hydrants",
    title: "Hydrant Systems",
    description: "Complete hydrant systems for large-scale fire fighting in commercial and industrial buildings.",
    products: [
      {
        name: "Fire Hydrant Valve",
        capacity: "63mm / 80mm / 100mm",
        application: "Indoor & outdoor fire fighting",
        image: "/fire-hydrant-valve-brass-chrome-industrial.jpg",
      },
      {
        name: "Hose Reel System",
        capacity: "19mm x 30m",
        application: "First attack fire fighting",
        image: "/fire-hose-reel-wall-mounted-red.jpg",
      },
      {
        name: "Landing Valve",
        capacity: "63mm / 80mm",
        application: "High-rise building connections",
        image: "/fire-landing-valve-brass-outlet.jpg",
      },
      {
        name: "Fire Cabinet",
        capacity: "Single / Double door",
        application: "Hydrant & hose storage",
        image: "/fire-cabinet-red-glass-door-hose.jpg",
      },
    ],
  },
  {
    id: "detectors",
    title: "Detection Equipment",
    description: "Advanced fire detection devices for early warning and system integration.",
    products: [
      {
        name: "Photoelectric Smoke Detector",
        capacity: "Ceiling mounted",
        application: "General area detection",
        image: "/smoke-detector-white-ceiling-mounted-round.jpg",
      },
      {
        name: "Heat Detector",
        capacity: "Fixed temp / Rate-of-rise",
        application: "Kitchen, garages, workshops",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Manual Call Point",
        capacity: "Wall mounted",
        application: "Manual alarm activation",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Fire Alarm Panel",
        capacity: "2-64 zones",
        application: "Central monitoring & control",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "sprinklers",
    title: "Sprinkler Systems",
    description: "Automatic sprinkler systems for continuous fire protection in all types of buildings.",
    products: [
      {
        name: "Pendant Sprinkler Head",
        capacity: "K5.6 / K8.0",
        application: "Standard ceiling installation",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Upright Sprinkler Head",
        capacity: "K5.6 / K8.0",
        application: "Exposed pipe systems",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Concealed Sprinkler",
        capacity: "K5.6",
        application: "Decorative ceiling finish",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Alarm Valve Set",
        capacity: "3 inch / 4 inch / 6 inch",
        application: "Wet pipe system control",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]

const brands = ["Honeywell", "Tyco", "Notifier", "Siemens", "Minimax", "Viking", "Edwards", "Hochiki"]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Products</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Premium Fire Safety Equipment</h1>
              <p className="text-lg text-background/80 leading-relaxed">
                We supply high-quality fire safety equipment from globally recognized brands. All products come with
                warranty and are compliant with international standards.
              </p>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-12 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground mb-6">Authorized Dealer for Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold text-foreground/60 hover:text-foreground transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Most Popular</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Essential Fire Safety Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry-standard fire protection equipment commonly installed in corporate buildings, commercial
                spaces, and residential complexes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.name}
                  className="group bg-card border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-muted overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.types.map((type) => (
                        <span key={type} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {productCategories.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-foreground mb-2">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.products.map((product) => (
                      <Card key={product.name} className="group bg-card border-border overflow-hidden">
                        <div className="h-48 bg-background overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4 space-y-2">
                          <h3 className="font-semibold text-foreground">{product.name}</h3>
                          <p className="text-xs text-primary font-medium">{product.capacity}</p>
                          <p className="text-sm text-muted-foreground">{product.application}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Quality Assurance</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  Certified Products You Can Trust
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  All our products meet international quality standards and are tested for reliability. We provide
                  complete documentation, warranty support, and after-sales service.
                </p>
                <div className="space-y-4">
                  {[
                    "GST No: 27AHJPC2124M2ZF certified products",
                    "Fire department approved equipment",
                    "Full manufacturer warranty",
                    "Technical support & training",
                    "Spare parts availability",
                    "Installation services included",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Need Product Assistance?</h3>
                    <p className="text-sm text-muted-foreground">Our experts can help you choose the right equipment</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Not sure which products are right for your needs? Our technical team will assess your requirements and
                  recommend the best solutions within your budget.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Get Product Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Request a Product Catalog
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get our complete product catalog with detailed specifications and pricing information.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">
                Download Catalog
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
