import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ProjectsCarousel } from "@/components/home/projects-carousel"
import { TrustedClients } from "@/components/home/trusted-clients"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ProjectsCarousel />
        <TrustedClients />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
