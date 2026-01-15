"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Shield } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Compliance", href: "/compliance" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Phone className="h-4 w-4" />
          <span>24/7 Emergency Support:</span>
          <a href="tel:+918080848849" className="underline font-bold">
            8080848849
          </a>
          <span>/</span>
          <a href="tel:+918250478736" className="underline font-bold">
            8250478736
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-removebg.png" alt="FireGuard Pro Solutions" width={40} height={40} />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">FireGuard</span>
              <span className="text-xs text-muted-foreground leading-tight">Pro Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                <Shield className="mr-2 h-4 w-4" />
                Get Free Quote
              </Link>
            </Button>
            <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
