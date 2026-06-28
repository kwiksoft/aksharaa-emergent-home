/**
 * Content for the PF & ESI Registration service page.
 * This page is the TEMPLATE for all 26 services under Registrations & Licensing —
 * its section structure, motion vocabulary, and component patterns will be
 * inherited (not copy-pasted) by every other service in this category.
 *
 * Source: live pf-esi-registration.html (already client-approved content) —
 * structure faithfully preserved, presentation completely reimagined for the
 * Emergent home design system.
 */

export const meta = {
  title: "PF & ESI Registration | Aksharaa Corporate Services",
  description:
    "Complete PF and ESI registration — document preparation to certificate delivery, typically 7–10 working days. Zero back-and-forth.",
  category: { name: "Registrations & Licensing", href: "/registrations-licensing" },
};

/**
 * Hero — FULL REBUILD per client reference image. Previous version: single
 * framed photo (orange outline square + small circular accent) on the
 * right, a full-width "Registration Scope" 5-step tracker card below row 1,
 * and a 3-stat bordered strip (450+ Establishments / 15+ Years / Pan-India)
 * below that.
 *
 * Replaced wholesale to match the reference exactly:
 * - `accentWord` ("Done Right, Done Once") is now a full-size orange
 *   heading line under the headline, not a small outline-styled accent —
 *   reference shows it at a prominent size, not a decorative sub-line.
 * - `image2`/`image3` added: the reference uses 3 distinct photos in a
 *   collage (top-left rounded-square "signing the document", top-right
 *   circular "EPFO/ESIC documents on a desk", bottom-right rounded-square
 *   "handover meeting between two people") — not one photo reused twice.
 *   Real client-supplied photos now wired in (this thread) — see the
 *   image-slot comment further down for exact specs/provenance.
 * - `complianceBadge` added: the white circular "AKSHARAA Compliance
 *   Experts" badge (shield-check icon + 3-star rating) that overlaps the
 *   junction of all 3 photos in the reference — entirely new, no
 *   equivalent existed before.
 * - `stats` restructured: previous values (450+ Establishments / 15+
 *   Years / Pan-India Coverage) replaced with the reference's actual
 *   content (20+ Employees → PF Mandatory / 10+ Employees → ESI Mandatory
 *   / All India → Compliance Support) — each stat now also carries an
 *   `icon` field for the new circular icon-badge treatment per stat,
 *   which didn't exist in the old plain-text stat strip. The reference's
 *   third stat icon is a literal India-outline glyph; an attempt to trace
 *   this from the low-resolution source produced an illegible shape, and
 *   reusing a real geographic SVG (e.g. Wikimedia's CC-BY-SA India
 *   outline) would need attribution for what is a small decorative stat
 *   icon — not worth the complexity, so this uses the existing `map` icon
 *   (a generic pin/map glyph) as a safe substitute that still reads
 *   correctly next to "All India / Compliance Support."
 * - `tracker` REMOVED entirely (the old 5-step "Registration Scope"
 *   checklist card) — no equivalent element appears anywhere in the
 *   reference image.
 * - `bottomFeatures` added: the new 4-item plain row (End-to-end Support /
 *   100% Compliance Assurance / Timely & Hassle-free Process / Expert
 *   Handling) beneath the stat-boxes row — entirely new, replacing the
 *   old layout's reliance on the tracker card for this kind of detail.
 */
