/**
 * Content for the PF Compliance service page.
 * TEMPLATE for all 18 services under Labour Law & HR Compliance.
 * Source: live pf-compliance.html (client-approved content, structure preserved).
 */

export const meta = {
  title: "PF Compliance Management | Aksharaa Corporate Services",
  description: "Complete Provident Fund compliance management — registration, monthly contributions, ECR filing, inspection support.",
  category: { name: "Labour Law & HR Compliance", href: "/labour-law-compliance" },
};

export const hero = {
  eyebrow: "Labour Law Compliance · PF Act 1952",
  headline: ["PF", "Compliance", "Management"],
  accentWord: "Compliance",
  sub: "Provident Fund compliance is a statutory obligation for every employer with 20 or more employees. Aksharaa manages your complete PF compliance cycle — from registration and monthly contributions to ECR filing and inspection support — so you never face penalties or legal exposure.",
  ctas: [
    { label: "Get PF Compliance Support", variant: "primary", href: "#service-cta" },
    { label: "View Our Process", variant: "secondary", href: "#svc-process" },
  ],
  meta_tags: ["Monthly ECR Filing", "Inspection Representation", "Multi-location Management"],
  trackRecord: {
    title: "Our PF Track Record",
    stats: [
      { value: 500, suffix: "+", label: "Establishments on active compliance" },
      { value: 15, suffix: "+", label: "Years managing PF obligations" },
      { value: 0, suffix: "", label: "Penalty incidents for managed clients", accent: "green" },
      { text: "Pan-India", label: "Multi-state coverage" },
    ],
    lawBadge: "EPF Act",
    lawText: "EPF & MP Act, 1952",
    lawDesc: "Governed by EPFO. Mandatory for establishments with 20+ employees. Managed via Unified Portal with monthly ECR filing.",
  },
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900",
  imageAlt: "Compliance officer managing monthly PF contribution filings",
};

export const overview = {
  kicker: "Understanding the Law",
  heading: "What is PF Compliance?",
  actPill: "EPF & Miscellaneous Provisions Act, 1952",
  paragraphs: [
    "The Employees' Provident Fund (EPF) is governed by the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. It mandates that establishments with 20 or more employees contribute a defined percentage of wages to each employee's provident fund account every month.",
    "For employers, this means accurate payroll integration, timely contribution deposits, correct ECR filing, and maintaining records that can withstand government inspection at any time. Non-compliance attracts heavy interest, prosecution, and even attachment of company assets.",
    "Aksharaa manages the entire PF compliance lifecycle — from first registration and employee onboarding to monthly ECR filing, annual returns, and EPFO inspection support — for single and multi-location establishments across India.",
  ],
  quickRef: {
    label: "Quick Reference",
    title: "PF Compliance at a Glance",
    sub: "Key thresholds, rates & deadlines",
    stats: [
      { num: "20+", label: "Employee threshold" },
      { num: "12%", label: "Employer contribution" },
      { num: "15th", label: "Monthly deadline" },
      { num: "ECR", label: "Monthly filing format" },
    ],
    links: [
      { label: "Also need ESI Compliance?", href: "/labour-law-compliance/esi-compliance" },
      { label: "Integrate with Payroll Processing", href: "/payroll-hr-operations/payroll-processing" },
      { label: "New establishment? PF Registration", href: "/registrations-licensing/pf-esi-registration" },
      { label: "Profession Tax Compliance", href: "/labour-law-compliance/profession-tax-compliance" },
    ],
  },
};

export const applicability = {
  kicker: "Who Must Comply",
  heading: "Applicability & Thresholds",
  sub: "Thresholds are based on headcount across the establishment — including contract workers where the principal employer is responsible.",
  cards: [
    {
      threshold: "20",
      title: "Provident Fund (PF)",
      act: "EPF & MP Act, 1952 · EPFO",
      body: "Any factory, establishment or organisation employing 20 or more persons is mandatorily covered. Once covered, compliance continues even if headcount later drops below 20.",
      details: [
        { label: "Employer", value: "12% of Basic + DA per employee/month" },
        { label: "Employee", value: "12% matched — deducted from salary" },
        { label: "Deadline", value: "15th of every month via ECR" },
        { label: "Annual", value: "Form 3A, Form 6A returns" },
      ],
    },
    {
      threshold: "10",
      title: "Related: ESI Compliance",
      titleHref: "/labour-law-compliance/esi-compliance",
      act: "ESI Act, 1948 · ESIC",
      body: "ESI covers employees earning up to ₹21,000/month in establishments with 10+ employees. Aksharaa manages both PF and ESI together.",
      details: [
        { label: "Employer", value: "3.25% of gross wages" },
        { label: "Employee", value: "0.75% of gross wages" },
        { label: "Deadline", value: "15th of every month" },
        { label: "Returns", value: "Half-yearly (Form 5)" },
      ],
    },
  ],
  note: "Important — Contract Worker Liability: Under the EPF Act, contract workers deployed through a contractor at your premises are counted towards the threshold headcount. If the contractor fails to contribute, the principal employer is liable to make contributions directly.",
};

