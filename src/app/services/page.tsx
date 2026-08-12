import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { dummyServices } from "@/data/services";
import { ServiceCard } from "@/components/home/service-card";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Services & Capabilities | Mardy Tech Limited",
  description: "Explore enterprise Next.js architecture, motion UI, security compliance, edge compute, and custom AI integration services.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-background border-b border-border/40">
          <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Enterprise Engineering & Capabilities</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground max-w-5xl mx-auto leading-[1.15]">
              High-Performance Services Engineered for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Scale & Security
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              From zero-FOUC Next.js App Router architectures to streaming AI integration, we deliver production-ready software solutions built with strict TypeScript and accessibility standards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-card-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Explore Portfolio</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Specialized Offerings
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tailored frontend & full-stack development services for modern agencies and enterprise applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {dummyServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Standards / Why Choose Us */}
        <section className="py-16 bg-muted/30 border-t border-border/40">
          <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Quality Guarantee</span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                  Strict Technical Standards Behind Every Project
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  We adhere to strict frontend architecture guidelines ensuring your code base remains modular, maintainable, and blistering fast.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Zero Flash of Unstyled Content (FOUC)</h4>
                      <p className="text-xs text-muted-foreground">Script injection and HSL CSS tokens guarantee instantaneous dark and light theme hydration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">100% WCAG & Keyboard Accessibility</h4>
                      <p className="text-xs text-muted-foreground">Full focus trapping, screen-reader friendly ARIA attributes, and visible focus indicators.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">GPU Accelerated Motion UI</h4>
                      <p className="text-xs text-muted-foreground">Hardware-optimized Framer Motion transitions running at crisp 60fps frame rates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout Card */}
              <div className="rounded-3xl border border-border bg-card p-8 shadow-xl space-y-6">
                <h3 className="text-2xl font-bold text-card-foreground">Ready to start your next build?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect with our lead architects to get a complete breakdown of scope, architecture diagrams, and cost estimations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                  >
                    Start Technical Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
