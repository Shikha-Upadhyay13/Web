import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; href?: string };

/** Compact inner-page hero with optional background image and breadcrumbs. */
export function PageHero({
  title,
  subtitle,
  image,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/70" />
        </div>
      )}
      <Container className="py-20 sm:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-accent">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="size-3.5" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </Container>
    </section>
  );
}
