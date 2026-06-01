import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { designStyles } from "@/lib/content";

export function DesignStyles() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Find Your Aesthetic"
          title="Design styles for every personality"
          subtitle="Pick a direction — or blend a few — and we'll make it unmistakably yours."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designStyles.map((style) => (
            <div
              key={style.name}
              className="group relative aspect-[3/2] overflow-hidden rounded-2xl"
            >
              <Image
                src={style.image}
                alt={style.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 text-xl font-semibold text-white">
                {style.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
