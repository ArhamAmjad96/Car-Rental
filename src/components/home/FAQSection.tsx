"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqsData } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-t border-neutral-900 relative">
      <Container size="md">
        <SectionHeading
          eyebrow="Questions & Clarity"
          title="Frequently Asked Questions"
          description="Everything you need to know regarding vehicle reservation and executive mobility with REXX."
          align="center"
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "bg-[#141414] border transition-colors duration-300 overflow-hidden",
                  isOpen ? "border-red-600/50" : "border-neutral-800 hover:border-neutral-700"
                )}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "p-1.5 rounded-full border transition-colors flex-shrink-0",
                      isOpen
                        ? "bg-red-600 border-red-500 text-white"
                        : "bg-neutral-900 border-neutral-800 text-neutral-400"
                    )}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60 mt-2">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
