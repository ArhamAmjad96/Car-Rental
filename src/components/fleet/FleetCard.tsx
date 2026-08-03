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
  className?: string;
  imagePosition?: string;
  aspectRatio?: string;
}

export function FleetCard({
  vehicle,
  className,
  imagePosition,
}: FleetCardProps) {
  const activePosition = vehicle.imagePosition || imagePosition || "object-center";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative bg-[#0D0D0D] border border-neutral-800 flex flex-col justify-between h-full overflow-hidden rounded-none shadow-xl",
        className
      )}
    >
      {/* Top Meta Bar */}
      <div className="bg-[#141414] px-6 py-3.5 border-b border-neutral-800 flex items-center justify-between z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-500">
          {vehicle.categoryLabel}
        </span>
        <div className="flex items-center space-x-1 text-[10px] font-medium text-neutral-400">
          <MapPin className="w-3 h-3 text-red-500" />
          <span>{vehicle.specs.location}</span>
        </div>
      </div>

      {/* Image Container — Perfectly Centered on the Vehicle */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] bg-[#080808] overflow-hidden flex items-center justify-center">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} - REXX Luxury Rental Kuala Lumpur`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            "object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0",
            activePosition
          )}
          priority={false}
        />

        {/* Minimal Bottom Vignette */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none z-10" />
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
        <div>
          <h3 className="text-2xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed line-clamp-2">
            {vehicle.tagline}
          </p>
        </div>

        {/* Specifications & Actions Container */}
        <div className="space-y-4 pt-4 border-t border-neutral-800/80">
          {/* Neutral Specs Line */}
          <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
            <span>{vehicle.specs.seating}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span>{vehicle.specs.transmission}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span className="text-neutral-200 font-semibold">Available</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              href={`/fleet/${vehicle.slug}`}
              className="py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-center text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-700/60 flex items-center justify-center space-x-1.5"
            >
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>

            <Link
              href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
              className="py-3 px-4 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center border border-red-500/40"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
