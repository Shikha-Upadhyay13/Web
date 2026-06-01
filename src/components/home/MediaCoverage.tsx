import { Container } from "@/components/ui/Container";
import { mediaOutlets } from "@/lib/content";

export function MediaCoverage() {
  return (
    <section className="section">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted">
          As featured in
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {mediaOutlets.map((outlet) => (
            <span
              key={outlet}
              className="text-lg font-semibold text-muted/70 transition-colors hover:text-brand"
            >
              {outlet}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
