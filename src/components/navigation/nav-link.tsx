"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavItem } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ item, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "relative inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg",
        isActive
          ? "text-primary font-semibold"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <span>{item.label}</span>

      {item.badge && (
        <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
          {item.badge}
        </span>
      )}

      {isActive && (
        <motion.span
          layoutId="activeNavLink"
          className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
