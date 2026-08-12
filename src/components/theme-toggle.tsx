"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration layout shifts and mismatches
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme || theme) === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme (loading)"
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-background p-2 text-muted-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        disabled
      >
        <span className="h-5 w-5 rounded-full bg-muted-foreground/20 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/80 p-2 text-foreground shadow-xs backdrop-blur-md transition-colors hover:bg-accent/10 hover:text-accent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95",
        className
      )}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isDark ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="overflow-visible"
      >
        <mask id="theme-moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            initial={false}
            animate={{
              cx: isDark ? 16 : 28,
              cy: isDark ? 7 : 0,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            r="6"
            fill="black"
          />
        </mask>

        {/* Center Sun / Crescent Moon Body */}
        <motion.circle
          cx="12"
          cy="12"
          initial={false}
          animate={{
            r: isDark ? 8 : 5,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          fill="currentColor"
          mask="url(#theme-moon-mask)"
        />

        {/* Sun Rays */}
        <motion.g
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          style={{ transformOrigin: "12px 12px" }}
          stroke="currentColor"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
}
