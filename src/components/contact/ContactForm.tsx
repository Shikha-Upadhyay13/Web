"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): boolean {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) next.phone = "Enter a valid 10-digit number";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("idle");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Field
          label="Full Name"
          placeholder="Your Name"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          error={errors.name}
        />
        <Field
          label="Email"
          type="email"
          placeholder="Your E-mail"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v.toLowerCase() }))}
          error={errors.email}
        />
        <Field
          label="Phone"
          placeholder="Your Contact"
          value={form.phone}
          onChange={(v) =>
            setForm((s) => ({ ...s, phone: v.replace(/\D/g, "").slice(0, 10) }))
          }
          error={errors.phone}
          inputMode="numeric"
        />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us about your project"
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {serverError && <p className="text-sm text-red-600">{serverError}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-light disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Success modal */}
      {status === "success" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              aria-label="Close"
              className="ml-auto flex text-muted hover:text-heading"
            >
              <X className="size-5" />
            </button>
            <CheckCircle2 className="mx-auto size-14 text-green-500" />
            <h3 className="mt-4 text-xl font-bold text-heading">Successfully Sent!</h3>
            <p className="mt-2 text-sm text-muted">
              We have received your query and our best expert will reach out to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-brand px-8 text-sm font-semibold text-white hover:bg-brand-light"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  inputMode?: "numeric" | "text" | "email";
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-heading">{label}</label>
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
