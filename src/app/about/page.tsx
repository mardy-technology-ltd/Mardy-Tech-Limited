import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Shield, Award, Users, Code2 } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "About Us | Mardy Tech Limited",
  description: "Learn about Mardy Tech Limited, our engineering philosophy, mission, and team.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>About Mardy Tech Limited</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Architecting the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Web Performance
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Mardy Tech Limited is a specialized software agency focused on Next.js 14+ enterprise web applications, HSL design token systems, and zero-FOUC theme architectures.
          </p>
        </section>

        {/* Mission Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2">
            <h3 className="text-3xl font-extrabold text-primary">50+</h3>
            <p className="text-sm font-medium text-foreground">Enterprise Projects Delivered</p>
            <p className="text-xs text-muted-foreground">High-frequency trading dashboards, AI tools & SaaS engines.</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2">
            <h3 className="text-3xl font-extrabold text-primary">0 ms</h3>
            <p className="text-sm font-medium text-foreground">Zero FOUC & Layout Shift</p>
            <p className="text-xs text-muted-foreground">Flawless dark/light mode hydration across all devices.</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2">
            <h3 className="text-3xl font-extrabold text-primary">100%</h3>
            <p className="text-sm font-medium text-foreground">TypeScript & WCAG Compliant</p>
            <p className="text-xs text-muted-foreground">Strict type safety and full keyboard accessibility.</p>
          </div>
        </section>

        <section className="text-center pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            <span>Get in Touch With Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
