import Link from "next/link";
import { Sparkles, Calculator, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ToolsTeaser() {
  return (
    <section className="section bg-brand text-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Free 3D render */}
          <div className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-brand">
              <Sparkles className="size-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Get a 3D Render of Your Reception — Free
            </h3>
            <p className="mt-3 text-white/70">
              Upload your logo and see a photoreal 3D concept of your future reception, on us.
              No commitment required.
            </p>
            <Link
              href="/free-3d-render"
              className="mt-7 inline-flex items-center gap-2 self-start rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5"
            >
              Claim Your Free Render <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Cost estimator */}
          <div className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-brand">
              <Calculator className="size-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Estimate Your Office Interior Cost
            </h3>
            <p className="mt-3 text-white/70">
              Answer a few quick questions about your space and get tailored Budget, Premium,
              and Luxury estimates in minutes.
            </p>
            <Link
              href="/estimate"
              className="mt-7 inline-flex items-center gap-2 self-start rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5"
            >
              Get Your Estimate <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
