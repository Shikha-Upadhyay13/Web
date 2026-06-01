import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/** Recurring "Have a project in mind?" call-to-action band. */
export function CTABand() {
  return (
    <section className="section">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-white sm:px-12">
          <p className="eyebrow text-accent">{site.brandLine}</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Do not hesitate to say hello. Let&apos;s turn your vision into a space that works.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="bg-accent text-brand hover:bg-accent-soft">
              Let&apos;s Talk
            </Button>
            <a
              href={site.contact.phoneHref}
              className="inline-flex h-13 items-center rounded-lg border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              {site.contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
