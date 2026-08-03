import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.meta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: "https://rexx-luxury-rentals.com",
    siteName: siteConfig.name,
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060606] text-[#F4F4F4] font-body selection:bg-red-600 selection:text-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
