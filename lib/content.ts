// ─────────────────────────────────────────────────────────────────────────
// RV Group Contracting — site content
// Sourced from the company's 2025 profile, UAE trade licences and VAT
// certificates. Edit here; components read from this file.
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
  contactPerson: "Azeez Shahul Hameed",
  contactPersonTitle: "Technical Manager",
  founded: 2007,
  description:
    "Civil construction, MEP and HVAC contractor trading since 2007. Royal Value Electromechanical LLC delivers building contracting, electromechanical and air-conditioning works across Dubai, Sharjah, Ajman and Abu Dhabi — for DEWA, Dubai Police, the Presidential Court and 90+ other clients.",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#capability", label: "Capability" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export const heroStat = { value: 2007, label: "Trading since" };

export const heroStats = [
  { value: 2007, suffix: "", label: "Licensed and trading" },
  { value: 95, suffix: "+", label: "Projects, 2008–2025" },
  { value: 48, suffix: "", label: "Technical staff" },
  { value: 4, suffix: "", label: "Emirates covered" },
];

export const credibility = {
  line1: "Royal Value Electromechanical LLC · Dubai DED Licence 592798, held since 15 March 2007",
  line2: "Building Contracting · Electromechanical Equipment · Air-Conditioning & Ventilation — one licence, three activities",
};

