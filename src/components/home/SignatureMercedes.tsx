"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Eye, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryTab {
  id: "exterior" | "rear" | "interior";
  label: string;
  angleLabel: string;
  image: string;
  description: string;
}

const signatureTabs: GalleryTab[] = [
  {
    id: "exterior",
    label: "Exterior Front",
    angleLabel: "Front Angle Profile · Signature LED Lights",
    image: "/assets/rexx/signature/mercedes-angle-03.jpg",
    description: "Sleek aerodynamic silhouette paired with iconic Mercedes front lighting signature.",
  },
  {
    id: "rear",
    label: "Rear Profile",
    angleLabel: "Rear Stance · Tail Lamp Geometry",
    image: "/assets/rexx/signature/mercedes-angle-02.jpg",
    description: "Commanding rear presence featuring dual tailpipes and polished chrome accents.",
  },
  {
    id: "interior",
    label: "Executive Interior",
    angleLabel: "Cabin Lounge · Ambient Lighting",
    image: "/assets/rexx/signature/mercedes-interior.jpg",
    description: "Executive leather cockpit with ambient illumination and active acoustic insulation.",
  },
];

export function SignatureMercedes() {
  const [activeTabId, setActiveTabId] = useState<"exterior" | "rear" | "interior">("exterior");
  const activeTab = signatureTabs.find((t) => t.id === activeTabId) || signatureTabs[0];

  return (
    <section className="py-24 bg-[#0D0D0D] border-t border-neutral-900 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

      <Container size="full">
        <SectionHeading
          eyebrow="Flagship Editorial Showcase"
          title="The REXX Signature"
          description="A refined Mercedes experience created for executive journeys, important occasions and memorable arrivals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Display (Span 8 Desktop) */}
          <div className="lg:col-span-8 relative">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full bg-[#080808] overflow-hidden border border-neutral-800 p-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeTab.image}
                    alt={`REXX Signature Mercedes ${activeTab.label}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Angle Label Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-md px-4 py-2 border border-neutral-800">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                    {activeTab.angleLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Control Panel (Span 4 Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-[#141414] p-8 border border-neutral-800 h-full">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-red-500 uppercase block mb-2">
                Interactive Angles
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Signature Perspective
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {activeTab.description}
              </p>

              {/* Angle Selector Tabs */}
              <div className="space-y-3">
                {signatureTabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={cn(
                        "w-full text-left p-4 transition-all duration-300 flex items-center justify-between border",
                        isActive
                          ? "bg-neutral-900 border-red-600/60 text-white shadow-md shadow-red-950/20"
                          : "bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full",
                            isActive ? "bg-red-500" : "bg-neutral-700"
                          )}
                        />
                        <span className="text-sm font-semibold tracking-wide uppercase">
                          {tab.label}
                        </span>
                      </div>
                      <Eye className={cn("w-4 h-4", isActive ? "text-red-500" : "text-neutral-600")} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-neutral-800 space-y-4">
              <Link
                href="/contact?vehicle=Signature%20Mercedes%20Sedan"
                className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white text-center text-xs font-bold uppercase tracking-widest block transition-colors border border-red-500/40"
              >
                Request This Mercedes
              </Link>
              <div className="flex items-center space-x-2 text-[11px] text-neutral-400 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>Bangsar KL · Subject to date confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
