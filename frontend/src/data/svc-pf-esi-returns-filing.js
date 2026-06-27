/**
 * Content for PF & ESI Returns Filing service page.
 * TEMPLATE for the 2 services under Compliance, Filings & Taxation —
 * the smallest category, so this template can afford the most spacious,
 * calm treatment per the differentiated-category-character principle.
 * Source: live pf-esi-returns-filing.html (client-approved content).
 */

export const meta = {
  title: "PF & ESI Returns Filing | Aksharaa Corporate Services",
  description: "Monthly ECR filings, ESI challans, half-yearly returns — filed on time, every time, with zero follow-up required.",
  category: { name: "Compliance, Filings & Taxation", href: "/compliance-filings-taxation" },
};

export const hero = {
  eyebrow: "Compliance, Filings & Taxation",
  headline: ["PF & ESI Returns Filing —", "Never Miss a Deadline"],
  ctas: [
    { label: "Start Filing With Us", variant: "primary", href: "#service-cta" },
    { label: "All Filing Services", variant: "secondary", href: "/compliance-filings-taxation" },
  ],
  deadlineCard: {
    title: "Upcoming",
    titleAccent: "Filing Deadlines",
    rows: [
      { day: "15", month: "Every Month", name: "PF Monthly ECR Filing", tag: "PF", urgent: true },
      { day: "15", month: "Every Month", name: "ESI Monthly Challan", tag: "ESI", soon: true },
      { day: "11", month: "Nov / May", name: "ESI Half-Yearly Return", tag: "ESI" },
      { day: "25", month: "April", name: "PF Annual Return", tag: "PF" },
    ],
  },
};

export const what = {
  kicker: "Three Streams. One Commitment.",
  headingLine1: "What Aksharaa",
  headingLine2: "Files on Your Behalf",
  sub: "Two statutory filing streams — PF and ESI — each with different frequencies, portals, and deadlines. Aksharaa manages all of them under one engagement.",
  streams: [
    {
      theme: "pf",
      icon: "cog",
      tag: "Employees' Provident Fund",
      title: "PF Returns Filing",
      freq: "Monthly + Annual",
      rows: [
        { icon: "fileText", name: "Monthly ECR (Electronic Challan cum Return)", deadline: "By 15th of each month", what: "Employee + employer PF contributions for the previous month. Aksharaa prepares ECR from your payroll data, verifies contributions, and files on EPFO portal." },
        { icon: "user", name: "UAN Activation & KYC Seeding", deadline: "Ongoing – New Joiners", what: "New employee UAN generation, Aadhaar seeding, and KYC approval so members can view their passbook and claim PF." },
        { icon: "calendarPlain", name: "Annual PF Return (Form 3A / 6A)", deadline: "By 25th April", what: "Annual member-wise contribution statement submitted to EPFO confirming the full year's PF credits for each employee." },
        { icon: "shield", name: "PF Inspection Support", deadline: "On Demand", what: "Muster rolls, wage registers, and ECR history prepared and presented to EPFO inspectors on your behalf." },
      ],
    },
    {
      theme: "esi",
      icon: "heart",
      tag: "Employees' State Insurance",
      title: "ESI Returns Filing",
      freq: "Monthly + Annual",
      rows: [
        { icon: "calendarPlain", name: "Monthly ESI Return (Form 5)", deadline: "By 11th of each month", what: "Wage details and contribution for the previous month filed on ESIC portal." },
        { icon: "rupee", name: "Challan Generation & Payment", deadline: "By 11th of each month", what: "Contribution amount calculated and challan generated for timely payment." },
        { icon: "calendarPlain", name: "Annual ESI Return (Form 5A)", deadline: "By 30th April", what: "Annual consolidated return filed with employee details and contributions." },
        { icon: "shield", name: "ESI Inspection Support", deadline: "On Demand", what: "Register maintenance, return history, and documents presented to ESIC officers." },
      ],
    },
  ],
};

