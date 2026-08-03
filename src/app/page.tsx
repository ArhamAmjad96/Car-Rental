import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedFleet } from "@/components/home/FeaturedFleet";
import { SignatureMercedes } from "@/components/home/SignatureMercedes";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FleetShowcase } from "@/components/home/FleetShowcase";
import { InteriorExperience } from "@/components/home/InteriorExperience";
import { BookingSteps } from "@/components/home/BookingSteps";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="w-full bg-[#060606] text-white selection:bg-red-600 selection:text-white">
      <HeroSection />
      <BrandStatement />
      <FeaturedFleet />
      <SignatureMercedes />
      <ServicesSection />
      <FleetShowcase />
      <InteriorExperience />
      <BookingSteps />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
