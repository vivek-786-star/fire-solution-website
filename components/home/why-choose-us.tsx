import { Shield, Clock, Award, Users, ThumbsUp, Headphones } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "GST No: 27AHJPC2124M2ZF with all necessary fire department approvals and licenses.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency support and rapid response teams ready when you need them.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Two decades of expertise in fire safety system installation across residential, commercial, and industrial sectors.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained technicians and engineers dedicated to delivering excellence.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Products",
    description: "Premium fire safety equipment from globally recognized brands with warranty.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personalized customer service and dedicated account managers for every client.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Trusted by 100+ Businesses Across the State
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When it comes to fire safety, there's no room for compromise. We combine cutting-edge technology with
              experienced professionals to deliver expert fire safety installation services that protect what matters most.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/professional-fire-safety-team-engineers-with-equip.jpg" alt="Ramdas G Fabricator team" className="w-full rounded-2xl shadow-xl" />
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">A+ Rated</p>
                  <p className="text-sm text-muted-foreground">Industry Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
