/**
 * Content for the Compliance, Filings & Taxation category landing page.
 * Smallest category - only 2 services. Lean menu page, most spacious
 * treatment of all 6 category pages, inheriting PF & ESI Returns
 * Filing's calm/deadline-driven visual identity.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 5.
 */

export const meta = {
  title: "Compliance, Filings & Taxation | Aksharaa Corporate Services",
  description: "Statutory returns filing services — PF/ESI and Professional Tax. Filed on time, every time, with zero follow-up required.",
};

export const hero = {
  eyebrow: "Compliance Domain · 05 of 06",
  headline: ["Filed on Time,", "Every Time"],
  sub: "Statutory returns filing — PF & ESI returns and Professional Tax filing — each with strict deadlines that carry interest and penalties on every day of delay. Aksharaa maintains a filing tracker for every client so nothing is ever missed.",
  ctas: [
    { label: "Start Filing With Us", variant: "primary", href: "#filing-services" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#category-cta" },
  ],
  stats: [
    { value: 450, suffix: "+", label: "Establishments Served" },
    { value: 0, suffix: "", label: "Late Filings on Record" },
    { value: 15, suffix: "+", label: "Years Filing Experience" },
  ],
};

export const services = {
  kicker: "2 Services, Fully Integrated",
  heading: "Every Statutory Filing, On Time",
  items: [
    { num: "01", icon: "shield", title: "PF & ESI Returns Filing", desc: "Monthly ECR filings, ESI challans, half-yearly returns, and annual submissions — filed on time, every time, with zero follow-up required.", href: "/compliance-filings-taxation/pf-esi-returns-filing" },
    { num: "02", icon: "receipt", title: "Professional Tax Filing", desc: "State-wise professional tax returns filed monthly or quarterly — combined with PF/ESI under one compliance engagement.", href: "/compliance-filings-taxation/professional-tax-filing" },
  ],
};

export const faqs = {
  kicker: "Common Questions",
  heading: "Filings & Taxation — Frequently Asked",
  items: [
    { q: "What happens if we miss a statutory filing deadline?", a: "Interest accrues from the due date, and continued default can trigger damage demands and even prosecution under the relevant Act. Aksharaa ensures filings are completed with buffer before each deadline." },
    { q: "Does Aksharaa handle filings for multiple states?", a: "Yes. Professional Tax filing in particular varies significantly by state — Aksharaa manages state-specific slabs and filing cycles under one consolidated engagement." },
  ],
};

export const categoryCta = {
  kicker: "Never Miss a Deadline Again",
  headline: ["Hand Over Your Filings", "to Aksharaa"],
  sub: "Share your payroll data once a month — we handle every filing, every deadline, every year.",
  ctas: [
    { label: "Start Filing With Us", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
