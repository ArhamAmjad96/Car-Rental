"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Vehicle } from "@/data/vehicles";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FleetCardProps {
  vehicle: Vehicle;
  aspectRatio?: "portrait" | "landscape" | "square" | "tall";
  className?: string;
  imagePosition?: string;
}

export function FleetCard({
  vehicle,
  aspectRatio = "portrait",
  className,
  imagePosition = "object-center",
}: FleetCardProps) {
  const aspectClasses = {
    portrait: "aspect-[4/3] sm:aspect-[3/4]",
    landscape: "aspect-[16/10]",
    square: "aspect-square",
    tall: "aspect-[4/3] sm:aspect-[3/5]",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative bg-[#0D0D0D] border border-neutral-800/80 overflow-hidden flex flex-col justify-between rounded-none",
        className
      )}
    >
      {/* Image Container with Subtle Bottom Gradient Only */}
      <div className={cn("relative w-full overflow-hidden bg-neutral-950", aspectClasses[aspectRatio])}>
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} - REXX Luxury Rental Kuala Lumpur`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover group-hover:scale-105 transition-transform duration-700 ease-out",
            imagePosition
          )}
        />

        {/* Top Vignette for Category & Location Contrast */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10" />

        {/* Minimal Bottom Fade (Does NOT cover the car bumper) */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none z-10" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-red-500 border border-neutral-800">
            {vehicle.categoryLabel}
          </span>
        </div>

        {/* Location Badge */}
        <div className="absolute top-3 right-3 z-20 flex items-center space-x-1 text-[10px] font-medium text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-800">
          <MapPin className="w-3 h-3 text-red-500" />
          <span>{vehicle.specs.location}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed line-clamp-2">
            {vehicle.tagline}
          </p>
        </div>

        {/* Specifications & Actions Container */}
        <div className="space-y-3 pt-3 border-t border-neutral-800/80">
          {/* Neutral Specs Line */}
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>{vehicle.specs.seating}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>{vehicle.specs.transmission}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="text-neutral-200 font-semibold">Available</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href={`/fleet/${vehicle.slug}`}
              className="py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-center text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-700/60 flex items-center justify-center space-x-1"
            >
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
              className="py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center border border-red-500/40"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
