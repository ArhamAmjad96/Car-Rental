"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  el?: keyof React.JSX.IntrinsicElements;
}

export function AnimatedText({
  text,
  className,
  once = true,
  el: Wrapper = "h1",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Wrapper className={cn("overflow-hidden flex flex-wrap", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
