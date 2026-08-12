import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Mardy Tech Limited",
  description: "Terms of service and usage agreement for Mardy Tech Limited.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 space-y-8">
        <header className="space-y-3 border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: August 13, 2026
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website and software services provided by Mardy Tech Limited, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-foreground">2. Intellectual Property</h2>
          <p>
            All custom components, design tokens, branding assets, and software architectures developed for clients remain the intellectual property of Mardy Tech Limited until full project handover and settlement.
          </p>

          <h2 className="text-xl font-bold text-foreground">3. Limitation of Liability</h2>
          <p>
            Mardy Tech Limited shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software applications.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
