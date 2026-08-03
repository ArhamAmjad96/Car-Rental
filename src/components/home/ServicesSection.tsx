"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { servicesData } from "@/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#060606] relative">
      <Container size="full">
        <SectionHeading
          eyebrow="Tailored Mobility Services"
          title="Designed Around Your Journey."
          description="From short-term self-drive to dedicated chauffeur arrangements and airport transit across Kuala Lumpur."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up")}
              className="group bg-[#0D0D0D] border border-neutral-800 flex flex-col justify-between overflow-hidden hover:border-neutral-700 transition-colors duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - REXX Luxury Rental`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-red-500 uppercase border border-neutral-800">
                  {service.badge}
                </span>
              </div>

              {/* Service Info */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-neutral-800/60 text-xs text-neutral-300">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-700/60 flex items-center justify-center space-x-1.5"
                  >
                    <span>Enquire Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