export const calendar = {
  kicker: "Filing Rhythm",
  heading: "Your Monthly Compliance Calendar",
  sub: "A typical employer with PF and ESI obligations has recurring filings every single month of the year. Missing even one creates a cascade of interest, penalties, and audit exposure.",
  illustration: {
    line1: "Stay Compliant.",
    line2: "Stay Ahead.",
    note: "Aksharaa ensures every deadline is met, every time.",
  },
  months: [
    { name: "Every Month", active: true, filings: [{ type: "pf", name: "PF ECR Filing", due: "Due by 15th" }, { type: "esi", name: "ESI Challan", due: "Due by 15th" }] },
    { name: "April", filings: [{ type: "pf", name: "PF Annual Return", due: "Due by 25th April" }, { type: "pf", name: "PF ECR + ESI Challan", due: "Due by 15th" }] },
    { name: "May", filings: [{ type: "esi", name: "ESI Half-Yearly Return", due: "Due by 11th May (Oct–Mar)" }, { type: "pf", name: "PF ECR + ESI Challan", due: "Due by 15th" }] },
    { name: "November", filings: [{ type: "esi", name: "ESI Half-Yearly Return", due: "Due by 11th Nov (Apr–Sep)" }, { type: "pf", name: "PF ECR + ESI Challan", due: "Due by 15th" }] },
  ],
  note: "Aksharaa maintains a filing tracker for every client — no deadline goes unnoticed.",
};

export const scope = {
  kicker: "What We Handle",
  heading: "Aksharaa's Complete Filing Scope",
  sub: "From receiving your monthly attendance and payroll data to generating the filed acknowledgement — Aksharaa manages the entire cycle. You share data, we handle everything else.",
  trustedCard: {
    icon: "user",
    title: "Trusted Experts For Your Compliance",
    desc: "End-to-end support, accurate filings and complete peace of mind.",
    cta: "Learn More",
    badgeValue: "100%",
    badgeLabel: "Satisfaction Guarantee",
  },
  steps: [
    { icon: "usersRound", title: "You share payroll data", desc: "attendance inputs, salary details, new joiners and exits by the 5th of each month" },
    { icon: "calculator", title: "Aksharaa computes contributions", desc: "PF (employee 12% + employer 12%), ESI (employee 0.75% + employer 3.25%) verified" },
    { icon: "fileText", title: "ECR and challans filed", desc: "on EPFO and ESIC portals by the 15th, well before statutory deadlines" },
    { icon: "mail", title: "Acknowledgement & MIS shared", desc: "filed receipts, challan copies, and monthly compliance report delivered to you" },
  ],
  guarantee: {
    title: "Aksharaa's Filing Guarantee",
    items: [
      "Zero late filings — all returns filed before statutory deadline",
      "Digital acknowledgements for every filing — inspection-ready",
      "Dedicated account manager — one contact for all filings",
      "Monthly MIS report — contribution summary and compliance status",
      "Multi-location filing — all branches under one engagement",
      "Inspection support — EPFO / ESIC visits handled on your behalf",
    ],
  },
  contributions: {
    title: "Contribution Rates at a Glance",
    rows: [
      { label: "PF", employee: "12%", employer: "12%*" },
      { label: "ESI", employee: "0.75%", employer: "3.25%" },
    ],
    note: "* Employer PF includes 8.33% EPS + 3.67% EPF + 0.5% EDLI + admin charges",
  },
};

