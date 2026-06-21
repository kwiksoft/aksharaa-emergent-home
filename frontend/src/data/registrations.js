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
    "Registrations & Licensing splits into two distinct regulatory tracks — each governed by different authorities, different renewal cycles, and different documentation standards. Expand a track to see everything Aksharaa governs within it.",
  groups: [
    {
      id: "labour",
      num: "01",
      icon: "hardHat",
      title: "Labour & Establishment Licenses",
      count: 16,
      desc: "Registrations governing the workforce, the workplace, and statutory welfare obligations.",
      items: [
        { label: "PF & ESI Registration", href: "/registrations-licensing/pf-esi-registration" },
        { label: "Shops & Establishment Registration", href: "/registrations-licensing/shops-establishment-registration" },
        { label: "Trade License (New / Renewal / Amendment)", href: "/registrations-licensing/trade-license" },
        { label: "ISMW Registration (New / Renewal / Amendment)", href: "/registrations-licensing/ismw-registration" },
        { label: "BOCW Registration (New / Renewal / Amendment)", href: "/registrations-licensing/bocw-registration" },
        { label: "CLRA License (New / Renewal / Amendment)", href: "/registrations-licensing/clra-license" },
        { label: "Factory License (New / Renewal / Amendment)", href: "/registrations-licensing/factory-license" },
        { label: "Labour Welfare Fund (LWF) Registration", href: "/registrations-licensing/lwf-registration" },
        { label: "CLRA Principal Employer Registration", href: "/registrations-licensing/clra-principal-employer" },
        { label: "BOCW Principal Employer Registration", href: "/registrations-licensing/bocw-principal-employer" },
        { label: "ISMW Principal Employer Registration", href: "/registrations-licensing/ismw-principal-employer" },
        { label: "Factory Layout Plan Approval", href: "/registrations-licensing/factory-layout-plan-approval" },
        { label: "Fire NOC", href: "/registrations-licensing/fire-noc" },
        { label: "Pollution Control Board (PCB) Licence", href: "/registrations-licensing/pcb-licence" },
        { label: "PCB Consent to Establish (CTE) & Operate (CTO)", href: "/registrations-licensing/pcb-cte-cto" },
        { label: "Catering Establishment License", href: "/registrations-licensing/catering-establishment-license" },
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
        { label: "Profession Tax Registration", href: "/registrations-licensing/profession-tax-registration" },
        { label: "Company Tax Registration", href: "/registrations-licensing/company-tax-registration" },
        { label: "GST Registration", href: "/registrations-licensing/gst-registration" },
        { label: "UDYAM / MSME Registration", href: "/registrations-licensing/udyam-msme-registration" },
        { label: "Professional Tax Registration (State-wise)", href: "/registrations-licensing/professional-tax-registration-statewise" },
        { label: "IEC Registration (Import Export Code)", href: "/registrations-licensing/iec-registration" },
        { label: "Digital Signature Certificate (DSC)", href: "/registrations-licensing/digital-signature-certificate" },
        { label: "Digital Signature Registration", href: "/registrations-licensing/digital-signature-registration" },
        { label: "LMPC Registration — Legal Metrology", href: "/registrations-licensing/lmpc-registration" },
        { label: "Food License — FSSAI", href: "/registrations-licensing/fssai-food-license" },
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
    { num: "01", icon: "shield", title: "PF & ESI Registration", tier: "Mandatory · 20+/10+ employees", href: "/registrations-licensing/pf-esi-registration" },
    { num: "02", icon: "building", title: "Shops & Establishment", tier: "Mandatory · all establishments", href: "/registrations-licensing/shops-establishment-registration" },
    { num: "03", icon: "badge", title: "Trade License", tier: "Mandatory · local body issued", href: "/registrations-licensing/trade-license" },
    { num: "04", icon: "hardHat", title: "ISMW Registration", tier: "Construction & migrant workforce", href: "/registrations-licensing/ismw-registration" },
    { num: "05", icon: "hardHat", title: "BOCW Registration", tier: "Construction · 10+ workers", href: "/registrations-licensing/bocw-registration" },
    { num: "06", icon: "fileSignature", title: "CLRA License", tier: "Contract labour · 20+ workers", href: "/registrations-licensing/clra-license" },
    { num: "07", icon: "factory", title: "Factory License", tier: "Manufacturing units", href: "/registrations-licensing/factory-license" },
    { num: "08", icon: "wallet", title: "UDYAM / MSME", tier: "All SMEs · funding & tender access", href: "/registrations-licensing/udyam-msme-registration" },
    { num: "09", icon: "receipt", title: "Profession Tax Registration", tier: "State-wise · employer obligation", href: "/registrations-licensing/profession-tax-registration" },
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
