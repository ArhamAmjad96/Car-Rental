"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/config/navigation";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-nav py-3 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        )}
      >
        <Container size="full" className="flex items-center justify-between">
          {/* Text Wordmark Logo */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <div className="flex items-center space-x-1.5">
              <span className="text-2xl sm:text-3xl font-black font-heading tracking-[0.2em] text-white group-hover:text-red-500 transition-colors">
                REXX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            </div>
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-neutral-400 -mt-1 group-hover:text-neutral-200 transition-colors">
              Car Rental · Kuala Lumpur
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wider uppercase transition-colors py-1",
                    isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-neutral-100"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-widest uppercase transition-colors border border-red-500/40"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-bold font-heading tracking-wide uppercase transition-colors flex items-center justify-between border-b border-neutral-900 pb-3",
                      isActive ? "text-red-500" : "text-neutral-300 hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-red-600" />}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-center text-sm font-bold tracking-widest uppercase block border border-red-500/40"
              >
                Request Availability
              </Link>
              <p className="text-center text-xs text-neutral-500">
                Bangsar, Kuala Lumpur · REXX Luxury Car Rental
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
