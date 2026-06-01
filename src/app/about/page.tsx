import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Users, Store, Box, Library, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/ui/CTABand";
import { locationCities } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AirBrick Infra is a visionary design and renovation firm transforming commercial spaces — offices, coworking, and F&B — with technology and AI for efficient, harmonious environments.",
};

const categories = [
  {
    icon: Building2,
    title: "Corporate Offices",
    body: "We optimize corporate offices, aligning design with brand identity, enhancing productivity, and integrating technology for efficient, sustainable, employee-centric work environments.",
  },
  {
    icon: Users,
    title: "Co-Working Spaces",
    body: "We elevate coworking spaces by optimizing layouts for collaboration, incorporating flexible workstations, and integrating technology for a dynamic, functional environment that attracts diverse professionals.",
  },
  {
    icon: Store,
    title: "Retail & F&B",
    body: "We elevate retail and F&B spaces through strategic layouts, enticing displays, brand integration, and ambiance-focused design — inviting environments that enhance the customer experience.",
  },
];

const tech = [
  { icon: Box, title: "3D Walkthroughs", body: "Immersive virtual tours of your space before implementation." },
  { icon: Library, title: "10,000+ Design Library", body: "A curated collection of materials, finishes, and product samples." },
  { icon: Wand2, title: "Real-Time Generators", body: "Live mood-board and layout generation for instant collaboration." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Where Imagination Meets Interiors"
        subtitle="A visionary design and renovation firm passionately transforming spaces into masterpieces."
        image="/img/106.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Intro */}
      <section className="section">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
              Creativity and technology, in perfect harmony
            </h2>
            <p className="mt-5 text-muted">
              With a team of skilled designers, architects, and craftsmen, we collaborate closely
              with clients to realize their unique visions. Specializing in commercial fitouts —
              particularly office spaces and F&amp;B establishments — we integrate innovative
              technology and AI for efficient space planning, furniture selection, material choices,
              and lighting design.
            </p>
            <p className="mt-4 text-muted">
              Our tech-enabled approach sets us apart, ensuring meticulous attention to detail and a
              commitment to delivering exceptional, harmonious environments that seamlessly blend
              creativity and cutting-edge technology.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/img/101.jpg"
              alt="AirBrick Infra commercial interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="section bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="What We Transform"
            title="Spaces built around how you work"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/5 text-brand">
                  <c.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-heading">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Technology"
            title="Discover how AirBrick is utilising technology"
            subtitle="We harness 3D walkthroughs, a vast design library, and real-time generators to make design more interactive, efficient, and client-centric."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tech.map((t) => (
              <div key={t.title} className="rounded-2xl border border-line p-8">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-brand">
                  <t.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-heading">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Presence */}
      <section className="section bg-brand text-white">
        <Container className="text-center">
          <p className="eyebrow text-accent">Our Reach</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            We are nearer to you than you think
          </h2>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {locationCities.map((c) => (
              <span
                key={c}
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/15"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
