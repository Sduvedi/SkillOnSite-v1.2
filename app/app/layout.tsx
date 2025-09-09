
'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K362K6HW3R"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: \`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K362K6HW3R');
            \`,
          }}
        />
        <Script
          id="chatgpt-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: \`
              window.ChatGPTAssistant = {
                openaiApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
                welcomeMessage: "Hi there! Need help with your IT setup?",
                placeholderText: "Ask a question...",
              };
              (function () {
                const script = document.createElement('script');
                script.src = "https://cdn.chatgptwidget.ai/widget.js";
                script.async = true;
                document.body.appendChild(script);
              })();
            \`,
          }}
        />
      </head>
      <body className={inter.className + " bg-gradient-to-br from-green-100 to-blue-50 text-gray-900 min-h-screen flex flex-col"}>
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
              <button
                onClick={() => window?.ChatGPTAssistant?.open?.()}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Book a Free Consultation
              </button>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-12">{children}</main>

        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SkillOnSite IT – Based in Wellington, NZ. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
