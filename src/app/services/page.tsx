import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { servicesData } from "@/data/services";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060606] pt-32 pb-24 text-white">
      <Container size="full">
        {/* Header */}
        <SectionHeading
          eyebrow="Mobility Solutions"
          title="Executive Mobility & Rental Services"
          description="Tailored transport services across Kuala Lumpur designed around discretion, vehicle perfection, and seamless travel."
        />

        {/* Services Showcase Cards */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-[#0D0D0D] border border-neutral-800 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image (Span 6) */}
                <div
                  className={`lg:col-span-6 relative h-[350px] sm:h-[420px] w-full bg-neutral-950 border border-neutral-800 overflow-hidden ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - REXX Luxury Rental`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-red-500 uppercase border border-neutral-800">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Details (Span 6) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <h2 className="text-3xl font-black font-heading text-white">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      Service Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider">
                      Available Subject to Confirmation
                    </span>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center space-x-2 border border-red-500/40"
                    >
                      <span>Enquire This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
