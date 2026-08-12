import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Mardy Tech Limited",
  description: "Privacy policy and data handling guidelines for Mardy Tech Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 space-y-8">
        <header className="space-y-3 border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: August 13, 2026
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-bold text-foreground">1. Data Protection Overview</h2>
          <p>
            At Mardy Tech Limited, we take data privacy and security seriously. This privacy policy explains how we handle information collected through our website, contact forms, and client portals.
          </p>

          <h2 className="text-xl font-bold text-foreground">2. Information Collection</h2>
          <p>
            We only collect personal information that you voluntarily provide when submitting a project inquiry via our contact form (such as your full name, email address, company name, and project scope).
          </p>

          <h2 className="text-xl font-bold text-foreground">3. How We Use Information</h2>
          <p>
            Your information is strictly used to process your technical inquiries, respond to project consultation requests, and fulfill contractual obligations. We never sell or distribute your data to third parties.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Security Standards</h2>
          <p>
            All submitted data is transmitted using encrypted HTTPS connections and validated using strict Zod schemas to protect against injection vulnerabilities.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
