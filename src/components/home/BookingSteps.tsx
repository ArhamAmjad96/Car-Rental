"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Car, ClipboardCheck, CalendarCheck, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Car,
    title: "Select Your Vehicle",
    description: "Browse our curated fleet of executive sedans, SUVs, and luxury MPVs.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Submit Enquiry",
    description: "Provide your preferred dates, journey type, and location details via our form.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Date & Term Handoff",
    description: "Our concierge verifies fleet availability and provides explicit terms.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Seamless Arrival",
    description: "Receive your vehicle in Bangsar or delivered directly to your location.",
  },
];

export function BookingSteps() {
  return (
    <section className="py-24 bg-[#060606] relative">
      <Container size="full">
        <SectionHeading
          eyebrow="The Reservation Experience"
          title="Four Steps to Arrival."
          description="A clear, transparent process designed to make vehicle reservation friction-free."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeIn("up")}
                className="bg-[#0D0D0D] border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-red-600/50 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-heading text-red-500/80 group-hover:text-red-500 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white group-hover:border-neutral-700 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-900 text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-neutral-200">
                  REXX Protocol
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
