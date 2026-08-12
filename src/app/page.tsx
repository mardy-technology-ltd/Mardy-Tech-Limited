import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Prompt 2: Navigation & Footer Engine
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
            Responsive & Accessible <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Navigation Architecture
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Atomic components for Navbar, DesktopNav, MobileNav, Logo, NavLink, and Footer. Features scroll-triggered blur/shadow, focus trapping, Escape key closing, and 100% keyboard accessibility.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring transition-all active:scale-95">
              Explore Components
            </button>
            <button className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground shadow-xs hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring transition-all active:scale-95">
              View Navigation Specs
            </button>
          </div>
        </section>

        {/* Tokens & Components Grid */}
        <section id="tokens" className="space-y-6">
          <div className="border-b border-border/40 pb-4">
            <h2 className="text-2xl font-bold tracking-tight">Navigation Architecture Features</h2>
            <p className="text-sm text-muted-foreground">
              Built according to strict Principal Frontend Architect standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scroll Effect */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
                📜
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Dynamic Scroll Styling</h3>
              <p className="text-sm text-muted-foreground">
                Navbar detects scroll depth, dynamically applying border and shadow transitions alongside <code className="text-xs font-mono">backdrop-blur-md</code>.
              </p>
            </div>

            {/* Mobile Drawer */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
                📱
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Responsive Drawer</h3>
              <p className="text-sm text-muted-foreground">
                Mobile drawer with body scroll lock (<code className="text-xs font-mono">overflow: hidden</code>), slide animation, and smooth backdrop overlay.
              </p>
            </div>

            {/* Accessibility */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
                ♿
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">100% Keyboard & ARIA</h3>
              <p className="text-sm text-muted-foreground">
                Full focus trapping, Escape key listener, <code className="text-xs font-mono">aria-expanded</code>, <code className="text-xs font-mono">aria-controls</code>, and visible focus rings.
              </p>
            </div>
          </div>
        </section>

        {/* Scroll Test Section */}
        <section id="features" className="mt-16 rounded-2xl border border-border/60 bg-card p-8 shadow-xs space-y-6">
          <h3 className="text-xl font-bold">Scroll Test & Component Playground</h3>
          <p className="text-sm text-muted-foreground">
            Scroll down the page to observe the sticky navbar transition into scrolled mode with borders and subtle shadows!
          </p>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground">
                Dummy Content Block #{i} — Scroll to test sticky Header behavior.
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
