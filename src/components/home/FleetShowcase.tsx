"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { vehicles } from "@/data/vehicles";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function FleetShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-neutral-900 relative overflow-hidden">
      <Container size="full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Full Fleet Editorial Showcase"
            title="Complete Vehicle Roster"
            description="Explore our complete roster of executive sedans, high-performance SUVs, and luxury transports across Kuala Lumpur."
            className="mb-0"
          />

          {/* Desktop Carousel Controls */}
          <div className="hidden md:flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-8 pt-2 snap-x snap-mandatory"
        >
          {vehicles.map((v, index) => {
            const isFeaturedLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={v.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`snap-start flex-shrink-0 bg-[#141414] border border-neutral-800 flex flex-col justify-between overflow-hidden group ${
                  isFeaturedLarge ? "w-[340px] sm:w-[480px]" : "w-[290px] sm:w-[360px]"
                }`}
              >
                {/* Visual Area with object-contain */}
                <div
                  className={`relative w-full bg-[#080808] p-3 flex items-center justify-center ${
                    isFeaturedLarge ? "h-[300px] sm:h-[360px]" : "h-[260px] sm:h-[300px]"
                  }`}
                >
                  <Image
                    src={v.image}
                    alt={`${v.name} - REXX Luxury Rental`}
                    fill
                    sizes="(max-width: 768px) 300px, 480px"
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-red-500 uppercase border border-neutral-800 z-10">
                    {v.categoryLabel}
                  </span>

                  <div className="absolute top-4 right-4 flex items-center space-x-1 text-[10px] text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-800 z-10">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>{v.specs.location}</span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {v.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <span>{v.specs.seating}</span>
                    <span>{v.specs.transmission}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <Link
                      href={`/fleet/${v.slug}`}
                      className="py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-center text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-700/60 flex items-center justify-center space-x-1"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    </Link>
                    <Link
                      href={`/contact?vehicle=${encodeURIComponent(v.name)}`}
                      className="py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center"
                    >
                      Request
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-8 text-center">
          <MagneticButton href="/fleet" variant="outline" size="md">
            <span>Explore Complete Fleet Page</span>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
