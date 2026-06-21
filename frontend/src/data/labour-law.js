/**
 * Content for the Labour Law & HR Compliance category landing page.
 * Lean menu page - lists and links to all 18 services in this category.
 * Inherits PF Compliance's dark/statutory visual identity (grid+dot
 * texture, penalty-gauge motif, circular cycle diagrams) as the
 * category-level sibling of that service template.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 1.
 */

export const meta = {
  title: "Labour Law & HR Compliance | Aksharaa Corporate Services",
  description:
    "18 labour law and HR compliance services governed end-to-end — PF, ESI, CLRA, Factories Act, POSH, and more. Statutory compliance, structured and documented.",
};

export const hero = {
  eyebrow: "Compliance Domain · 01 of 06",
  kicker: "Labour Law & HR Compliance",
  headline: ["Stay Compliant.", "Stay", "Protected."],
  sub:
    "18 statutory compliance services governing the workforce, the workplace, and labour welfare obligations — from PF and ESI to CLRA, Factories Act, and POSH. Every obligation tracked, every filing documented, every inspection anticipated.",
  ctas: [
    { label: "Check Your Compliance Exposure", variant: "primary", href: "#labour-services" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#category-cta" },
  ],
  stats: [
    { value: 18, suffix: "", label: "Compliance Services Governed" },
    { value: 0, suffix: "", label: "Penalty Incidents for Managed Clients" },
    { value: 15, suffix: "+", label: "Years Managing Labour Obligations" },
    { text: "Pan-India", label: "Multi-State Coverage" },
  ],
  lawBadge: "Multi-Act",
  lawText: "Central & State Labour Codes",
  lawDesc: "EPF & MP Act, ESI Act, CLRA, Factories Act, POSH Act, Minimum Wages Act, Equal Remuneration Act, and state-specific Shops & Establishment Acts — all governed under one engagement.",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=900",
  imageAlt: "Labour law compliance documentation review",
};

export const why = {
  kicker: "Why This Matters",
  heading: "Non-Compliance Is a Criminal, Not Just a Civil, Risk",
  sub: "Labour law violations in India routinely carry criminal liability, not just monetary penalties. Inspectors can act on notice or without it.",
  points: [
    { icon: "alertTriangle", title: "Criminal Prosecution Risk", desc: "PF, ESI, and CLRA defaults can trigger prosecution under the respective Acts — not just interest and damages." },
    { icon: "landmark", title: "Asset Attachment", desc: "Statutory authorities can attach and auction company assets for unpaid contributions, without a court order in some cases." },
    { icon: "fileX", title: "Tender & Contract Disqualification", desc: "Labour law compliance certificates are routinely verified before contract or tender award — a lapse disqualifies silently." },
  ],
};

export const subNav = {
  kicker: "18 Services, One Engagement",
  heading: "Every Labour Law Obligation, Governed",
  sub: "Labour Law & HR Compliance spans statutory contributions, workplace registers, and workforce welfare — organised here by what each group of services actually governs. Expand a group to see everything Aksharaa manages within it.",
  groups: [
    {
      id: "statutory",
      num: "01",
      icon: "wallet",
      title: "Statutory Contribution Compliance",
      count: 5,
      desc: "Monthly contribution-based obligations under central labour law.",
      items: [
        { label: "PF Compliance", href: "/labour-law-compliance/pf-compliance" },
        { label: "ESI Compliance", href: "/labour-law-compliance/esi-compliance" },
        { label: "Profession Tax Compliance", href: "/labour-law-compliance/profession-tax-compliance" },
        { label: "Labour Welfare Fund (LWF) Compliance", href: "/labour-law-compliance/labour-welfare-fund" },
        { label: "Minimum Wages Act Compliance", href: "/labour-law-compliance/minimum-wages-compliance" },
      ],
    },
    {
      id: "establishment",
      num: "02",
      icon: "building",
      title: "Establishment & Workplace Compliance",
      count: 6,
      desc: "Compliance governing the establishment itself, its registers, and workplace conduct.",
      items: [
        { label: "Shops & Establishment Act Compliance", href: "/labour-law-compliance/shops-establishment-compliance" },
        { label: "Factories Act Compliance", href: "/labour-law-compliance/factories-act-compliance" },
        { label: "Equal Remuneration Act Compliance", href: "/labour-law-compliance/equal-remuneration-compliance" },
        { label: "POSH Act Compliance", href: "/labour-law-compliance/posh-act-compliance" },
        { label: "Establishment Compliance Services", href: "/labour-law-compliance/establishment-compliance" },
        { label: "Factory Compliance Services", href: "/labour-law-compliance/factory-compliance" },
      ],
    },
    {
      id: "contract",
      num: "03",
      icon: "fileSignature",
      title: "Contract Labour & Audit Services",
      count: 7,
      desc: "Compliance for contract workforce arrangements and structured audit support.",
      items: [
        { label: "CLRA Act Compliance", href: "/labour-law-compliance/clra-compliance" },
        { label: "Contract Labour Compliance Services", href: "/labour-law-compliance/contract-labour-compliance" },
        { label: "Labour Compliance Automation Setup", href: "/labour-law-compliance/compliance-automation-setup" },
        { label: "Labour Compliance Audits — Multi-State Entities", href: "/labour-law-compliance/multi-state-compliance-audit" },
        { label: "Labour Law Audit for Contractors", href: "/labour-law-compliance/contractor-labour-audit" },
        { label: "Health & Hygiene Audit (Factories)", href: "/labour-law-compliance/health-hygiene-audit" },
        { label: "Mines Compliance Services", href: "/labour-law-compliance/mines-compliance" },
      ],
    },
  ],
};

export const focusServices = {
  kicker: "Most-Requested Compliance Services",
  heading: "Where Most Businesses Start",
  sub: "Six services form the statutory baseline most establishments are asked to govern first.",
  items: [
    { num: "01", icon: "wallet", title: "PF Compliance", tier: "Mandatory · 20+ employees", href: "/labour-law-compliance/pf-compliance" },
    { num: "02", icon: "heart", title: "ESI Compliance", tier: "Mandatory · 10+ employees", href: "/labour-law-compliance/esi-compliance" },
    { num: "03", icon: "building", title: "Shops & Establishment", tier: "Mandatory · all establishments", href: "/labour-law-compliance/shops-establishment-compliance" },
    { num: "04", icon: "fileSignature", title: "CLRA Act Compliance", tier: "Contract labour · 20+ workers", href: "/labour-law-compliance/clra-compliance" },
    { num: "05", icon: "factory", title: "Factories Act Compliance", tier: "Manufacturing units", href: "/labour-law-compliance/factories-act-compliance" },
    { num: "06", icon: "shield", title: "POSH Act Compliance", tier: "Mandatory · 10+ employees", href: "/labour-law-compliance/posh-act-compliance" },
  ],
};

export const howWeWork = {
  kicker: "How Aksharaa Works",
  heading: "Assessment. Setup. Monthly Management.",
  sub: "Every labour law engagement follows the same three-stage protocol, regardless of which of the 18 services is in scope.",
  steps: [
    { num: "01", icon: "scan", title: "Assessment", desc: "Review current compliance status across all applicable acts, identify gaps, registrations, and exposure." },
    { num: "02", icon: "filePlus", title: "Setup", desc: "Registrations completed, registers initialised, documentation structured for ongoing compliance." },
    { num: "03", icon: "refreshCw", title: "Monthly Management", desc: "Contributions deposited, returns filed, registers maintained — every month, on a tracked calendar." },
  ],
};

export const faqs = {
  kicker: "Frequently Asked",
  heading: "Labour Law & HR Compliance — Common Questions",
  items: [
    { q: "Which labour law compliances are mandatory for a new establishment?", a: "At minimum: Shops & Establishment Act compliance applies to nearly all establishments. PF becomes mandatory at 20+ employees, ESI at 10+. POSH Act compliance is mandatory for any organisation with 10+ employees, regardless of sector." },
    { q: "Does Aksharaa handle compliance across multiple states?", a: "Yes. Aksharaa manages multi-state labour law compliance with state-specific Shops Act variations, PT slabs, and registration requirements tracked centrally with consolidated reporting." },
    { q: "What happens during a labour department inspection?", a: "Aksharaa represents your establishment during inspections — registers, returns, and compliance documentation are kept inspection-ready at all times, and our team liaises directly with inspecting officers." },
    { q: "Can Aksharaa audit our existing labour law compliance?", a: "Yes. Our Multi-State Compliance Audit and Contractor Labour Audit services review existing compliance status, identify gaps, and provide a remediation roadmap before issues surface during inspection." },
  ],
};

export const categoryCta = {
  kicker: "Begin Your Compliance Review",
  headline: ["Identify Your Labour Law", "Exposure Before It Surfaces"],
  sub: "Most businesses carry gaps they're unaware of until an inspection. A structured review identifies exactly what applies to your establishment.",
  ctas: [
    { label: "Request a Compliance Review", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
