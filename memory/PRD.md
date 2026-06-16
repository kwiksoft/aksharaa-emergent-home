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

## Design Language Iteration — KINETIQ/APEX "Measured System" (2026-06)
Applied a reference-driven (KINETIQ + APEX//OS) design language across all 15 sections, recolored to charcoal+orange, governed by "motion encodes the data type":
- [x] Type: added **IBM Plex Mono** (kickers/labels/data) alongside Inter + Sora.
- [x] Global: monospace uppercase kickers; oversized uppercase statement headlines with **outlined (text-stroke) accent words** (`.ak-outline-orange/-ink/-white`).
- [x] #2 Header slanted parallelogram CTA · #4 Trust "Phenomenon" treatment · #5 Partner animated **sparkline** retention card.
- [x] #6 Lifecycle **diamond-node pathway** + diagonal split + ghost numbers + growing rail.
- [x] #7 Framework outlined heading + mono pillar labels · #8 Workforce **"Compliance Console" mock** + feature list · #9 Risk telemetry split (Exposure/Controlled tags, drifting grid, diagonal edge).
- [x] #10 Architecture `Domain 0X` mono labels · #11 Control `Module 0X` + top-line activation · #12 Engagement `Phase 0X` sequence.
- [x] #13 Metrics **sparkline counter cards** + diagonal edge · #14 Final CTA now **dark** with outlined word, slanted primary + **bracket-corner** secondary + mono reassurance line · #15 Footer mono labels.
- [x] Reusable: `Sparkline.jsx`, `BracketButton.jsx`.
- [x] Validated (testing iteration_2): all 15 sections render, 0 console errors, all 26 testids resolve, motion fires; fixed mobile horizontal-overflow on Trust caption.

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
