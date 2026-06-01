import Link from "next/link";
import {
  MessageSquare,
  LayoutGrid,
  Lightbulb,
  PencilRuler,
  Box,
  ClipboardCheck,
  Armchair,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeServices } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  MessageSquare,
  LayoutGrid,
  Lightbulb,
  PencilRuler,
  Box,
  ClipboardCheck,
  Armchair,
  Sparkles,
};

export function ServicesGrid() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Everything your space needs, under one roof"
          subtitle="An end-to-end design and build capability, from concept to handover."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s) => {
            const Icon = icons[s.icon] ?? Sparkles;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-line p-6 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-heading">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
          >
            Explore all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
