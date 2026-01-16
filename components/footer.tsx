import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Fire Fighting Equipment Installation", href: "/services#equipment-installation" },
    { name: "Fire Extinguisher Refilling", href: "/services#extinguisher-refilling" },
    { name: "Hydrant System Installation", href: "/services#hydrant-installation" },
    { name: "Sprinkler & Alarm System Installation", href: "/services#sprinkler-alarm-installation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Compliance", href: "/compliance" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Fire Extinguishers", href: "/products#extinguishers" },
    { name: "Hydrant Systems", href: "/products#hydrants" },
    { name: "Smoke Detectors", href: "/products#detectors" },
    { name: "Sprinkler Systems", href: "/products#sprinklers" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-removebg.png" alt="Ramdas G Fabricator" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Ramdas G</span>
                <span className="text-xs text-background/70 leading-tight">Fabricator</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted partner for comprehensive fire safety solutions. GST No: 27AHJPC2124M2ZF with 20+ years of excellence.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+918080848849"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                8080848849 / 8250478736
              </a>
              <a
                href="mailto:ramdasgfabricator@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                ramdasgfabricator@gmail.com
              </a>
              <span className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  5, Tank Road, Satyavijay Society, Miniland, Panchsheel Nagar, Bhandup West, Mumbai, Maharashtra 400078
                </span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-xs text-background/60">
              <span className="px-2 py-1 bg-background/10 rounded">GST No: 27AHJPC2124M2ZF</span>
              <span className="px-2 py-1 bg-background/10 rounded">Fire Dept. Approved</span>
              <span className="px-2 py-1 bg-background/10 rounded">Licensed & Insured</span>
            </div>
            <p className="text-xs text-background/60">
              © {new Date().getFullYear()} Ramdas G Fabricator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
