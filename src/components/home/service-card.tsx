"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Shield, Sparkles, Layers, Zap, Check, ArrowUpRight } from "lucide-react";
import { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (iconName: Service["iconName"]) => {
    const iconClasses = "h-6 w-6 text-primary";
    switch (iconName) {
      case "code":
        return <Code className={iconClasses} />;
      case "cpu":
        return <Cpu className={iconClasses} />;
      case "shield":
        return <Shield className={iconClasses} />;
      case "sparkles":
        return <Sparkles className={iconClasses} />;
      case "layers":
        return <Layers className={iconClasses} />;
      case "zap":
        return <Zap className={iconClasses} />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xs backdrop-blur-sm transition-colors hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Subtle Background Glow Effect on Hover */}
      <div
        className={cn(
          "absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none",
          service.gradient
        )}
      />

      <div className="space-y-5">
        {/* Card Header: Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background/80 shadow-xs transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
            {renderIcon(service.iconName)}
          </div>

          {service.badge && (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {service.subtitle}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 border-t border-border/40 pt-4 text-xs font-medium text-foreground">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-2.5 w-2.5" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-6">
        <a
          href={service.ctaHref}
          className="inline-flex w-full items-center justify-between rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span>{service.ctaText}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
