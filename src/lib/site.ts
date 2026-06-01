/**
 * Central site configuration — single source of truth for navigation,
 * services, offices, contact details, and social links.
 * Mirrors the live airbrickinfra.com information architecture.
 */

export const site = {
  name: "AirBrick Infra",
  shortName: "AirBrick",
  tagline: "Transforming Commercial Spaces with Creativity and Technology",
  brandLine: "Building Relationships, One Conversation at a Time",
  description:
    "AirBrick Infra is a platform transforming the experience of creating, maintaining, and managing offices with technology — organizing the industry, creating standards and processes, and driving transparency.",
  url: "https://airbrickinfra.com",
  logo: "/brand/airbrick-logo.png",
  contact: {
    phone: "+91 8851228822",
    phoneHref: "tel:+918851228822",
    email: "business@airbrickinfra.com",
    whatsapp: "https://wa.me/918851228822",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const services = [
  { label: "3D Visualization", href: "/services/3d-visualization" },
  {
    label: "Product Supply & Installation",
    href: "/services/product-supply-and-installation",
  },
  {
    label: "Project & MEP Consultancy",
    href: "/services/project-and-mep-consultancy",
  },
  { label: "Design Consultancy", href: "/services/design-consultancy" },
  { label: "Space Planning", href: "/services/space-planning" },
  { label: "Design & Build", href: "/services/design-and-build" },
] as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Services", href: "/services", children: [...services] },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const offices = [
  {
    city: "Gurugram",
    label: "Head Office",
    address:
      "3rd Floor, Plot No. 27-28, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122008, India",
    map: "https://maps.app.goo.gl/DkE3SDv6qqYZSPpD7",
    isHQ: true,
  },
  {
    city: "Bengaluru",
    label: "Bengaluru",
    address:
      "6th Floor, Prestige Central, 36 Infantry Road, Shivaji Nagar, Bengaluru, 560001, India",
    map: "https://maps.app.goo.gl/eBHMWS2wJNomhZwR6",
    isHQ: false,
  },
  {
    city: "Noida",
    label: "Noida",
    address:
      "A116, Urbtech Trade Centre, Sector 132, Noida, Uttar Pradesh, 201304, India",
    map: "https://maps.app.goo.gl/EEkuV7HHRnCrFJFJ7",
    isHQ: false,
  },
  {
    city: "Delhi",
    label: "Delhi",
    address:
      "E49/5, 2nd Floor, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi, 110020, India",
    map: "https://maps.app.goo.gl/HDrgJ7is8w1mBdRv9",
    isHQ: false,
  },
  {
    city: "Mumbai",
    label: "Mumbai",
    address:
      "6th Floor, Building No: 11, Spectrum Tower, Chincholi Bunder Road, Mumbai, Maharashtra, 400064, India",
    map: "https://maps.app.goo.gl/Qo3koQcxuH3fcdXC9",
    isHQ: false,
  },
] as const;

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/people/Airbrick_Infra/100091784203528/", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCZJjHfb69xQMqdDKbGKWJVA", icon: "youtube" },
  { label: "Instagram", href: "https://www.instagram.com/airbrickofficial/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/airbrick-infra/", icon: "linkedin" },
  { label: "Threads", href: "https://www.threads.net/@airbrickofficial", icon: "threads" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
