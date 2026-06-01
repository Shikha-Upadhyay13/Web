import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueProps } from "@/lib/content";

export function ValueProps() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Why Design Matters"
          title="Great design is a measurable advantage"
          subtitle="Workplace design directly shapes performance, wellbeing, and competitiveness."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div
              key={v.stat}
              className="rounded-2xl border border-line bg-surface-soft p-8 transition-shadow hover:shadow-md"
            >
              <div className="text-4xl font-bold text-brand">{v.stat}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
