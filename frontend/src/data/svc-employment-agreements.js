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
  // rather than fixed pixels, originally sampled from the reference at
  // 1444x976: Confidentiality (58.3%, 11.7%), Your IP (66.9%, 33%),
  // Legally Vetted (11.7%, 58.3%), Clear Terms (originally 33%, 52%).
  // UPDATED (this thread, per direct instruction): Clear Terms repositioned
  // to sit at the exact same coordinates as Confidentiality Protected,
  // then offset 20% to the left along the same row — left: 58.3% - 20% =
  // 38.3%, top unchanged at 11.7% (same height as Confidentiality, not
  // its original lower-left spot). Centre shield+checkmark icon and the
  // dotted-ring decorations are NOT in this data — they're confirmed
  // absent from the supplied background asset (agreements-hero-bg.jpg
  // is photo + vignette + city-skyline watermark only), so both are
  // built directly in the component as fixed decorative elements, same
  // treatment as Returns Hero's dotted ring.
  badges: [
    { icon: "lock", title: "Confidentiality", title2: "Protected", pos: { left: "58.3%", top: "11.7%" } },
    { icon: "lightbulb", title: "Your IP,", title2: "Your Rights", pos: { left: "66.9%", top: "33%" } },
    { icon: "shield", title: "Legally Vetted", title2: "by Experts", pos: { left: "11.7%", top: "58.3%" } },
    { icon: "users", title: "Clear Terms,", title2: "Fewer Disputes", pos: { left: "14.6%", top: "11.7%" } },
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
  // Split for the orange-emphasis word ("Must Have"), matching the
  // [part1, part2] pattern used elsewhere (e.g. Hero headline) — per
  // client reference image redesign (Section 3).
  heading: ["Key Clauses Every Agreement ", "Must Have"],
  sub: "Generic templates miss clauses that are specific to Indian employment law. Aksharaa ensures every agreement contains these legally critical provisions — drafted for enforceability, not just formality.",
  // `num` kept as the original §-reference (used nowhere visually now,
  // retained as content metadata); `display` is the new plain 01-09
  // numeral per reference (replaces the old § N display). `icon` is
  // new — each clause mapped to a distinct icon per the reference's
  // icon-circle treatment (person, calendar, wallet, clock, shield,
  // lightbulb, ban, bell, gavel — `ban` substituted for the reference's
  // no-entry glyph on Non-Solicitation, semantically equivalent).
  items: [
    { num: "§ 1", display: "01", icon: "user", title: "Parties, Designation & Reporting Structure", desc: "Full legal name of employer entity, employee details, role title, department, and the reporting manager.", tier: "Essential" },
    { num: "§ 2", display: "02", icon: "calendarPlain", title: "Commencement Date & Probation Period", desc: "Start date, duration of probation (typically 3–6 months), conditions for confirmation, and extension terms.", tier: "Essential" },
    { num: "§ 3", display: "03", icon: "wallet", title: "Compensation, Benefits & Deductions", desc: "Gross salary structure, statutory deductions (PF, ESI, PT, TDS), variable pay terms, and increment policy.", tier: "Essential" },
    { num: "§ 4", display: "04", icon: "clock", title: "Working Hours, Leave & Holiday Policy", desc: "Applicable Factory Act / Shops Act provisions, leave entitlements (EL, CL, SL), and flexible working terms.", tier: "Essential" },
    { num: "§ 5", display: "05", icon: "shield", title: "Confidentiality & Non-Disclosure", desc: "Definition of confidential information, obligations during and after employment, and remedies for breach.", tier: "Critical" },
    { num: "§ 6", display: "06", icon: "lightbulb", title: "Intellectual Property Assignment", desc: "All work product created during employment is assigned to the employer — covering software, designs, inventions.", tier: "Critical" },
    { num: "§ 7", display: "07", icon: "ban", title: "Non-Solicitation Clause", desc: "Restricts the employee from poaching clients, customers, or colleagues for a defined period post-employment.", tier: "Critical" },
    { num: "§ 8", display: "08", icon: "bell", title: "Termination, Notice Period & Garden Leave", desc: "Notice period for both parties, payment in lieu of notice, grounds for summary termination, garden leave.", tier: "Essential" },
    { num: "§ 9", display: "09", icon: "gavel", title: "Governing Law & Dispute Resolution", desc: "Jurisdiction clause specifying which state's courts govern, and dispute resolution mechanism.", tier: "Essential" },
  ],
  note: "Additional clauses — ESOP vesting, garden leave, training cost recovery, non-compete — are included based on role level and industry. Aksharaa advises on which clauses are enforceable under Indian law before including them.",
};

