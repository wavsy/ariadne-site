import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Unbounded } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/Reveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "ARIADNE: follow the thread",
    template: "%s · ARIADNE",
  },
  description:
    "A patrol drone that spots an incoming drone and, when it is guided by a fiber-optic cable, follows the cable back to where it was launched. Built by Wavsy at the European Defense Tech Hackathon, Prishtina 2026.",
  openGraph: {
    title: "ARIADNE: follow the thread",
    description:
      "A patrol drone that follows a fiber-optic drone's cable back to its launch site. Built at EDTH Prishtina 2026.",
    images: ["/film/poster.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-deep"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealScript />
      </body>
    </html>
  );
}
