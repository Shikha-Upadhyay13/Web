"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-brand text-white">
      <Container className="grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </Container>
    </section>
  );
}

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const rounded = value % 1 === 0 ? Math.round(display) : display.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-accent sm:text-5xl">
        {rounded}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
        {label}
      </div>
    </div>
  );
}
