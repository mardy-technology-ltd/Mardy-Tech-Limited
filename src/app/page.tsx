import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs font-bold text-lg">
              M
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Mardy Tech <span className="text-primary font-normal">Theme Engine</span>
            </span>
          </div>

          <nav className="flex items-center gap-4">
            <a
              href="#tokens"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:inline-block"
            >
              Design Tokens
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:inline-block"
            >
              Features
            </a>
            <div className="h-4 w-px bg-border/60 hidden sm:block" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Zero-FOUC Next.js 14+ Theme Engine
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
            Ultra Expert <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Light & Dark Theme Engine
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Built with Next.js App Router, TypeScript, Tailwind CSS, HSL CSS variables, and Framer Motion. Powered by <code className="text-primary font-mono text-sm bg-primary/10 px-1.5 py-0.5 rounded">next-themes</code> for seamless system preference matching and instant hydration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring transition-all active:scale-95">
              Explore Theme Tokens
            </button>
            <button className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground shadow-xs hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring transition-all active:scale-95">
              Documentation
            </button>
          </div>
        </section>

        {/* Tokens Grid */}
        <section id="tokens" className="space-y-6">
          <div className="border-b border-border/40 pb-4">
            <h2 className="text-2xl font-bold tracking-tight">Active Theme Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Dynamic HSL variables automatically updated based on current theme state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Background & Surface Token */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center shadow-xs">
                <div className="h-4 w-4 rounded-full bg-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Background & Text</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Dark:</span> Deep background (<code className="text-xs font-mono">#0B0F19</code>) + slate text.<br />
                <span className="font-semibold text-foreground">Light:</span> Pure ice background (<code className="text-xs font-mono">#F8FAFC</code>) + slate-900 text.
              </p>
            </div>

            {/* Accent Token */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-xs">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Brand Accents</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Dark:</span> Electric Cyan/Teal accents.<br />
                <span className="font-semibold text-foreground">Light:</span> Royal Indigo accents.
              </p>
            </div>

            {/* Layout Shifts Token */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
              <div className="h-10 w-10 rounded-xl bg-secondary text-secondary-foreground border border-border flex items-center justify-center shadow-xs font-mono text-xs font-bold">
                0ms
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Zero FOUC & Shift</h3>
              <p className="text-sm text-muted-foreground">
                Script injection via next-themes prevents flash of unstyled content. Fixed element sizing guarantees zero layout shift.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Demo Box */}
        <section id="features" className="mt-16 rounded-2xl border border-border/60 bg-card p-8 shadow-xs space-y-4">
          <h3 className="text-xl font-bold">Interactive Component Preview</h3>
          <p className="text-sm text-muted-foreground">
            Test button states, borders, inputs, and focus rings across dark and light themes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sample Input</label>
              <input
                type="text"
                placeholder="Type something..."
                className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sample Badge</label>
              <div className="flex items-center gap-2 pt-1">
                <span className="rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Primary Token
                </span>
                <span className="rounded-lg bg-secondary border border-border px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Secondary Token
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background/50">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          Built with Next.js 14+, Tailwind CSS & Framer Motion. Zero-FOUC Theme Architecture.
        </div>
      </footer>
    </div>
  );
}
