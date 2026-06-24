/**
 * Content for Payroll Processing service page.
 * TEMPLATE for all 9 services under Payroll & HR Operations.
 * Source: live payroll-processing.html (client-approved content, structure preserved).
 */

export const meta = {
  title: "Payroll Processing Services | Aksharaa Corporate Services",
  description: "Accurate monthly payroll, zero-error commitment, guaranteed deadlines — salary computation, statutory deductions, payslips, filing.",
  category: { name: "Payroll & HR Operations", href: "/payroll-hr-operations" },
};

export const hero = {
  eyebrow: "Payroll & HR Operations",
  headline: ["Accurate", "Payroll,", "Every Month."],
  accentWord: "Payroll,",
  sub: "Payroll is not just about paying salaries — it is a statutory compliance function where errors and delays carry real legal consequences. Aksharaa manages your complete monthly payroll cycle with a zero-error commitment and guaranteed deadlines.",
  ctas: [
    { label: "Get Payroll Support", variant: "primary", href: "#service-cta" },
    { label: "How It Works", variant: "secondary", href: "#svc-process" },
  ],
  chips: ["Salary computation", "PF · ESI · PT · TDS", "Payslip generation", "Multi-state coverage", "Zero-error guarantee"],
  dashboard: {
    title: "Aksharaa Payroll Dashboard",
    monthLabel: "February 2026",
    statTiles: [
      { icon: "users", value: "500+", label: "Establishments served" },
      { icon: "target", value: "0", label: "Penalty incidents" },
      { icon: "building", value: "15+", label: "Years payroll expertise" },
      { icon: "headset", value: "Pan-India", label: "Multi-state coverage" },
    ],
    chart: {
      title: "Payroll Summary",
      months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      // illustrative trend only — establishments onboarded across the cycle, not client-specific payroll figures
      values: [320, 365, 350, 410, 470, 500],
    },
    compliance: {
      title: "Statutory Compliance",
      items: [
        { label: "PF Compliance", status: "On Track" },
        { label: "ESI Compliance", status: "On Track" },
        { label: "TDS Compliance", status: "On Track" },
        { label: "PT Compliance", status: "On Track" },
      ],
    },
    footer: {
      nextPayrollLabel: "Next Payroll Date",
      nextPayrollValue: "28 Feb 2026",
      upcomingFilingLabel: "Upcoming Filing",
      upcomingFilingValue: "PF Return · Mar 2026",
      cta: { label: "View Calendar", href: "/compliance-calendar" },
    },
  },
  stats: [
    { value: 500, suffix: "+", label: "Establishments served" },
    { value: 15, suffix: "+", label: "Years payroll expertise" },
    { value: 0, suffix: "", label: "Penalty incidents" },
    { text: "Pan-India", label: "Multi-state coverage" },
    { text: "15th", label: "Always filed on time" },
  ],
};

export const overview = {
  kicker: "What Is This Service",
  heading: "Payroll Processing Services",
  paragraphs: [
    "Outsourcing payroll to Aksharaa means your salary computation, statutory deduction calculation (PF, ESI, Professional Tax, TDS), payslip generation, and bank transfer advice are handled by compliance experts — not generalist accountants.",
    "Every payroll cycle is integrated with your PF, ESI, and PT filing obligations so there is no gap between what is paid and what is filed. We serve businesses from 10-employee startups to 500-employee enterprises, with full multi-state capability and data confidentiality protocols.",
  ],
  highlight: "Why it matters: Delayed PF deposits attract 12% interest, TDS defaults attract prosecution, and non-maintenance of salary registers violates the Shops Act and Factories Act. Aksharaa eliminates all three risks in a single engagement.",
  deliverables: {
    label: "What We Deliver",
    title: "Full Payroll Scope at a Glance",
    items: [
      { title: "Salary Computation", desc: "Gross, deductions, net per employee every cycle" },
      { title: "Statutory Deductions", desc: "PF 12%, ESI 3.25%, PT state-wise, TDS" },
      { title: "Payslip Generation", desc: "Individual PDF payslips distributed securely" },
      { title: "Bank Transfer Advice", desc: "NEFT file or instruction sheet ready to authorise" },
      { title: "Statutory Filing", desc: "PF, ESI, PT returns filed on time every month" },
      { title: "Monthly MIS Report", desc: "Payroll summary for HR/Finance team" },
    ],
    links: [
      { label: "PF Compliance — full detail", href: "/labour-law-compliance/pf-compliance" },
      { label: "ESI Compliance — full detail", href: "/labour-law-compliance/esi-compliance" },
      { label: "Payroll Audit", href: "/payroll-hr-operations/payroll-audit" },
      { label: "Compliance Calendar", href: "/payroll-hr-operations/compliance-calendar" },
    ],
  },
};

