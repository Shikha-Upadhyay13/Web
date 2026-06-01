import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locationCities } from "@/lib/content";
import { offices } from "@/lib/site";

export function Locations() {
  return (
    <section className="section bg-surface-soft">
      <Container>
        <SectionHeading
          eyebrow="Pan-India & UAE"
          title="We are nearer to you than you think"
          subtitle="Delivering across nine cities, with five full-service offices."
        />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {locationCities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-white px-5 py-2 text-sm font-medium text-ink"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <a
              key={o.city}
              href={o.map}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand/30 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-accent" />
                <h3 className="font-semibold text-heading">
                  {o.city}
                  {o.isHQ && (
                    <span className="ml-2 rounded bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                      HQ
                    </span>
                  )}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{o.address}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
