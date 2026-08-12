"use client";

import { NavItem } from "@/types/navigation";
import { NavLink } from "./nav-link";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
      {items.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
}
