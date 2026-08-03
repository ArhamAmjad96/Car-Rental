"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Vehicle } from "@/data/vehicles";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FleetCardProps {
  vehicle: Vehicle;
  aspectRatio?: "portrait" | "landscape" | "square" | "tall";
  className?: string;
}

export function FleetCard({ vehicle, aspectRatio = "portrait", className }: FleetCardProps) {
  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/10]",
    square: "aspect-square",
    tall: "aspect-[3/5]",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative bg-[#0D0D0D] border border-neutral-800/80 overflow-hidden flex flex-col justify-between",
        className
      )}
    >
      {/* Top Image Container */}
      <div className={cn("relative w-full overflow-hidden bg-neutral-950", aspectClasses[aspectRatio])}>
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} - REXX Luxury Rental Kuala Lumpur`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-red-500 border border-neutral-800">
            {vehicle.categoryLabel}
          </span>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 text-[10px] font-medium text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-800">
          <MapPin className="w-3 h-3 text-red-500" />
          <span>{vehicle.specs.location}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
            {vehicle.tagline}
          </p>
        </div>

        {/* Neutral Specs Line */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-800/60">
          <span>{vehicle.specs.seating}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
          <span>{vehicle.specs.transmission}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-700" />
          <span className="text-neutral-300 font-medium">Available</span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link
            href={`/fleet/${vehicle.slug}`}
            className="py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-center text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-700/60 flex items-center justify-center space-x-1"
          >
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </Link>

          <Link
            href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
            className="py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center"
          >
            Request
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