export const obligations = {
  kicker: "Legal Obligations",
  heading: "What the Law Requires",
  items: [
    { num: "1", title: "Monthly Employer Contribution", desc: "12% of basic wages + DA per employee, deposited by 15th of every month via challan" },
    { num: "2", title: "Employee Contribution Deduction", desc: "12% matched — deducted from employee salary and remitted to EPFO along with employer share" },
    { num: "3", title: "Monthly ECR Filing", desc: "Electronic Challan cum Return uploaded to EPFO Unified Portal with correct UAN mapping before due date" },
    { num: "4", title: "Annual Returns", desc: "Form 3A (individual member accounts) and Form 6A (consolidated annual return) filed every year" },
    { num: "5", title: "Statutory Registers", desc: "Maintain Form 3, Form 5, Form 10, Form 12A — available for EPFO inspection at any time" },
    { num: "6", title: "New Employee Onboarding", desc: "Generate UAN for new employees, link Aadhaar, complete KYC and nomination forms within timelines" },
    { num: "7", title: "EPFO Inspection Cooperation", desc: "Produce all records, registers, and wage data on demand during EPFO inspections" },
  ],
  penaltyPanel: {
    label: "Risk Warning",
    title: "Consequences of Non-Compliance",
    gaugeLabel: "Penalty severity — delay in months",
    gaugeFill: 85,
    gaugeSteps: ["1 month", "3 months", "6 months", "12+ months"],
    items: [
      { icon: "alertTriangle", title: "Late Payment Interest & Damages", desc: "Interest at 12% p.a. under Sec 7Q. Damages 5%–25% of arrears under Sec 14B depending on delay period." },
      { icon: "scale", title: "Criminal Prosecution", desc: "Wilful default is a criminal offence. Imprisonment up to 3 years + fines under Section 14 of the EPF Act." },
      { icon: "landmark", title: "Asset Attachment", desc: "EPFO Recovery Officers can attach and auction company assets — bank accounts, property — without a court order." },
      { icon: "fileText", title: "EPFO Defaulter List", desc: "Name published on the EPFO public defaulter list — reputational damage with banks, clients, and tenders." },
    ],
  },
};

export const scope = {
  kicker: "Our Scope of Work",
  heading: "What Aksharaa Manages",
  sub: "We handle every monthly obligation end-to-end — from data collection and computation to filing, remittance advice, and inspection support.",
  cards: [
    { icon: "filePlus", title: "PF Registration", desc: "New establishment registration with EPFO. Voluntary coverage setup for sub-threshold employers." },
    { icon: "calculator", title: "Monthly Contribution Computation", desc: "Accurate PF contribution calculation for each employee. Handles new joiners, exits, salary revisions, and arrear settlements." },
    { icon: "fileText", title: "ECR Preparation & Filing", desc: "Prepare and upload the Electronic Challan cum Return (ECR) to EPFO Unified Portal every month." },
    { icon: "userCheck", title: "Employee Onboarding to UAN", desc: "Register new joiners on EPFO Unified Portal — UAN generation/linking, Aadhaar seeding, KYC verification." },
    { icon: "layers", title: "Annual Returns Filing", desc: "File all annual returns including Form 3A and Form 6A — on time, every year." },
    { icon: "shield", title: "Inspection & Notice Support", desc: "Represent your establishment during EPFO inspections. Respond to notices, liaise with officers on your behalf." },
  ],
};

