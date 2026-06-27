/**
 * Content for Employment Agreements service page.
 * TEMPLATE for all 18 services under Legal & Documentation.
 * Source: live employment-agreements.html (client-approved content, structure preserved).
 */

export const meta = {
  title: "Employment Agreements | Aksharaa Corporate Services",
  description: "Legally precise, role-specific employment agreements drafted by legal experts — not templates. Delivered in 3-5 working days.",
  category: { name: "Legal & Documentation", href: "/legal-documentation" },
};

export const hero = {
  eyebrow: "Legal & Documentation",
  headline: ["Employment Agreements", "That Actually Protect You"],
  sub: "Legally precise. Role-specific.\nBuilt to protect your business and people.",
  ctas: [
    { label: "Get Your Agreement Drafted", variant: "primary", href: "#service-cta" },
    { label: "Explore All Legal Services", variant: "secondary", href: "/legal-documentation" },
  ],
  // Rebuilt from a single-line 4-item checklist to a 3-item rich format
  // per client reference image: icon box + bold title + description,
  // divided by thin separators. Reference's 3 items kept verbatim
  // (Legally Vetted / Role-Specific & Precise / Court-Enforceable);
  // the old list's 4th item ("One revision included as standard") and
  // delivery-timeline item moved into the new bottom trust strip below,
  // which the reference shows as a separate dedicated section.
  trustItems: [
    { icon: "shield", title: "Legally Vetted", desc: "Drafted by experienced legal experts to protect your interests." },
    { icon: "fileSignature", title: "Role-Specific & Precise", desc: "Custom clauses tailored to every role and responsibility." },
    { icon: "gavel", title: "Court-Enforceable", desc: "Built to be enforceable, minimizing risks and disputes." },
  ],
  // Floating badges scattered around the hero photo, per client reference
  // image — positions are percentage-based (relative to the photo panel)
  // rather than fixed pixels, sampled from the reference at 1444x976:
  // Confidentiality (65.5%, 20%), Your IP (80.7%, 37.4%), Legally Vetted
  // (36.4%, 56.9%), Clear Terms (75.2%, 53.8%). Centre shield+checkmark
  // icon and the dotted-ring decorations are NOT in this data — they're
  // confirmed absent from the supplied background asset (agreements-hero-bg.jpg
  // is photo + vignette + city-skyline watermark only), so both are
  // built directly in the component as fixed decorative elements, same
  // treatment as Returns Hero's dotted ring.
  badges: [
    { icon: "lock", title: "Confidentiality", title2: "Protected", pos: { left: "58.3%", top: "11.7%" } },
    { icon: "lightbulb", title: "Your IP,", title2: "Your Rights", pos: { left: "66.9%", top: "43.5%" } },
    { icon: "shield", title: "Legally Vetted", title2: "by Experts", pos: { left: "11.7%", top: "58.3%" } },
    { icon: "users", title: "Clear Terms,", title2: "Fewer Disputes", pos: { left: "51.5%", top: "63.6%" } },
  ],
  // New bottom trust strip, per client reference image — does not exist
  // in the previous version of this Hero at all. 4-item row, separated
  // by thin vertical dividers (collapses to 2x2 on mobile).
  bottomStrip: [
    { icon: "clock", title: "Delivered in 3–5 Days", desc: "Fast turnaround without compromising quality." },
    { icon: "clipboardCheck", title: "One Revision Included", desc: "We fine-tune it until it's right for you." },
    { icon: "headset", title: "Expert Legal Support", desc: "Get guidance from legal professionals, always." },
    { icon: "scale", title: "Built for Your Business", desc: "Agreements that grow with your business." },
  ],
};