export const hero = {
  eyebrow: "Registrations & Licensing",
  headline: ["PF & ESI", "Registration"],
  accentWord: "Done Right. Done Once.",
  sub:
    "Every employer crossing the statutory threshold must register under EPF & MP Act and ESI Act. Aksharaa handles the complete registration process — from document preparation to certificate delivery — with zero back-and-forth on your end.",
  ctas: [
    { label: "Get Registration Support", variant: "primary", href: "#service-cta" },
    { label: "All Registrations", variant: "secondary", href: "/registrations-licensing" },
  ],
  // stats — REMOVED FROM HERO (this thread) per direct instruction: the
  // 20+/10+/All India stat-boxes card was taking up unwanted space below
  // the photo collage, independent of whether it matches the reference
  // image (it does appear there too, just lower in the layout — removal
  // here is a deliberate content/scope decision, not a visual-accuracy
  // fix). Left here, unused, rather than deleted outright in case a
  // similar stat row is wanted elsewhere later.
  stats: [
    { value: 20, suffix: "+", icon: "users", label: "EMPLOYEES", note: "PF Mandatory" },
    { value: 10, suffix: "+", icon: "shield", label: "EMPLOYEES", note: "ESI Mandatory" },
    { text: "All India", icon: "map", label: "", note: "Compliance Support" },
  ],
  bottomFeatures: [
    { icon: "headset", title: "End-to-end Support", desc: "From documents to certificates" },
    { icon: "shield", title: "100% Compliance Assurance", desc: "Stay compliant with zero penalties" },
    { icon: "clock", title: "Timely & Hassle-free Process", desc: "Typically completed in 7–10 working days" },
    { icon: "fileText", title: "Expert Handling", desc: "By compliance professionals you can trust" },
  ],
  complianceBadge: {
    title: "AKSHARAA",
    sub: "Compliance Experts",
    stars: 3,
  },
  // Photography slots — real photos supplied by the client (this thread),
  // replacing the temporary placeholders. Each maps directly onto the
  // spec given when requesting them: Photo 1 ~1024x1024 square (signing/
  // reviewing a document at a desk), Photo 2 ~1024x1024 square (EPFO/ESIC
  // registration documents on a desk, gets circle-cropped by CSS), Photo
  // 3 ~1024x687 3:2 (two people in a handover/consultation moment) — all
  // converted from the supplied PNGs to optimised JPGs (quality 85) to
  // match this project's existing asset-size convention (~100-135KB each,
  // down from ~950KB-1MB as supplied).
  image: "/assets/sections/reg-hero-photo1.jpg",
  imageAlt: "Compliance professional reviewing a PF and ESI registration document",
  image2: "/assets/sections/reg-hero-photo2.jpg",
  image2Alt: "EPFO and ESIC registration documents on a desk",
  image3: "/assets/sections/reg-hero-photo3.jpg",
  image3Alt: "Aksharaa consultant handing over completed registration documents to a client",
};

export const overview = {
  kicker: "The Basics",
  heading: "What is PF & ESI Registration?",
  paragraphs: [
    "The Employees' Provident Fund & Miscellaneous Provisions Act, 1952 and the Employees' State Insurance Act, 1948 are two of India's most widely applicable labour laws. Every employer who crosses the prescribed employee threshold is legally required to register under both acts — failure to do so is a criminal offence, not just a civil penalty.",
  ],
  definitions: [
    {
      term: "PF Registration",
      desc: "gives your establishment a unique PF code from EPFO (Employees' Provident Fund Organisation). This code is used for all monthly contributions, ECR filings, and employee UAN (Universal Account Number) generation. Once registered, the obligation continues even if headcount later falls below the threshold.",
    },
    {
      term: "ESI Registration",
      desc: "gives your establishment an employer code from ESIC (Employees' State Insurance Corporation). This provides your eligible employees access to medical, sickness, maternity, and disability benefits. Each branch or location requires a sub-code under the main employer code.",
    },
  ],
  thresholds: [
    { num: "20+", label: "Employees", act: "PF Registration Mandatory", note: "EPF & MP Act, 1952" },
    { num: "10+", label: "Employees", act: "ESI Registration Mandatory", note: "ESI Act, 1948 — applicable states" },
  ],
  whoNeeds: {
    title: "Who Needs Both Registrations?",
    items: [
      "Factories and manufacturing units",
      "Shops and commercial establishments",
      "IT/ITES companies and BPOs",
      "Construction companies with workers on payroll",
      "Hospitals, clinics and healthcare units",
      "Logistics and warehousing companies",
      "Hotels, restaurants and hospitality units",
      "NGOs and societies with paid staff",
    ],
  },
  alert: "Once registered, the obligation is permanent — even if headcount falls below the threshold at a later date.",
};

export const applicability = {
  kicker: "Applicability",
  heading: "Who Must Register — And When",
  sub: "Registration must happen within 30 days of crossing the applicable employee threshold. Voluntary registration is also permitted for smaller establishments.",
  tabs: [
    {
      id: "pf",
      icon: "wallet",
      tag: "EPF & MP Act, 1952",
      title: "PF Registration",
      threshold: { num: "20", label: "or more employees trigger mandatory PF registration" },
      points: [
        "All establishments employing 20+ persons",
        "Includes factories, shops, offices, and establishments notified by Central Government",
        "Contract workers engaged through a contractor count toward the 20-employee threshold",
        "Voluntary coverage available for smaller establishments",
        "Once covered — always covered, regardless of future headcount",
      ],
      wage: { label: "Wage ceiling for mandatory contribution", value: "₹15,000/month" },
    },
    {
      id: "esi",
      icon: "heart",
      tag: "ESI Act, 1948",
      title: "ESI Registration",
      threshold: { num: "10", label: "or more employees in applicable states and sectors" },
      points: [
        "Factories with 10+ employees (non-seasonal)",
        "Shops, offices, hotels, restaurants with 10+ employees in applicable states",
        "Construction sites, newspaper establishments, road transport",
        "Private medical and educational institutions (state-specific)",
        "Applicable in areas/states notified by Central/State Government",
      ],
      wage: { label: "Wage ceiling for ESI coverage", value: "₹21,000/month" },
    },
  ],
};

