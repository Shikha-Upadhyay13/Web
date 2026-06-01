import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { servicesContent, getService } from "@/lib/services";

export function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.intro}
        image={service.hero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Process */}
      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">How we deliver</p>
            <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
              {service.processHeading}
            </h2>
            <p className="mt-4 text-muted">{service.intro}</p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
              <Image
                src={service.hero}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <Accordion items={service.process} />
        </Container>
      </section>

      {/* Benefits */}
      <section className="section bg-surface-soft">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Accordion items={service.benefits} />
          <div className="lg:order-first">
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
              {service.benefitsHeading}
            </h2>
            <p className="mt-4 text-muted">
              A tech-enabled approach means meticulous attention to detail and a result that
              blends creativity with cutting-edge technology.
            </p>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
