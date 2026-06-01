import { site } from "@/lib/site";

/** Floating WhatsApp contact button, fixed bottom-right, sitewide. */
export function WhatsAppFab() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative size-7 fill-current" aria-hidden="true">
        <path d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.5 1.13 6.74 3.05 9.37L1.04 31.36l6.2-1.98A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.83 32 16S24.83 0 16.004 0Zm9.31 22.6c-.39 1.09-1.92 2-3.14 2.26-.83.18-1.92.32-5.58-1.19-4.68-1.94-7.7-6.7-7.93-7.01-.22-.31-1.9-2.53-1.9-4.83s1.21-3.43 1.64-3.9c.36-.39.94-.57 1.5-.57.18 0 .35.01.5.02.43.02.65.04.94.73.36.86 1.23 2.98 1.34 3.2.11.22.18.48.04.79-.13.31-.24.45-.46.7-.22.25-.43.45-.65.72-.2.24-.43.5-.18.93.25.43 1.1 1.82 2.36 2.94 1.63 1.45 2.99 1.9 3.47 2.11.36.15.79.12 1.06-.18.34-.39.76-1.04 1.18-1.68.3-.45.68-.51 1.07-.36.4.14 2.51 1.18 2.94 1.4.43.21.72.31.83.49.1.18.1 1.03-.29 2.12Z" />
      </svg>
    </a>
  );
}
