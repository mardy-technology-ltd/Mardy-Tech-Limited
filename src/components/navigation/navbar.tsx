"use client";

import * as React from "react";
import { NavItem } from "@/types/navigation";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Design Tokens", href: "#tokens" },
  { label: "Components", href: "#components", badge: "New" },
  { label: "Documentation", href: "#docs" },
];

interface NavbarProps {
  items?: NavItem[];
  className?: string;
}

export function Navbar({ items = defaultNavItems, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set initial scroll position state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-background/80 backdrop-blur-md",
        isScrolled
          ? "border-b border-border/80 shadow-sm shadow-background/5"
          : "border-b border-border/20",
        className
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <DesktopNav items={items} />

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          <MobileNav items={items} />
        </div>
      </div>
    </header>
  );
}