export const documents = {
  kicker: "Document Checklist",
  heading: "Documents Required for Registration",
  sub: "Aksharaa collects and verifies all documents before filing — ensuring no rejections or resubmissions.",
  groups: [
    {
      icon: "building",
      title: "Establishment Documents",
      items: [
        "Certificate of Incorporation / Partnership Deed / Trust Deed",
        "PAN Card of the Company / Firm",
        "GST Registration Certificate (if applicable)",
        "Shops & Establishment Registration Certificate",
        "Address proof of registered and business premises",
        "Cancelled cheque / Bank account details",
      ],
    },
    {
      icon: "userCheck",
      title: "Employer / Director Documents",
      items: [
        "PAN Card of all Directors / Partners / Proprietor",
        "Aadhaar Card of all Directors / Partners / Proprietor",
        "Digital Signature Certificate (Class 3) of authorised signatory",
        "Board Resolution / Authorisation letter (for companies)",
        "Mobile number and email ID of authorised signatory",
      ],
    },
    {
      icon: "users",
      title: "Employee Details",
      items: [
        "List of all employees with date of joining",
        "Employee salary details (gross wages)",
        "Aadhaar and PAN of each employee",
        "Bank account details of each employee",
        "Nominee details for PF (Form 2 / Form F)",
      ],
    },
  ],
  note: "Aksharaa provides a detailed document checklist specific to your establishment type upon engagement. We also assist in obtaining any missing documents such as DSC.",
};

export const process = {
  kicker: "How It Works",
  heading: "Aksharaa's Registration Process",
  sub: "A structured 6-step process that takes your establishment from unregistered to fully compliant — typically within 7–10 working days.",
  steps: [
    { num: "01", icon: "fileText", title: "Initial Consultation", desc: "We understand your establishment type, employee count, industry, and locations to determine exact registration requirements and applicable acts." },
    { num: "02", icon: "fileSignature", title: "Document Collection", desc: "We share a tailored document checklist. You submit documents digitally — our team verifies completeness and accuracy before proceeding." },
    { num: "03", icon: "folderCheck", title: "Portal Application Filing", desc: "Aksharaa files the PF registration on EPFO's unified portal and ESI registration on the ESIC portal using your DSC. All details verified before submission." },
    { num: "04", icon: "refreshCw", title: "Code Issuance & Follow-up", desc: "We track the application status and follow up with the concerned offices until PF establishment code and ESI employer code are issued." },
    { num: "05", icon: "userCheck", title: "Employee UAN & IP Number Generation", desc: "Once codes are issued, we generate Universal Account Numbers for all PF-eligible employees and Insurance Person numbers for ESI-eligible employees." },
    { num: "06", icon: "badge", title: "Certificate Delivery & First Contribution Setup", desc: "Registration certificates shared with you. We guide you through the first month's ECR filing and challan payment to ensure a smooth compliance start.", final: true },
  ],
  // bottom benefit strip — copy matches the reference image exactly;
  // first item keeps the real "7–10 working days" timeline figure used
  // throughout the page, the other three are the reference's stated
  // service guarantees (compliance, transparency, support model)
  strip: [
    { icon: "calendar", label: "7–10 Working Days", value: "Typically" },
    { icon: "shield", label: "Compliance Assured", value: "100%" },
    { icon: "clock", label: "Transparent Process", value: "Timely &" },
    { icon: "userCheck", label: "Expert Support", value: "End-to-End" },
  ],
};

