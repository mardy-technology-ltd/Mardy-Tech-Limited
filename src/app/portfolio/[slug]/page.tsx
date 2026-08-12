import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ShieldCheck, Cpu, Layers, CheckCircle2, Building2, Tag } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs, dummyProjects } from "@/data/projects";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export const revalidate = 60; // Incremental Static Regeneration (ISR) interval in seconds

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically pre-render all project slugs at build time
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate dynamic Meta Title, Description, and OpenGraph tags for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Mardy Tech",
      description: "The requested case study could not be found.",
    };
  }

  const pageTitle = `${project.title} — Case Study | Mardy Tech`;
  const pageDescription = project.summary;
  const canonicalUrl = `https://mardytech.com/portfolio/${project.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "Mardy Tech Limited",
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [project.imageUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same category or next in array)
  const relatedProjects = dummyProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      {/* Sticky Header Navbar */}
      <Navbar />

      <main className="flex-1 container mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-2 py-1"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Semantic Article Wrapper */}
        <article className="space-y-12">
          {/* Header Section */}
          <header className="space-y-6 max-w-4xl border-b border-border/40 pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Tag className="h-3.5 w-3.5" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-card-foreground">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                {project.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </header>

          {/* Banner Image with Next.js Image Optimization */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              placeholder={project.blurDataURL ? "blur" : "empty"}
              blurDataURL={project.blurDataURL}
              className="object-cover object-center"
            />
          </div>

          {/* Main Content & Sticky Desktop Sidebar Grid Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Main Article Column (8 cols) */}
            <div className="space-y-12 lg:col-span-8">
              {/* Challenge Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive border border-destructive/20 font-bold">
                    🎯
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    The Business Challenge
                  </h2>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs leading-relaxed text-muted-foreground">
                  <p>{project.challenge}</p>
                </div>
              </section>

              {/* Technical Solution Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold">
                    ⚙️
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Our Engineering Solution
                  </h2>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs leading-relaxed text-muted-foreground">
                  <p>{project.solution}</p>
                </div>
              </section>

              {/* Architecture Diagram Placeholder */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20 font-bold">
                    🧩
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    System Architecture Diagram
                  </h2>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs space-y-4">
                  <div className="rounded-xl border border-border/40 bg-background/80 p-5 font-mono text-xs sm:text-sm text-primary overflow-x-auto">
                    <code>{project.architectureSummary}</code>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    High-throughput event stream architecture utilizing Next.js Edge handlers and atomic component pipelines.
                  </p>
                </div>
              </section>

              {/* Concrete Business Outcomes & Metrics Grid */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold">
                    📈
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Business Outcomes & Impact
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {project.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-border/60 bg-card p-5 text-center shadow-xs space-y-1"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                        {outcome.metric}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        {outcome.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sticky Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6 rounded-2xl border border-border/60 bg-card p-6 shadow-xs">
                <h3 className="text-lg font-bold text-card-foreground border-b border-border/40 pb-3">
                  Project Metadata
                </h3>

                {/* Client & Industry Metadata */}
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">
                      Client
                    </span>
                    <span className="font-semibold text-foreground">{project.client}</span>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">
                      Industry
                    </span>
                    <span className="font-semibold text-foreground">{project.industry}</span>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">
                      Category
                    </span>
                    <span className="font-semibold text-foreground">{project.category}</span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-2 border-t border-border/40 pt-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Outbound Links with rel="noopener noreferrer" */}
                <div className="space-y-3 border-t border-border/40 pt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>View GitHub Code</span>
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related Projects Section */}
        <div className="mt-20 border-t border-border/40 pt-12 space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            More Case Studies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((relProject) => (
              <Link
                key={relProject.id}
                href={`/portfolio/${relProject.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition-colors hover:border-primary/50"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-primary uppercase">
                    {relProject.category}
                  </span>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {relProject.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {relProject.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
