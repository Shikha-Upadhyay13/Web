"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { heroFilters } from "@/lib/content";

export function Hero() {
  const router = useRouter();
  const [values, setValues] = useState({ area: "", space: "", budget: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (values.area) params.set("area", values.area);
    if (values.space) params.set("space", values.space);
    if (values.budget) params.set("budget", values.budget);
    router.push(`/estimate?${params.toString()}`);
  }

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/108.jpg"
          alt="Modern commercial interior by AirBrick Infra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/85 to-brand/55" />
      </div>

      <Container className="flex min-h-[88vh] flex-col justify-center py-20 text-white">
        <p className="eyebrow text-accent">The Most Trusted Interior Design Firm</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">
          Design Your Next Commercial Space
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Transforming commercial spaces with creativity and technology — offices, coworking
          hubs, and retail, powered by an AI-enabled design platform.
        </p>

        {/* Quick-filter form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid w-full max-w-4xl gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FilterSelect
            label={heroFilters.area.label}
            options={heroFilters.area.options}
            value={values.area}
            onChange={(v) => setValues((s) => ({ ...s, area: v }))}
          />
          <FilterSelect
            label={heroFilters.space.label}
            options={heroFilters.space.options}
            value={values.space}
            onChange={(v) => setValues((s) => ({ ...s, space: v }))}
          />
          <FilterSelect
            label={heroFilters.budget.label}
            options={heroFilters.budget.options}
            value={values.budget}
            onChange={(v) => setValues((s) => ({ ...s, budget: v }))}
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5"
          >
            Get Your Estimate
            <ArrowRight className="size-4" />
          </button>
        </form>
      </Container>
    </section>
  );
}

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 rounded-xl border-0 bg-white px-4 text-sm text-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
