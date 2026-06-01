"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  body: string;
  bullets?: string[];
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={cn(
                  "text-lg font-semibold transition-colors",
                  isOpen ? "text-brand" : "text-heading",
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
                  isOpen ? "bg-brand text-white" : "bg-surface-soft text-brand",
                )}
              >
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-[var(--ease-out-soft)]",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-muted">{item.body}</p>
                {item.bullets && (
                  <ul className="mt-3 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
