// ─────────────────────────────────────────────────────────────────────────
// RV Group Contracting — site content
// Single source of truth for copy, numbers and structured data.
// Edit here; components read from this file.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "RV Group Contracting",
  shortName: "RV",
  parent: "Royal Value Group",
  url: "https://rvgroupcontracting.com",
  phoneDisplay: "+971 50 946 7468",
  phoneHref: "tel:+971509467468",
  phoneSharjahDisplay: "+971 6 767 7307",
  phoneSharjahHref: "tel:+97167677307",
  whatsappHref:
    "https://wa.me/971509467468?text=Hi%20RV%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  email: "info@royalvaluedxb.com",
  emailHref: "mailto:info@royalvaluedxb.com",
  contactPerson: "Azeez Shahul Hameed",
  description:
    "Design-and-build villas and warehouses across Dubai, Sharjah, Ajman and Abu Dhabi. Fixed price, fixed date, MEP in-house since 2007. Licensed contractor behind projects for DEWA, Dubai Police and the Presidential Court.",
};

export const nav = [
  { href: "#build", label: "What we build" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#clients", label: "Clients" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export const heroStats = [
  { value: "2007", label: "Licensed and trading since" },
  { value: "95+", label: "Projects delivered", sub: "2008 – 2025" },
  { value: "48", label: "Technical staff on our own books" },
];

export const credibility = {
  line1: "Royal Value Electromechanical LLC · Dubai Licence No. 592798, held since March 2007",
  line2: "Building Contracting · Electromechanical · HVAC — all three activities on one licence",
};

export const mechanisms = [
  {
    no: "MECHANISM 01",
    title: "MEP is our own trade",
    figure: "25–35%",
    figureLabel: "of a villa's build cost is MEP",
    body: "Most main contractors subcontract mechanical, electrical and plumbing, then add 10–15% on top of the sub's price. We have been doing this work since 2007 — for DEWA, Dubai Police, Dubai World Trade Centre and the Presidential Court's palaces. On your villa it is done at cost, by the same 48-strong technical team.",
  },
  {
    no: "MECHANISM 02",
    title: "Design and build under one contract",
    figure: "1 contract",
    figureLabel: "instead of consultant + contractor",
    body: "When we draw it, we can value-engineer on paper — where changing a specification costs nothing. Split the roles and the same decision costs you a variation claim and three weeks of site standing time.",
  },
  {
    no: "MECHANISM 03",
    title: "Three emirates, one supply chain",
    figure: "0 AED",
    figureLabel: "mobilisation premium outside Dubai",
    body: "Crews, plant and material orders are shared across Dubai, Sharjah and Ajman sites. A Dubai-only contractor prices your Ajman warehouse with a travel and mobilisation loading. We don't need to.",
  },
];

export const services = [
  {
    slot: "01 · VILLAS",
    title: "Private villas",
    body: "New-build G+1 family villas and compound villas on private plots, delivered turnkey from concept drawings to handover.",
    list: [
      "Concept & authority drawings",
      "Structure, blockwork, finishes",
      "MEP, HVAC, pool & landscape",
      "DEWA / SEWA / AMPD connection",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      alt: "Modern white villa with a swimming pool and outdoor lounge area",
    },
  },
  {
    slot: "02 · INDUSTRIAL",
    title: "Warehouses & light industrial",
    body: "Pre-engineered steel buildings, labour accommodation and workshops in the industrial zones of all three emirates.",
    list: [
      "PEB steel structure & cladding",
      "Mezzanine offices & ablutions",
      "Fire-fighting & Civil Defence approval",
      "Power, compressed air, drainage",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1758789667762-56175fe4601c",
      alt: "Modern industrial warehouse building exterior with loading docks",
    },
  },
  {
    slot: "03 · MEP",
    title: "MEP & renovation",
    body: "The trade the group was built on — available on its own for existing buildings, or as a package to other main contractors.",
    list: [
      "HVAC design, supply & install",
      "LV electrical & distribution",
      "Plumbing, drainage, water tanks",
      "Annual maintenance contracts",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1587582423116-ec07293f0395",
      alt: "Construction worker in a hard hat working on a building frame",
    },
  },
];

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

export const pricingTable = {
  note: "Indicative build-only rates, AED per square foot of built-up area. Excludes land, authority fees and furniture.",
  rows: [
    {
      spec: "Standard",
      pill: null as string | null,
      villa: "350 – 480",
      warehouse: "140 – 190",
      buys: "Sound structure, local ceramic, standard joinery and split units. Functional, honest, no drama.",
    },
    {
      spec: "Premium",
      pill: "Our focus",
      villa: "520 – 680",
      warehouse: "200 – 260",
      buys: "Large-format porcelain, solid-core doors, ducted HVAC, LED cove lighting, quality sanitaryware. Reads as luxury at mid-market cost.",
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
  "Changes you request after drawings are frozen",
  "Ground conditions materially different from the soil report",
];

export const processSteps = [
  {
    no: "STAGE 01",
    title: "Site visit & brief",
    body: "We walk the plot with you, take levels and access notes, and agree what you actually want the building to do.",
    time: "Free · within 48 hours",
  },
  {
    no: "STAGE 02",
    title: "Concept & fixed quote",
    body: "Concept drawings, a written specification sheet and a priced bill of quantities. One number, itemised.",
    time: "10 working days",
  },
  {
    no: "STAGE 03",
    title: "Approvals",
    body: "We prepare and file with Dubai Municipality, Sharjah Municipality or Ajman Municipality and chase it through.",
    time: "4 – 8 weeks",
  },
  {
    no: "STAGE 04",
    title: "Construction",
    body: "Our own MEP team works alongside the civil crew. You get a dated photo report every week without asking.",
    time: "7 – 12 months typical",
  },
  {
    no: "STAGE 05",
    title: "Handover",
    body: "Utility connections energised, snag list closed in writing, O&M manuals and warranties handed over.",
    time: "12-month defects cover",
  },
];

export const coverage = [
  {
    emirate: "Dubai",
    tag: "LICENCE 592798",
    body: "Head office, Al Nahda 2, Deira. Building Contracting, Electromechanical and HVAC activities all active on one licence since 2007.",
    areas: [
      "Al Khawaneej",
      "Nad Al Sheba",
      "Mirdif",
      "Al Barsha",
      "Jumeirah",
      "Al Quoz",
      "DIP",
      "Jebel Ali Industrial",
    ],
  },
  {
    emirate: "Sharjah",
    tag: "LICENCE 777338",
    body: "Royal Value Technical Contracting LLC, Industrial Area 15, Muwaileh. Contracting, air-conditioning and sanitary activities.",
    areas: ["Al Tai", "Muwaileh", "Hoshi", "Al Rahmaniya", "Industrial Areas 1–18", "Al Sajaa", "Al Nouf"],
  },
  {
    emirate: "Ajman",
    tag: "PROJECT BASIS",
    body: "Delivered for Ajman Municipality at Ocean Fisheries. Registered per project with Ajman Municipality and AMPD.",
    areas: ["Al Zahya", "Al Helio", "Al Rawda", "Al Mowaihat", "Al Jurf Industrial", "Manama"],
  },
  {
    emirate: "Abu Dhabi",
    tag: "LICENCE CN-5446200",
    body: "Royal Value Electromechanical LLC — Abu Dhabi Branch, Musaffah. Palace, camp and infrastructure work for the Presidential Court since 2024.",
    areas: ["Musaffah", "Khalifa Park", "Baynouna", "Qushwira", "Al Ain", "ICAD"],
  },
];

export const clients = [
  "The Private Office",
  "Presidential Court",
  "Sinyar Property Management",
  "DEWA",
  "Dubai Police",
  "Dubai World Trade Centre",
  "Dubai Court & Public Prosecution",
  "National Bank of Fujairah",
  "Dubai Petroleum",
  "Meydan Hotels & Hospitality",
  "Dubai Properties",
  "CBRE Excellerate",
  "Jamal Al Ghurair Group",
  "Al Fattan Properties",
  "Al Tayer Group",
  "Damen Shipyard",
  "Dubai Integrated & Economic Zones",
  "Daikin Air-Conditioning",
  "Ramez Group",
  "Dubai Maritime City",
  "Etisalat",
  "Emirates Catering",
  "Al Nasr Sports Club",
  "Ajman Municipality",
];

export const projectRecord = {
  villas: {
    title: "Villas & residential",
    items: [
      { name: "Al Ghurair Villa", place: "Mirdiff, Dubai" },
      { name: "Mr. Adani Villa", place: "Jumeirah Pearl, Dubai" },
      { name: "Jiten Villa", place: "Dubai Hills Estate" },
      { name: "Al Walled Villa", place: "Jumeirah, Dubai" },
      { name: "G+1 Villa", place: "Mohaisinah, Dubai" },
      { name: "B+G+4+Loft Residential", place: "Green Park, Jumeirah Village" },
      { name: "Latifa Schools MEP", place: "Nad Al Sheba — Rulers Court" },
      { name: "Burj Residence Phase 3", place: "Business Bay, Dubai" },
    ],
  },
  industrial: {
    title: "Warehouses & industrial",
    items: [
      { name: "Iron Mountain Records Facility", place: "JAFZA" },
      { name: "G+1 Office cum Warehouse", place: "JAFZA" },
      { name: "MCC Building — Damen Shipyard", place: "Sharjah" },
      { name: "Al Zahiya City Development", place: "Al Falah City, Sharjah — WSP" },
      { name: "Dubai Petroleum Chiller Plant", place: "Jebel Ali" },
      { name: "Ocean Fisheries Cold Storage", place: "Ajman Municipality" },
      { name: "Porcelain Factory Infrastructure", place: "Abu Dhabi — Jurong Intl." },
      { name: "Bridgestone & BMA HVAC", place: "JAFZA" },
    ],
  },
  landmark: {
    title: "Government & landmark",
    items: [
      { name: "Al Mina Palace", place: "Abu Dhabi — Presidential Court" },
      { name: "Al Rawdah Al Sharqiyah Palace", place: "Al Ain" },
      { name: "Al Khawaneej Palace", place: "Dubai" },
      { name: "Dubai Police HQ", place: "A/C works" },
      { name: "DEWA Power Plant", place: "Al Aweer refurbishment" },
      { name: "DEWA Head Office", place: "Wafi" },
      { name: "RTA Metro Green Line Ph. 11", place: "AHU relocation" },
      { name: "Dubai World Trade Centre", place: "Maintenance works" },
    ],
  },
};

export const faqs = [
  {
    q: "How is a low price not a warning sign?",
    a: "It usually is — which is why we publish the mechanism rather than the claim. Our saving comes from performing MEP with our own 48-strong team instead of marking up a subcontractor, and from designing and building under one contract so specification decisions are made on paper. Neither reduces what goes into your building: the same crews have worked on DEWA's power plant, Dubai Police HQ and Al Mina Palace. Ask any contractor quoting you a low number to explain where the saving comes from. If they can't, it comes back later as a variation.",
  },
  {
    q: "Is the quoted price genuinely fixed?",
    a: "Yes, against a frozen set of drawings and a written specification sheet that lists every material by name. The price changes only if you change the scope, or if ground conditions differ materially from the soil report. Both are listed in the contract before you sign, and both are priced in writing before any work proceeds.",
  },
  {
    q: "Do you handle the municipality approvals?",
    a: "We prepare and submit the drawings and follow the application through Dubai Municipality, Sharjah Municipality or Ajman Municipality, including Civil Defence where the building requires it. Government fees are paid by you at cost — we don't mark them up, and you see the receipts.",
  },
  {
    q: "What does a villa actually cost, end to end?",
    a: "For a premium-specification G+1 villa of around 5,000 sq ft built-up in Sharjah or Ajman, budget roughly AED 2.6m to 3.4m for construction, plus authority fees, soil investigation and survey. Dubai runs 10–15% higher on labour and logistics. Use the estimator above for your own numbers, then book a site visit for the real figure.",
  },
  {
    q: "Can you take over a project another contractor abandoned?",
    a: "Often, yes. It requires a structural condition survey, a measured record of what has been built and paid for, and a fresh authority submission if the drawings changed. We price these as a separate assessment first so you are not committing to the build before you know what you're inheriting.",
  },
  {
    q: "What guarantee do I get after handover?",
    a: "A 12-month defects liability period covering workmanship across the whole building, plus the manufacturers' warranties on equipment — typically 12 to 60 months depending on the item. Structural warranty follows UAE law. Because the MEP is ours, callbacks on air-conditioning and plumbing come back to the team that installed them.",
  },
];

export const contactInfo = {
  callWhatsapp: site.phoneDisplay,
  sharjahOffice: site.phoneSharjahDisplay,
  email: site.email,
  dubai: {
    company: "Royal Value Electromechanical LLC",
    line1: "Office 208, Building C-35",
    line2: "Al Nahda 2, Deira, Dubai",
  },
  sharjah: {
    company: "Royal Value Technical Contracting LLC",
    line1: "Industrial Area 15, Muwaileh",
    line2: "P.O. Box 36210, Sharjah",
  },
  hours: "Saturday – Thursday, 8:00 – 18:00 GST",
};

export const footerLinks = {
  services: ["Villa construction", "Warehouse & PEB", "MEP & HVAC", "Renovation"],
  company: [
    { label: "Pricing", href: "#pricing" },
    { label: "How we work", href: "#process" },
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
    "Design-and-build contractor for villas and warehouses across Dubai, Sharjah, Ajman and Abu Dhabi. Building Contracting, electromechanical and HVAC works delivered in-house since 2007.",
  foundingDate: "2007-03-15",
  telephone: "+971509467468",
  email: "info@royalvaluedxb.com",
  identifier: [
    { "@type": "PropertyValue", name: "Dubai DET Trade Licence", value: "592798" },
    { "@type": "PropertyValue", name: "Sharjah SEDD Trade Licence", value: "777338" },
    { "@type": "PropertyValue", name: "Abu Dhabi Economic Licence", value: "CN-5446200" },
  ],
  employee: { "@type": "Person", name: "Azeez Shahul Hameed", jobTitle: "Managing Director" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 48 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 208, Building C-35, Al Nahda 2, Deira",
    addressLocality: "Dubai",
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
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa design and construction" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Warehouse and pre-engineered steel building construction" },
    },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEP, HVAC and electromechanical works" } },
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
