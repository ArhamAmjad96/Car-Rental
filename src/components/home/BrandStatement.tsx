"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { fadeIn } from "@/lib/animations";

export function BrandStatement() {
  return (
    <section id="brand-statement" className="py-24 bg-[#0D0D0D] border-y border-neutral-900 relative">
      <Container size="md">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn("up")}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
              The REXX Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            “Luxury is not merely about transportation. It is about how you arrive.”
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Established in 2019 in Bangsar, Kuala Lumpur, REXX Luxury Car Rental offers executive vehicle solutions for discerning clients, corporate guests, and visitors who expect meticulous vehicle presentation and absolute reliability.
          </p>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-neutral-800/80">
            <div>
              <div className="text-2xl font-bold font-heading text-white">2019</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Established</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">Bangsar</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Kuala Lumpur</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">Curated</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Vehicle Selection</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">Bespoke</div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Journey Terms</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
