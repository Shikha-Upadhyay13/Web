import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
      </div>
    </Link>
  );
}
