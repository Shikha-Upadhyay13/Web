/**
 * Service-page content (6 services) mirroring the live site copy.
 * Each service follows the same template: hero -> process -> benefits -> CTA.
 */

export type ServiceSection = { title: string; body: string; bullets?: string[] };

export type ServiceContent = {
  slug: string;
  name: string;
  title: string; // SEO title
  description: string; // meta description
  hero: string; // hero image path
  intro: string;
  processHeading: string;
  process: ServiceSection[];
  benefitsHeading: string;
  benefits: ServiceSection[];
};

export const servicesContent: ServiceContent[] = [
  {
    slug: "3d-visualization",
    name: "3D Visualization",
    title: "Immersive 3D Visualization Services",
    description:
      "Photoreal 3D visualization and virtual walkthroughs for commercial interiors — visualize, refine, and approve your space before a single brick is laid.",
    hero: "/img/12.jpg",
    intro:
      "Experience your space before it's built. Our 3D visualization turns concepts into photoreal images and immersive walkthroughs, so every decision is made with confidence.",
    processHeading: "Our 3D Visualization Process",
    process: [
      {
        title: "Conceptualization and Design Briefing",
        body: "We develop a thorough understanding of your requirements, objectives, and design preferences, gathering information about the space, its purpose, and functional and aesthetic considerations.",
      },
      {
        title: "Space Measurement and Modeling",
        body: "We take accurate measurements of the interior space and use CAD software to build a digital 3D model — walls, floors, ceilings, and architectural elements.",
      },
      {
        title: "Material Selection and Texturing",
        body: "We select materials and textures for every element — flooring, wall finishes, furniture, and lighting fixtures — applying realistic texturing for a true-to-life representation.",
      },
      {
        title: "Lighting and Visualization",
        body: "Lighting plays a crucial role in creating ambiance. We set up lighting scenarios that simulate natural light, artificial light, and a range of moods.",
      },
      {
        title: "Furniture and Object Placement",
        body: "Furniture and objects are placed with careful attention to functionality, space utilization, scale, proportion, and spatial relationships.",
      },
      {
        title: "Rendering and Presentation",
        body: "We produce high-quality rendered images and virtual tours that realistically showcase materials, lighting, placement, and atmosphere.",
      },
    ],
    benefitsHeading: "Benefits of 3D Visualization",
    benefits: [
      {
        title: "Enhanced Visualization",
        body: "Clients see design concepts realistically and immersively before any physical changes are made.",
      },
      {
        title: "Improved Communication",
        body: "3D visualizations bridge the communication gap between designers and clients.",
      },
      {
        title: "Cost and Time Efficiency",
        body: "Identifying design flaws early minimizes costly revisions during the construction phase.",
      },
      {
        title: "Design Flexibility",
        body: "Experiment with elements, materials, and layouts; quick iterations foster creativity and reduce rework.",
      },
    ],
  },
  {
    slug: "product-supply-and-installation",
    name: "Product Supply & Installation",
    title: "Efficient Product Supply & Installation",
    description:
      "End-to-end sourcing, procurement, delivery, and professional installation of commercial interior products from trusted suppliers and manufacturers.",
    hero: "/img/49.jpg",
    intro:
      "From sourcing to the final screw, we handle product supply and installation end to end — trusted suppliers, careful logistics, and skilled installers, all under one accountable roof.",
    processHeading: "Our Product Supply & Installation Process",
    process: [
      {
        title: "Needs Assessment and Planning",
        body: "We understand your requirements, evaluate the space, determine functional needs, and establish the budget.",
      },
      {
        title: "Product Selection and Specification",
        body: "We choose products based on the design concept and budget, collaborating on furniture, fixtures, finishes, and equipment.",
      },
      {
        title: "Sourcing and Procurement",
        body: "We identify suppliers, obtain quotes, compare pricing and quality, and finalize purchase agreements.",
      },
      {
        title: "Delivery and Logistics",
        body: "We coordinate shipping, handling, and storage to ensure safe transport and minimize the risk of damage.",
      },
      {
        title: "Installation and Assembly",
        body: "Skilled professionals handle assembly and installation under designer oversight for a precise result.",
      },
      {
        title: "Quality Assurance and Completion",
        body: "We conduct a thorough inspection of installed products to ensure quality standards and address any defects promptly.",
      },
    ],
    benefitsHeading: "Our Services Include",
    benefits: [
      {
        title: "Extensive Product Selection",
        body: "Access to a diverse range of commercial interior products to suit any brief and budget.",
      },
      {
        title: "Efficient Procurement and Logistics",
        body: "A streamlined process to source products from trusted suppliers and manufacturers.",
      },
      {
        title: "Professional Installation Team",
        body: "Highly skilled installers with deep commercial expertise.",
      },
      {
        title: "Quality Assurance and Customer Satisfaction",
        body: "Thorough quality checks and inspections at every stage.",
      },
    ],
  },
  {
    slug: "project-and-mep-consultancy",
    name: "Project & MEP Consultancy",
    title: "Project & MEP Consultancy",
    description:
      "Expert project and MEP consultancy powered by technology and AI — needs analysis, site assessment, design concepts, and space planning for successful outcomes.",
    hero: "/img/108.jpg",
    intro:
      "Sound engineering behind beautiful design. Our project and MEP consultancy combines deep industry knowledge with technology to plan, recommend, and deliver successful outcomes.",
    processHeading: "Our Project & MEP Consultancy Process",
    process: [
      {
        title: "Understanding Client Requirements",
        body: "We assess and comprehend the unique requirements, preferences, and budget of each client.",
      },
      {
        title: "Tailored Recommendations Based on Industry Knowledge",
        body: "We use extensive industry knowledge and expertise to develop customized recommendations.",
      },
      {
        title: "Implementation for Successful Results",
        body: "We monitor and evaluate the progress of implemented solutions to ensure the desired outcomes are achieved.",
      },
    ],
    benefitsHeading: "Our Project Consultancy Services Include",
    benefits: [
      {
        title: "Needs Analysis",
        body: "Understanding client goals, objectives, and requirements in depth.",
      },
      {
        title: "Site Assessment",
        body: "Identifying potential challenges and developing a plan that maximizes the available space.",
      },
      {
        title: "Design Concept",
        body: "Developing a concept that outlines the overall look and feel of the space.",
      },
      {
        title: "Space Planning",
        body: "Creating detailed space plans that optimize the use of available space.",
      },
    ],
  },
  {
    slug: "design-consultancy",
    name: "Design Consultancy",
    title: "Strategic Design Consultancy through Tech & AI",
    description:
      "Strategic design consultancy that makes efficient use of every inch of your office space through technology and AI — for inspiring commercial environments across India.",
    hero: "/img/101.jpg",
    intro:
      "Strategic creativity for commercial interiors. We bring a tech-enabled, client-centric approach to design consultancy — making efficient use of every inch of your space.",
    processHeading: "Our Design Consultancy Process",
    process: [
      {
        title: "Initial Consultation",
        body: "We meet with you to understand your requirements, goals, and budget — gathering information on scope, purpose, desired aesthetics, and branding considerations.",
      },
      {
        title: "Concept Development",
        body: "We create design concepts and present them through sketches, mood boards, or 3D renderings to illustrate the proposed direction.",
      },
      {
        title: "Design Refinement",
        body: "After your feedback, we refine the selected concept, making adjustments so the design aligns closely with your vision.",
      },
      {
        title: "Detailed Design Development",
        body: "Once approved, we create detailed drawings, floor plans, and elevations, and select materials, finishes, and fixtures.",
      },
      {
        title: "Design Documentation",
        body: "We prepare comprehensive documentation — construction drawings, specifications, and schedules with technical details and measurements.",
      },
      {
        title: "Project Coordination and Execution",
        body: "We collaborate with contractors, vendors, and suppliers to ensure the design is executed accurately and to the desired quality.",
      },
    ],
    benefitsHeading: "Design Consultancy, Simplified",
    benefits: [
      {
        title: "Efficient Project Management",
        body: "We help you save time and money with efficient project management.",
      },
      {
        title: "Early Issue Identification",
        body: "By analyzing designs in the early stages, we proactively identify potential issues.",
      },
      {
        title: "Versatile Design Solutions",
        body: "Whether updating an existing space or creating a new one, we provide versatile solutions.",
      },
      {
        title: "Client-Centric Collaboration",
        body: "We actively engage with you so your input and vision are incorporated throughout.",
      },
    ],
  },
  {
    slug: "space-planning",
    name: "Space Planning",
    title: "Innovative Space Planning",
    description:
      "Strategic space planning that optimizes commercial and office environments — zoning, circulation, and layouts that maximize functionality across India.",
    hero: "/img/104.jpg",
    intro:
      "Every inch, working harder. Our space planning optimizes layouts for flow, function, and wellbeing — turning raw floor area into an environment that performs.",
    processHeading: "Our Space Planning Process",
    process: [
      {
        title: "Assessing Client Needs",
        body: "We understand your requirements, objectives, and budget, and determine the purpose of the space and any needs unique to your business.",
      },
      {
        title: "Analyzing Space and Site",
        body: "We evaluate dimensions, structural elements, and site conditions — natural light, ventilation, access points, and building codes.",
      },
      {
        title: "Defining Zones and Functions",
        body: "We divide the space into distinct zones: reception, workstations, meeting rooms, storage, circulation, and specialized areas.",
      },
      {
        title: "Space Allocation and Circulation",
        body: "We allocate proportions to each zone by importance and usage, ensuring efficient circulation and ergonomic considerations.",
      },
      {
        title: "Developing Layout Options",
        body: "We generate multiple layout options that maximize utilization — furniture placement, sightlines, and aesthetic appeal.",
      },
      {
        title: "Furniture and Equipment Selection",
        body: "We select furniture, fixtures, and equipment that align with the plan and your functional and aesthetic preferences.",
      },
    ],
    benefitsHeading: "A Holistic Approach to Optimal Workspaces",
    benefits: [
      {
        title: "Optimal Space Utilization",
        body: "Efficient and effective use of available space, maximizing functionality and minimizing waste.",
      },
      {
        title: "Improved Workflow and Productivity",
        body: "Well-planned spaces enable smooth workflow, streamlined processes, and easy navigation.",
      },
      {
        title: "Enhanced User Experience",
        body: "Thoughtful planning considers comfort, creating a pleasant environment for employees, customers, and visitors.",
      },
      {
        title: "Cost Optimization",
        body: "Careful analysis reduces unnecessary expenses and optimizes the budget for construction, furniture, and equipment.",
      },
    ],
  },
  {
    slug: "design-and-build",
    name: "Design & Build",
    title: "Integrated Design and Build Solutions",
    description:
      "Seamless design and build services — from concept to a finished office in reality. AirBrick Infra brings life to any type of workspace through integrated delivery.",
    hero: "/img/109.jpg",
    intro:
      "One partner, concept to keys. Our integrated design-and-build model aligns design with your business strategy and delivers it with craftsmanship — no gaps, no finger-pointing.",
    processHeading: "Our Design & Build Process",
    process: [
      {
        title: "Understanding Business Goals and Objectives",
        body: "We align design with your business strategy.",
        bullets: [
          "Aligning design with business strategy",
          "Gathering insights into desired outcomes",
          "Considering long-term goals and short-term objectives",
        ],
      },
      {
        title: "Listening to Ideas and Incorporating Brand Identity",
        body: "We actively engage with your input and weave in your brand.",
        bullets: [
          "Actively engaging with client input and preferences",
          "Emphasizing the value of the client perspective",
          "Integrating brand values, personality, and visual identity",
        ],
      },
      {
        title: "Considering Target Audience & Business Needs",
        body: "We tailor the design to the people who'll use it.",
        bullets: [
          "Conducting audience research and analysis",
          "Tailoring design to user expectations and preferences",
          "Addressing the unique challenges of the business",
        ],
      },
    ],
    benefitsHeading: "Commitment to Craftsmanship and Customer Service",
    benefits: [
      {
        title: "Collaboration for Perfection",
        body: "A skilled operations team and vendor partners working hand in hand with designers.",
      },
      {
        title: "Craftsmanship and Materials",
        body: "Ensuring the durability and longevity of the constructed space.",
      },
      {
        title: "Exceptional Customer Service",
        body: "An unwavering commitment to providing excellent customer service.",
      },
      {
        title: "Impact of Design on Business",
        body: "Recognizing the significance of well-designed spaces for business success.",
      },
    ],
  },
];

export function getService(slug: string) {
  return servicesContent.find((s) => s.slug === slug);
}
