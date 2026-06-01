/**
 * Project portfolio data (36 projects) mirroring the live site's gallery.
 * Images live in /public/projects/{n}.jpg. Metadata is filled where known
 * (from the live case-study pages) and will be expanded in Phase 2.
 */

export type Project = {
  id: number;
  title: string;
  slug: string;
  image: string; // grid thumbnail
  gallery: string[]; // detail-page carousel images
  category: string;
  location?: string;
  area?: string;
  industry?: string;
};

// Number of carousel images replicated per project (0 = thumbnail only).
const galleryCounts: Record<number, number> = {
  1: 5, 2: 5, 3: 5, 4: 3, 5: 5, 6: 5, 7: 5, 8: 4, 9: 5, 10: 5, 11: 5, 13: 5, 15: 5,
};

const raw: Array<
  Omit<Project, "image" | "slug" | "gallery"> & { slug?: string }
> = [
  { id: 1, title: "IND Money Ahmedabad", category: "Corporate Office" },
  { id: 2, title: "Codinix", category: "Corporate Office" },
  { id: 3, title: "Vision", category: "Corporate Office" },
  { id: 4, title: "Dassault Aviation", category: "Corporate Office", location: "India", industry: "Aerospace MNC" },
  { id: 5, title: "ProcMart", category: "Corporate Office" },
  { id: 6, title: "Andritz", category: "Design & Build", location: "Faridabad, Haryana", area: "15,000 sq ft", industry: "MNC" },
  { id: 7, title: "SPAC Pneumatic", category: "Corporate Office" },
  { id: 8, title: "Hana Bank", category: "Banking" },
  { id: 9, title: "Emirates, Gurgaon", category: "Corporate Office", location: "Gurgaon" },
  { id: 10, title: "India Accelerator, Pune", category: "Co-Working", location: "Pune" },
  { id: 11, title: "Servspaces Noida", category: "Co-Working", location: "Noida" },
  { id: 12, title: "Blue Star, Noida", category: "Corporate Office", location: "Noida" },
  { id: 13, title: "CO-OFFIZ", category: "Co-Working" },
  { id: 14, title: "IND Money", category: "Corporate Office" },
  { id: 15, title: "India Accelerator, Surat", category: "Co-Working", location: "Surat" },
  { id: 16, title: "Dr Lime", category: "Retail & F&B" },
  { id: 17, title: "TCS Noida", category: "Corporate Office", location: "Noida" },
  { id: 18, title: "Teleflex", category: "Corporate Office" },
  { id: 19, title: "KCC House", category: "Corporate Office" },
  { id: 20, title: "Vui", category: "Corporate Office" },
  { id: 21, title: "ATS Kocoon", category: "Corporate Office" },
  { id: 22, title: "Doceree", category: "Corporate Office" },
  { id: 23, title: "3 Horizon", category: "Corporate Office" },
  { id: 24, title: "Pash", category: "Corporate Office" },
  { id: 25, title: "We Work Gurgaon", category: "Co-Working", location: "Gurgaon" },
  { id: 26, title: "CHW Forge", category: "Industrial" },
  { id: 27, title: "SGS Weather", category: "Corporate Office" },
  { id: 28, title: "Honda Gurgaon", category: "Corporate Office", location: "Gurgaon" },
  { id: 29, title: "Puri Residence", category: "Residential" },
  { id: 30, title: "Vman", category: "Corporate Office" },
  { id: 31, title: "Nestle", category: "Corporate Office", industry: "FMCG MNC" },
  { id: 32, title: "Leela Jewellers", category: "Retail Showroom" },
  { id: 33, title: "PS Group", category: "Corporate Office" },
  { id: 34, title: "Honda", category: "Corporate Office" },
  { id: 35, title: "Investis Digital", category: "Corporate Office" },
  { id: 36, title: "Opulence", category: "Corporate Office" },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const projects: Project[] = raw.map((p) => {
  const count = galleryCounts[p.id] ?? 0;
  const gallery =
    count > 0
      ? Array.from({ length: count }, (_, i) => `/projects/${p.id}/${i + 1}.jpg`)
      : [`/projects/${p.id}.jpg`];
  return {
    ...p,
    slug: p.slug ?? slugify(p.title),
    image: `/projects/${p.id}.jpg`,
    gallery,
    category: p.category,
  };
});

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category)),
).sort();

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
