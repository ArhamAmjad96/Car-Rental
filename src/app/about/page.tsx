import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Shield, MapPin, Award, Clock } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060606] pt-32 pb-24 text-white">
      <Container size="full">
        {/* Header */}
        <SectionHeading
          eyebrow="The REXX Story"
          title="Built Around the Journey"
          description="Established in Kuala Lumpur, REXX Luxury Car Rental offers premium and practical vehicle options for travellers, professionals and customers looking for a refined rental experience."
        />

        {/* Hero Brand Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 bg-[#0D0D0D] border border-neutral-800 p-8 sm:p-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-950/40 border border-red-800/40 rounded-full text-xs font-semibold text-red-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangsar, Kuala Lumpur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white leading-tight">
              Uncompromising Quality & Discretion
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Founded in 2019, REXX was established with a singular focus: to elevate the car rental standard in Kuala Lumpur. By combining a curated fleet of pristine sedans, SUVs, and luxury transports with attentive client coordination, we deliver mobility built around your exact itinerary.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Whether arranging a flagship Mercedes for a high-profile arrival in Bangsar or providing long-term corporate mobility for visiting executives, REXX treats every engagement with utmost attention to detail.
            </p>

            <div className="pt-4 flex items-center space-x-6 border-t border-neutral-800">
              <div>
                <span className="text-2xl font-bold font-heading text-white">2019</span>
                <span className="block text-[11px] text-neutral-400 uppercase tracking-widest">Established</span>
              </div>
              <div className="h-8 w-[1px] bg-neutral-800" />
              <div>
                <span className="text-2xl font-bold font-heading text-white">Bangsar</span>
                <span className="block text-[11px] text-neutral-400 uppercase tracking-widest">KL Operations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] bg-neutral-950 border border-neutral-800 overflow-hidden">
            <Image
              src="/assets/rexx/hero/signature-mercedes-hero.jpg"
              alt="REXX Luxury Car Rental Operations Bangsar Kuala Lumpur"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
                REXX Wordmark Brand Standard
              </span>
              <p className="text-xs text-neutral-300">
                Pristine vehicle preparation, non-smoking cabins, and verified multi-point mechanical inspection before every handoff.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-[#141414] border border-neutral-800 p-8 space-y-4">
            <Shield className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold font-heading text-white">Pristine Standards</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every vehicle undergoes meticulous aesthetic detailing and mechanical health checks prior to release.
            </p>
          </div>

          <div className="bg-[#141414] border border-neutral-800 p-8 space-y-4">
            <MapPin className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold font-heading text-white">Bangsar Focus</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Based in Bangsar, serving KLCC, Mont Kiara, Damansara, Subang, and KLIA airport corridors seamlessly.
            </p>
          </div>

          <div className="bg-[#141414] border border-neutral-800 p-8 space-y-4">
            <Award className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold font-heading text-white">Executive Chauffeur</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Trained driver options available for high-level state visits, corporate VIPs, and weddings.
            </p>
          </div>

          <div className="bg-[#141414] border border-neutral-800 p-8 space-y-4">
            <Clock className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold font-heading text-white">Flexible Enquiries</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Short-term weekend getaways to multi-month corporate fleet arrangements.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#0D0D0D] border border-neutral-800 p-12 space-y-6">
          <h2 className="text-3xl font-bold font-heading text-white">Ready for Your Next Journey?</h2>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto">
            Contact our team in Bangsar to discuss vehicle availability, dates, and bespoke arrangements.
          </p>
          <div className="pt-2">
            <MagneticButton href="/contact" variant="primary" size="lg">
              <span>Submit Availability Enquiry</span>
            </MagneticButton>
          </div>
        </div>
      </Container>
    </main>
  );
}
