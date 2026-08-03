"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function InteriorExperience() {
  return (
    <section className="relative w-full h-[650px] sm:h-[750px] bg-[#060606] flex items-center overflow-hidden border-b border-neutral-900">
      {/* Background Image with Slow Motion Zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/assets/rexx/signature/mercedes-interior.jpg"
          alt="REXX Executive Mercedes Interior Experience Kuala Lumpur"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </motion.div>

      {/* Ambient Red Glow Filter */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <Container size="full" className="relative z-10">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="h-[2px] w-8 bg-red-600" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-500">
              The Cabin Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-tight"
          >
            Comfort Beyond <br />
            <span className="text-red-500">the Arrival.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed"
          >
            Refined interiors, executive presentation and an experience designed around the journey. Every vehicle in the REXX fleet is meticulously prepared before handoff.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4"
          >
            <MagneticButton href="/fleet" variant="primary" size="lg">
              <span>Explore Fleet Cabin Comforts</span>
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