export const who = {
  kicker: "Who Needs This",
  heading: "Who Should Outsource Payroll?",
  sub: "Payroll outsourcing works best when the cost of errors and compliance gaps exceeds the cost of the service — which for most businesses it already does.",
  personas: [
    { icon: "building", tag: "SMEs & Startups", title: "Growing Businesses", desc: "No dedicated HR function yet. Headcount rising. Compliance complexity growing faster than your team can handle.", points: ["10–100 employees, single location", "Founder or admin currently handling payroll", "Scaling fast without adding headcount"] },
    { icon: "map", tag: "Multi-State Operations", title: "Multi-Location Companies", desc: "Operations across Tamil Nadu, Maharashtra, Karnataka — each with different PT slabs, Shops Act rules, and compliance calendars.", points: ["100–500+ employees, 2+ states", "Different PT rates across branches", "Need consolidated reporting centrally"] },
    { icon: "factory", tag: "Contract-Heavy Industries", title: "Manufacturing & Logistics", desc: "High contract worker ratio requiring separate payroll tracks, CLRA compliance, and regular EPFO/ESIC inspection readiness.", points: ["Significant contract workforce", "CLRA-governed establishment", "Regular EPFO/ESIC inspections"] },
  ],
};

export const obligations = {
  kicker: "Legal Obligations",
  heading: "What the Law Requires",
  sub: "Non-compliance with payroll obligations is not just an administrative lapse — it carries financial penalties, criminal risk, and employee trust damage.",
  items: [
    { num: "1", title: "Monthly Salary Computation & Disbursement", desc: "Compute gross and net salary for every employee and disburse within the statutory timeline under the Payment of Wages Act" },
    { num: "2", title: "Correct Statutory Deductions", desc: "PF (12%), ESI (0.75%), Professional Tax (state-wise slab), and TDS must be accurately deducted from each eligible employee" },
    { num: "3", title: "Timely Deposit of All Deductions", desc: "PF by 15th, ESI by 15th, PT as per state cycle — employer contributions must be deposited alongside employee deductions" },
    { num: "4", title: "Payslip Generation & Distribution", desc: "Every employee must receive a payslip — physical or digital — detailing gross, all deductions, and net take-home" },
    { num: "5", title: "Salary Register Maintenance", desc: "Maintain Form IV (Payment of Wages Act) in prescribed format — mandatory under Shops Act and Factories Act" },
    { num: "6", title: "Annual Form 16 & TDS Returns", desc: "Issue Form 16 to all TDS-deducted employees annually and file quarterly TDS returns (Form 24Q)" },
  ],
  consequences: {
    label: "What Happens Without Compliance",
    title: "Consequences of Non-Compliance",
    items: [
      { icon: "alertTriangle", title: "PF/ESI Interest & Damages", desc: "Delayed PF: 12% p.a. interest (Sec 7Q) + damages 5%–25% under Sec 14B. ESI delays attract identical rates." },
      { icon: "scale", title: "TDS Default — Prosecution Risk", desc: "Failure to deposit TDS attracts 1.5% per month interest. Wilful default leads to prosecution under Section 276B." },
      { icon: "fileText", title: "Shops Act / Factories Act Violation", desc: "Non-maintenance of salary register violates state Shops Act. Fine up to ₹10,000 per violation in Tamil Nadu." },
      { icon: "users", title: "Employee Trust & Attrition", desc: "Payslip errors or late salaries damage employee confidence — leading to complaints and increased attrition." },
    ],
  },
};

export const scope = {
  kicker: "Our Scope of Work",
  heading: "What Aksharaa Manages",
  sub: "End-to-end payroll outsourcing — from data collection and computation to filing, payslips, and monthly MIS reporting.",
  cards: [
    { num: "01", icon: "clipboardList", title: "Data Collection & Cutoff", desc: "Receive monthly attendance, leave, joiners, exits, and salary revision data by your agreed cutoff." },
    { num: "02", icon: "calculator", title: "Gross & Net Salary Computation", desc: "Full computation including all allowances, variable pay, arrears, and full & final settlement." },
    { num: "03", icon: "fileText", title: "Payslip Generation", desc: "Individual branded PDF payslips for every employee — distributed digitally with complete breakdown." },
    { num: "04", icon: "banknote", title: "Bank Transfer Advice", desc: "Prepare bank-ready NEFT transfer file or instruction sheet — ready for your single authorisation." },
    { num: "05", icon: "shield", title: "Statutory Filing & Deposit", desc: "Deposit PF, ESI, and PT contributions on time and file all monthly and half-yearly returns." },
    { num: "06", icon: "trendingUp", title: "Monthly MIS Report", desc: "Consolidated payroll summary shared with your HR/Finance team every month." },
  ],
};

