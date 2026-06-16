# Aksharaa Corporate Compliance — Landing Page Reimagining (PRD)

## Original Problem Statement
Full premium redesign of the existing Aksharaa landing page (`aksharaa.appi.co.in`), preserving ALL current content and the exact 15-section order, rebuilt as a brighter, asymmetrical, premium modern page (Apple/Razorpay-style) with elegant motion and stronger visual hierarchy. Static now, CMS-ready later. Stack: React + FastAPI + MongoDB.

## Confirmed User Choices
- Fonts: **Inter** (UI/body) + **Sora** (display/headlines)
- Navigation: **Full mega menus** with service groupings (Services + Industries)
- Client logos: **Reuse original** brand logo images from current site
- Backend: **Frontend-only static page now**, CMS-ready component/data structure
- Imagery: use premium images where they enhance the look

## Architecture / Tasks Done
- React SPA, single route (`/`) → `pages/Landing.jsx` assembling 15 sections in original order.
- Content fully decoupled into `src/data/content.js` + `src/data/navigation.js` (CMS-upgrade path: swap these for an API later without touching views).
- Reusable primitives: `Container`, `Reveal`/`RevealGroup`/`RevealItem` (framer-motion scroll reveals), `Counter` (count-up on view), `AkButton`, `lib/icons.js` (lucide registry).
- Layout: `TopInfoBar`, sticky shrink/blur `Header`, `MegaMenu` (airy asymmetric panels), full-screen `MobileNav`, premium `Footer`.
- Design tokens in `tailwind.config.js` (`ak.*` palette) + custom utilities in `index.css` (grid linework, marquee, dots).
- Backend untouched (default template); not wired this phase per user choice.

## Target Users / Personas
- Founders, operations heads, HR heads, finance leaders, compliance teams.
- Mid-market & enterprise prospects evaluating governance/compliance services.

## Core Requirements (static)
- Preserve exact content + 15-section order; brighter asymmetrical premium design; 3–4 dark contrast anchor sections; orange used only for accents/CTAs; elegant motion (parallax, staggered reveals, counters, progress-line growth, hover lift); fully responsive desktop + mobile.

## Implemented (2026-06)
- [x] All 15 sections: Top info bar, Header+mega menus, Hero, Trust strip, Governance Partner, Compliance Lifecycle (dark), Governance Framework (dark), Integrated Workforce, Risk Intelligence (dark), Compliance Architecture, Compliance Control, Engagement Model, Institutional Metrics (dark), Final CTA, Footer.
- [x] Motion system: scroll reveals, animated counters, growing lifecycle/metric lines, hover lifts, hero float, CTA watermark drift.
- [x] Desktop mega menus (Services 6 groups + featured; Industries cards) + full-screen mobile nav with expandable sections.
- [x] Reused original client logos in auto-scrolling monochrome trust ribbon.
- [x] Validated by testing agent (~98% frontend, zero console errors); hero chip stacking fix applied.

## Backlog (prioritized)
- **P1 — CMS-Ready Backend Foundation:** FastAPI endpoints + MongoDB schema for section-wise editable content; wire frontend `data/*` to API with graceful fallback.
- **P1 — Lead capture:** working "Free Consultation"/Contact form (FastAPI + MongoDB) + email notification.
- **P2 — Inner pages/routes:** real Service/Industry/Client Stories/Blog routes (mega-menu links currently in-page anchors/placeholders).
- **P2 — Admin panel** for editing sections; analytics on CTA engagement.
- **P3 — A/B hero/CTA variants; multilingual support.**

## Next Action Items
1. Decide whether to build the CMS backend (P1) or lead-capture form next.
2. Provide real routes/content for Services, Industries, Client Stories, Blog if multi-page is desired.

## Notes
- No authentication, no third-party integrations, no mocked APIs in this phase.
- `test_credentials.md`: N/A (no auth/backend).
