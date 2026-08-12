import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Award, Zap, Code2 } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "About Us — Mardy Tech Limited | Digital Product Studio",
  description: "Learn about Mardy Tech Limited, our engineering philosophy, mission, values, and client guarantee.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1 max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>About Mardy Tech Limited</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Building Digital Products That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Drive Real Growth
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Mardy Tech Limited is a premier digital product studio & software engineering firm. We bridge technical innovation and business strategy to deliver high-performance web applications, mobile platforms, and enterprise AI workflows.
          </p>
        </section>

        {/* Mission Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2 shadow-xs">
            <h3 className="text-3xl font-extrabold text-primary font-mono">100+</h3>
            <p className="text-sm font-bold text-foreground">Products Delivered</p>
            <p className="text-xs text-muted-foreground">High-converting web platforms, mobile apps, and SaaS systems.</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2 shadow-xs">
            <h3 className="text-3xl font-extrabold text-primary font-mono">99.9%</h3>
            <p className="text-sm font-bold text-foreground">System Uptime SLA</p>
            <p className="text-xs text-muted-foreground">Reliable cloud architecture and automated CI/CD deployment pipelines.</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 text-center space-y-2 shadow-xs">
            <h3 className="text-3xl font-extrabold text-primary font-mono">100%</h3>
            <p className="text-sm font-bold text-foreground">Client Satisfaction</p>
            <p className="text-xs text-muted-foreground">Strict TypeScript standards and full WCAG accessibility compliance.</p>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8 space-y-4 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Blistering Performance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every millisecond counts. We engineer applications with Server Components, optimized image pipelines, and minimal bundle sizes to deliver instant page loads.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-8 space-y-4 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We prioritize data privacy and security. From encrypted database architectures to secure OAuth2 authentication, your platform remains protected against vulnerabilities.
            </p>
          </div>
        </section>

        <section className="text-center pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            <span>Start Technical Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
