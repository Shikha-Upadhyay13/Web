"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const active = testimonials[index];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by teams that don't compromise"
        />
        <div className="relative mx-auto mt-12 max-w-3xl text-center">
          <Quote className="mx-auto size-10 text-accent/40" />
          <blockquote
            key={index}
            className="mt-6 text-xl font-medium leading-relaxed text-heading sm:text-2xl"
          >
            “{active.quote}”
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-brand">{active.name}</div>
            <div className="text-sm text-muted">{active.role}</div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand" : "w-2 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
