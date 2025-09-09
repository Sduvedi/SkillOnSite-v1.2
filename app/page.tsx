"use client"
import ContactForm from "../components/ContactForm"

const BOOKING_LINK = process.env.NEXT_PUBLIC_BOOKING_LINK || "#"

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-transparent py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">Enterprise IT Expertise for Wellington Small Businesses</h1>
          <p className="mt-3 text-lg text-slate-700 max-w-2xl">We help local businesses manage Windows servers, Microsoft 365, and cloud systemsâ€”without the cost of a full-time IT team.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a className="btn" href="#book">Book Free Consultation</a>
            <a className="btn-secondary" href="#pricing">See Services &amp; Pricing</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-sub">Fast, reliable IT for Wellington SMBs. On-site or remote.</p>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card">
              <div className="text-slate-500">ðŸ–¥ Windows &amp; Servers</div>
              <h3 className="font-semibold mt-1">Server Care &amp; AD</h3>
              <p className="text-slate-600">Patching, upgrades, Active Directory, disaster recovery planning, monitoring.</p>
            </div>
            <div className="card">
              <div className="text-slate-500">â˜ Microsoft 365 &amp; Cloud</div>
              <h3 className="font-semibold mt-1">M365 &amp; Azure</h3>
              <p className="text-slate-600">Teams, SharePoint, Exchange Online, Intune, Azure cost optimisation &amp; identity.</p>
            </div>
            <div className="card">
              <div className="text-slate-500">ðŸ” Security &amp; Compliance</div>
              <h3 className="font-semibold mt-1">Security Hardening</h3>
              <p className="text-slate-600">Backups, MFA, conditional access, audit trails, DR readiness &amp; reporting.</p>
            </div>
            <div className="card">
              <div className="text-slate-500">âš¡ On-Demand Support</div>
              <h3 className="font-semibold mt-1">Ad-hoc &amp; Projects</h3>
              <p className="text-slate-600">Remote troubleshooting, urgent incidents, and planned migrations/upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-14 bg-slate-50">
        <div className="container">
          <h2 className="section-title">Why Wellington Businesses Trust Us</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card"><h3 className="font-semibold">Enterprise Experience</h3><p className="text-slate-600">7+ years supporting complex environments (Datacom, NZBS). Senior-level skills without the overhead.</p></div>
            <div className="card"><h3 className="font-semibold">Local &amp; Responsive</h3><p className="text-slate-600">No overseas call centres. Wellington-based with fast response SLAs.</p></div>
            <div className="card"><h3 className="font-semibold">Flexible &amp; Transparent</h3><p className="text-slate-600">Clear pricing: hourly, fixed packages, or monthly supportâ€”no surprises.</p></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14">
        <div className="container">
          <h2 className="section-title">Simple, Clear Pricing</h2>
        <p className="section-sub">Start with a low-risk assessment, then choose ad-hoc help or ongoing care.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold">IT Health Check</h3>
              <p className="text-slate-600">Servers â€¢ Microsoft 365 â€¢ Backups â€¢ Security â€¢ DR readiness</p>
              <div className="text-2xl font-extrabold text-dark">$999</div>
              <p className="text-slate-600">Includes a clear report with risks, priorities, and recommended fixes.</p>
              <a className="btn" href="#book">Book Health Check</a>
            </div>
            <div className="card">
              <h3 className="font-semibold">Ad-hoc Support</h3>
              <p className="text-slate-600">Remote or onsite troubleshooting, billed hourly.</p>
              <div className="text-2xl font-extrabold text-dark">From $150/hr</div>
              <p className="text-slate-600">Great for one-off incidents or short projects.</p>
              <a className="btn-secondary" href="#contact">Request Support</a>
            </div>
            <div className="card">
              <h3 className="font-semibold">Monthly Retainer</h3>
              <p className="text-slate-600">Proactive maintenance, monitoring, and priority response.</p>
              <div className="text-2xl font-extrabold text-dark">From $1,500/mo</div>
              <p className="text-slate-600">Up to 15 hours/month. Custom SLAs available.</p>
              <a className="btn-secondary" href="#contact">Discuss a Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-16 bg-blue-50 border-y border-slate-200 text-center">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-dark mb-2">Ready for Stress-Free IT?</h2>
          <p className="text-slate-600 mb-4">Book a free consultation today and get your first IT Health Check at a discounted rate.</p>
          <a className="btn" href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14">
        <div className="container">
          <h2 className="section-title">About SkillOnSite IT</h2>
          <p className="text-slate-600 max-w-3xl">Founded by Shivansh Duvedi, a Wellington-based systems engineer with seven+ yearsâ€™ experience in Windows Server, Microsoft 365, Azure, VMware, identity, and security. We bring enterprise-grade practices to small and medium businesses.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card">
              <h3 className="font-semibold">Get in Touch</h3>
              <p className="text-slate-600">Email: info@skillonsite.com<br/>Phone: +64 27 366 8288<br/>Based in Wellington, NZ</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Quick Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
