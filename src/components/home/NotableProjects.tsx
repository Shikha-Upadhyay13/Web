import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function NotableProjects() {
  const featured = projects.slice(0, 9);
  return (
    <section className="section bg-surface-soft">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Notable projects we're proud of"
          subtitle="From global MNCs to fast-growing startups — spaces that work as hard as the people in them."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
          >
            View the full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
