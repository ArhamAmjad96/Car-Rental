"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FleetCard } from "@/components/fleet/FleetCard";
import { vehicles } from "@/data/vehicles";
import { cn } from "@/lib/utils";

const categories = ["All", "Performance", "Executive Sedan", "Chauffeur", "Executive Transport"];

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVehicles =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#060606] pt-32 pb-24 text-white">
      <Container size="full">
        {/* Header */}
        <SectionHeading
          eyebrow="The REXX Fleet Roster"
          title="Curated Vehicles for Kuala Lumpur"
          description="Explore our handpicked collection of flagship sedans, high-performance SUVs, and executive transports. Every vehicle is maintained to pristine standards."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-neutral-900 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border",
                  isActive
                    ? "bg-red-600 border-red-500 text-white shadow-md shadow-red-950/40"
                    : "bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} aspectRatio="portrait" />
          ))}
        </div>
      </Container>
    </main>
  );
}
