// ─────────────────────────────────────────────────────────────────────────
// RV Group Contracting — site content
// Sourced from the company's 2025 profile, UAE trade licences, VAT
// certificates and the client-supplied positioning brief. Edit here;
// components read from this file.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "RV Group Contracting",
  legalName: "Royal Value Electromechanical LLC",
  parent: "Royal Value Group",
  url: "https://rvgroupcontracting.com",
  phoneDisplay: "+971 55 231 3467",
  phoneHref: "tel:+971552313467",
  phoneSharjahDisplay: "+971 6 767 7307",
  phoneSharjahHref: "tel:+97167677307",
  whatsappHref:
    "https://wa.me/971552313467?text=Hi%20RV%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  email: "info@royalvaluedxb.com",
  emailHref: "mailto:info@royalvaluedxb.com",
  salesEmail: "sales@royalvaluedxb.com",
  salesEmailHref: "mailto:sales@royalvaluedxb.com",
  contactPerson: "Azeez Shahul Hameed",
  contactPersonTitle: "Technical Manager",
  founded: 2007,
  description:
    "A multidisciplinary contracting company specialising in Civil Construction, MEP and HVAC works across Dubai, Sharjah, Ajman and Abu Dhabi. RV Group Contracting delivers end-to-end construction and engineering solutions for residential, commercial, industrial and institutional projects — trading since 2007.",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Clients" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export const heroStats = [
  { value: 2007, suffix: "", label: "Trading since" },
  { value: 95, suffix: "+", label: "Projects, 2008–2025" },
  { value: 48, suffix: "", label: "Technical staff" },
  { value: 4, suffix: "", label: "Emirates covered" },
];

// ── Core services ───────────────────────────────────────────────────────
export type ServiceGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  subgroups?: { label: string; items: string[] }[];
  image: { src: string; alt: string };
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "civil",
    title: "Civil Construction",
    blurb:
      "Complete building construction and execution for residential, commercial, industrial and institutional projects — from site mobilisation to final handover, built to approved drawings and specifications.",
    items: [
      "Civil and structural construction",
      "Foundations and substructure works",
      "RCC and structural works",
      "Masonry and blockwork",
      "Plastering and finishing works",
      "Flooring and tiling",
      "Waterproofing works",
      "False ceiling and partition works",
      "Painting and architectural finishes",
      "Doors, windows and other finishing works",
      "External development works",
      "Renovation and refurbishment",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1599995903128-531fc7fb694b",
      alt: "Construction cranes over a building site at low sun",
    },
  },
  {
    id: "mep",
    title: "MEP — Mechanical, Electrical & Plumbing",
    blurb:
      "Comprehensive MEP installation and execution, coordinated tightly with civil and architectural works to minimise site conflicts and delays.",
    items: [],
    subgroups: [
      {
        label: "Mechanical",
        items: [
          "HVAC installation",
          "Ventilation systems",
          "Exhaust and fresh-air systems",
          "Ductwork installation",
          "Chilled water & refrigerant piping",
          "Pumps and equipment installation",
          "Insulation works",
          "Testing and commissioning",
        ],
      },
      {
        label: "Electrical",
        items: [
          "Electrical containment",
          "Cable tray and trunking installation",
          "Power distribution",
          "Lighting installation",
          "Wiring and cabling",
          "Distribution boards and panels",
          "Earthing systems",
          "Testing and commissioning",
        ],
      },
      {
        label: "Plumbing & drainage",
        items: [
          "Water supply piping",
          "Hot and cold water systems",
          "Soil and waste systems",
          "Stormwater drainage",
          "Sanitary installations",
          "Pumps and water tanks",
          "Pipe insulation",
          "Testing and commissioning",
        ],
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14",
      alt: "Electrician in a hard hat and face shield testing an electrical panel",
    },
  },
  {
    id: "hvac",
    title: "HVAC",
    blurb:
      "Reliable climate control, professionally installed — for commercial, residential, industrial, hospitality, healthcare and institutional buildings, executed to client-approved designs and equipment selections.",
    items: [
      "VRF / VRV system installation",
      "Split and package AC systems",
      "Chilled water systems",
      "AHU and FCU installation",
      "Chillers and cooling equipment",
      "HVAC ductwork",
      "Fresh-air, exhaust & ventilation systems",
      "Chilled water & refrigerant piping",
      "Thermal insulation",
      "HVAC controls installation",
      "Testing, commissioning & balancing",
      "Performance verification",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1758789667762-56175fe4601c",
      alt: "Modern industrial building exterior with loading docks",
    },
  },
];