/**
 * Scope — FULL REDESIGN per client reference image (Section 4). Previous
 * version: plain uniform 3-col grid, every card identical (white bg, small
 * orange icon box, no numerals, no bottom strip).
 *
 * - Heading split for an orange-emphasis word ("Aksharaa"), matching the
 *   [part1, part2, part3] pattern used on other rebuilt sections.
 * - Switched from a 3-col grid to a 2-col layout (6 cards, 2x3 per side)
 *   per the reference's wider card proportions.
 * - Each item now carries a `display` numeral ("01"-"06") and a `fill`
 *   treatment ("gold" | "rust" | "dark" | "light") — reproducing the
 *   reference's specific alternating pattern exactly (01 gold, 02 light,
 *   03 light, 04 rust, 05 dark, 06 light) rather than a generic alternation,
 *   confirmed via direct pixel sampling of the reference.
 * - Icons re-mapped to match the reference's actual glyphs: item 2 switched
 *   from fileSignature to clipboardCheck (file+checklist+pen in reference,
 *   distinct from item 1's plain file+pen); item 6 switched from
 *   checkCircle to the new `handshake` icon (reference shows a handshake,
 *   no existing equivalent, added as a new icon import rather than reusing
 *   an unrelated glyph). Item 5 (HR Policy) kept on fileText — reference
 *   shows a file+bookmark glyph with no close existing match, not deemed
 *   worth a new near-duplicate icon import for a single card.
 * - New `trustStrip` data block added below (didn't exist before): 4 items
 *   in a single bordered card, alternating gold/rust icon-circle fills,
 *   reusing existing icons (shield, userCheck, clock, headset) — no new
 *   icons needed for the strip.
 */
export const scope = {
  kicker: "Complete Service Scope",
  heading: ["What ", "Aksharaa", " Delivers"],
  sub: "From a single employment agreement to a complete HR legal documentation suite — Aksharaa covers every document a growing business needs for its workforce.",
  items: [
    { display: "01", fill: "gold", icon: "fileSignature", title: "Fresh Agreement Drafting", desc: "New employment agreements drafted from scratch based on your brief — role, industry, seniority, and specific clauses required." },
    { display: "02", fill: "light", icon: "clipboardCheck", title: "Existing Agreement Review & Vetting", desc: "Aksharaa reviews your current agreements, identifies legal gaps, and provides a written report with redraft recommendations." },
    { display: "03", fill: "light", icon: "users", title: "Bulk Agreement Drafting", desc: "Multiple agreement variants for different grades, roles, or departments — delivered as a structured template set." },
    { display: "04", fill: "rust", icon: "shield", title: "NDA & Restrictive Covenant Drafting", desc: "Standalone NDAs, non-disclosure clauses, and non-compete clauses — drafted to the limits of what Indian courts will enforce." },
    { display: "05", fill: "dark", icon: "fileText", title: "HR Policy Document Drafting", desc: "Employee handbook, leave policy, code of conduct, and POSH policy — drafted as standalone enforceable HR documents." },
    { display: "06", fill: "light", icon: "handshake", title: "Separation & Settlement Agreements", desc: "Full and final settlement agreements, mutual separation deeds, and relieving documentation." },
  ],
};

