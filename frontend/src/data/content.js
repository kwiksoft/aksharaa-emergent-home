/**
 * Single source of truth for all landing-page copy and assets.
 * Structured section-by-section so a CMS / API layer can replace it later
 * without touching the presentation components.
 */

export const company = {
  name: "Aksharaa Corporate Services",
  short: "Aksharaa",
  phone: "+91 98402 76677",
  phoneHref: "tel:+919840276677",
  email: "info@aksharaa.com",
  emailHref: "mailto:info@aksharaa.com",
  location: "Chennai · Pan-India Operations",
  tagline: "Structured Governance. National Execution.",
  description:
    "Governance-led compliance and workforce systems for structured enterprises across India.",
  socials: [
    { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/" },
    { name: "X / Twitter", icon: "twitter", href: "https://twitter.com/" },
    { name: "Facebook", icon: "facebook", href: "https://facebook.com/" },
    { name: "Instagram", icon: "instagram", href: "https://instagram.com/" },
  ],
};

export const hero = {
  eyebrow: "Trusted by 500+ Businesses Across India",
  headline: ["Governance-Driven", "Corporate", "Compliance"],
  accentLine: 2, // index of the line that carries the orange accent
  sub:
    "Structured workforce systems, disciplined regulatory execution, and enterprise-grade compliance frameworks for growing businesses and established organisations across India.",
  ctas: [
    { label: "Start Your Compliance", variant: "primary", href: "#final-cta" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#footer" },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Establishments Served" },
    { value: 15, suffix: "+", label: "Years Expertise" },
    { value: 6, suffix: "+", label: "Compliance Domains" },
    { text: "Pan-India", label: "Multi-State Coverage" },
  ],
  cardLabel: "Governance Domains",
  domains: [
    { icon: "shield", title: "Labour Law & HR Compliance", desc: "18 governed compliance services" },
    { icon: "wallet", title: "Payroll & Workforce Governance", desc: "Structured payroll, statutory alignment" },
    { icon: "fileText", title: "Registrations & Licensing", desc: "26 statutory registrations managed" },
    { icon: "users", title: "Staffing & Manpower", desc: "Compliance-backed workforce deployment" },
    { icon: "scale", title: "Legal Documentation", desc: "Employment, corporate & real estate" },
  ],
};

const CLIENT_BASE = "https://aksharaa.appi.co.in/assets/images/client";
export const trust = {
  label: "Trusted by Leading Organisations",
  logos: [
    { name: "Alibaba.com", src: `${CLIENT_BASE}/alibaba.jpg` },
    { name: "Blue Dart", src: `${CLIENT_BASE}/bluedart.jpg` },
    { name: "Gmmco", src: `${CLIENT_BASE}/gmmco.jpg` },
    { name: "Godrej Interio", src: `${CLIENT_BASE}/godrej.jpg` },
    { name: "Lee & Muirhead", src: `${CLIENT_BASE}/lee%26.jpg` },
    { name: "Life Line Hospital", src: `${CLIENT_BASE}/life.jpg` },
    { name: "Suzlon", src: `${CLIENT_BASE}/suzlon.jpg` },
    { name: "Boocard", src: `${CLIENT_BASE}/bcccard.jpg` },
    { name: "L&T", src: `${CLIENT_BASE}/l%26t%27.jpg` },
    { name: "Dr Mehtas Hospital", src: `${CLIENT_BASE}/drmeha.jpg` },
    { name: "AGS", src: `${CLIENT_BASE}/ags.jpg` },
    { name: "Mercedes-Benz", src: `${CLIENT_BASE}/mercedes.jpg` },
  ],
};

export const partner = {
  kicker: "Governance Partner",
  heading: "A Governance-Structured Compliance Partner",
  paragraphs: [
    "Aksharaa operates through defined governance frameworks, structured workforce systems, and disciplined regulatory execution. We support growing businesses and established enterprises with multi-state compliance alignment, documented oversight, and operational transparency.",
    "From labour law and payroll governance to statutory registrations and regulatory filings, every engagement is executed through monitored systems and institutional discipline.",
  ],
  note:
    "Governance is not an add-on to compliance. It is the structure through which compliance becomes sustainable.",
  metrics: [
    { value: 98, suffix: "%", label: "Client Retention & Satisfaction" },
    { value: 15, suffix: "+", label: "Years of Governance & Compliance Experience" },
  ],
  accent: { value: 98, suffix: "%", label: "Client Retention & Satisfaction" },
  cta: { label: "About Aksharaa", href: "#footer" },
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  imageAlt: "Aksharaa Corporate Services — institutional architecture",
};

export const lifecycle = {
  kicker: "Compliance Architecture",
  heading: "The Structured Compliance Lifecycle",
  sub: "Governed at every stage. Monitored continuously. Executed with discipline.",
  steps: [
    { num: "01", icon: "checkCircle", title: "Register", desc: "Company incorporation, GST, PF, ESI, licensing, and statutory registrations structured correctly from inception." },
    { num: "02", icon: "monitor", title: "Operate", desc: "Workforce governance, payroll discipline, statutory record maintenance, and internal policy alignment." },
    { num: "03", icon: "fileText", title: "File", desc: "Regulatory returns, renewals, and submissions executed on time with documented verification standards." },
    { num: "04", icon: "clipboardCheck", title: "Audit", desc: "Internal compliance reviews, documentation hygiene checks, and structured risk validation." },
    { num: "05", icon: "trendingUp", title: "Scale", desc: "Multi-state expansion, workforce structuring, and strengthened compliance systems built for institutional growth." },
  ],
};

export const framework = {
  kicker: "Framework",
  heading: "A Structured Governance Framework — Not Just Filing Services",
  sub: "Compliance executed through defined oversight, operational systems, and documented reporting standards.",
  pillars: [
    { num: "01", label: "01 — Advisory Oversight", title: "Advisory Oversight", desc: "Strategic guidance aligned with statutory requirements and operational realities. Every engagement is supported by structured advisory input — not reactive responses." },
    { num: "02", label: "02 — Operational Discipline", title: "Operational Discipline", desc: "Defined processes, structured documentation, and monitored compliance calendars. Discipline at the operational level ensures consistency at the regulatory level." },
    { num: "03", label: "03 — Regulatory Execution", title: "Regulatory Execution", desc: "Accurate registrations, filings, renewals, and statutory submissions — executed without compromise. Pre-submission verification is built into every cycle." },
    { num: "04", label: "04 — Documented Reporting", title: "Documented Reporting", desc: "Transparent reporting, audit readiness, and structured record management. Every engagement produces verifiable documentation — always inspection-ready." },
  ],
  statementStrong: "Governance is not an add-on to compliance.",
  statementRest:
    " It is the structure through which compliance becomes sustainable — and through which businesses scale without regulatory exposure.",
};

export const workforce = {
  kicker: "Integrated Systems",
  heading: "Integrated Workforce & Compliance Systems",
  intro:
    "Compliance is not isolated. It is embedded into operational structure and workforce governance. Aksharaa coordinates both — ensuring that regulatory obligations are managed as part of your business operations, not separate from them.",
  note:
    "Workforce governance and regulatory compliance must operate as one unified system — not as parallel processes managed by separate teams.",
  areas: [
    { icon: "banknote", title: "Payroll Governance & Statutory Alignment", sub: "Integrated with PF/ESI/PT filings" },
    { icon: "shield", title: "Labour Law Compliance Across States", sub: "Multi-state framework, state-wise alignment" },
    { icon: "users", title: "Contract Staffing & Workforce Structuring", sub: "Flexi, contract, permanent — all governed" },
    { icon: "fileText", title: "HR Documentation & Employment Frameworks", sub: "Legally sound policies and agreements" },
    { icon: "globe", title: "Multi-Location Compliance Coordination", sub: "Centralised oversight, state-wise execution" },
    { icon: "lock", title: "Licensing & Regulatory Approvals", sub: "Trade, factory, BOCW, CLRA, sector-specific" },
  ],
};

export const risk = {
  kicker: "Risk & Control",
  heading: "Risk Intelligence & Compliance Control",
  sub: "Identifying structural compliance vulnerabilities and governing them through monitored systems and layered oversight.",
  zones: {
    head: "Common Risk Zones",
    items: [
      "Missed PF / ESI deposit deadlines",
      "Incomplete statutory registers",
      "Improper employment documentation",
      "Multi-state compliance inconsistencies",
      "Delayed filings & renewal lapses",
      "Regulatory inspection exposure",
    ],
  },
  mitigation: {
    head: "Governance-Led Mitigation",
    items: [
      "Calendar-driven compliance tracking",
      "Structured documentation protocols",
      "Pre-submission verification systems",
      "Dedicated advisory oversight",
      "Multi-layer compliance review",
      "Continuous monitoring framework",
    ],
  },
  axiom: "Risk does not arise from complexity. It arises from unmanaged systems.",
};

export const architecture = {
  kicker: "Compliance Domains",
  heading: "Comprehensive Compliance & Workforce Architecture",
  sub: "Six core compliance domains. Structured execution. Institutional discipline.",
  domains: [
    { num: "01", icon: "building", title: "Business Registration & Incorporation", desc: "Entity formation, statutory registrations, and structural compliance alignment from inception." },
    { num: "02", icon: "shield", title: "Labour Law & HR Compliance", desc: "PF, ESI, Shops & Establishment, CLRA, and multi-state labour governance frameworks." },
    { num: "03", icon: "wallet", title: "Payroll & Workforce Management", desc: "Payroll governance, statutory deductions, workforce structuring, and compliance-integrated payroll systems." },
    { num: "04", icon: "receipt", title: "GST & Taxation Compliance", desc: "Registrations, return filing, reconciliation management, and documented submission protocols." },
    { num: "05", icon: "fileSignature", title: "Legal Documentation & Agreements", desc: "Employment agreements, HR policies, compliance documentation, and contractual structuring." },
    { num: "06", icon: "badge", title: "Licensing & Regulatory Approvals", desc: "Trade licenses, factory licenses, sector-specific approvals, and regulatory alignment controls." },
  ],
};

export const control = {
  kicker: "Control Systems",
  heading: "Compliance Control Systems",
  sub: "Structured monitoring, validation, and reporting mechanisms that govern every compliance engagement.",
  cards: [
    { num: "01", icon: "calendar", title: "Calendar-Driven Compliance Tracking", desc: "Automated statutory calendars aligned to state-wise and entity-wise regulatory obligations." },
    { num: "02", icon: "layers", title: "Multi-Layer Review Protocol", desc: "Pre-submission validation and internal verification checkpoints before regulatory filing." },
    { num: "03", icon: "folderCheck", title: "Documentation Governance Model", desc: "Structured document control, statutory register hygiene, and audit-ready archival systems." },
    { num: "04", icon: "scan", title: "Inspection Readiness Framework", desc: "Preparedness protocols for regulatory inspections, documentation audits, and compliance reviews." },
  ],
};

export const engagement = {
  kicker: "Engagement Model",
  heading: "Structured. Monitored. Delivered.",
  sub: "A compliance protocol flow — not a marketing funnel.",
  steps: [
    { num: "01", icon: "compass", title: "Consult & Structure", desc: "Understanding operational needs and mapping regulatory obligations clearly before any action is taken." },
    { num: "02", icon: "clipboardList", title: "Prepare & Align", desc: "Document preparation, data validation, and process alignment with statutory requirements." },
    { num: "03", icon: "send", title: "Execute & File", desc: "Disciplined submissions with internal verification and compliance checks at every stage." },
    { num: "04", icon: "radar", title: "Monitor & Govern", desc: "Continuous oversight, renewals, regulatory updates, and structured advisory support." },
  ],
};

export const metrics = {
  kicker: "Institutional Scale",
  heading: "Institutional Scale. Disciplined Execution.",
  items: [
    { value: 500, suffix: "+", label: "Establishments Served Across India" },
    { value: 15, suffix: "+", label: "Years of Regulatory & Workforce Expertise" },
    { value: 6, suffix: "+", label: "Core Compliance Domains" },
    { text: "Pan-India", label: "Multi-State Operational Coverage" },
  ],
};

export const finalCta = {
  kicker: "Begin Your Engagement",
  headline: ["Ready to Structure Your", "Compliance Framework?"],
  sub: "Move beyond reactive filing. Build a governance-driven compliance system aligned with your growth and regulatory obligations.",
  watermark: "GOVERNANCE",
  ctas: [
    { label: "Start Your Compliance", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};

export const footer = {
  columns: [
    {
      head: "Compliance Domains",
      links: [
        { label: "Business Registration & Incorporation", href: "#architecture" },
        { label: "Labour Law & HR Compliance", href: "#architecture" },
        { label: "Payroll & Workforce Management", href: "#architecture" },
        { label: "GST & Taxation Compliance", href: "#architecture" },
        { label: "Legal Documentation & Agreements", href: "#architecture" },
        { label: "Licensing & Regulatory Approvals", href: "#architecture" },
      ],
    },
    {
      head: "Institutional",
      links: [
        { label: "About Aksharaa", href: "#partner" },
        { label: "Governance Framework", href: "#framework" },
        { label: "Industries", href: "#" },
        { label: "Client Stories", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      head: "Connect",
      links: [
        { label: "Start Your Compliance", href: "#final-cta" },
        { label: "Speak to a Governance Advisor", href: "#footer" },
        { label: "Contact", href: "#footer" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyright: "© 2026 Aksharaa Corporate Services. All rights reserved.",
};
