export const metadata = {
  title: "SkillOnSite IT â€“ Enterprise IT for Wellington SMBs",
  description: "Windows, Microsoft 365, and Cloud support for Wellington businesses."
}

import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
          <div className="container flex items-center justify-between h-16">
            <div className="font-extrabold text-dark tracking-tight">SkillOnSite <span className="text-primary">IT</span></div>
            <nav className="hidden md:flex gap-5 text-slate-700">
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <Link className="btn" href="#book">Book a Free Consultation</Link>
          </div>
        </header>
        {children}
        <footer className="bg-slate-950 text-slate-200 py-10 mt-16">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="font-extrabold tracking-tight">SkillOnSite <span className="text-blue-300">IT</span></div>
              <div className="text-slate-400">Reliable IT for Wellington Businesses</div>
            </div>
            <div className="md:text-right">
              <a className="underline" href="#services">Services</a> Â· <a className="underline" href="#pricing">Pricing</a> Â· <a className="underline" href="#about">About</a> Â· <a className="underline" href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