export const scopeTrustStrip = [
  { icon: "shield", accent: "gold", title: "Legally Precise", desc: "Expert-drafted documents that stand up to scrutiny." },
  { icon: "userCheck", accent: "rust", title: "Role-Specific & Flexible", desc: "Tailored to your roles, industry practices & business needs." },
  { icon: "clock", accent: "gold", title: "Quick Turnaround", desc: "Most documents delivered within 3–5 working days." },
  { icon: "headset", accent: "rust", title: "Ongoing Legal Support", desc: "Revisions, updates & expert guidance whenever needed." },
];

/**
 * Process — FULL REDESIGN per client reference image (Section 5).
 * Previous version: plain numbered-circle (all same ak.orange colour) +
 * text list on the left, a basic photo-less layout; Turnaround card was a
 * flat row list with inline trailing time text; Delivered In card used a
 * generic repeated fileText icon for both formats.
 *
 * - Heading split for an orange-emphasis word ("4 Steps"), matching the
 *   [part1, part2] pattern used on Section 3.
 * - Each step now carries an `accent` + `tint` (hex pair — solid colour
 *   for the numbered circle/underline, light tint for the icon-box
 *   background) and an `icon` (mapped to the reference's actual small
 *   icon-box glyph per step: clipboardList, fileClock [new],
 *   messagesSquare, send). Stored as literal hex rather than a Tailwind
 *   token-name string, matching the established inline-style pattern
 *   already used for per-item dynamic colour in this codebase (see
 *   ReturnsCalendar.jsx's `style={{ backgroundColor: ... }}`), since
 *   Tailwind can't generate class names from a JS template string at
 *   build time. The matching ak.agreementsStep1-4 tokens are still
 *   defined in tailwind.config.js for documentation/provenance and any
 *   future class-based reuse, even though this component itself
 *   references the hex values directly. The reference also shows a real
 *   photo per step; per direct instruction this build uses an icon-box
 *   placeholder (no image-generation available in this environment) in
 *   the same position — swappable for a real photo later without any
 *   further code change, just an `image` field + img tag.
 * - `turnaround.rows[].time` split into `{ range, unit }` (e.g. "3–5" /
 *   "working days") to support the reference's two-line pill display
 *   (bold range on top, smaller unit label below) rather than one
 *   inline string — cleaner than parsing at render time.
 * - `formats` switched from plain strings to `{ ext, label }` objects
 *   ("WORD"/"PDF" + the existing descriptive text) to support the new
 *   colour-coded file-type badge per the reference (blue "W"/red "PDF"
 *   flat badges — built as plain coloured boxes with text, not a
 *   reproduction of Microsoft's/Adobe's actual logo artwork).
 */
export const process = {
  kicker: "How It Works",
  heading: ["From Brief to Document in ", "4 Steps"],
  sub: "Aksharaa's drafting process is designed to minimise back-and-forth. We collect everything we need upfront, draft precisely, and deliver a legally sound document within the agreed timeline.",
  steps: [
    { num: "01", accent: "#EF7439", tint: "#FDEEE7", icon: "clipboardList", title: "Brief & Requirement Capture", desc: "You share the role details, employment type, seniority level, specific clauses needed, and any existing documents to align with." },
    { num: "02", accent: "#1C6BE4", tint: "#E8F0FD", icon: "fileClock", title: "First Draft Delivered", desc: "Aksharaa delivers a complete first draft within 3–5 working days. Longer documents may take 5–7 days." },
    { num: "03", accent: "#10B57B", tint: "#E5F7EF", icon: "messagesSquare", title: "Your Review & One Revision", desc: "You review the draft and provide consolidated feedback. One round of revision is included as standard." },
    { num: "04", accent: "#8256F3", tint: "#EFE8FE", icon: "send", title: "Final Delivery", desc: "Final agreement delivered in Word format (.docx) and PDF for execution. Guidance on signing formalities provided if required." },
  ],
  turnaround: {
    title: "Turnaround Times",
    rows: [
      { type: "Single Employment Agreement", range: "3–5", unit: "working days" },
      { type: "CXO / Senior Agreement", range: "5–7", unit: "working days" },
      { type: "Agreement + NDA Bundle", range: "4–6", unit: "working days" },
      { type: "Bulk Agreement Set (5+ roles)", range: "7–10", unit: "working days" },
      { type: "Existing Agreement Vetting", range: "2–3", unit: "working days" },
    ],
    note: "All timelines from date of complete brief receipt. Expedited drafting available on request.",
  },
  formats: [
    { ext: "WORD", label: "Word (.docx) — editable" },
    { ext: "PDF", label: "PDF — execution ready" },
  ],
};

