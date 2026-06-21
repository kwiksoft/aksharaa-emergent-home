/**
 * Content for the Staffing & Manpower category landing page.
 * Lean menu page - 10 services, direct list. Inherits Flexi Staffing's
 * warm, photography-led visual identity as the category-level sibling.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 3.
 */

export const meta = {
  title: "Staffing & Manpower | Aksharaa Corporate Services",
  description: "10 staffing and manpower services — right people, right time, right compliance. Flexi, contract, and permanent staffing with full statutory management.",
};

export const hero = {
  eyebrow: "Compliance Domain · 03 of 06",
  headline: ["Right People,", "Zero Compliance Hassle"],
  sub: "10 staffing services spanning flexi, contract, and permanent placements — Aksharaa sources, screens, deploys, and manages the entire compliance ecosystem so your business carries zero statutory risk.",
  ctas: [
    { label: "Browse Staffing Services", variant: "primary", href: "#staffing-services" },
    { label: "Explore All Services", variant: "secondary", href: "/staffing-manpower" },
  ],
  stats: [
    { value: 450, suffix: "+", label: "Establishments Served" },
    { value: 10, suffix: "", label: "Staffing Services Governed" },
    { text: "Pan-India", label: "Deployment Capability" },
    { value: 100, suffix: "%", label: "Statutory Compliance" },
  ],
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=900",
  imageAlt: "Diverse workforce team in a professional setting",
};

export const services = {
  kicker: "10 Services, One Engagement",
  heading: "Every Staffing Model, Governed",
  sub: "From flexible short-term deployment to permanent placement — each model carries its own statutory framework, all managed under one engagement.",
  items: [
    { num: "01", icon: "users", title: "Flexi Staffing Solutions", desc: "Temporary or fixed-duration workforce engaged through a CLRA-registered staffing agency.", href: "/staffing-manpower/flexi-staffing" },
    { num: "02", icon: "fileSignature", title: "Contract Staffing Services", desc: "Fixed-term contract workers for project-based or medium-duration requirements.", href: "/staffing-manpower/contract-staffing" },
    { num: "03", icon: "userCheck", title: "Permanent Staffing Services", desc: "End-to-end permanent recruitment with statutory onboarding and documentation.", href: "/staffing-manpower/permanent-staffing" },
    { num: "04", icon: "fileText", title: "Contract Labour Routing", desc: "Structured contract labour deployment with Aksharaa acting as the legal employer.", href: "/staffing-manpower/contract-labour-routing" },
    { num: "05", icon: "checkCircle", title: "Apprentice Management Services", desc: "Apprentices Act-compliant apprentice engagement, stipend, and conversion management.", href: "/staffing-manpower/apprentice-management" },
    { num: "06", icon: "shield", title: "Background Verification Services", desc: "Identity, address, and prior employment verification before deployment.", href: "/staffing-manpower/background-verification" },
    { num: "07", icon: "building", title: "Outsourced HR Department", desc: "A complete outsourced HR function for businesses without dedicated in-house HR.", href: "/staffing-manpower/outsourced-hr-department" },
    { num: "08", icon: "search", title: "Recruitment Process Outsourcing (RPO)", desc: "End-to-end recruitment handled by Aksharaa — sourcing to onboarding.", href: "/staffing-manpower/recruitment-process-outsourcing" },
    { num: "09", icon: "scan", title: "HR Due Diligence", desc: "Comprehensive HR due diligence for mergers, acquisitions, and structural changes.", href: "/staffing-manpower/hr-due-diligence" },
    { num: "10", icon: "clipboardList", title: "Recruitment Policy Setup", desc: "Structured recruitment policy frameworks aligned with applicable labour law.", href: "/staffing-manpower/recruitment-policy-setup" },
  ],
};

export const faqs = {
  kicker: "Frequently Asked",
  heading: "Staffing & Manpower — Common Questions",
  items: [
    { q: "What's the difference between flexi staffing and contract staffing?", a: "Flexi staffing is typically shorter-term and demand-driven (seasonal, project peaks), while contract staffing covers fixed-term engagements for a defined project or duration. Both have Aksharaa as the legal employer managing statutory compliance." },
    { q: "Does Aksharaa handle staffing across multiple states?", a: "Yes. Aksharaa's sourcing network and state-wise compliance knowledge supports multi-location deployment across India." },
    { q: "Can staffed workers be converted to permanent roles?", a: "Yes. Aksharaa facilitates smooth transitions from flexi or contract staffing to permanent rolls, typically completed within 2 weeks." },
  ],
};

export const categoryCta = {
  kicker: "Build Your Workforce Today",
  headline: ["Tell Us Your Staffing", "Requirement"],
  sub: "Share your headcount, role profiles, and location — Aksharaa will put together a compliant staffing plan within 24 hours.",
  ctas: [
    { label: "Get a Free Staffing Plan", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
