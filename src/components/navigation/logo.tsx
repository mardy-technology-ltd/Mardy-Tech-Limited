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
        "group flex items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl p-1 transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Mardy Tech - Back to homepage"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md shadow-primary/20 font-extrabold text-xl tracking-wider"
      >
        M
      </motion.div>
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
          Mardy Tech
        </span>
        <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
          Frontend Engine
        </span>
      </div>
    </Link>
  );
}
