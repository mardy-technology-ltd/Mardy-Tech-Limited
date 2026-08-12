"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Sparkles } from "lucide-react";
import { dummyServices } from "@/data/services";
import { ServiceCard } from "./service-card";
import { ServiceCardSkeleton } from "./service-card-skeleton";

export function ServicesSection() {
  const [isLoading, setIsLoading] = React.useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-24 bg-background text-foreground border-t border-border/40">
      {/* Ambient Background Glows for Widescreen Engagement */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        <div className="absolute top-1/4 -left-48 h-[700px] w-[700px] rounded-full bg-purple-500/12 filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 -right-48 h-[700px] w-[700px] rounded-full bg-teal-500/12 filter blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Enterprise Services & Capabilities</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Built for Speed, Scale &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Accessibility
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore our core technical services engineered with Next.js 14+ App Router, HSL color tokens, and 60fps interaction performance.
            </p>
          </div>

          {/* Interactive Toggle for Testing Shimmer Loading Skeletons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={simulateLoading}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 text-primary ${isLoading ? "animate-spin" : ""}`} />
              <span>{isLoading ? "Fetching Data..." : "Test Shimmer Skeleton"}</span>
            </button>
          </div>
        </div>

        {/* Services Responsive Grid with Widescreen Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            : dummyServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
        </motion.div>
      </div>
    </section>
  );
}
