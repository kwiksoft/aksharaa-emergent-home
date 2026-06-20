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

## Section 11 Reimagined — step-by-step connected cards (2026-06)
- [x] Replaced the hub layout in `ComplianceControl.jsx` with a **step-by-step connected-cards** concept (ref: Satvat Holistics): 4 equal-height white cards (STEP 01–04) connected by **dashed weaving over/under connectors** with arrowheads (Framer Motion draw-in).
- [x] Background = **light sage-grey (#EAEDEC, light variation of #7e8987)** with a **peach halftone dot pattern (#F6C28B variation)** masked into a fading cluster on the right + soft glow.
- [x] **Bold** solid heading; relevant pro icons in **#CB4154**, enlarged and **protruding semi-outside** each card's right edge. Mobile = vertical step flow with dashed arrows. Verified desktop; 0 console errors.

## Section 9 Reimagined — Risk hero + risk/mitigation explainer + marquee (2026-06)
- [x] Rebuilt `RiskIntelligence.jsx` (dark) into three stacked blocks per the two reference images: (1) **Hero** — left status rail (Compliance Secured / Risk Assessed / Control Enabled), blended portrait with "AKSHARAA" tag, big "RISK INTELLIGENCE & COMPLIANCE CONTROL" headline, sub, 4 mini pillars (Identify Risk / Enable Control / Monitor Systems / Ensure Compliance) + Get in Touch.
- [x] (2) **From Risk to Resilience** — "We Identify Risks. We Build Control." with **Common Risk Zones (red)** vs **Governance-Led Mitigation (green)** cards, a central rotating dashed **shield hub** with directional chevrons, per-item icons; then a 4-up **outcomes** row (Reduced Risk / Stronger Control / Audit Readiness / Business Continuity) and a **CTA bar**.
- [x] (3) **Running marquee** of the axiom "Risk does not arise from complexity. It arises from unmanaged systems." (left→right, orange diamond separators).
- [x] Expanded `risk` content (badges, pillars, resilience, item icons, benefits, ctaBar); added `clock`/`target` icons. Verified hero/explainer/bottom via screenshots; 0 console errors.

## Section 8 — reverted to LIGHT (kept flow-field + new image) (2026-06)
- [x] Per user, switched Section 8 back to **light theme**: flow-field background now rendered **inverted** (faint grey contour lines on white) + soft crimson glow; text restored to dark (`ak-ink`).
- [x] Kept the new center compliance-professional image; crimson #960018 chips back to light treatment (tinted chip → fills on hover), crimson-outlined "SYSTEMS", light closing band. Layout + copy unchanged. Verified desktop; 0 console errors.

## Section 8 — dark flow-field background + new center image (2026-06)
- [x] Converted `IntegratedWorkforce.jsx` to a **dark theme** using the user's attached **black flow-field/contour-line background** (`/assets/workforce-bg.png`, object-cover @ 80% + dark gradient + crimson radial glow). Text now white/white-55.
- [x] Swapped center arch image to a **compliance/governance professional** (`photo-1573497019940...`); crimson #960018 now used as **solid icon chips (white icons)**, arch ring/glow, glowing "SYSTEMS" heading word, and closing-statement border. Layout (3-left/center/3-right) and all copy preserved.
- [x] Verified desktop; 0 JS console errors.

## Section 8 Reimagined — centered-image "Workforce" split + crimson accent (2026-06)
- [x] Rebuilt `IntegratedWorkforce.jsx` per reference image: centered title+intro on top, then a **3-left / center-image / 3-right** feature layout. Left items face inward (right-aligned), right items left-aligned; each with a circular icon chip + title + sub.
- [x] Introduced brand-new accent **#960018 (crimson)** for icon chips (hover-fill), the center **arch frame + ring + glow**, the crimson-outlined "SYSTEMS" heading word, and the closing-statement border.
- [x] Center **arch image** (professional, rounded-top frame with gentle float + scale-reveal); professional lucide icons (banknote, shield, users, document, globe, lock). Light theme only. Added `workforce.image`/`imageAlt`.
- [x] Responsive: image-first then stacked features on mobile; 3/center/3 on desktop. Verified desktop; 0 JS console errors.

## Section 6 Reimagined — semi-dark "Lifecycle" node flow + world map (2026-06)
- [x] Rebuilt `ComplianceLifecycle.jsx` per reference video: **horizontal flow of 5 circular nodes** (Register→Operate→File→Audit→Scale) each with icon + stage-number badge, connected by a growing orange rail with a **travelling data pulse**; staggered spring scale-in (left→right) + per-node pulse rings + hover lift.
- [x] Section is now **semi-dark** (`bg-ak-slate`) with a **faint global business/world map** background (`/assets/world-map.svg`, white-continent Wikimedia SVG at ~7% opacity) + ambient gradient/glow; kept the diagonal split edge and all original copy.
- [x] Responsive: horizontal flow on `lg+`, vertical node timeline on mobile. Verified desktop; 0 JS console errors.

## Section 5 Reimagined — symmetric 3-column "Partner" (2026-06)
- [x] Rebuilt `GovernancePartner.jsx` into a balanced 3-column composition per the user's reference image: centered kicker+heading on top; **LEFT** = governance quote + "500+ Establishments Served Pan-India" (building icon) + About Aksharaa CTA; **CENTER** = branded compliance-team image (infused Aksharaa logo badge + caption, ambient orange glow, gentle float); **RIGHT** = three staggered stat cards (98% retention, 15+ years, 98% + 8-yr retention-trend sparkline).
- [x] Light/white theme, hover-lift on cards/CTA, scroll-staggered entry. Verified desktop; 0 JS console errors.

## Section 5 Redesign — "Governance Partner" video-driven motion (2026-06)
- [x] Rebuilt `GovernancePartner.jsx` on a light/white background using the reference video's motion language: image **scale-reveal**, **staggered floating data chips** (fade + slide-up), **pulsing live badge**, and hover-lift on chips/CTA.
- [x] Replaced building photo with a **compliance/governance team** image and **infused Aksharaa branding inside** it (glass logo badge top-left + "Aksharaa · Governance & Compliance Team" caption with legibility gradient).
- [x] Added a floating **trust badge** (avatar stack + "500+ Establishments Served Pan-India" counter + pulsing dot) alongside the existing 98% retention sparkline chip; kept all original copy (heading, paragraphs, quote, 2 metrics, About CTA).
- [x] Verified on desktop via screenshot; 0 JS console errors. New content fields: `partner.trust`, `partner.badgeCaption`.

## Section 11 Redesign — "Control Hub" (2026-06)
- [x] Rebuilt `ComplianceControl.jsx` from a static broken-grid into a **central circular hub-and-spoke** layout (user video reference, adapted to charcoal/slate/orange palette — NOT the source's purple/blue).
- [x] Animated hub: pulsing expansion rings, rotating dashed orbit with data dots, charcoal core with conic-gradient **radar sweep**, "Compliance Control Core" label.
- [x] Four control modules as floating glass cards at the corners, connected to the hub by SVG spoke lines (Framer Motion `pathLength` draw-in + animated orange flow-dash) terminating in glowing connection nodes.
- [x] Responsive: hub-and-spoke on `lg+`, compact hub + stacked cards on mobile/tablet. Verified on desktop via screenshot; 0 JS console errors.

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
