"use client";

import * as React from "react";
import Link from "next/link";
import { NavItem } from "@/types/navigation";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact", badge: "Inquire" },
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

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-background/80 backdrop-blur-md py-3 sm:py-4",
        isScrolled
          ? "border-b border-border/80 shadow-md shadow-background/5"
          : "border-b border-border/20",
        className
      )}
    >
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Capsule */}
        <DesktopNav items={items} />

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-x-4 lg:gap-x-5">
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Drawer */}
          <MobileNav items={items} />
        </div>
      </div>
    </header>
  );
}