// ── Core services (as supplied) ─────────────────────────────────────────
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
      "Structure, envelope and finishes — building and structural work carried out by our own site teams from foundation to handover.",
    items: [
      "Building construction & structural works",
      "RCC and concrete works",
      "Foundations and excavation",
      "Blockwork and masonry",
      "Plastering and waterproofing",
      "Flooring and tiling",
      "Roofing works",
      "External development and paving",
      "Renovation and refurbishment",
      "Finishing and fit-out works",
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
      "The trade the company was built on in 2007. Mechanical, electrical and plumbing works delivered by our own 48-strong technical team — not subcontracted.",
    items: [],
    subgroups: [
      {
        label: "Mechanical",
        items: [
          "Mechanical equipment installation",
          "Pump and piping systems",
          "Mechanical room works",
          "Equipment connections and commissioning",
        ],
      },
      {
        label: "Electrical",
        items: [
          "LV electrical systems",
          "Power distribution",
          "Lighting systems",
          "Cable laying and containment",
          "Earthing and lightning protection",
          "Generator and UPS installation",
          "Testing and commissioning",
        ],
      },
      {
        label: "Plumbing",
        items: [
          "Water supply systems",
          "Drainage and sewerage",
          "Hot and cold-water systems",
          "Sanitary installations",
          "Stormwater drainage",
          "Pumping systems",
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
      "Design, supply, installation and maintenance of cooling systems — from a single split unit to a chilled-water plant serving a government palace.",
    items: [
      "Central air-conditioning systems",
      "VRF / VRV systems",
      "Chilled-water systems",
      "Package and split AC systems",
      "AHU and FCU installation",
      "Ductwork fabrication and installation",
      "Chilled-water piping",
      "Ventilation and exhaust systems",
      "Smoke extraction systems",
      "Insulation works",
      "HVAC controls and BMS integration",
      "Testing, balancing and commissioning",
      "Preventive maintenance and service",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1758789667762-56175fe4601c",
      alt: "Modern industrial building exterior with loading docks",
    },
  },
];

export const projectExecution = [
  { title: "Planning", body: "Scope, drawings and a programme agreed with the client and consultant before a single trade mobilises." },
  { title: "Engineering", body: "Shop drawings, coordination and value engineering across civil, MEP and HVAC to remove clashes on paper." },
  { title: "Procurement", body: "Materials and equipment ordered against the approved specification, tracked against long-lead items." },
  { title: "Installation", body: "Civil, mechanical, electrical and HVAC crews work in sequence on site, supervised daily." },
  { title: "Testing", body: "Every system tested against design criteria before it is presented for inspection." },
  { title: "Commissioning", body: "Systems balanced, tuned and proven under load with the consultant and authority present." },
  { title: "Handover", body: "As-built drawings, O&M manuals, warranties and a closed snag list delivered with the keys." },
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

export const projectTypes = [
  "Residential buildings",
  "Villas and apartments",
  "Commercial buildings",
  "Office buildings",
  "Hotels and resorts",
  "Hospitals and healthcare facilities",
  "Schools and educational institutions",
  "Shopping malls",
  "Warehouses and logistics facilities",
  "Factories and industrial buildings",
  "Data centers and specialized facilities",
  "Renovation and fit-out projects",
];

export const mechanisms = [
  {
    title: "MEP is our own trade, not a subcontract",
    figure: "48",
    figureLabel: "technical staff, on our own payroll",
    body: "Most main contractors sublet mechanical, electrical and plumbing work, then add a margin on top of the sub's price. We've run this trade ourselves since 2007 — for DEWA's power plant, Dubai Police HQ and the Presidential Court's palaces. On your project it's done at cost, by the same team.",
  },
  {
    title: "One licence, three activities",
    figure: "3",
    figureLabel: "activities on a single Dubai DED licence",
    body: "Building Contracting, Electromechanical Equipment, and Air-Conditioning & Ventilation all sit on Licence 592798. That means design, structure and MEP move under one contract instead of three, so a specification decision costs a conversation, not a variation claim.",
  },
  {
    title: "Four emirates, one supply chain",
    figure: "4",
    figureLabel: "emirates covered on our own licences",
    body: "Dubai, Sharjah, Ajman and — since 2024 — an Abu Dhabi branch for the Presidential Court. Crews, plant and material orders move across all four without a mobilisation premium tacked onto your quote.",
  },
];

export const pricingTable = {
  note: "Indicative build-only guide for a direct villa build, AED per square foot of built-up area. Excludes land, authority fees and furniture. MEP, warehouse and fit-out works are quoted per project after a site visit.",
  rows: [
    {
      spec: "Standard",
      pill: null as string | null,
      villa: "350 – 480",
      warehouse: "140 – 190",
      buys: "Sound structure, local ceramic, standard joinery and split units.",
    },
    {
      spec: "Premium",
      pill: "Most common",
      villa: "520 – 680",
      warehouse: "200 – 260",
      buys: "Large-format porcelain, solid-core doors, ducted HVAC, LED cove lighting, quality sanitaryware.",
    },
    {
      spec: "Luxury",
      pill: null,
      villa: "700 – 950",
      warehouse: "270 – 340",
      buys: "Imported stone, bespoke joinery, VRF systems, home automation, pool and landscape package.",
    },
  ],
};

export type Spec = "standard" | "premium" | "luxury";
export type ProjectType = "villa" | "warehouse";

export const RATES: Record<ProjectType, Record<Spec, [number, number]>> = {
  villa: { standard: [350, 480], premium: [520, 680], luxury: [700, 950] },
  warehouse: { standard: [140, 190], premium: [200, 260], luxury: [270, 340] },
};

export const COVERAGE: Record<ProjectType, number> = {
  villa: 0.55,
  warehouse: 0.8,
};

export const coverage = [
  {
    emirate: "Dubai",
    tag: "DED Licence 592798 · valid to 14 Mar 2026",
    body: "Head office — Al Mazoon Building, Damascus Street, Al Qusais. Building Contracting, Electromechanical and HVAC activities on one licence since 2007.",
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
    body: "Branch opened July 2024 for palace, camp and infrastructure work at Musaffah for the Presidential Court and The Private Office.",
  },
];

export const includedList = [
  "Architectural, structural and MEP drawings",
  "Authority submission and follow-up",
  "All materials to the agreed specification sheet",
  "Site supervision and weekly photo report",
  "Utility connection coordination",
  "12-month defects liability period",
];

export const excludedList = [
  "Land cost and plot-related government fees",
  "Soil investigation and topographic survey",
  "Authority permit and connection charges",
  "Loose furniture and white goods",
  "Changes requested after drawings are frozen",
  "Ground conditions materially different from the soil report",
];

export const technicalStaff = [
  "A/C",
  "Electrical",
  "Industrial Automation & SCADA",
  "Plumbing",
  "Fire Fighting & Fire Alarm",
  "Structural Steel Fabrication",
  "Water & waste-water management",
  "Landscaping & painting",
  "Annual Maintenance",
  "Civil maintenance works",
  "Authority Approvals",
];

export const fleet = [
  { item: "3-ton pickup", count: 1 },
  { item: "1-ton pickup", count: 5 },
  { item: "16-seater mini van", count: 1 },
  { item: "SUV", count: 3 },
  { item: "Cars", count: 2 },
];

export const orgChart = {
  root: "Managing Director",
  reports: "GM",
  branches: [
    { name: "Admin", chain: ["Admin Dept."] },
    { name: "Finance", chain: ["Finance Dept.", "Accountant", "Senior Accountant", "Accountant Assistant"] },
    { name: "Purchase", chain: ["Purchase Dept.", "Purchase Officer", "Purchase Office Assistant"] },
    {
      name: "Engineering",
      chain: ["Engineering"],
      sub: ["MEP Project", "Refreshment Project", "MEP Maintenance"],
    },
    { name: "Designing", chain: ["Designing", "Design Engineer", "MEP Draughtsman"] },
  ],
};

export const suppliers = [
  "Johnson Controls",
  "UTS Carrier",
  "Leminar Air Conditioning",
  "S.K.M Air Conditioning",
  "Daikin Air Conditioning",
  "VTS Clima",
  "Trane",
  "Juma Al Majid Est.",
  "O General",
  "Elapco Electronic Appliances",
  "Moonstar Electrical & Switchgear",
  "Econosto Mideast",
  "Al Sagar Engineering",
  "Energy International Corporation",
  "M.A.H.Y Khoory & Co.",
  "Al Raisi Power Solutions",
  "Gulf Pump",
  "Century Mechanical Systems",
  "Unigulf Air Conditioning",
  "System Air Trading",
  "Ventura Air Products",
  "GMAMCO",
];

export const clients = [
  "The Private Office",
  "Presidential Court",
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

export const projectRecord = {
  villas: {
    title: "Villas & residential",
    items: [
      { name: "Al Ghurair Villa", place: "Mirdiff, Dubai" },
      { name: "Mr. Adani Villa", place: "Jumeirah Pearl, Dubai" },
      { name: "Mr. & Mrs. Jiten Villa", place: "Dubai Hills Estate" },
      { name: "Al Walled Villa", place: "Jumeirah, Dubai" },
      { name: "G+1 Villa", place: "Mohaisinah, Dubai" },
      { name: "B+G+4+Loft residential", place: "Green Park, Jumeirah Village" },
      { name: "Burj Residence, Phase 3", place: "Business Bay, Dubai" },
      { name: "JVC commercial & residential tower", place: "Al Barsha South, Dubai" },
    ],
  },
  industrial: {
    title: "Warehouses, factories & industrial",
    items: [
      { name: "Iron Mountain records facility", place: "JAFZA" },
      { name: "G+1 office cum warehouse", place: "JAFZA" },
      { name: "MCC building, Damen Shipyard", place: "Sharjah" },
      { name: "Porcelain factory infrastructure", place: "Abu Dhabi — Jurong Intl." },
      { name: "Bridgestone / First Stop", place: "JAFZA" },
      { name: "BMA International", place: "JAFZA" },
      { name: "Al Khaleej Sugar factory", place: "Infra & chilled-water piping" },
      { name: "Ocean Fisheries cold storage", place: "Ajman Municipality" },
    ],
  },
  landmark: {
    title: "Government, banks & landmark",
    items: [
      { name: "Al Mina Palace", place: "Abu Dhabi — Presidential Court" },
      { name: "Al Rawdah Al Sharqiyah Palace", place: "Al Ain" },
      { name: "Al Khawaneej Palace", place: "Dubai" },
      { name: "Dubai Police HQ", place: "A/C works" },
      { name: "DEWA power plant", place: "Al Aweer, refurbishment" },
      { name: "DEWA head office", place: "Wafi" },
      { name: "RTA Metro Green Line, Ph. 11", place: "AHU relocation" },
      { name: "National Bank of Fujairah", place: "DWC South & multiple branches" },
      { name: "Dubai World Trade Centre", place: "Maintenance works" },
      { name: "Dubai Silicon Oasis Authority", place: "BTU meter installations, DDP buildings" },
      { name: "Etisalat head office", place: "Chilled-water works" },
    ],
  },
};

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
    a: "Yes. RV Group Contracting trades under Royal Value Electromechanical LLC (Dubai DED Licence 592798), alongside its Sharjah entity Royal Value Technical Contracting LLC (Licence 777338), an Abu Dhabi branch (Licence CN-5446200) and Royal Value Dry Ice Trading. All are part of the same group, led by Azeez Shahul Hameed since 2007.",
  },
  {
    q: "Do you work as a main contractor, or only as an MEP subcontractor?",
    a: "Both. Most of our 95 recorded projects since 2008 were delivered as the electromechanical or HVAC subcontractor to a main contractor — the trade the company was built on. Since 2024 we've also delivered full civil-and-MEP turnkey work directly for private clients, including the Presidential Court's palace and camp infrastructure.",
  },
  {
    q: "What does a villa actually cost, end to end?",
    a: "For a premium-specification G+1 villa of around 5,000 sq ft built-up in Sharjah or Ajman, budget roughly AED 2.6m to 3.4m for construction, plus authority fees, soil investigation and survey. Dubai runs 10–15% higher on labour and logistics. Use the estimator above for your own numbers, then book a site visit for the real figure.",
  },
  {
    q: "Do you handle the municipality approvals?",
    a: "We prepare and submit drawings and follow the application through Dubai Municipality, Sharjah Municipality or Ajman Municipality, including Civil Defence where the building requires it. Government fees are paid at cost — we don't mark them up, and you see the receipts.",
  },
  {
    q: "Can you take over MEP or HVAC works another contractor left unfinished?",
    a: "Regularly — several of our projects, including the DEWA Al Aweer power plant refurbishment and RTA Metro Green Line AHU relocation, were exactly this kind of handover. We price it as a separate condition survey first, so you know what you're inheriting before committing to the completion.",
  },
  {
    q: "What guarantee do I get after handover?",
    a: "A 12-month defects liability period covering workmanship, plus manufacturers' warranties on equipment — typically 12 to 60 months depending on the item. Because our MEP team installs what it commissions, callbacks on air-conditioning and plumbing come back to the people who built the system.",
  },
];

export const contactInfo = {
  callWhatsapp: site.phoneDisplay,
  sharjahOffice: site.phoneSharjahDisplay,
  email: site.email,
  dubai: {
    company: "Royal Value Electromechanical LLC",
    line1: "Al Mazoon Building, Damascus Street",
    line2: "Al Qusais, Dubai — P.O. Box 94558",
  },
  sharjah: {
    company: "Royal Value Technical Contracting LLC",
    line1: "Industrial Area 15, Muwaileh",
    line2: "P.O. Box 36210, Sharjah",
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
    { label: "Our process", href: "#process" },
    { label: "Selected projects", href: "#projects" },
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
    "Civil construction, MEP and HVAC contractor delivering building contracting, electromechanical and air-conditioning works across Dubai, Sharjah, Ajman and Abu Dhabi since 2007.",
  foundingDate: "2007-03-15",
  telephone: "+971552313467",
  email: "info@royalvaluedxb.com",
  identifier: [
    { "@type": "PropertyValue", name: "Dubai DED Trade Licence", value: "592798" },
    { "@type": "PropertyValue", name: "Sharjah SEDD Trade Licence", value: "777338" },
    { "@type": "PropertyValue", name: "Abu Dhabi Economic Licence", value: "CN-5446200" },
  ],
  employee: { "@type": "Person", name: "Azeez Shahul Hameed", jobTitle: "Technical Manager" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 48 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Mazoon Building, Damascus Street, Al Qusais",
    addressLocality: "Dubai",
    postalCode: "94558",
    addressCountry: "AE",
  },
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
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC design, installation & maintenance" } },
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
