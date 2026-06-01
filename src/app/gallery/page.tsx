import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { projects, projectCategories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our gallery showcasing innovative commercial and office interior designs by AirBrick Infra. Witness creativity in every detail.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Curated design options for your need — a look at the spaces we've brought to life."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section">
        <Container>
          <GalleryGrid projects={projects} categories={projectCategories} />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
