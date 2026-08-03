import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0): Variants => ({
  hidden: {
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay,
      duration: 0.6,
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const imageZoom: Variants = {
  hidden: { scale: 1.08, opacity: 0.9 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
