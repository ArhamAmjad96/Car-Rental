"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn("up")}
      className={cn("flex flex-col max-w-3xl mb-12 lg:mb-16", alignClasses[align], className)}
    >
      {eyebrow && (
        <div className="flex items-center space-x-2 mb-3">
          <span className="h-[2px] w-6 bg-red-600 inline-block" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100 font-heading leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
