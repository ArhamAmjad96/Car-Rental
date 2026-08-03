"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  size = "md",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider",
    md: "px-6 py-3.5 text-sm font-semibold tracking-wider",
    lg: "px-8 py-4 text-base font-semibold tracking-wider",
  };

  const variantClasses = {
    primary:
      "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/40 border border-red-500/30",
    secondary:
      "bg-neutral-900 hover:bg-neutral-800 text-neutral-100 border border-neutral-700/60",
    outline:
      "bg-transparent text-neutral-200 hover:text-white border border-neutral-700 hover:border-neutral-400 backdrop-blur-sm",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/60",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-none uppercase transition-colors duration-200 cursor-pointer select-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}
