"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl p-1 transition-opacity hover:opacity-95 select-none",
        className
      )}
      aria-label="Mardy Tech Limited - Back to homepage"
    >
      {/* 3D Isometric Cube SVG Logo with Interactive Motion Hover */}
      <motion.div
        whileHover={{ scale: 1.08, rotateY: 15, rotateX: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative flex items-center justify-center shrink-0 perspective-500"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 drop-shadow-md"
        >
          <defs>
            {/* Top Face Gradient (Bright Cyan to Electric Teal) */}
            <linearGradient id="cube-top" x1="8" y1="4" x2="40" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Left Face Gradient (Royal Indigo to Deep Slate) */}
            <linearGradient id="cube-left" x1="8" y1="13" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#312E81" />
            </linearGradient>

            {/* Right Face Gradient (Electric Teal to Dark Slate) */}
            <linearGradient id="cube-right" x1="24" y1="13" x2="40" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* M Symbol Glow Gradient */}
            <linearGradient id="m-glow" x1="14" y1="18" x2="34" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A5F3FC" />
            </linearGradient>
          </defs>

          {/* Top Face */}
          <polygon points="24,4 40,13 24,22 8,13" fill="url(#cube-top)" />

          {/* Left Face */}
          <polygon points="8,13 24,22 24,42 8,33" fill="url(#cube-left)" />

          {/* Right Face */}
          <polygon points="24,22 40,13 40,33 24,42" fill="url(#cube-right)" />

          {/* Top Edge Specular Highlights */}
          <polyline points="8,13 24,4 40,13" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" fill="none" />
          <polyline points="24,4 24,22" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />

          {/* Embossed 3D Letter 'M' Symbol */}
          <path
            d="M 14 31 L 14 19 L 24 25 L 34 19 L 34 31 M 24 25 L 24 39"
            stroke="url(#m-glow)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Brand Title & Updated Slogan */}
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
          Mardy Tech <span className="text-primary font-normal">Limited</span>
        </span>
        <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mt-1">
          DIGITAL PRODUCT STUDIO
        </span>
      </div>
    </Link>
  );
}
