export * from "./navigation";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "code" | "cpu" | "shield" | "sparkles" | "layers" | "zap";
  badge?: string;
  features: string[];
  gradient: string;
  ctaText: string;
  ctaHref: string;
}

export type ProjectCategory = "All" | "Fintech" | "AI Platforms" | "E-Commerce" | "SaaS Apps" | "Mobile";

export interface ProjectOutcome {
  metric: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  fullDescription: string;
  category: ProjectCategory;
  techStack: string[];
  client: string;
  industry: string;
  imageUrl: string;
  blurDataURL?: string;
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  architectureSummary: string;
  outcomes: ProjectOutcome[];
}
