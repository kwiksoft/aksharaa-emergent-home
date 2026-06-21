/**
 * Content for the Payroll & HR Operations category landing page.
 * Lean menu page - 9 services, small enough for a direct list (no
 * accordion needed - that pattern solves a density problem this
 * category doesn't have). Inherits Payroll Processing's "live dashboard"
 * visual identity as the category-level sibling.
 *
 * Source: Aksharaa_Sitemap_ContentScope_v1_0.docx — Section 2.
 */

export const meta = {
  title: "Payroll & HR Operations | Aksharaa Corporate Services",
  description: "9 payroll and HR operations services — accurate payroll, every month, with a zero-error commitment and guaranteed deadlines.",
};

export const hero = {
  eyebrow: "Compliance Domain · 02 of 06",
  headline: ["Accurate", "Payroll,", "Every Month."],
  sub: "9 services covering payroll processing, HR policy drafting, statutory registers, and compliance calendaring — all integrated with your PF, ESI, and PT filing obligations so there's never a gap between what's paid and what's filed.",
  ctas: [
    { label: "Browse Payroll Services", variant: "primary", href: "#payroll-services" },
    { label: "Speak to a Governance Advisor", variant: "secondary", href: "#category-cta" },
  ],
  stats: [
    { value: 9, suffix: "", label: "Services Governed" },
    { value: 500, suffix: "+", label: "Establishments Served" },
    { value: 0, suffix: "", label: "Penalty Incidents" },
    { text: "Pan-India", label: "Multi-State Coverage" },
  ],
};

export const services = {
  kicker: "9 Services, One Engagement",
  heading: "Every Payroll & HR Operation, Governed",
  sub: "From monthly payroll processing to statutory register maintenance — each service integrates with the others under one consolidated engagement.",
  items: [
    { num: "01", icon: "wallet", title: "Payroll Processing Services", desc: "End-to-end monthly payroll management — computation, payslips, statutory deductions, bank transfer advice.", href: "/payroll-hr-operations/payroll-processing" },
    { num: "02", icon: "checkCircle", title: "Payroll Audit", desc: "Periodic review of past payroll cycles — identify errors, compliance gaps, and over/under-deductions.", href: "/payroll-hr-operations/payroll-audit" },
    { num: "03", icon: "fileSignature", title: "HR Policies Drafting", desc: "Employee handbook, leave policy, code of conduct — drafted as enforceable HR documents.", href: "/payroll-hr-operations/hr-policies-drafting" },
    { num: "04", icon: "calendar", title: "Leave & Attendance Compliance", desc: "Leave entitlement tracking and attendance compliance aligned with applicable labour law.", href: "/payroll-hr-operations/leave-attendance-compliance" },
    { num: "05", icon: "layers", title: "Statutory Registers Maintenance", desc: "Maintenance of all statutory registers under Shops Act, Factories Act, and PF/ESI rules.", href: "/payroll-hr-operations/statutory-registers" },
    { num: "06", icon: "fileText", title: "Employee Handbook Drafting", desc: "Comprehensive employee handbook covering policies, conduct, and entitlements.", href: "/payroll-hr-operations/employee-handbook" },
    { num: "07", icon: "clipboardList", title: "SOP Creation for HR", desc: "Standard operating procedures for HR functions, compliant with factory and establishment rules.", href: "/payroll-hr-operations/hr-sop-creation" },
    { num: "08", icon: "clock", title: "Compliance Calendar Preparation", desc: "A structured calendar tracking every statutory deadline across PF, ESI, PT, and labour law.", href: "/payroll-hr-operations/compliance-calendar" },
    { num: "09", icon: "shield", title: "Vendor Compliance Management", desc: "Compliance management for third-party vendors and contractors engaged by your establishment.", href: "/payroll-hr-operations/vendor-compliance" },
  ],
};

export const faqs = {
  kicker: "Frequently Asked",
  heading: "Payroll & HR Operations — Common Questions",
  items: [
    { q: "Can Aksharaa take over payroll mid-cycle?", a: "Yes. Aksharaa typically completes onboarding and is ready to process the very next payroll cycle within 5–7 working days of receiving complete employee data and previous payroll records." },
    { q: "Does Aksharaa integrate payroll with labour law compliance?", a: "Yes. Payroll processing is directly integrated with PF, ESI, and Professional Tax filing obligations — there's no gap between what's computed and what's filed." },
    { q: "What's the difference between payroll processing and a payroll audit?", a: "Payroll processing is the ongoing monthly function. A payroll audit is a one-time or periodic review of past cycles to identify errors and compliance gaps." },
  ],
};

export const categoryCta = {
  kicker: "Begin Your Payroll Review",
  headline: ["Get a Free Payroll", "Assessment Today"],
  sub: "We review your current process, identify compliance gaps, and deliver a clear scope and quote within 24 hours.",
  ctas: [
    { label: "Get Free Payroll Assessment", variant: "primary", href: "#footer" },
    { label: "Speak to a Governance Advisor", variant: "ghost", href: "#footer" },
  ],
};
