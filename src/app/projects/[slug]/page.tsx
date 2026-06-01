import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Ruler, Building2, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: `${project.title}: a ${project.category.toLowerCase()} interior project by AirBrick Infra${
      project.location ? ` in ${project.location}` : ""
    }.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    project.location && { icon: MapPin, label: "Location", value: project.location },
    project.area && { icon: Ruler, label: "Area", value: project.area },
    project.industry && { icon: Building2, label: "Industry", value: project.industry },
    { icon: Tag, label: "Category", value: project.category },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string }[];

  return (
    <>
      <section className="border-b border-line bg-surface-soft">
        <Container className="py-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand"
          >
            <ArrowLeft className="size-4" /> Back to Gallery
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-heading sm:text-5xl">{project.title}</h1>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-line p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-heading">Project Details</h2>
              <dl className="mt-5 space-y-4">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <m.icon className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                        {m.label}
                      </dt>
                      <dd className="text-sm font-medium text-heading">{m.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                A {project.category.toLowerCase()} space designed and delivered by AirBrick Infra —
                blending creativity and technology for an environment that works as hard as the
                people in it.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand text-sm font-semibold text-white hover:bg-brand-light"
              >
                Start a similar project
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-line">
        <Container className="grid grid-cols-2 divide-x divide-line">
          <Link href={`/projects/${prev.slug}`} className="group py-8 pr-4">
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
              <ArrowLeft className="size-4" /> Previous
            </span>
            <span className="mt-1 block font-semibold text-heading group-hover:text-brand">
              {prev.title}
            </span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group py-8 pl-4 text-right">
            <span className="flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-wider text-muted">
              Next <ArrowRight className="size-4" />
            </span>
            <span className="mt-1 block font-semibold text-heading group-hover:text-brand">
              {next.title}
            </span>
          </Link>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
