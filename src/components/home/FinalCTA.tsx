"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { ArrowRight, MapPin } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#060606] overflow-hidden border-t border-neutral-900">
      {/* Background Asset with Rear Profile Focus */}
      <div className="absolute inset-0 w-full h-full opacity-35">
        <Image
          src="/assets/rexx/signature/mercedes-angle-02.jpg"
          alt="REXX Mercedes Rear Stance Taillight Accent"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Red Ambient Backdrop Glow */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[400px] bg-red-900/15 rounded-full blur-[150px] pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-red-950/40 border border-red-800/40 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
              Bangsar · Kuala Lumpur
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight leading-tight">
            Your Next Arrival <br />
            <span className="text-red-500">Starts Here.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with REXX to check current vehicles, dates and rental options across Kuala Lumpur.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <MagneticButton href="/fleet" variant="primary" size="lg">
              <span className="flex items-center space-x-2">
                <span>Explore Fleet</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </MagneticButton>

            <MagneticButton href="/contact" variant="outline" size="lg">
              <span>Submit Reservation Request</span>
            </MagneticButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
