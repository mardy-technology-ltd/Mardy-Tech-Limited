"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollReveal3D({ children, className }: ScrollReveal3DProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "center 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [35, 0]);

  return (
    <div ref={containerRef} className="w-full">
      <motion.div
        style={{
          opacity,
          y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`w-full ${className || ""}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
