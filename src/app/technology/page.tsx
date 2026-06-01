import type { Metadata } from "next";
import Image from "next/image";
import { Box, Library, LayoutPanelTop, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Cutting-edge design solutions from AirBrick Infra — 3D walkthroughs, the AB Design Library, and real-time mood-board and layout generators for an immersive, client-centric design process.",
};

const features = [
  {
    icon: Box,
    title: "3D Walkthroughs",
    body: "Our 3D walkthroughs provide a virtual tour of your envisioned space, letting you navigate every detail before implementation. This immersive experience aids visualization, enables informed decisions, and ensures satisfaction through a collaborative, transparent process.",
    image: "/img/12.jpg",
  },
  {
    icon: Library,
    title: "AB Design Library",
    body: "The AB Design Library is a curated collection of materials, finishes, and product samples. It gives you a tangible reference point, making it easier to visualize and select elements — streamlining decisions and ensuring cohesive, well-informed choices aligned with your vision.",
    image: "/img/106.jpg",
  },
];

const capabilities = [
  { icon: Box, label: "3D Walkthroughs" },
  { icon: Library, label: "10,000+ Design Library" },
  { icon: Wand2, label: "Real-Time Mood Boards" },
  { icon: LayoutPanelTop, label: "AI Layout Generators" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Where Technology Meets Design"
        subtitle="Curated design options for your need."
        image="/img/108.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
      />

      {/* Capability strip */}
      <section className="border-b border-line bg-surface-soft">
        <Container className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                <c.icon className="size-5" />
              </span>
              <span className="text-sm font-semibold text-heading">{c.label}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* Feature blocks */}
      <section className="section">
        <Container className="space-y-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-brand">
                  <f.icon className="size-6" />
                </div>
                <h2 className="mt-5 text-3xl font-bold text-heading">{f.title}</h2>
                <p className="mt-4 text-muted">{f.body}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
