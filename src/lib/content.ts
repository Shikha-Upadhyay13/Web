/**
 * Home-page and shared marketing content, mirroring the live site copy.
 * Stat counter values are placeholders (the live numbers are JS-injected and
 * not in source) — flagged for confirmation with the client.
 */

export const heroFilters = {
  area: {
    label: "Select Area",
    options: ["2000 – 5000 sq ft", "5000 – 10000 sq ft", "Above 10000 sq ft"],
  },
  space: {
    label: "Select Space Type",
    options: ["Corporate Office", "Co-working Space", "Retail Space"],
  },
  budget: {
    label: "Select Budget",
    options: ["10 – 20 Lac", "25 – 50 Lac", "Above 50 Lac"],
  },
};

// NOTE: placeholder figures — confirm real numbers with client.
export const stats = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 750, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "M+", label: "Square Feet Delivered" },
  { value: 9, suffix: "", label: "Cities Across India & UAE" },
];

export const valueProps = [
  {
    stat: "33.75%",
    text: "Better office designs could lead to an average performance improvement of ~33.75%, as believed by 52% of employees.",
  },
  {
    stat: "96%",
    text: "Superior office design enhances employees' overall performance and competitiveness by 96%.",
  },
  {
    stat: "20,000+",
    text: "Design options in our library to craft a space that's unmistakably yours.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "AI-driven personalized floor plan and mood board creation tailored to your brand and goals.",
  },
  {
    n: "02",
    title: "Project Assessment & Space Analysis",
    body: "Precise measurements, photography, and architectural documentation of your space.",
  },
  {
    n: "03",
    title: "Design Concept Development",
    body: "A design concept with spatial analysis based on your preferences and ways of working.",
  },
  {
    n: "04",
    title: "Design Presentation & Approval",
    body: "Immersive 3D walkthroughs, sketches, and material samples to finalize the vision.",
  },
  {
    n: "05",
    title: "Build & Execution",
    body: "Meticulous craftsmanship delivered within the agreed timeframe and budget.",
  },
];

export const homeServices = [
  { title: "Consultation", desc: "Expert guidance from brief to brand-aligned concept.", icon: "MessageSquare" },
  { title: "Space Planning", desc: "Layouts that maximize every inch for flow and function.", icon: "LayoutGrid" },
  { title: "Concept Development", desc: "Translating goals into a coherent design direction.", icon: "Lightbulb" },
  { title: "Design Development", desc: "Detailed drawings, finishes, and specifications.", icon: "PencilRuler" },
  { title: "3D Visualization", desc: "Photoreal renders and virtual walkthroughs.", icon: "Box" },
  { title: "Project Management", desc: "On-time, on-budget delivery, end to end.", icon: "ClipboardCheck" },
  { title: "Furniture Selection & Procurement", desc: "Sourcing and supply from trusted partners.", icon: "Armchair" },
  { title: "Lighting Design", desc: "Ambiance and productivity through light.", icon: "Lightbulb" },
  { title: "Custom Design Elements", desc: "Bespoke details that make a space yours.", icon: "Sparkles" },
];

export const designStyles = [
  { name: "Modern Minimalism", image: "/img/104.jpg" },
  { name: "Rustic Revival", image: "/img/109.jpg" },
  { name: "Modern Elegance", image: "/img/106.jpg" },
  { name: "Bohemian Haven", image: "/img/105.jpg" },
  { name: "Art Deco Extravaganza", image: "/img/101.jpg" },
  { name: "Tropical Paradise", image: "/img/110.jpg" },
];

export const testimonials = [
  {
    quote:
      "The vibe of the new office is absolutely energetic and the quality is superb. AirBrick delivered exactly what we envisioned.",
    name: "Karl Quehenberger",
    role: "Managing Director, Andritz Hydro",
  },
  {
    quote:
      "A one-stop solution for our office expansion. The onboarding experience was smooth and the team made the whole process effortless.",
    name: "Leadership Team",
    role: "IND Money",
  },
  {
    quote:
      "Energetic vibe, superb quality, and delivered right on time. We couldn't be happier with our coworking space.",
    name: "Parag Gupta",
    role: "Founder, Co-Offiz",
  },
  {
    quote:
      "Their services over three months — including all certifications — have been exceptional. Truly professional throughout.",
    name: "Venkant Rao Posina",
    role: "Dassault Aviation",
  },
  {
    quote:
      "Timely delivery, top quality, and great support at every step. A team you can genuinely rely on.",
    name: "Deepak",
    role: "Vision Group",
  },
];

export const mediaOutlets = [
  "Business News This Week",
  "The Economic Times",
  "Realty Plus",
  "EPC World",
  "MGS Architecture",
  "Magic Bricks",
  "Times Property",
  "Commercial Design India",
  "SME World",
  "YourStory",
];

export const locationCities = [
  "Gurgaon",
  "Delhi",
  "Noida",
  "Mumbai",
  "Bengaluru",
  "Pune",
  "Hyderabad",
  "Ahmedabad",
  "UAE",
];