export const process = {
  kicker: "How We Work",
  heading: "Our 5-Step Compliance Process",
  sub: "A structured, repeatable process that ensures nothing slips through — from your first engagement to ongoing monthly management.",
  steps: [
    { num: "01", title: "Initial Assessment", desc: "Review your current payroll data, employee count, and PF registration status. Identify any backlogs, gaps, or pending registrations." },
    { num: "02", title: "Setup & Onboarding", desc: "Register establishment if not done. Onboard all employees into UAN system with Aadhaar seeding, KYC, and nomination forms." },
    { num: "03", title: "Monthly Computation", desc: "Receive payroll data → compute PF contributions → generate ECR → deposit challan → file return — all before the 15th." },
    { num: "04", title: "Registers & Audit Readiness", desc: "Maintain all statutory registers (Form 3, 5, 10, 12A) in inspection-ready format. Updated every month." },
    { num: "05", title: "Monthly Reporting", desc: "Compliance report shared with your HR/finance team every month. Inspection notices, EPFO communications handled proactively." },
  ],
  cycleLabel: "Repeats Every Month · By the 15th",
};

export const documents = {
  kicker: "Documents Checklist",
  heading: "Documents Required",
  sub: "To get started, provide the following. Our team will guide you through each step and follow up on anything missing.",
  items: [
    "Certificate of Incorporation / Partnership Deed / GST Certificate",
    "PAN Card of the Establishment",
    "Bank Account Details (cancelled cheque)",
    "Employee List with Date of Joining & Salary Details",
    "Aadhaar & PAN of all Employees",
    "Existing UAN Numbers (for previously enrolled employees)",
    "Previous ECR Challans (for establishments already registered)",
    "Nature of Business & Commencement Date",
  ],
};

export const faqs = {
  kicker: "FAQs",
  heading: "Frequently Asked Questions",
  sub: "Answers to the most common PF compliance questions from Indian employers.",
  items: [
    { q: "Is PF mandatory if we have fewer than 20 employees?", a: "PF is mandatory for establishments with 20 or more employees. However, employers can voluntarily register even below this threshold. Once covered, compliance continues even if headcount later drops below 20." },
    { q: "What is the ECR filing deadline every month?", a: "The ECR challan must be deposited by the 15th of every month for the preceding month's wages. Delay attracts interest under Section 7Q and damages under Section 14B of the EPF Act." },
    { q: "What happens if we miss a PF deposit for one month?", a: "A delay triggers interest at 12% per annum from the due date. If delay exceeds 2 months, damages of 5% to 25% are additionally levied. Consistent defaults can lead to prosecution and asset attachment." },
    { q: "Can contract workers at our site be covered under our PF registration?", a: "Yes. If the contractor does not have independent PF registration, the principal employer is liable to cover contract workers. This is one of the most common compliance gaps Aksharaa resolves for manufacturing and construction clients." },
    { q: "Does Aksharaa handle PF for multi-state or multi-location companies?", a: "Yes. Aksharaa manages PF compliance across multiple establishment codes and locations, coordinating with respective EPFO regional offices. Each location is tracked separately with consolidated reporting." },
    { q: "How quickly can Aksharaa take over our existing PF compliance?", a: "Typically within 5–7 working days of receiving complete documentation. We review existing filings, reconcile any gaps, and are ready to manage the very next month's compliance cycle." },
    { q: "What is UAN and who creates it?", a: "UAN (Universal Account Number) is a 12-digit number allotted to every PF member. Employers generate UAN for new employees during onboarding. Aksharaa manages UAN generation, Aadhaar seeding, and KYC." },
    { q: "Can employees check their PF balance themselves?", a: "Yes. Employees can check their PF balance on the EPFO member portal or via the UMANG app using their UAN and registered mobile number. Aksharaa ensures all UANs are activated and Aadhaar-seeded." },
  ],
};

export const related = {
  kicker: "You May Also Need",
  heading: "Related Services",
  items: [
    { icon: "heart", title: "ESI Compliance", desc: "Employee State Insurance management — monthly contributions, ESIC portal filings, half-yearly returns, and new employee IP registration.", href: "/labour-law-compliance/esi-compliance" },
    { icon: "wallet", title: "Payroll Processing", desc: "Outsource complete monthly payroll — salary computation, payslips, bank advice — auto-synced with PF, ESI, and Profession Tax filings.", href: "/payroll-hr-operations/payroll-processing" },
    { icon: "fileText", title: "PF & ESI Registration", desc: "Not yet registered? We handle new EPFO and ESIC registrations for your establishment — including voluntary coverage below threshold.", href: "/registrations-licensing/pf-esi-registration" },
  ],
};

export const serviceCta = {
  heading: "Ready to Go Penalty-Free?",
  sub: "Let Aksharaa handle your PF compliance end-to-end. Get a free compliance review — we'll identify any gaps before they become notices.",
  ctas: [
    { label: "Get Free Compliance Audit", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
