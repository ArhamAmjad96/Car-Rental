"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#060606] flex items-center pt-24 pb-12 lg:py-0 overflow-hidden">
      {/* Subtle Red Ambient Glow behind image */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />

      <Container size="full" className="w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-6rem)] items-center gap-8 lg:gap-0">
          
          {/* Left Column Content (approx 40-45% desktop width = 5 cols) */}
          <div className="lg:col-span-5 z-20 flex flex-col justify-center pt-6 lg:pt-0 pr-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-red-500">
                REXX LUXURY RENTALS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.08] mb-6"
            >
              Luxury, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                Driven Differently.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-8 max-w-lg"
            >
              Premium vehicle rentals and executive mobility across Kuala Lumpur. Experience uncompromising quality, privacy, and distinction.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10"
            >
              <MagneticButton href="/fleet" variant="primary" size="lg">
                <span className="flex items-center space-x-2">
                  <span>Explore the Fleet</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton href="/contact" variant="outline" size="lg">
                <span>Enquire With REXX</span>
              </MagneticButton>
            </motion.div>

            {/* Supporting Micro Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex items-center space-x-3 text-xs text-neutral-400 pt-4 border-t border-neutral-900"
            >
              <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Luxury rentals · Executive chauffeur · Flexible enquiries</span>
            </motion.div>
          </div>

          {/* Right Column Portrait Image (approx 55-60% width = 7 cols desktop) */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] lg:h-[calc(100vh-5rem)] w-full flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full overflow-hidden"
            >
              {/* Asymmetrical Left Fade Overlay for Desktop */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#060606] via-[#060606]/70 to-transparent z-10 hidden lg:block pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060606]/80 to-transparent z-10 pointer-events-none" />

              <Image
                src="/assets/rexx/hero/signature-mercedes-hero.jpg"
                alt="REXX Signature Mercedes Luxury Vehicle Kuala Lumpur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-bottom transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>

        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-1 text-neutral-400 z-20 cursor-pointer"
        onClick={() => {
          document.getElementById("brand-statement")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
      </motion.div>
    </section>
  );
}