export const types = {
  kicker: "What We Draft",
  heading: "Employment Agreement Types",
  sub: "Different employment relationships require fundamentally different agreements. Aksharaa drafts each type with the precise legal language appropriate for that engagement structure.",
  cards: [
    { num: "01", icon: "userCheck", title: "Permanent Employment Agreement", desc: "For full-time employees on open-ended contracts. Covers role, compensation, leave, benefits, performance terms, IP assignment, confidentiality, and termination.", tags: ["All industries", "Full-time roles"] },
    { num: "02", icon: "calendar", title: "Fixed-Term Employment Agreement", desc: "For employees engaged for a defined duration — project-based, seasonal, or probationary. Includes clear end-date, renewal terms, and statutory entitlements.", tags: ["Project roles", "Probationers", "Seasonal hiring"] },
    { num: "03", icon: "fileSignature", title: "Consultancy / Retainer Agreement", desc: "For independent consultants, advisors, or freelancers. Establishes non-employee status, scope of work, fees, and IP ownership — avoiding misclassification risk.", tags: ["Consultants", "Advisors", "Freelancers"] },
    { num: "04", icon: "users", title: "Apprentice / Trainee Agreement", desc: "Compliant with the Apprentices Act, 1961. Covers stipend, training period, obligations of both parties, and conversion terms at the end of the period.", tags: ["Apprentices Act", "Trainees", "Interns"] },
    { num: "05", icon: "building", title: "Senior / CXO Employment Agreement", desc: "For senior management and C-suite hires. Includes ESOPs, performance incentives, garden leave, and dispute resolution mechanisms.", tags: ["CXO / VP level", "ESOP holders"] },
    { num: "06", icon: "fileText", title: "Offer Letter + Agreement Bundle", desc: "Complete new hire documentation — offer letter, employment agreement, NDA, and IT/asset policy acknowledgement — as a cohesive onboarding set.", tags: ["All levels", "New joiners"] },
  ],
};

export const clauses = {
  kicker: "What Goes In",
  heading: "Key Clauses Every Agreement Must Have",
  sub: "Generic templates miss clauses that are specific to Indian employment law. Aksharaa ensures every agreement contains these legally critical provisions — drafted for enforceability, not just formality.",
  items: [
    { num: "§ 1", title: "Parties, Designation & Reporting Structure", desc: "Full legal name of employer entity, employee details, role title, department, and the reporting manager.", tier: "Essential" },
    { num: "§ 2", title: "Commencement Date & Probation Period", desc: "Start date, duration of probation (typically 3–6 months), conditions for confirmation, and extension terms.", tier: "Essential" },
    { num: "§ 3", title: "Compensation, Benefits & Deductions", desc: "Gross salary structure, statutory deductions (PF, ESI, PT, TDS), variable pay terms, and increment policy.", tier: "Essential" },
    { num: "§ 4", title: "Working Hours, Leave & Holiday Policy", desc: "Applicable Factory Act / Shops Act provisions, leave entitlements (EL, CL, SL), and flexible working terms.", tier: "Essential" },
    { num: "§ 5", title: "Confidentiality & Non-Disclosure", desc: "Definition of confidential information, obligations during and after employment, and remedies for breach.", tier: "Critical" },
    { num: "§ 6", title: "Intellectual Property Assignment", desc: "All work product created during employment is assigned to the employer — covering software, designs, inventions.", tier: "Critical" },
    { num: "§ 7", title: "Non-Solicitation Clause", desc: "Restricts the employee from poaching clients, customers, or colleagues for a defined period post-employment.", tier: "Critical" },
    { num: "§ 8", title: "Termination, Notice Period & Garden Leave", desc: "Notice period for both parties, payment in lieu of notice, grounds for summary termination, garden leave.", tier: "Essential" },
    { num: "§ 9", title: "Governing Law & Dispute Resolution", desc: "Jurisdiction clause specifying which state's courts govern, and dispute resolution mechanism.", tier: "Essential" },
  ],
  note: "Additional clauses — ESOP vesting, garden leave, training cost recovery, non-compete — are included based on role level and industry. Aksharaa advises on which clauses are enforceable under Indian law before including them.",
};

export const scope = {
  kicker: "Complete Service Scope",
  heading: "What Aksharaa Delivers",
  sub: "From a single employment agreement to a complete HR legal documentation suite — Aksharaa covers every document a growing business needs for its workforce.",
  items: [
    { icon: "fileText", title: "Fresh Agreement Drafting", desc: "New employment agreements drafted from scratch based on your brief — role, industry, seniority, and specific clauses required." },
    { icon: "fileSignature", title: "Existing Agreement Review & Vetting", desc: "Aksharaa reviews your current agreements, identifies legal gaps, and provides a written report with redraft recommendations." },
    { icon: "users", title: "Bulk Agreement Drafting", desc: "Multiple agreement variants for different grades, roles, or departments — delivered as a structured template set." },
    { icon: "shield", title: "NDA & Restrictive Covenant Drafting", desc: "Standalone NDAs, non-disclosure clauses, and non-compete clauses — drafted to the limits of what Indian courts will enforce." },
    { icon: "fileText", title: "HR Policy Document Drafting", desc: "Employee handbook, leave policy, code of conduct, and POSH policy — drafted as standalone enforceable HR documents." },
    { icon: "checkCircle", title: "Separation & Settlement Agreements", desc: "Full and final settlement agreements, mutual separation deeds, and relieving documentation." },
  ],
};

