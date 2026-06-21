/**
 * Content for the Legal & Documentation category landing page.
 * Lean menu page - lists and links to all 18 services in this category.
 * Inherits Employment Agreements' editorial/parchment visual identity
 * (warm #FAF6EE background, document-preview motif) as the category-level
 * sibling of that service template.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 6.
 */

export const meta = {
  title: "Legal & Documentation | Aksharaa Corporate Services",
  description:
    "18 legal documentation services across business, employment, property, and personal matters. Legally precise, professionally drafted, completely reliable.",
};

export const hero = {
  eyebrow: "Compliance Domain · 06 of 06",
  headline: ["Legally Sound.", "Professionally", "Drafted."],
  sub:
    "18 legal documentation services spanning business agreements, employment contracts, property verification, legal notices, and personal estate documents. Every document drafted by legal experts — role-specific, enforceable, built to hold.",
  ctas: [
    { label: "Browse Legal Services", variant: "primary", href: "#legal-services" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#category-cta" },
  ],
  trustItems: [
    "Drafted by legal experts — not templates",
    "Role-specific & document-specific precision",
    "Delivered within agreed turnaround SLAs",
    "Revision included as standard on every document",
  ],
  docPreview: {
    title: "Legal Documentation Suite",
    groups: ["BUSINESS & CORPORATE", "EMPLOYMENT", "PROPERTY & REAL ESTATE", "NOTICES & DISPUTES", "PERSONAL & ESTATE"],
  },
};

export const subNav = {
  kicker: "18 Services, Five Document Families",
  heading: "Every Legal Document, Properly Drafted",
  sub: "Legal & Documentation spans five distinct document families — each with its own enforceability standards and drafting conventions. Expand a family to see everything Aksharaa drafts within it.",
  groups: [
    {
      id: "business",
      num: "01",
      icon: "fileSignature",
      title: "Business & Corporate Documents",
      count: 4,
      desc: "Agreements and contracts governing business relationships and service obligations.",
      items: [
        { label: "Standard Business Agreements", href: "/legal-documentation/business-agreements" },
        { label: "Employment Agreements", href: "/legal-documentation/employment-agreements" },
        { label: "Contract Drafting", href: "/legal-documentation/contract-drafting" },
        { label: "Service Level Agreements (SLA)", href: "/legal-documentation/service-level-agreements" },
      ],
    },
    {
      id: "property",
      num: "02",
      icon: "building",
      title: "Property & Real Estate Documents",
      count: 3,
      desc: "Documentation governing property transactions, verification, and occupancy.",
      items: [
        { label: "Property Legal Verification", href: "/legal-documentation/property-legal-verification" },
        { label: "Sale Deed Drafting", href: "/legal-documentation/sale-deed-drafting" },
        { label: "Rental & Lease Agreements", href: "/legal-documentation/rental-lease-agreements" },
      ],
    },
    {
      id: "notices",
      num: "03",
      icon: "fileX",
      title: "Notices & Dispute Documents",
      count: 5,
      desc: "Legal notices and dispute resolution documentation for non-payment, breach, and consumer matters.",
      items: [
        { label: "Consumer Legal Notice", href: "/legal-documentation/consumer-legal-notice" },
        { label: "Cheque Bounce Notice", href: "/legal-documentation/cheque-bounce-notice" },
        { label: "Online Dispute Resolution", href: "/legal-documentation/online-dispute-resolution" },
        { label: "Legal Vetting of Documents", href: "/legal-documentation/legal-vetting" },
        { label: "Legal Notice Drafting (General)", href: "/legal-documentation/legal-notice-drafting" },
      ],
    },
    {
      id: "personal",
      num: "04",
      icon: "shield",
      title: "Personal & Estate Documents",
      count: 6,
      desc: "Documentation for personal, family, and estate matters with long-term legal standing.",
      items: [
        { label: "Power of Attorney Drafting", href: "/legal-documentation/power-of-attorney" },
        { label: "Partnership Deed Drafting", href: "/legal-documentation/partnership-deed" },
        { label: "Affidavits & Declarations", href: "/legal-documentation/affidavits-declarations" },
        { label: "Legal Drafting — Employment / Corporate / Real Estate", href: "/legal-documentation/legal-drafting" },
        { label: "Will Drafting", href: "/legal-documentation/will-drafting" },
        { label: "Family Trust & Private Trust Deed", href: "/legal-documentation/family-private-trust-deed" },
      ],
    },
  ],
};

export const focusServices = {
  kicker: "Most-Requested Documents",
  heading: "Where Most Businesses Start",
  sub: "Six documents form the baseline most businesses and individuals are asked to draft first.",
  items: [
    { num: "01", icon: "fileSignature", title: "Employment Agreements", tier: "3–5 working days", href: "/legal-documentation/employment-agreements" },
    { num: "02", icon: "fileText", title: "Standard Business Agreements", tier: "Service & vendor contracts", href: "/legal-documentation/business-agreements" },
    { num: "03", icon: "building", title: "Rental & Lease Agreements", tier: "Commercial & residential", href: "/legal-documentation/rental-lease-agreements" },
    { num: "04", icon: "fileX", title: "Legal Notice Drafting", tier: "Non-payment, breach, general", href: "/legal-documentation/legal-notice-drafting" },
    { num: "05", icon: "shield", title: "Power of Attorney Drafting", tier: "General & specific", href: "/legal-documentation/power-of-attorney" },
    { num: "06", icon: "users", title: "Partnership Deed Drafting", tier: "Mandatory registration clauses", href: "/legal-documentation/partnership-deed" },
  ],
};

export const howWeWork = {
  kicker: "How It Works",
  heading: "Brief. Draft. Review. Deliver.",
  sub: "Every legal document follows the same four-stage protocol, regardless of which of the 18 services is in scope.",
  steps: [
    { num: "01", title: "Brief & Requirement Capture", desc: "You share the document type, parties involved, and specific clauses needed." },
    { num: "02", title: "First Draft Delivered", desc: "Aksharaa delivers a complete first draft within the agreed turnaround window." },
    { num: "03", title: "Your Review & One Revision", desc: "You review and provide consolidated feedback. One round of revision is included." },
    { num: "04", title: "Final Delivery", desc: "Delivered in Word (.docx) and PDF format, with guidance on execution and signing formalities." },
  ],
};

export const faqs = {
  kicker: "Common Questions",
  heading: "Legal & Documentation — Frequently Asked",
  items: [
    { q: "How long does legal document drafting typically take?", a: "Most standard documents (employment agreements, business agreements, notices) are delivered within 3–5 working days. Complex documents (trust deeds, bulk agreement sets) take 5–10 working days. Each service page lists its specific turnaround." },
    { q: "Are Aksharaa's templates the same for every client?", a: "No. Every document is drafted to the specific brief — role, industry, jurisdiction, and the clauses that are actually enforceable for that context. Generic templates are explicitly avoided." },
    { q: "Can Aksharaa review documents we already have in use?", a: "Yes. Most services in this category include an existing-document review option — a written gap analysis identifying unenforceable clauses or missing provisions, typically within 2–3 working days." },
    { q: "Do these documents need to be registered or stamped?", a: "It varies by document type — sale deeds and certain trust deeds require registration, while employment agreements typically don't. Aksharaa advises on the specific requirement for each document and jurisdiction." },
  ],
};

export const categoryCta = {
  kicker: "Begin Your Documentation Review",
  headline: ["Find Out Which Documents", "Your Business Actually Needs"],
  sub: "Most businesses operate with documentation gaps they're unaware of. A structured review identifies exactly what's missing.",
  ctas: [
    { label: "Request a Documentation Review", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
