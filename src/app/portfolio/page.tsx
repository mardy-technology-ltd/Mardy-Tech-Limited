import type { Metadata } from "next";
import Link from "next/link";
import { FolderKanban, ArrowRight } from "lucide-react";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Agency Portfolio & Case Studies | Mardy Tech Limited",
  description: "Explore our showcase of real-world enterprise Next.js applications, fintech dashboards, AI platforms, and e-commerce software.",
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 bg-background border-b border-border/40">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <FolderKanban className="h-3.5 w-3.5" />
              <span>Agency Portfolio Showcase</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground max-w-4xl mx-auto leading-[1.15]">
              Real-World Enterprise{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Browse our engineering portfolio spanning FinTech dashboards, streaming AI platforms, luxury e-commerce engines, and SaaS infrastructure.
            </p>
          </div>
        </section>

        {/* Portfolio Section Grid with Interactive Filters */}
        <PortfolioSection />

        {/* CTA Banner */}
        <section className="py-16 bg-muted/30 border-t border-border/40 text-center">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16 space-y-6">
            <h2 className="text-3xl font-extrabold text-foreground">Have a similar project in mind?</h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              We collaborate with forward-thinking teams to build high-performance web applications that scale seamlessly.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
