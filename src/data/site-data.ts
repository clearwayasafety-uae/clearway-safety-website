export type Product = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export type Category = {
  title: string;
  description: string;
  icon: string;
};

export type Industry = {
  title: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export const heroStats = [
  { value: "20+", label: "Years of trusted supply" },
  { value: "UAE-wide", label: "Delivery coverage" },
  { value: "24/7", label: "Rapid quote response" },
];

export const productCatalog: Product[] = [
  {
    name: "Industrial Safety Helmets",
    category: "Head Protection",
    description: "Impact-resistant helmets for construction, utilities, and industrial sites.",
    highlights: ["ANSI-rated", "Adjustable suspension", "High visibility options"],
    featured: true,
  },
  {
    name: "Reflective Safety Vests",
    category: "Visibility Gear",
    description: "High-visibility vests engineered for road crews, logistics, and warehouse teams.",
    highlights: ["Day/night visibility", "Breathable mesh", "Custom branding available"],
  },
  {
    name: "Fire Extinguishers",
    category: "Fire Protection",
    description: "Portable and cabinet-mounted extinguishers for commercial and industrial use.",
    highlights: ["CO2 and foam variants", "UL-certified", "Maintenance support"],
  },
  {
    name: "Traffic Cones & Barriers",
    category: "Road Safety",
    description: "Durable traffic control products for temporary works, facility access, and public sites.",
    highlights: ["Reflective sleeves", "Weather-resistant", "Bulk supply"],
  },
  {
    name: "Safety Goggles",
    category: "Eye Protection",
    description: "Premium eyewear designed for fabrication, laboratories, and high-risk environments.",
    highlights: ["Anti-fog lenses", "Wide field view", "Impact protection"],
  },
  {
    name: "PPE Starter Kits",
    category: "Combined Protection",
    description: "Turnkey kits for new hires, site mobilization, and temporary workforce management.",
    highlights: ["Custom bundles", "Quick dispatch", "Cost-effective pricing"],
  },
];

export const categories: Category[] = [
  {
    title: "Industrial Safety",
    description: "Helmets, gloves, goggles, and hearing protection for demanding environments.",
    icon: "🦺",
  },
  {
    title: "Road Safety",
    description: "Traffic cones, barriers, signage, and delineators for safe site movement.",
    icon: "🚧",
  },
  {
    title: "Fire Safety",
    description: "Extinguishers, alarms, suppression accessories, and inspection support.",
    icon: "🚒",
  },
  {
    title: "PPE Supply",
    description: "Bulk orders for contractors, facilities, hospitals, schools, and hospitality teams.",
    icon: "🧰",
  },
];

export const industries: Industry[] = [
  { title: "Construction Companies", description: "Reliable PPE and site safety stock for active projects and rapid mobilization." },
  { title: "Oil & Gas", description: "Certified protection equipment for hazardous zone operations and field teams." },
  { title: "Factories & Warehouses", description: "Operational safety solutions that support daily productivity and compliance." },
  { title: "Government & MEP Contractors", description: "Procurement-ready products with dependable delivery and documentation support." },
  { title: "Facility Management", description: "Ongoing compliance products for properties, campuses, utilities, and public buildings." },
  { title: "Hospitals, Schools & Hotels", description: "Public-facing safety supplies backed by responsive service and wholesale value." },
];

export const bestSellingProducts = productCatalog.filter((item) => item.featured);

export const blogPosts: BlogPost[] = [
  {
    slug: "ppe-compliance-uae-projects",
    title: "How UAE projects are tightening PPE compliance in 2026",
    excerpt: "From contractor audits to site inspections, discover the practical standards driving safer procurement.",
    category: "Safety Insights",
    date: "Jun 18, 2026",
  },
  {
    slug: "road-safety-upgrades-for-facilities",
    title: "Road safety upgrades that protect staff and visitors",
    excerpt: "Learn how clear signage, barrier systems, and reflective products reduce accidents across busy sites.",
    category: "Operations",
    date: "May 27, 2026",
  },
  {
    slug: "bulk-ppe-sourcing-for-growing-teams",
    title: "Why bulk PPE sourcing is becoming the preferred model for facilities",
    excerpt: "A closer look at cost control, availability, and consistent supply for growing operations.",
    category: "Procurement",
    date: "Apr 12, 2026",
  },
];

export const reviews = [
  {
    quote: "Clearway delivered a large PPE order within days and the quality exceeded our expectations.",
    author: "Operations Director, ADNOC Contractor",
  },
  {
    quote: "Their team understood our project requirements immediately and supported us with a tailored plan.",
    author: "Procurement Lead, Industrial Facility Group",
  },
  {
    quote: "Professional service, fast response, and dependable stock availability for all our safety needs.",
    author: "Facilities Manager, Hospitality Group",
  },
];

export const faqs = [
  {
    question: "Do you supply both wholesale and retail orders?",
    answer: "Yes. We serve large-scale contractors and individual buyers across the UAE, with competitive pricing for both bulk and smaller orders.",
  },
  {
    question: "Can you deliver across the UAE?",
    answer: "Absolutely. We provide dependable delivery across Abu Dhabi, Dubai, Sharjah, and the wider UAE.",
  },
  {
    question: "Do you offer brand-specific or custom safety products?",
    answer: "We can support custom requirements and project-based sourcing, subject to availability and technical specification.",
  },
  {
    question: "How quickly can I receive a quote?",
    answer: "Most quotations are sent the same day, with our team prioritizing urgent procurement and fast-moving site needs.",
  },
];

export const stats = [
  { value: "5000+", label: "Safety units supplied" },
  { value: "98%", label: "Repeat client satisfaction" },
  { value: "12", label: "UAE delivery zones" },
];
