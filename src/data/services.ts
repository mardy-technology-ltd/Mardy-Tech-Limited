import { Service } from "@/types";

export const dummyServices: Service[] = [
  {
    id: "web-dev",
    title: "Custom Web Application Development",
    subtitle: "Enterprise Web Systems",
    description:
      "Scalable, high-performance web applications built with Next.js, React, and TypeScript engineered for blistering speed, SEO dominance, and seamless user experiences.",
    iconName: "code",
    badge: "Most Popular",
    features: [
      "Next.js 14+ App Router Architecture",
      "Server Components & ISR Caching",
      "Sub-second Page Load Speed",
      "100% WCAG Accessibility Standard",
    ],
    ctaText: "Explore Web Engineering",
    ctaHref: "/contact?service=web-dev",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "mobile-dev",
    title: "Native & Cross-Platform Mobile Apps",
    subtitle: "iOS & Android Solutions",
    description:
      "Fluid, high-converting mobile applications designed for iOS and Android featuring native hardware integration, offline synchronization, and push notifications.",
    iconName: "zap",
    badge: "High Growth",
    features: [
      "Flutter & React Native Architecture",
      "Offline Data Sync & Storage",
      "Secure Biometrics & Payment Gateways",
      "App Store & Play Store Deployment",
    ],
    ctaText: "Explore Mobile Apps",
    ctaHref: "/contact?service=mobile-dev",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "saas-cloud",
    title: "Enterprise SaaS & Cloud Systems",
    subtitle: "Scalable Infrastructure",
    description:
      "Robust cloud-native SaaS platforms built for multi-tenancy, high concurrency, strict security compliance, and effortless auto-scaling on AWS and Docker.",
    iconName: "cpu",
    badge: "Enterprise",
    features: [
      "Multi-Tenant Database Architecture",
      "Automated CI/CD Pipelines & Docker",
      "Microservices & Serverless APIs",
      "99.99% Uptime SLA Guarantee",
    ],
    ctaText: "Explore SaaS Architecture",
    ctaHref: "/contact?service=saas-cloud",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "ai-solutions",
    title: "Custom AI Agents & LLM Workflows",
    subtitle: "Next-Gen AI Engineering",
    description:
      "Integrate cutting-edge AI models, custom LLM agents, RAG vector embeddings, and intelligent automation pipelines directly into your enterprise software.",
    iconName: "sparkles",
    badge: "AI Powered",
    features: [
      "OpenAI & Claude LLM Integrations",
      "Custom RAG & Vector Embeddings",
      "Automated Business Workflow Agents",
      "Real-time Streaming AI APIs",
    ],
    ctaText: "Explore AI Solutions",
    ctaHref: "/contact?service=ai-solutions",
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    id: "ui-ux-design",
    title: "Product Design & Design Systems",
    subtitle: "UI/UX & Product Strategy",
    description:
      "User-centered UI/UX design, interactive prototyping, and modular design systems that captivate users, elevate brand perception, and drive conversion rates.",
    iconName: "layers",
    features: [
      "Interactive Figma Prototypes",
      "Scalable Atomic Design Systems",
      "User Research & Usability Testing",
      "Brand & Graphic Identity Guidelines",
    ],
    ctaText: "Explore Product Design",
    ctaHref: "/contact?service=ui-ux-design",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "api-security",
    title: "High-Security Backend & APIs",
    subtitle: "Security & API Engineering",
    description:
      "Secure RESTful and GraphQL APIs built with Node.js, Laravel, and Python protected by enterprise-grade authentication, rate limiting, and data encryption.",
    iconName: "shield",
    features: [
      "OAuth2, JWT & RBAC Authentication",
      "GraphQL & RESTful Endpoint Design",
      "Automated DDoS & Rate Limiting",
      "End-to-End Enterprise Encryption",
    ],
    ctaText: "Explore Security & APIs",
    ctaHref: "/contact?service=api-security",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];
