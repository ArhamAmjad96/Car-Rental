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

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 items-start">
          {/* Card 1 - Main Large Feature Card (Span 7) - Performance SUV */}
          {featuredVehicles[0] && (
            <div className="lg:col-span-7">
              <FleetCard
                vehicle={featuredVehicles[0]}
                aspectRatio="landscape"
                imagePosition="object-center"
              />
            </div>
          )}

          {/* Card 2 - Stacked Right Top (Span 5) - Signature Mercedes */}
          {featuredVehicles[1] && (
            <div className="lg:col-span-5">
              <FleetCard
                vehicle={featuredVehicles[1]}
                aspectRatio="landscape"
                imagePosition="object-center"
              />
            </div>
          )}

          {/* Card 3 - Executive Chauffeur (Span 5) */}
          {featuredVehicles[2] && (
            <div className="lg:col-span-5">
              <FleetCard
                vehicle={featuredVehicles[2]}
                aspectRatio="landscape"
                imagePosition="object-center"
              />
            </div>
          )}

          {/* Card 4 - Toyota Luxury MPV (Span 7) */}
          {featuredVehicles[3] && (
            <div className="lg:col-span-7">
              <FleetCard
                vehicle={featuredVehicles[3]}
                aspectRatio="landscape"
                imagePosition="object-center"
              />
            </div>
          )}
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