// ── Our Approach — a genuine 6-stage sequence ───────────────────────────
export const approach = [
  {
    title: "Understand",
    body: "We review the approved project drawings, specifications, scope of work, schedules and site requirements before committing a single resource.",
  },
  {
    title: "Plan",
    body: "Manpower, materials, equipment and subcontractors are organised against the programme, so execution starts efficient rather than reactive.",
  },
  {
    title: "Execute",
    body: "Our experienced site teams carry out construction, MEP and HVAC works in accordance with the approved project requirements — not a design of our own.",
  },
  {
    title: "Coordinate",
    body: "We coordinate daily with clients, consultants, contractors and other trades to resolve site-level issues and keep progress on track.",
  },
  {
    title: "Test & Commission",
    body: "Every system is inspected, tested and commissioned, then prepared for client and consultant approval before sign-off.",
  },
  {
    title: "Handover",
    body: "Snag rectification, documentation and final inspections are closed out, and the project is handed over complete.",
  },
];

// ── Why choose us ────────────────────────────────────────────────────────
export const whyUs = [
  {
    icon: "hammer",
    title: "Execution Expertise",
    body: "Our strength is practical, on-site execution backed by experienced construction and MEP professionals.",
  },
  {
    icon: "check",
    title: "Quality Focus",
    body: "We follow project specifications, approved materials, installation procedures and quality-control requirements.",
  },
  {
    icon: "layers",
    title: "Integrated Execution",
    body: "Civil, architectural, MEP and HVAC activities are coordinated to achieve smoother, clash-free project delivery.",
  },
  {
    icon: "shield",
    title: "Safety First",
    body: "We promote safe working practices and responsible site management throughout every stage of execution.",
  },
  {
    icon: "clock",
    title: "Schedule Commitment",
    body: "Resources and activities are planned to support project timelines and minimise avoidable delays.",
  },
  {
    icon: "users",
    title: "Professional Coordination",
    body: "Clear communication with clients, consultants, main contractors, suppliers and other project stakeholders.",
  },
];

export const strengths = [
  "Multidisciplinary construction capability",
  "Experienced engineering and site teams",
  "Integrated Civil + MEP + HVAC execution",
  "Quality-focused workmanship",
  "Safety-conscious operations",
  "Schedule and cost control",
  "Procurement and material management",
  "Testing and commissioning expertise",
  "Client and consultant coordination",
  "After-sales maintenance and support",
];

export const commitment = {
  eyebrow: "Our Commitment",
  headline: "Build with quality. Execute with precision. Deliver with responsibility.",
  body: "We combine experienced people, practical construction knowledge, disciplined site management and strong coordination to deliver dependable building, MEP and HVAC works. Whether it's a new building, a commercial facility, an industrial project or a renovation, we deliver work that meets the required quality, safety, schedule and performance standards.",
};

export const trust = {
  eyebrow: "Our Reputation Is Built on Trust",
  headline: "Quality workmanship. Professional execution. Complete discretion.",
  body: "From residential construction to complex MEP and HVAC installations, RV Group Contracting brings the same commitment to every project. Our experience with distinguished private clients reflects the trust placed in us to work responsibly in environments where quality, confidentiality and reliability matter most.",
  points: [
    {
      title: "Professionalism",
      body: "Experienced teams capable of working in demanding private and high-profile environments.",
    },
    {
      title: "Discretion",
      body: "Respect for client privacy and confidentiality throughout the project.",
    },
    {
      title: "Quality Execution",
      body: "Attention to workmanship, materials, installation standards and finishing quality.",
    },
    {
      title: "Integrated Services",
      body: "Building construction, MEP and HVAC execution under coordinated project management.",
    },
    {
      title: "Reliable Delivery",
      body: "A disciplined approach to manpower, materials, coordination, testing and handover.",
    },
  ],
};

export const projectTypes = [
  "Residential Buildings",
  "Villas & Apartments",
  "Commercial Buildings",
  "Office Buildings",
  "Shopping & Retail Facilities",
  "Hotels & Hospitality Projects",
  "Hospitals & Healthcare Facilities",
  "Educational Institutions",
  "Industrial Buildings",
  "Warehouses & Logistics Facilities",
  "Restaurants & Commercial Kitchens",
  "Government & Institutional Buildings",
  "Renovation & Fit-Out Projects",
];

