"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const filters = useMemo(() => ["All", ...categories], [categories]);
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === f
                ? "bg-brand text-white"
                : "border border-line bg-white text-ink hover:border-brand/40 hover:text-brand",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mt-6 text-center text-sm text-muted">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
