/**
 * Navigation + mega-menu data (CMS-ready).
 * Service / industry hrefs map to the original site's route structure
 * so the menus stay meaningful even in this static phase.
 */

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#partner" },
  { label: "Services", mega: "services" },
  { label: "Industries", mega: "industries" },
  { label: "Client Stories", href: "#partner" },
  { label: "Blog", href: "#framework" },
  { label: "Contact", href: "#footer" },
];

export const servicesMega = {
  columns: [
    {
      title: "Labour Law Compliance",
      count: "18 services",
      items: [
        "PF & ESI Compliance",
        "Shops & Establishment Act",
        "CLRA Act Compliance",
        "Factories Act Compliance",
        "POSH Act Compliance",
        "Minimum Wages Compliance",
        "Contract Labour Compliance",
        "Multi-State Compliance Audit",
      ],
    },
    {
      title: "Payroll & HR Operations",
      count: "9 services",
      items: [
        "Payroll Processing Services",
        "Payroll Audit",
        "HR Policies Drafting",
        "Leave & Attendance Compliance",
        "Statutory Registers Maintenance",
        "Compliance Calendar Preparation",
        "Vendor Compliance Management",
      ],
    },
    {
      title: "Staffing & Manpower",
      count: "10 services",
      items: [
        "Flexi Staffing Solutions",
        "Contract Staffing Services",
        "Permanent Staffing Services",
        "Recruitment Process Outsourcing",
        "Background Verification",
        "Outsourced HR Department",
        "Apprentice Management",
      ],
    },
    {
      title: "Registrations & Licensing",
      count: "26 services",
      items: [
        "PF & ESI Registration",
        "Shops & Establishment",
        "Trade Licence",
        "Factory Licence",
        "BOCW Registration",
        "GST Registration",
        "UDYAM / MSME",
        "FSSAI Food Licence",
      ],
    },
    {
      title: "Compliance Filings & Taxation",
      count: "Multi-state",
      items: [
        "PF & ESI Returns Filing",
        "Professional Tax Filing — All States",
        "GST Return Filing",
        "Reconciliation Management",
        "Zero-Delay Filing Protocol",
        "Inspection-Ready Documentation",
      ],
    },
    {
      title: "Legal Documentation",
      count: "18 services",
      items: [
        "Employment Agreements",
        "Business Agreements",
        "Contract Drafting",
        "Service Level Agreements",
        "Rental & Lease Agreements",
        "Legal Notice Drafting",
        "Power of Attorney",
        "Legal Vetting of Documents",
      ],
    },
  ],
  featured: {
    eyebrow: "Not sure where to begin?",
    title: "Map your full compliance posture in one structured consultation.",
    primary: { label: "Free Consultation", href: "#final-cta" },
    secondary: { label: "Browse All Services", href: "#architecture" },
  },
};

export const industriesMega = {
  intro:
    "Sector-aware compliance frameworks engineered around the regulatory realities of each industry.",
  items: [
    { icon: "factory", title: "Manufacturing", desc: "Factories Act, CLRA & PF/ESI compliance" },
    { icon: "hardHat", title: "Construction & Infrastructure", desc: "BOCW, contract labour & site governance" },
    { icon: "truck", title: "Logistics & Warehousing", desc: "ISMW, multi-state & flexi-staffing" },
    { icon: "shoppingBag", title: "Retail & FMCG", desc: "Shops & Establishment, FSSAI, trade licence" },
    { icon: "cpu", title: "IT & ITES", desc: "Payroll governance & policy frameworks" },
    { icon: "heart", title: "Healthcare & Hospitals", desc: "Statutory registers & inspection readiness" },
  ],
  cta: { label: "All Industries", href: "#" },
};
