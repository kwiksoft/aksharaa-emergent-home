/**
 * Content for the Registrations & Licensing category landing page.
 * Mirrors the structure of data/content.js (home page) — section-by-section,
 * CMS-replaceable without touching presentation components.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 4,
 * cross-checked against the live pf-esi-registration.html service page
 * for tone and terminology consistency.
 */

export const meta = {
  title: "Registrations & Licensing | Aksharaa Corporate Services",
  description:
    "26 statutory registrations and licenses managed end-to-end — PF/ESI, Trade License, Factory License, BOCW, ISMW, CLRA, GST, UDYAM, and more. Structured, documented, governed.",
};

export const hero = {
  eyebrow: "Compliance Domain · 03 of 06",
  kicker: "Registrations & Licensing",
  headline: ["Every Registration.", "Properly", "Structured."],
  accentLine: 2,
  sub:
    "26 statutory registrations and licenses — new applications, renewals, and amendments — governed end-to-end. From PF/ESI to Trade License to GST, each registration is a documented, inspection-ready process, not a one-time filing.",
  ctas: [
    { label: "Check Which Licenses Apply", variant: "primary", href: "#registry-table" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#category-cta" },
  ],
  stats: [
    { value: 26, suffix: "", icon: "fileText", label: "Registrations & Licenses Governed" },
    { value: 2, suffix: "", icon: "layers", label: "Statutory Sub-Domains" },
    { value: 3, suffix: "", icon: "checkCircle", label: "Stages: New · Renewal · Amendment" },
    { text: "Pan-India", icon: "map", label: "Multi-State Filing Capability" },
  ],
  image: "/assets/category-registrations-hero.png",
  imageAlt: "Official seals and statutory registration documents — institutional governance",
  domains: [
    { icon: "shield", title: "Labour & Establishment Licenses", desc: "16 registrations governed" },
    { icon: "receipt", title: "Business & Tax Registrations", desc: "10 registrations governed" },
  ],
};

export const why = {
  kicker: "Why This Matters",
  heading: "Unregistered Operations Carry Silent Risk",
  sub:
    "A missing or lapsed registration rarely surfaces until an inspection, a tender disqualification, or a penalty notice forces the issue — at which point the cost is no longer just the registration fee.",
  points: [
    {
      icon: "scan",
      title: "Inspection & Penalty Exposure",
      desc: "Operating without a valid Shops & Establishment, Factory, or Trade License invites direct penalties and, in repeat cases, closure orders.",
    },
    {
      icon: "fileX",
      title: "Tender & Contract Disqualification",
      desc: "Government and large-enterprise tenders verify registration validity before award. A lapsed UDYAM or GST registration disqualifies a bid silently.",
    },
    {
      icon: "clock",
      title: "Renewal Drift",
      desc: "Registrations with annual or multi-year validity (Trade License, Factory License, PCB Licence) lapse quietly when no calendar discipline tracks them.",
    },
  ],
};

export const subNav = {
  kicker: "Two Statutory Sub-Domains",
  heading: "Labour & Establishment vs. Business & Tax",
  sub:
    "Registrations & Licensing splits into two distinct regulatory tracks — each governed by different authorities, different renewal cycles, and different documentation standards.",
  groups: [
    {
      id: "labour",
      num: "01",
      icon: "hardHat",
      title: "Labour & Establishment Licenses",
      count: 16,
      desc: "Registrations governing the workforce, the workplace, and statutory welfare obligations.",
      items: [
        "PF & ESI Registration",
        "Shops & Establishment Registration",
        "Trade License (New / Renewal / Amendment)",
        "ISMW Registration",
        "BOCW Registration",
        "CLRA License",
        "Factory License",
        "Labour Welfare Fund Registration",
        "CLRA Principal Employer Registration",
        "BOCW Principal Employer Registration",
        "ISMW Principal Employer Registration",
        "Factory Layout Plan Approval",
        "Fire NOC",
        "Pollution Control Board Licence",
        "PCB Consent to Establish & Operate",
        "Catering Establishment License",
      ],
    },
    {
      id: "tax",
      num: "02",
      icon: "receipt",
      title: "Business & Tax Registrations",
      count: 10,
      desc: "Registrations governing tax identity, statutory recognition, and digital compliance infrastructure.",
      items: [
        "Profession Tax Registration",
        "Company Tax Registration",
        "GST Registration",
        "UDYAM / MSME Registration",
        "Professional Tax Registration (State-wise)",
        "IEC Registration (Import Export Code)",
        "Digital Signature Certificate (DSC)",
        "Digital Signature Registration",
        "LMPC Registration",
        "Food License — FSSAI",
      ],
    },
  ],
};

export const focusRegistry = {
  kicker: "Most-Governed Registrations",
  heading: "The Registrations Businesses Need First",
  sub:
    "Nine registrations form the statutory baseline for most establishments — the ones Aksharaa is asked to govern most frequently across industries.",
  items: [
    { num: "01", icon: "shield", title: "PF & ESI Registration", tier: "Mandatory · 20+/10+ employees" },
    { num: "02", icon: "building", title: "Shops & Establishment", tier: "Mandatory · all establishments" },
    { num: "03", icon: "badge", title: "Trade License", tier: "Mandatory · local body issued" },
    { num: "04", icon: "hardHat", title: "ISMW Registration", tier: "Construction & migrant workforce" },
    { num: "05", icon: "hardHat", title: "BOCW Registration", tier: "Construction · 10+ workers" },
    { num: "06", icon: "fileSignature", title: "CLRA License", tier: "Contract labour · 20+ workers" },
    { num: "07", icon: "factory", title: "Factory License", tier: "Manufacturing units" },
    { num: "08", icon: "wallet", title: "UDYAM / MSME", tier: "All SMEs · funding & tender access" },
    { num: "09", icon: "receipt", title: "Profession Tax Registration", tier: "State-wise · employer obligation" },
  ],
};

export const lifecycle = {
  kicker: "Registration Lifecycle",
  heading: "New. Renewal. Amendment.",
  sub: "Every registration Aksharaa governs moves through the same disciplined three-stage protocol — regardless of which of the 26 it is.",
  stages: [
    {
      num: "01",
      icon: "filePlus",
      title: "New Registration",
      desc: "Document collection, application structuring, authority liaison, and certificate delivery — for an establishment registering for the first time.",
    },
    {
      num: "02",
      icon: "refreshCw",
      title: "Renewal",
      desc: "Calendar-tracked renewal before expiry, with updated documentation and continuity of registration validity — no lapse window.",
    },
    {
      num: "03",
      icon: "edit3",
      title: "Amendment",
      desc: "Address change, name change, activity change, or ownership change reflected correctly across the registration record.",
    },
  ],
};

export const howWeWork = {
  kicker: "How Aksharaa Handles It",
  heading: "Documented at Every Stage",
  sub: "A registration is not closed when the certificate is issued. It is closed when the record is filed, the renewal date is calendared, and the next obligation is already tracked.",
  steps: [
    { num: "01", icon: "clipboardList", title: "Document Collection", desc: "Structured checklist per registration type — no back-and-forth, no missed requirements." },
    { num: "02", icon: "send", title: "Application & Authority Liaison", desc: "Direct coordination with the issuing authority — municipal, labour department, or central registry." },
    { num: "03", icon: "checkCircle", title: "Certificate Delivery", desc: "Verified certificate delivered with a documented compliance record, not just the PDF." },
    { num: "04", icon: "calendar", title: "Renewal Calendaring", desc: "Every registration's validity period is logged into Aksharaa's compliance calendar — proactive, not reactive." },
  ],
};

export const faqs = {
  kicker: "Frequently Asked",
  heading: "Registrations & Licensing — Common Questions",
  items: [
    {
      q: "Which registrations are mandatory for a new establishment in Tamil Nadu?",
      a: "At minimum: Shops & Establishment Registration, Trade License, and PF/ESI Registration (once employee thresholds are met). Manufacturing units additionally require Factory License and PCB Licence. Aksharaa assesses applicability before filing.",
    },
    {
      q: "What is the difference between BOCW and ISMW registration?",
      a: "BOCW (Building & Other Construction Workers) registration applies to construction projects employing 10+ workers and covers welfare cess obligations. ISMW (Inter-State Migrant Workmen) registration applies specifically when the workforce includes workers recruited from other states.",
    },
    {
      q: "How long does PF & ESI registration take?",
      a: "Typically 7–10 working days from complete document submission, assuming no discrepancies are flagged by the authority. Aksharaa pre-verifies documentation to minimise resubmission cycles.",
    },
    {
      q: "Does Aksharaa handle registration renewals proactively, or only on request?",
      a: "Proactively. Every registration under Aksharaa's management is logged into a compliance calendar with renewal alerts generated well before the expiry window — renewal is never client-initiated.",
    },
    {
      q: "Can Aksharaa amend a registration after a business name or address change?",
      a: "Yes. Amendment is governed as its own lifecycle stage — Aksharaa updates the registration record with the relevant authority and issues confirmation once the amendment is reflected.",
    },
    {
      q: "Is UDYAM / MSME registration the same as GST registration?",
      a: "No. UDYAM registration establishes MSME status (relevant for funding schemes and tender eligibility) and is separate from GST registration, which is a taxation registration. Most SMEs require both.",
    },
  ],
};

export const categoryCta = {
  kicker: "Begin Your Registration Review",
  headline: ["Find Out Which Licenses", "Your Business Actually Needs"],
  sub: "Most businesses carry either gaps or redundant registrations. A structured review identifies exactly what applies — and what doesn't.",
  watermark: "REGISTERED",
  ctas: [
    { label: "Request a Registration Audit", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