export const coverage = [
  {
    emirate: "Dubai",
    tag: "DED Licence 592798 · valid to 14 Mar 2026",
    body: "Royal Value Electromechanical LLC, Al Mazoon Building, Damascus Street, Al Qusais. Building Contracting, Electromechanical and HVAC activities on one licence since 2007.",
  },
  {
    emirate: "Sharjah",
    tag: "SEDD Licence 777338 · valid to 2 Feb 2026",
    body: "Royal Value Technical Contracting LLC, Industrial Area 15, Muwaileh — air-conditioning units, sixth-category contracting and sanitary works.",
  },
  {
    emirate: "Ajman",
    tag: "Project basis — Ajman Municipality",
    body: "Delivered HVAC and cold-storage works for Ajman Municipality at Ocean Fisheries; registered per project with the municipality.",
  },
  {
    emirate: "Abu Dhabi",
    tag: "Economic Licence CN-5446200 · valid to 31 Aug 2026",
    body: "Branch opened July 2024 for palace, camp and infrastructure execution at Musaffah for distinguished private clients.",
  },
];

export const clients = [
  "The Private Office",
  "Sinyar Property Management",
  "Dubai World Trade Centre",
  "National Bank of Fujairah",
  "Al Showaib Real Estate",
  "Al Shola Transport",
  "Environ Falcon Contracting",
  "CBRE Excellerate Facilities Services",
  "Jamal Al Ghurair Group of Companies",
  "Al Fattan Properties",
  "Terazzo",
  "Dubai Petroleum",
  "Maritime City",
  "Damen Shipyard",
  "Ramez Group",
  "DEWA",
  "Dubai Police",
  "Dubai Court / Public Prosecution",
  "Peeraj Construction Company",
  "Advanced Integration Automation",
  "Meydan Hotels & Hospitality",
  "Dubai Integrated & Economic Zones",
  "Daikin Air-Conditioning",
  "Dubai Properties",
  "Atlas Continental Contracting",
];

export const additionalServices = [
  {
    title: "Cleaning services",
    body: "Commercial, residential and government cleaning, property maintenance, water tank cleaning and pest control with trained, specialised workmen.",
  },
  {
    title: "Electricians & electrical",
    body: "General electrical maintenance and repair, MCCB / DB / ELCB / MCB replacement, rewiring, short-circuit rectification and home lighting design.",
  },
  {
    title: "AC services",
    body: "Repair and maintenance for all types of air-conditioning systems, with rapid response and trained technicians.",
  },
  {
    title: "Painters & painting",
    body: "Sanding, filling and finishing through to the final coat, for residential and commercial interiors and exteriors.",
  },
  {
    title: "Duct cleaning",
    body: "Removal of dust, debris and microbial growth from HVAC ductwork to restore airflow and indoor air quality.",
  },
  {
    title: "Water tank cleaning",
    body: "Full clean and disinfection of storage tanks, removing sediment and microbial contamination to keep supply safe.",
  },
  {
    title: "Plumbing services",
    body: "Installation and repair of any plumbing system, from a single fixture to a building's supply and drainage network.",
  },
  {
    title: "Waterproofing",
    body: "Diagnosis and permanent treatment of leaks and water ingress, including basement and roof waterproofing.",
  },
  {
    title: "Landscaping",
    body: "Design and build of gardens and grounds, from planting schemes to full external landscape packages.",
  },
];

