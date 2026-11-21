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
    default: "ARIADNE: how do we find the operator?",
    template: "%s · ARIADNE",
  },
  description:
    "A fiber-optic drone leaves its cable on the ground, and one end of it is where it was launched. ARIADNE is a patrol drone that spots the incoming drone and follows the fresh fiber back to the launch zone. By Wavsy.",
  openGraph: {
    title: "ARIADNE: how do we find the operator?",
    description:
      "Follow the fiber. A patrol drone that traces a fiber-optic drone's cable back to where it was launched.",
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
