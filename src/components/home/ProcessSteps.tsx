import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="section bg-surface-soft">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From first conversation to finished space"
          subtitle="A transparent, technology-driven process in five steps."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.n} className="relative rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-5xl font-bold text-accent/30">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