export const faqs = [
  {
    q: "Is RV Group Contracting the same company as Royal Value Electromechanical?",
    a: "Yes. RV Group Contracting trades under Royal Value Electromechanical LLC (Dubai DED Licence 592798), alongside its Sharjah entity Royal Value Technical Contracting LLC (Licence 777338) and an Abu Dhabi branch (Licence CN-5446200). All are part of the same group, led by Azeez Shahul Hameed since 2007.",
  },
  {
    q: "Do you design buildings, or execute someone else's design?",
    a: "We focus on execution, not design engineering. We transform approved drawings, specifications and project requirements into a built, tested and commissioned result — coordinating civil, MEP and HVAC trades so the design comes together on site the way it was intended to on paper.",
  },
  {
    q: "Do you work as a main contractor, or only as an MEP subcontractor?",
    a: "Both. Much of our project history is as the electromechanical or HVAC execution partner to a main contractor. We've also delivered full civil, MEP and HVAC execution directly for private clients, always building to consultant-approved drawings rather than our own design.",
  },
  {
    q: "How is a project priced?",
    a: "Every quote follows a site visit and a review of the approved drawings and specification — civil, MEP and HVAC scopes are priced against what's actually being built, not a generic rate card. Get in touch with your drawings and we'll turn around a number quickly.",
  },
  {
    q: "Do you handle the municipality approvals?",
    a: "We coordinate submission and follow-up with Dubai Municipality, Sharjah Municipality or Ajman Municipality, including Civil Defence where the building requires it, working from the consultant's approved drawings. Government fees are paid at cost.",
  },
  {
    q: "Can you take over MEP or HVAC works another contractor left unfinished?",
    a: "Regularly — several of our projects, including a DEWA power plant refurbishment and an RTA Metro AHU relocation, were exactly this kind of handover. We price it as a separate condition survey first, so you know what you're inheriting before committing to completion.",
  },
  {
    q: "What guarantee do I get after handover?",
    a: "A 12-month defects liability period covering workmanship, plus manufacturers' warranties on equipment — typically 12 to 60 months depending on the item. Because our own team installs what it commissions, callbacks come back to the people who built the system.",
  },
];

export const hq = {
  label: "Head office — Sharjah",
  companyOnMap: "Royal Value Technical Contracting LLC",
  addressLine: "Industrial Area 15, Muwaileh, Sharjah",
  lat: 25.2917,
  lng: 55.4420,
  zoom: 15,
  shareUrl: "https://maps.app.goo.gl/3D8rNjXdNqy1FcDQ8?g_st=aw",
  get embedUrl() {
    return `https://maps.google.com/maps?q=${this.lat},${this.lng}&z=${this.zoom}&output=embed`;
  },
};

export const contactInfo = {
  callWhatsapp: site.phoneDisplay,
  sharjahOffice: site.phoneSharjahDisplay,
  email: site.salesEmail,
  sharjah: {
    company: "Royal Value Technical Contracting LLC",
    line1: "Industrial Area 15, Muwaileh",
    line2: "P.O. Box 36210, Sharjah",
  },
  dubai: {
    company: "Royal Value Electromechanical LLC",
    line1: "Al Mazoon Building, Damascus Street",
    line2: "Al Qusais, Dubai — P.O. Box 94558",
  },
  abudhabi: {
    company: "Royal Value Electromechanical LLC — Abu Dhabi Branch",
    line1: "Musaffah, Abu Dhabi",
  },
  hours: "Saturday – Thursday, 8:00 – 18:00 GST",
};

export const footerLinks = {
  services: ["Civil Construction", "MEP (Mechanical/Electrical/Plumbing)", "HVAC", "Facilities & maintenance"],
  company: [
    { label: "Services", href: "#services" },
    { label: "Our approach", href: "#process" },
    { label: "Clients", href: "#projects" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#quote" },
  ],
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "RV Group Contracting",
  alternateName: [
    "Royal Value Electromechanical LLC",
    "Royal Value Technical Contracting LLC",
    "Royal Value Group",
  ],
  url: "https://rvgroupcontracting.com/",
  description:
    "Multidisciplinary contracting company specialising in Civil Construction, MEP and HVAC execution across Dubai, Sharjah, Ajman and Abu Dhabi since 2007.",
  foundingDate: "2007-03-15",
  telephone: "+971552313467",
  email: "sales@royalvaluedxb.com",
  identifier: [
    { "@type": "PropertyValue", name: "Dubai DED Trade Licence", value: "592798" },
    { "@type": "PropertyValue", name: "Sharjah SEDD Trade Licence", value: "777338" },
    { "@type": "PropertyValue", name: "Abu Dhabi Economic Licence", value: "CN-5446200" },
  ],
  employee: { "@type": "Person", name: "Azeez Shahul Hameed", jobTitle: "Technical Manager" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 48 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area 15, Muwaileh",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.2917, longitude: 55.4420 },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Abu Dhabi" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil construction" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEP — mechanical, electrical & plumbing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC installation & execution" } },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
