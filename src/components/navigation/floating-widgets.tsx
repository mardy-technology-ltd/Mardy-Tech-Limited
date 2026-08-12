"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWidgets() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const rafId = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;

        if (totalHeight > 0) {
          const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
          setScrollProgress(progress);
        }

        if (currentScroll > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circular progress math
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-none select-none">
      {/* 1. Tap-to-Top Button with Circular Progress Indicator (UPORE) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            aria-label="Scroll back to top of page"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-110 active:scale-95 pointer-events-auto focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* SVG Circular Progress Bar */}
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
              {/* Background Circle Trail */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-muted/40"
                strokeWidth="3"
                fill="none"
              />
              {/* Dynamic Scroll Progress Circle */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-primary transition-[stroke-dashoffset] duration-150 ease-out"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                }}
              />
            </svg>

            {/* Upward Arrow Icon */}
            <ArrowUp className="h-5 w-5 text-foreground transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Floating WhatsApp Button (NICHE) */}
      <div className="relative flex items-center pointer-events-auto">
        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 whitespace-nowrap rounded-xl border border-border/80 bg-background/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md"
            >
              Chat with us on WhatsApp 👋
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Mardy Tech Limited on WhatsApp"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          {/* Outer Pulsing Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 opacity-75 animate-ping pointer-events-none" />

          {/* White WhatsApp SVG Icon */}
          <svg className="h-7 w-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