/**
 * FAQs — FULL REDESIGN per client reference image (Section 6). Previous
 * version: single full-width white accordion card (no left illustration
 * column), x/arrowUpRight toggle icons with a colour-inverted border-only
 * treatment for both open and closed states, plain bg-ak-mist/40 section
 * background.
 *
 * - Switched to a 2-col layout: left column gets the kicker/heading/sub
 *   plus a new illustration (didn't exist before) — two overlapping flat
 *   speech-bubble shapes (large orange-gradient + small cream, each with
 *   a "?" ) with 3 small white icon-badges (scale, fileText, users)
 *   orbiting on dashed arcs, reusing the same orbit-badge construction
 *   pattern already established on the Hero and Section 5 (absolute
 *   positioning, dashed SVG arcs) rather than inventing a new technique.
 *   Built as flat SVG/shapes per the project's established convention,
 *   not a raster mockup.
 * - Accordion items redesigned: closed items are a plain white card with
 *   an orange-outlined (unfilled) plus-circle; the open item switches to
 *   a peach card background (reusing the page's existing #FAF6EE
 *   parchment tone — PIL-sampled reference value landed almost exactly
 *   on this already-used token, not a new one) with a solid
 *   agreementsOrange-filled minus-circle — a real state distinction,
 *   replacing the old build's same-treatment-both-states pattern (just
 *   colour-inverted x/arrowUpRight icons). Toggle icons switched to the
 *   already-registered minus/plus keys (no new icon imports needed).
 * - New section-level background decoration (didn't exist before): a
 *   soft diagonal wave shape and dot-grid watermarks in both bottom
 *   corners, built as flat SVG per the same no-raster convention.
 */
export const faqs = {
  kicker: "Common Questions",
  heading: "Frequently Asked Questions",
  sub: "What employers and HR managers ask about employment agreement drafting.",
  illustrationIcons: ["scale", "fileText", "users"],
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

/**
 * Final CTA — rebuilt to match the shared service-cta-section template
 * used across Payroll Processing (PayrollCta.jsx, the original) and
 * Flexi Staffing (FlexiCta.jsx), per direct instruction to do this
 * section "exactly as we did to other pages." Previously this section
 * was a flat bg-ak-ink fill with a single combined Reveal fade-up and a
 * dark AkButton pill — replaced wholesale with the shared template's
 * structure: bg-ak-orange fill + shared cta-bg.png background image,
 * staggered entrance (kicker -> heading -> sub -> actions rather than
 * one combined fade-up), white pill primary button with a soft
 * breathing glow behind it, a vertical divider, and a phone link whose
 * icon badge pulses on hover. `kicker` added below ("Get Started
 * Today" — identical text to both Payroll's and Flexi's, the
 * established standard phrase for this template), since the previous
 * structure didn't render any kicker line at all.
 */
export const serviceCta = {
  kicker: "Get Started Today",
  heading: "Get Your Employment Agreements Drafted by Aksharaa",
  sub: "Share your requirements — role, seniority, employment type, and any specific clauses needed — and Aksharaa will deliver a legally precise, role-specific agreement within 3-5 working days.",
  ctas: [
    { label: "Request a Draft", variant: "primary", href: "/free-quote" },
    { label: "+91 98402 76677", variant: "ghost", href: "tel:+919840276677" },
  ],
};