export const penalties = {
  kicker: "Why Timeliness Matters",
  headingLine1: "Cost of Late or",
  headingLine2: "Missing Filings",
  sub: "Every day of delay on PF and ESI filings attracts statutory interest. Beyond interest, EPFO and ESIC officers can initiate damage proceedings and prosecution.",
  illustration: {
    clockLine1: "Don't",
    clockLine2: "Delay",
    badges: [
      { icon: "percent", label: "Interest" },
      { icon: "gavel", label: "Penalty" },
    ],
    documents: [
      { label: "PF Return" },
      { label: "ESI Return" },
    ],
  },
  blocks: [
    {
      label: "PF Late Payments",
      theme: "pf",
      icon: "usersRound",
      items: [
        { icon: "percent", rate: "12%", desc: "Interest per annum on delayed PF contributions under Section 7Q" },
        { icon: "trendingUp", rate: "5–25%", desc: "Damages on unpaid contributions under Section 14B — escalating with delay duration" },
        { icon: "lockKeyhole", rate: "3 years", desc: "Maximum imprisonment for wilful default under Section 14 of EPF Act" },
      ],
    },
    {
      label: "ESI Late Payments",
      theme: "esi",
      icon: "usersRound",
      items: [
        { icon: "percent", rate: "12%", desc: "Simple interest per annum on delayed ESI contributions under Section 39(5)" },
        { icon: "rupee", rate: "₹5K–25K", desc: "Penalty under Section 85(a) for failure to pay contributions or file returns" },
        { icon: "lockKeyhole", rate: "2 years", desc: "Maximum imprisonment for repeat default under Section 85(b) of ESI Act" },
      ],
    },
  ],
  ctaText: "Already behind on filings? Aksharaa helps you regularise arrears and get back on track — minimising penalty exposure.",
  ctaTitle: "Already behind on filings?",
  cta: { label: "Talk to Us Now", href: "#service-cta" },
};

export const faqs = {
  kicker: "Common Questions",
  heading: "Frequently Asked Questions",
  sub: "Answers to what employers ask about PF and ESI returns filing.",
  items: [
    { q: "What happens if we miss the 15th deadline for PF ECR filing?", a: "Interest at 12% per annum accrues from the due date. If the default continues, EPFO can raise a damage demand of 5–25% of the outstanding contributions. Aksharaa ensures ECRs are filed by the 12th–13th of each month to give buffer before the deadline." },
    { q: "Does Aksharaa handle PF transfers and withdrawal claims for employees?", a: "Yes. Aksharaa assists employees with PF transfer requests when switching jobs and employer-side claim attestation for PF withdrawals via Form 13 on the EPFO unified portal." },
    { q: "We have employees in multiple states — can Aksharaa handle filings for all locations?", a: "Yes. PF filing is centralised under your establishment code — all branches file under one code. ESI filings require separate sub-codes per location, which Aksharaa maintains and files separately." },
    { q: "What data does Aksharaa need from us each month to process filings?", a: "We need monthly attendance data, gross salary details, and a list of new joiners and exits with dates. We provide a simple monthly input template — no portal access or technical knowledge required on your side." },
    { q: "Can Aksharaa help regularise past missed or incorrect filings?", a: "Yes. We handle retrospective filing, arrear computation, and penalty calculation, and assist in responding to EPFO and ESIC notices and negotiating penalty waivers where applicable." },
  ],
};

export const related = {
  kicker: "You May Also Need",
  heading: "Related Compliance Services",
  sub: "Businesses outsourcing PF & ESI filing typically need these alongside.",
  items: [
    { icon: "fileText", title: "PF & ESI Registration", desc: "Not yet registered? Get your EPFO and ESIC registration done first — Aksharaa handles both in 7–10 working days.", href: "/registrations-licensing/pf-esi-registration" },
    { icon: "wallet", title: "Payroll Processing Services", desc: "Outsourced monthly payroll with automatic PF and ESI computation — integrates directly with our filing process.", href: "/payroll-hr-operations/payroll-processing" },
    { icon: "checkCircle", title: "Professional Tax Filing", desc: "State-wise professional tax returns filed monthly or quarterly — combined with PF/ESI under one engagement.", href: "/compliance-filings-taxation/professional-tax-filing" },
  ],
};

export const serviceCta = {
  heading: "Never Miss a Deadline Again",
  sub: "Share your payroll data once a month — we handle every filing, every deadline, every year. No portal access needed, no compliance stress on your side.",
  ctas: [
    { label: "Start Filing With Us", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
