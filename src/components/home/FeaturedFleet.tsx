"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FleetCard } from "@/components/fleet/FleetCard";
import { vehicles } from "@/data/vehicles";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { ArrowRight } from "lucide-react";

export function FeaturedFleet() {
  const featuredVehicles = vehicles.filter((v) => v.featured).slice(0, 4);

  return (
    <section id="featured" className="py-24 bg-[#060606] relative">
      <Container size="full">
        <SectionHeading
          eyebrow="Curated Fleet Selection"
          title="Designed for Distinction."
          description="A handpicked fleet of executive sedans, high-performance SUVs, and luxury transports maintained to pristine standards."
        />

        {/* Uniform 2x2 Grid — Every Card is Exactly the Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="w-full">
              <FleetCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center pt-6">
          <MagneticButton href="/fleet" variant="outline" size="lg">
            <span className="flex items-center space-x-2">
              <span>Explore All Fleet Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
