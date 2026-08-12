"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Code2, ShieldCheck } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-background text-foreground">
      {/* Abstract Background SVG Pattern & Glow Blobs (Non-blocking GPU layers) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        {/* Animated Radial Glow Blob 1 */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] will-change-transform"
        />

        {/* Animated Radial Glow Blob 2 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[130px] will-change-transform"
        />

        {/* SVG Grid Overlay Pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.07] stroke-foreground"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Top Pill Badge */}
          <motion.div variants={itemVariants} className="will-change-transform will-change-opacity">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary shadow-xs backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse text-primary" />
              <span>Next-Gen Enterprise Frontend Engine</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </motion.div>

          {/* High-Fidelity Typography Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] text-foreground will-change-transform will-change-opacity"
          >
            Architecting{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Ultra-Fast & Accessible
            </span>{" "}
            Web Apps
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal will-change-transform will-change-opacity"
          >
            Zero-FOUC light and dark theme engines, HSL design token pipelines, atomic component architectures, and 60fps Framer Motion interactions.
          </motion.p>

          {/* Sequential CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 will-change-transform will-change-opacity"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card px-7 py-3.5 text-sm sm:text-base font-semibold text-card-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span>View Tech Specs</span>
            </motion.a>
          </motion.div>

          {/* Quick Metrics Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-border/40 w-full max-w-2xl text-left will-change-transform will-change-opacity"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">TypeScript Strictly Typed</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">0 ms</p>
                <p className="text-xs text-muted-foreground">Zero FOUC & Shift</p>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">60 FPS</p>
                <p className="text-xs text-muted-foreground">GPU Accelerated Motion</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
