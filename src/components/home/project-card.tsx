"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 16 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        opacity: { duration: 0.2 },
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xs transition-colors hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="space-y-4">
        {/* Next.js Optimized Image Container with Case Study Link */}
        <Link href={`/portfolio/${project.slug}`} className="block relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.imageUrl}
            alt={`${project.title} - ${project.summary}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            placeholder={project.blurDataURL ? "blur" : "empty"}
            blurDataURL={project.blurDataURL}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Overlay Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/90 px-3 py-1 text-xs font-semibold text-primary shadow-xs backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Client Label Badge */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="inline-flex items-center rounded-lg bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-xs backdrop-blur-md">
              {project.client}
            </span>
          </div>
        </Link>

        {/* Content Details */}
        <div className="px-6 space-y-3">
          <Link href={`/portfolio/${project.slug}`} className="block">
            <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.summary}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/40 bg-secondary/60 px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Links */}
      <div className="p-6 pt-4 border-t border-border/40 mt-4 flex items-center justify-between gap-3">
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${project.title}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
