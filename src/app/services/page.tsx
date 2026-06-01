import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { servicesContent } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end commercial interior design and build services — 3D visualization, product supply & installation, MEP consultancy, design consultancy, space planning, and design & build.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="A complete, tech-enabled capability — from first concept to a finished, functioning space."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {servicesContent.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-line transition-all hover:shadow-lg sm:grid-cols-5"
              >
                <div className="relative aspect-[4/3] sm:col-span-2 sm:aspect-auto">
                  <Image
                    src={s.hero}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-7 sm:col-span-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-heading group-hover:text-brand">
                    {s.name}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {s.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:gap-3">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