export const process = {
  kicker: "How We Work",
  heading: "The Monthly Payroll Cycle",
  sub: "A disciplined 6-step process — from data receipt to MIS delivery — executed by the same dedicated team, every month, before the 15th.",
  steps: [
    { day: "Day 1–3", icon: "clipboardList", title: "Data Collection", desc: "Receive attendance, leave & input data from your team", active: true },
    { day: "Day 4–6", icon: "calculator", title: "Computation", desc: "Gross, net, all statutory deductions calculated per employee" },
    { day: "Day 7–8", icon: "checkCircle", title: "Client Review", desc: "Draft payroll shared with you for approval before processing" },
    { day: "Day 9–11", icon: "fileText", title: "Payslips", desc: "Individual PDF payslips generated & distributed securely" },
    { day: "By 15th", icon: "shield", title: "Statutory Filing", desc: "PF, ESI, PT deposited & returns filed before the deadline" },
    { day: "Day 16–18", icon: "trendingUp", title: "MIS Report", desc: "Monthly payroll summary delivered to your HR/Finance team" },
  ],
};

export const documents = {
  kicker: "To Get Started",
  heading: "Documents Required",
  sub: "Share these at onboarding. Our team guides you through setup and will be ready for your very next payroll cycle.",
  items: [
    "Employee master data — name, designation, salary structure, bank details",
    "Monthly attendance data or access to your attendance system",
    "Leave balance records as on the onboarding date",
    "New joiner and exit details with effective dates",
    "Investment declaration forms for TDS computation (if in scope)",
    "Previous month payroll data for takeover continuity",
    "Salary structure / CTC breakup format used by your organisation",
    "PF / ESI registration details and current challan status",
  ],
};

export const faqs = {
  kicker: "FAQs",
  heading: "Frequently Asked Questions",
  sub: "Common questions from business owners and HR managers about outsourcing payroll to Aksharaa.",
  items: [
    { q: "What does payroll outsourcing cost — is it worth it for a small business?", a: "Aksharaa fees are based on employee headcount and scope. For most businesses with 20+ employees, the combined cost of errors, statutory penalties, and internal time far exceeds our fee. We typically deliver a quote within 24 hours." },
    { q: "How does Aksharaa handle payroll across multiple states?", a: "Aksharaa maintains state-wise compliance calendars and configures different Professional Tax slabs and Shops Act provisions for each state. Each location is tracked separately with a consolidated MIS report." },
    { q: "How quickly can Aksharaa take over our existing payroll?", a: "Typically within 5–7 working days of receiving complete employee master data and previous payroll records. We're ready to process your very next payroll cycle without disruption." },
    { q: "Is payroll data kept confidential — who can access it?", a: "Aksharaa operates under strict data confidentiality protocols. Payroll data is accessible only to the assigned compliance team and your authorised contacts, governed by explicit confidentiality clauses." },
    { q: "Does Aksharaa handle TDS computation and Form 16?", a: "Yes, when in scope. Aksharaa collects investment declarations, computes monthly TDS under Section 192, and generates Form 16 for all eligible employees at year-end." },
    { q: "Can Aksharaa handle full and final settlement for exiting employees?", a: "Yes. Full and final settlement processing — including notice period adjustment, leave encashment, gratuity calculation, and PF withdrawal assistance — is included within the standard payroll scope." },
    { q: "What is the difference between payroll processing and a payroll audit?", a: "Payroll processing is the ongoing monthly function. A payroll audit is a one-time or periodic review of past payroll cycles to identify errors and compliance gaps." },
    { q: "Do you integrate with existing HR software or attendance systems?", a: "Aksharaa accepts attendance and input data in standard formats (Excel, CSV) from any HR or attendance software, with a clear monthly data submission template defined at onboarding." },
  ],
};

export const related = {
  kicker: "You May Also Need",
  heading: "Related Services",
  items: [
    { icon: "shield", title: "PF Compliance", desc: "Monthly ECR filing, UAN management, EPFO inspection support, and annual returns — auto-synced with your payroll cycle.", href: "/labour-law-compliance/pf-compliance" },
    { icon: "checkCircle", title: "Payroll Audit", desc: "Periodic review of past payroll cycles — identify errors, compliance gaps, and over/under-deductions before they become notices.", href: "/payroll-hr-operations/payroll-audit" },
    { icon: "layers", title: "Statutory Registers", desc: "Maintenance of all statutory registers under Shops Act, Factories Act, and PF/ESI rules — inspection-ready every month.", href: "/payroll-hr-operations/statutory-registers" },
  ],
};

export const serviceCta = {
  heading: "Ready to Outsource Payroll?",
  sub: "Get a free payroll assessment — we review your current process, identify compliance gaps, and deliver a clear scope and quote within 24 hours.",
  ctas: [
    { label: "Get Free Payroll Assessment", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
