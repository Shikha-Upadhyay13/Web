import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site, services, footerLinks, offices, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand text-white/85">
      {/* Brand band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white">Welcome to the World of AI</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{site.description}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center rounded-lg bg-accent px-7 text-sm font-semibold text-brand transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div>
          <Image
            src={site.logo}
            alt={site.name}
            width={723}
            height={345}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">{site.tagline}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-accent" />
              <a href={site.contact.phoneHref} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-accent" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-brand"
              >
                <SocialIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Popular links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Popular Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-white/70 transition-colors hover:text-accent">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Locate Us</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {offices.map((o) => (
              <li key={o.city} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <div>
                  <a
                    href={o.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-accent"
                  >
                    {o.city}
                    {o.isHQ ? " (HQ)" : ""}
                  </a>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/60">{o.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} AirBrick Infra. All rights reserved.</p>
          <p>{site.brandLine}</p>
        </Container>
      </div>
    </footer>
  );
}