export const penalties = {
  kicker: "Risk of Non-Registration",
  heading: "Consequences of Not Registering",
  paragraphs: [
    "Non-registration is not a minor oversight — it attracts criminal liability under both acts. Inspectors can visit your premises and initiate prosecution without prior notice.",
    "The liability is calculated from the date the threshold was first crossed — meaning penalties can accumulate for months or years before detection.",
  ],
  cta: { label: "Get Registered Now", href: "#service-cta" },
  cards: [
    {
      tag: "PF",
      theme: "orange",
      icon: "receipt",
      title: "PF Non-Registration Penalties",
      rows: [
        { icon: "percent", label: "Interest on unpaid contributions", value: "12% p.a." },
        { icon: "calendar", label: "Damages (0–2 months delay)", value: "5%" },
        { icon: "calendar", label: "Damages (2–4 months delay)", value: "10%" },
        { icon: "calendar", label: "Damages (above 4 months)", value: "25%" },
        { icon: "scale", label: "Criminal prosecution", value: "Up to 3 years" },
      ],
    },
    {
      tag: "ESI",
      theme: "navy",
      icon: "shield",
      title: "ESI Non-Registration Penalties",
      rows: [
        { icon: "percent", label: "Simple interest on arrears", value: "12% p.a." },
        { icon: "rupee", label: "Penalty u/s 85(a) ESI Act", value: "₹5,000–₹25,000" },
        { icon: "scale", label: "Prosecution u/s 85(b)", value: "Up to 2 years" },
        { icon: "fileText", label: "Recovery of unpaid contributions", value: "Full arrears" },
        { icon: "userPlus", label: "Denial of employee ESI benefits", value: "Employer liable" },
      ],
    },
  ],
  // Photography slot — documentary, inspection/risk-context, distinct from hero image
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=700",
  imageAlt: "Signing official compliance documentation",
};

export const faqs = {
  kicker: "Common Questions",
  heading: "Frequently Asked Questions",
  sub: "Questions business owners and HR teams commonly ask about PF & ESI registration.",
  items: [
    {
      q: "Is PF registration mandatory if we have fewer than 20 employees?",
      a: "PF registration is mandatory once you employ 20 or more persons. However, voluntary coverage is available for smaller establishments. Once covered — whether mandatorily or voluntarily — the registration is permanent and the obligation continues even if headcount later falls below 20.",
    },
    {
      q: "Do contract workers count toward the 20-employee threshold for PF?",
      a: "Yes. Contract workers engaged through a contractor and working on your premises are counted toward the threshold when determining PF applicability for the principal employer's establishment. This is a common area of oversight for businesses using flexi or contract labour.",
    },
    {
      q: "What is the ESI wage ceiling and does it apply to all states?",
      a: "ESI applies to employees earning up to ₹21,000 per month (₹25,000 for persons with disability). ESI has been extended to most states and union territories, but applicability in specific areas is notified by the Central/State Government. Aksharaa will confirm ESI applicability for your specific location and establishment type.",
    },
    {
      q: "How long does PF and ESI registration take?",
      a: "PF registration is largely online via EPFO's unified portal and typically takes 3–5 working days once all documents are in order. ESI registration is also online through the ESIC portal and takes 5–7 working days. Combined, Aksharaa completes both registrations within 7–10 working days from document receipt.",
    },
    {
      q: "We already crossed the threshold 3 months ago — can we still register now?",
      a: "Yes, but delayed registration attracts interest and damages calculated from the date the threshold was first crossed. The sooner you register and settle arrears, the lower the penalty. Aksharaa handles retroactive registrations and advises on settling arrears to minimise penalty exposure.",
    },
    {
      q: "Do we need separate PF/ESI registration for each branch office?",
      a: "For PF, a single establishment code can cover multiple locations under one employer, but branches in different states may need separate sub-codes. For ESI, a separate sub-code is required for each location/branch. Aksharaa handles multi-location registration and ensures each branch has the correct codes.",
    },
  ],
};

export const related = {
  kicker: "You May Also Need",
  heading: "Related Compliance Services",
  sub: "Businesses completing PF & ESI registration typically need these next.",
  items: [
    { icon: "fileText", title: "PF & ESI Returns Filing", desc: "Monthly ECR filing, ESI challans, half-yearly returns and annual filings — handled on time, every month.", href: "/compliance-filings-taxation/pf-esi-returns-filing" },
    { icon: "wallet", title: "Payroll Processing Services", desc: "Outsourced monthly payroll with PF, ESI, PT deductions integrated and payslips generated automatically.", href: "/payroll-hr-operations/payroll-processing" },
    { icon: "shield", title: "PF Compliance Services", desc: "Ongoing monthly PF compliance management — contributions, ECR filing, UAN management and inspection support.", href: "/labour-law-compliance/pf-compliance" },
  ],
};

export const serviceCta = {
  kicker: "Get Started Today",
  heading: "Register Your Establishment Under PF & ESI",
  sub: "Don't wait for a notice. Get your registration done correctly the first time — Aksharaa handles everything from document collection to certificate delivery.",
  ctas: [
    { label: "Start Registration", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
