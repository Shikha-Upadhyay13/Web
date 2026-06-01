import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero (Phase 0 placeholder — full home build lands in Phase 1) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-soft to-white">
        <Container className="section flex flex-col items-center text-center">
          <p className="eyebrow">Commercial Interior Design &amp; Build</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold uppercase leading-[1.1] text-heading sm:text-5xl lg:text-6xl">
            Design Your Next Commercial Space With the Most Trusted Interior Design Firm
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Transforming commercial spaces with creativity and technology — offices,
            coworking hubs, and retail, powered by an AI-enabled design platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/estimate" size="lg">
              Get Your Estimate
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>

      {/* Foundation status strip */}
      <section className="section">
        <Container>
          <div className="rounded-2xl border border-line bg-surface-soft p-8 text-center">
            <p className="eyebrow">Phase 0 — Foundation</p>
            <h2 className="mt-3 text-2xl font-semibold">Project scaffold is live</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Next.js + Tailwind v4 design tokens, brand palette, Jost typography, and the
              shared Header / Footer / WhatsApp shell are in place. Full page content begins
              in Phase 1.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
