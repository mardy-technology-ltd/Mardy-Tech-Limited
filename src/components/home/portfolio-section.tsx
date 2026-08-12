"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderKanban, Inbox } from "lucide-react";
import { ProjectCategory } from "@/types";
import { dummyProjects } from "@/data/projects";
import { ProjectCard } from "./project-card";

const categories: ProjectCategory[] = [
  "All",
  "Fintech",
  "AI Platforms",
  "E-Commerce",
  "SaaS Apps",
  "Mobile",
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<ProjectCategory>("All");

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return dummyProjects;
    return dummyProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-16 sm:py-24 bg-background text-foreground border-t border-border/40">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        <div className="absolute top-1/3 -right-48 h-[750px] w-[750px] rounded-full bg-cyan-500/12 filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-12 -left-48 h-[700px] w-[700px] rounded-full bg-indigo-500/12 filter blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <FolderKanban className="h-3.5 w-3.5" />
            <span>Featured Case Studies & Work</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Transforming Complex Ideas into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              High-Impact Products
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Explore how Mardy Tech Limited partners with industry leaders to engineer scalable software solutions, FinTech dashboards, and AI platforms.
          </p>
        </div>

        {/* Category Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isSelected}
                className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                  isSelected
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md shadow-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  priority={idx < 2}
                />
              ))
            ) : (
              /* Clean Empty State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="col-span-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-border/80 bg-card/50 space-y-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <Inbox className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">No Projects Found</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    No agency projects are currently listed under the <span className="font-semibold text-primary">{selectedCategory}</span> category.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className="rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
