import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { site, offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with AirBrick Infra for commercial and office interior design services. Get in touch today for innovative solutions across India and the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Got a project on your mind? Let's discuss the details."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div>
            <p className="eyebrow">Send a message</p>
            <h2 className="mt-3 text-3xl font-bold text-heading">
              Let&apos;s build something great
            </h2>
            <p className="mt-3 text-muted">
              Fill out the form and our team will get back to you shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <div>
            <p className="eyebrow">Reach us directly</p>
            <h2 className="mt-3 text-3xl font-bold text-heading">Talk to us</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <ContactCard
                icon={Phone}
                label="Call"
                value={site.contact.phone}
                href={site.contact.phoneHref}
              />
              <ContactCard
                icon={Mail}
                label="Email"
                value={site.contact.email}
                href={`mailto:${site.contact.email}`}
              />
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat now"
                href={site.contact.whatsapp}
              />
            </div>

            <h3 className="mt-10 text-lg font-semibold text-heading">Our Offices</h3>
            <div className="mt-4 space-y-3">
              {offices.map((o) => (
                <a
                  key={o.city}
                  href={o.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-brand/30 hover:bg-surface-soft"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-medium text-heading">
                      {o.city}
                      {o.isHQ && (
                        <span className="rounded bg-brand/10 px-2 py-0.5 text-xs text-brand">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{o.address}</p>
                  </div>
                  <ExternalLink className="size-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="rounded-2xl border border-line p-5 transition-colors hover:border-brand/30 hover:bg-surface-soft"
    >
      <Icon className="size-6 text-brand" />
      <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-heading">{value}</div>
    </a>
  );
}
