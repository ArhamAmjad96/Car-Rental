import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { siteConfig } from "@/config/site";
import { MapPin, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ vehicle?: string; service?: string }>;
}) {
  const { vehicle, service } = await searchParams;

  return (
    <main className="min-h-screen bg-[#060606] pt-32 pb-24 text-white">
      <Container size="full">
        {/* Header */}
        <SectionHeading
          eyebrow="Direct Reservation"
          title="Contact & Vehicle Enquiries"
          description="Submit your rental requirements directly to REXX. We cater to executive self-drive, chauffeur requests, and airport transfers across Kuala Lumpur."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info & Details (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Operational Base Card */}
            <div className="bg-[#0D0D0D] border border-neutral-800 p-8 space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-red-500 uppercase block mb-1">
                  Operational Hub
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  Bangsar, Kuala Lumpur
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Our central base provides swift dispatch to KLCC, Mont Kiara, Damansara, Subang Airport, and KLIA Terminal 1 & 2 corridors.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 space-y-4 text-xs text-neutral-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Location</span>
                    <span className="text-neutral-400">Bangsar, Kuala Lumpur, Malaysia</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <InstagramIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Instagram</span>
                    <a
                      href={siteConfig.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:underline"
                    >
                      @rexx_luxury_rentals
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Verification</span>
                    <span className="text-neutral-400">All rentals subject to date confirmation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Policy Notice */}
            <div className="bg-[#141414] border border-neutral-800/80 p-6 text-xs text-neutral-400 space-y-2">
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider">
                Rental Confirmation Notice
              </h4>
              <p className="leading-relaxed">
                Vehicle allocation and terms are finalized upon identity verification and driver qualification checks during concierge handoff.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form (Span 8) */}
          <div className="lg:col-span-8">
            <EnquiryForm initialVehicle={vehicle} initialService={service} />
          </div>
        </div>
      </Container>
    </main>
  );
}