export const process = {
  kicker: "How It Works",
  heading: "From Brief to Document in 4 Steps",
  sub: "Aksharaa's drafting process is designed to minimise back-and-forth. We collect everything we need upfront, draft precisely, and deliver a legally sound document within the agreed timeline.",
  steps: [
    { num: "01", title: "Brief & Requirement Capture", desc: "You share the role details, employment type, seniority level, specific clauses needed, and any existing documents to align with." },
    { num: "02", title: "First Draft Delivered", desc: "Aksharaa delivers a complete first draft within 3–5 working days. Longer documents may take 5–7 days." },
    { num: "03", title: "Your Review & One Revision", desc: "You review the draft and provide consolidated feedback. One round of revision is included as standard." },
    { num: "04", title: "Final Delivery", desc: "Final agreement delivered in Word format (.docx) and PDF for execution. Guidance on signing formalities provided if required." },
  ],
  turnaround: {
    title: "Turnaround Times",
    rows: [
      { type: "Single Employment Agreement", time: "3–5 working days" },
      { type: "CXO / Senior Agreement", time: "5–7 working days" },
      { type: "Agreement + NDA Bundle", time: "4–6 working days" },
      { type: "Bulk Agreement Set (5+ roles)", time: "7–10 working days" },
      { type: "Existing Agreement Vetting", time: "2–3 working days" },
    ],
    note: "All timelines from date of complete brief receipt. Expedited drafting available on request.",
  },
  formats: ["Word (.docx) — editable", "PDF — execution ready"],
};

export const faqs = {
  kicker: "Common Questions",
  heading: "Frequently Asked Questions",
  sub: "What employers and HR managers ask about employment agreement drafting.",
  items: [
    { q: "Are non-compete clauses enforceable in India?", a: "Post-employment non-compete clauses are generally not enforceable in India under Section 27 of the Indian Contract Act. However, non-solicitation clauses and confidentiality obligations are enforceable. Aksharaa drafts only what Indian courts will uphold." },
    { q: "Can we use the same agreement template for all employees?", a: "Not advisably. A factory worker's agreement must comply with Factories Act requirements; a software engineer's needs strong IP clauses; a CXO agreement needs ESOP and garden leave provisions. Aksharaa creates role-tier templates appropriate for each grade." },
    { q: "Does an employment agreement need to be stamped or registered?", a: "Employment agreements do not generally require registration. Stamp duty requirements vary by state. Aksharaa advises on signing formalities specific to your state." },
    { q: "What if an employee refuses to sign the agreement?", a: "We recommend making execution of the employment agreement a condition of joining — included in the offer letter, drafted as a coordinated set." },
    { q: "We already have agreements in use — can Aksharaa just review them?", a: "Yes. Aksharaa reviews existing agreements and delivers a written gap analysis within 2–3 working days, identifying missing clauses and legal risks." },
  ],
};

export const related = {
  kicker: "You May Also Need",
  heading: "Related Legal & HR Services",
  sub: "Businesses completing employment agreements typically need these alongside.",
  items: [
    { icon: "shield", title: "POSH Act Compliance", desc: "ICC formation, POSH policy drafting, annual report filing, and employee awareness training — mandatory for organisations with 10+ employees.", href: "/labour-law-compliance/posh-act-compliance" },
    { icon: "fileText", title: "HR Policies Drafting", desc: "Employee handbook, leave policy, code of conduct, and IT policy — drafted as enforceable HR documents.", href: "/payroll-hr-operations/hr-policies-drafting" },
    { icon: "userCheck", title: "Background Verification", desc: "Identity, address, and employment history verification for new hires — before the agreement is signed.", href: "/staffing-manpower/background-verification" },
  ],
};

export const serviceCta = {
  heading: "Get Your Employment Agreements Drafted by Aksharaa",
  sub: "Share your requirements — role, seniority, employment type, and any specific clauses needed — and Aksharaa will deliver a legally precise, role-specific agreement within 3-5 working days.",
  ctas: [
    { label: "Request a Draft", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
