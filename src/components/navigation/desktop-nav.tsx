"use client";

import { NavItem } from "@/types/navigation";
import { NavLink } from "./nav-link";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav
      className="hidden md:flex items-center gap-x-6 lg:gap-x-8 rounded-full border border-border/60 bg-background/60 px-6 py-2 shadow-xs backdrop-blur-md"
      aria-label="Main Navigation"
    >
      {items.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
}
