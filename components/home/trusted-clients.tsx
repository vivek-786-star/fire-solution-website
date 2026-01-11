"use client"

const clients = [
  "ADITYARAJ ROYALE",
  "ADITYARAJ BUILDTECH",
  "Adityaraj Realty",
  "Adityaraj Builders and Realtors",
  "Adityaraj Landmark",
  "AditayRaj Builder",
  "ADITYARAJ INFRA",
  "AAKURTI ENTERPRISES",
  "Ashapura Infratech",
  "DOUGLAS GUDINHO",
  "Pragati Enterprises",
  "PRAGATI PARAM REALTY LLP",
  "Shree ji Botling Co.",
  "Indain National Theatre",
  "Shivaw Auto Kia show room",
  "Zee Shaydari Andheri Society",
  "Zee Land Development Service Zee Ashtavinayak",
  "N H Kotak (HUF)",
  "H M Holdings",
  "PAVOPACK PRIVATE LIMITED",
  "M. L. Space Premises Co-Op. SOC. LTD",
  "Universal Developers",
  "Horizon Infra",
  "INT-Indian National Theatre (Aditya Brila)",
  "SAPTRISHI CLASSIC LLP",
  "SIDHIVINAYAK DEVELOPERS",
  "D.D DEZINES GROUP",
  "Konark Infra (Ganga Nivash)",
  "Konarak Land Developers",
  "Shivaay Autotrade Private Ltd",
  "Godrej & Boyce Mfg Co Ltd",
  "JUPITOR TURNKEY PROJECTS PRIVATE LIMITED",
  "RADHA SOAMI SATSANG BEAS",
  "AHLUWALIA CONTRACTS INDIA LIMITED",
  "SHREEJI REALCON",
  "SHREEJI REALTECH",
  "ACTIS TECHNOLOGIES PRIVATE LIMITED",
  "ML SPACE",
  "Viva Cosmetics Private Limited",
  "Zee Shayadri",
]

export function TrustedClients() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Clients</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We have successfully completed fire safety projects for these esteemed organizations across Mumbai and
            Maharashtra.
          </p>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-card border border-border rounded-lg shadow-sm"
              >
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid for all clients */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="px-4 py-3 bg-card border border-border rounded-lg text-center hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <span className="text-xs sm:text-sm font-medium text-foreground">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
