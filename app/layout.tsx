// SkillOnSite v1.2 – React/Next.js layout (App Router)
// NZ-themed layout with GPT assistant + Google Analytics

import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillOnSite IT – Trusted IT Support for Wellington Businesses",
  description:
    "Expert IT support for Wellington SMBs: Windows Server, Microsoft 365, Azure, Security, and Projects. Local. Reliable. No offshore call centres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K362K6HW3R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K362K6HW3R');
            `,
          }}
        />

        {/* SEO Meta Tags */}
        <meta name="keywords" content="Wellington IT support, Microsoft 365, Windows Server, New Zealand IT services" />
        <meta name="author" content="Shivansh Duvedi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SkillOnSite IT – Trusted Wellington IT Support" />
        <meta property="og:description" content="On-demand IT expertise for SMBs. No offshore call centres." />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://skillonsite.co.nz" />
      </head>

      <body className={inter.className + " bg-gradient-to-br from-sky-100 to-blue-50 text-gray-900 min-h-screen flex flex-col"}>
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              SkillOnSite <span className="text-gray-700">IT</span>
            </Link>
            <nav className="space-x-6 text-sm font-medium">
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Book a Free Consultation
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SkillOnSite IT – Based in Wellington, NZ. All rights reserved.
          </div>
        </footer>

        {/* Chat Widget (AI Assistant) */}
        <div id="chat-widget" className="fixed bottom-4 right-4 z-50"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ChatGPTAssistant = {
                openaiApiKey: 'sk-xxxx', // ⚠️ Use env var in production!
                welcomeMessage: "Hi there! Need help with your IT setup?",
                placeholderText: "Type your question...",
              };

              (function () {
                const script = document.createElement('script');
                script.src = "https://cdn.chatgptwidget.ai/widget.js";
                script.async = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
