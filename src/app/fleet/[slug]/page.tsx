import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicles } from "@/data/vehicles";
import { Container } from "@/components/shared/Container";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";

export function generateStaticParams() {
  return vehicles.map((v) => ({
    slug: v.slug,
  }));
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060606] pt-32 pb-24 text-white">
      <Container size="full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/fleet"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-red-500" />
            <span>Back to Fleet Roster</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Vehicle Image & Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[400px] sm:h-[500px] w-full bg-[#080808] border border-neutral-800 overflow-hidden p-3 flex items-center justify-center">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} - REXX Luxury Car Rental`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-red-500 uppercase border border-neutral-800">
                  {vehicle.categoryLabel}
                </span>
              </div>
            </div>

            {/* Sub-gallery Grid */}
            {vehicle.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {vehicle.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-32 bg-[#080808] border border-neutral-800 overflow-hidden p-2 flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`${vehicle.name} gallery view ${idx + 1}`}
                      fill
                      sizes="30vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Info & Neutral Specs */}
          <div className="lg:col-span-5 space-y-6 bg-[#0D0D0D] border border-neutral-800 p-8">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{vehicle.specs.location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black font-heading text-white">
                {vehicle.name}
              </h1>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Specifications Card */}
            <div className="bg-[#141414] border border-neutral-800/80 p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300">
                Vehicle Overview
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-neutral-500 block">Seating Capacity</span>
                  <span className="text-white font-semibold">{vehicle.specs.seating}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Transmission</span>
                  <span className="text-white font-semibold">{vehicle.specs.transmission}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Fuel Classification</span>
                  <span className="text-white font-semibold">{vehicle.specs.fuelType}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Availability</span>
                  <span className="text-red-400 font-semibold">Subject to confirmation</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3">
                Vehicle Highlights
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {vehicle.highlights.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <a
                href="#enquiry-form"
                className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-widest block transition-colors border border-red-500/40"
              >
                Request Availability For This Vehicle
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Reservation Form Section */}
        <div id="enquiry-form" className="pt-8">
          <EnquiryForm initialVehicle={vehicle.name} />
        </div>
      </Container>
    </main>
  );
}
