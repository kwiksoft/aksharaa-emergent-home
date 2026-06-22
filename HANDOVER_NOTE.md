# AKSHARAA PROJECT — HANDOVER NOTE FOR NEW THREAD

Paste this whole note as your first message in the new thread.

---

## WHERE WE ARE, RIGHT NOW

**Repo:** `github.com/kwiksoft/aksharaa-emergent-home` (private GitHub repo, Personal Access Token used previously is in the old thread — will need a fresh one for this thread, since each thread's sandbox is separate and doesn't carry credentials forward)

**Local path on your machine:** `D:\Desktop\Backup screen and mhtml\Aksharaa redo\aksharaa-emergent-home`

**Stack:** React + Tailwind + Framer Motion, built via Emergent.sh originally, now fully hand-edited going forward (Emergent is no longer part of the workflow — it was only used to establish the initial home page design language)

**Currently mid-review:** the **PF & ESI Registration** service page (`/registrations-licensing/pf-esi-registration`) — this is the TEMPLATE page for the Registrations & Licensing category (26 services), and the pattern established here is meant to propagate to the other 5 category templates once locked.

**Just fixed (last commit `e4a9e51`):** Section 5 (Process) — went through 6 rounds of visual iteration:
1. Built as vertical timeline → too plain
2. Rebuilt per reference screenshots as horizontal flow with chevrons → font too small, boxes too tight, background wrong tone
3. Fixed font/padding, added subtle alternating tilt → tilt rejected, wanted square uniform + light grey bg
4. Removed tilt, switched to light grey → user shared a NEW reference (circular orbit layout, 6 nodes around a circle with curved arc connectors)
5. Rebuilt as circular orbit → radius too small, text overlapping between nodes and center card
6. Fixed radius/sizing → still too large overall (huge dead whitespace), chevron markers invisible at 5 of 6 positions, stat strip colliding with content
7. **Just pushed:** smaller circle (radius 300, was 420), fixed chevron contrast (solid fill instead of near-invisible white), separated section heading out of the center card, fixed stat-strip spacing

**This has NOT yet been visually confirmed by the user after the round-6 fix.** First thing to do in the new thread: ask if round 6 looks right, or if more adjustment is needed.

---

## THE FEEDBACK RHYTHM (important — how the user actually works)

- User reviews pages live at `http://192.168.29.31:3000/...` (or `localhost:3000` on their own machine) via `yarn start`
- Feedback comes as: a section number (from the page's `_changes.txt` reference file) + a screenshot of the current state + often a **reference screenshot from another site** showing the desired treatment
- User is precise and visual — give exact pixel/layout fixes, not vague "improved" claims
- After each fix: build (`yarn build`, must compile with zero errors) → commit with a detailed message explaining the *why* → push → tell user to `git pull` and refresh
- User sometimes corrects a correction (e.g., "remove the twisted boxes, make them uniform" came right after a tilt was added) — this is normal, just listen and adjust, don't defend the previous choice
- **Always rebuild content using REAL existing data** — never invent new copy/stats. When a reference design needs content we don't have (e.g., the circular layout's bottom stat strip), derive it from data we already have elsewhere on the page (we did this with `hero.tracker.badge`, `hero.stats`, etc.) and say so explicitly in the commit message.

---

## SECTION REFERENCE FILE FOR THIS PAGE

`pf_esi_registration_changes.txt` (at repo root) — lists all 9 sections with testid, theme, motion treatment, and a status tracker. **Update the status column to "Done" or note progress as sections get confirmed** — this hasn't been kept current during the recent fix rounds, worth tidying up.

Sections, in order:
1. Hero — `reg-svc-hero-section` — **FIXED, confirmed good** (photo+headline side-by-side, full-width tracker card below, unified stat strip)
2. Overview — `reg-svc-overview-section` — not yet reviewed in this round
3. Applicability — `reg-svc-applicability-section` — **FIXED, confirmed good** (orange/blue colour-coded cards, calendar illustration)
4. Documents — `reg-svc-documents-section` — not yet reviewed in this round
5. Process — `reg-svc-process-section` — **JUST FIXED (round 6), awaiting confirmation** (circular orbit layout)
6. Penalties — `reg-svc-penalties-section` — not yet reviewed
7. FAQs — `reg-svc-faqs-section` — not yet reviewed
8. Related Services — `reg-svc-related-section` — not yet reviewed
9. Final CTA — `reg-svc-cta-section` — not yet reviewed

---

## FULL PROJECT STRUCTURE (for orientation)

**6 service-page templates, one per category** (each with a distinct visual identity):
- PF & ESI Registration — Registrations & Licensing (26 svc) — registry/seal motif — **currently being refined, see above**
- PF Compliance — Labour Law & HR Compliance (18 svc) — dark/statutory, grid+dot texture, penalty gauge
- Payroll Processing — Payroll & HR Operations (9 svc) — live payslip dashboard, Mac-window card
- Flexi Staffing — Staffing & Manpower (10 svc) — warm, photography-led
- PF & ESI Returns Filing — Compliance, Filings & Taxation (2 svc) — spacious, deadline-clock motif
- Employment Agreements — Legal & Documentation (18 svc) — editorial/parchment, document-preview card

**6 category landing pages** (lean menu pages — list + link to services, don't explain any one deeply):
- Registrations & Licensing — accordion (2 groups: Labour & Establishment / Business & Tax)
- Labour Law & HR Compliance — accordion (3 groups: Statutory Contribution / Establishment & Workplace / Contract Labour & Audit)
- Legal & Documentation — accordion (4 groups: Business & Corporate / Property & Real Estate / Notices & Disputes / Personal & Estate)
- Payroll & HR Operations — direct list (9 services, no accordion needed)
- Staffing & Manpower — direct list (10 services)
- Compliance, Filings & Taxation — 2 spacious cards (only 2 services, no list/accordion needed)

**Density pattern rule established:** accordion for 18+ services, direct list for under ~15, simple cards for 2-3.

All service links across category pages use REAL URL slugs from `Aksharaa_Sitemap_ContentScope_v1_0.docx` — pages not yet built will 404 until built, but link structure is correct and needs no rework later.

---

## WHAT'S NOT YET DONE (the bigger picture, for context — not urgent right now)

- Sections 2, 4, 6, 7, 8, 9 of PF & ESI Registration haven't been re-reviewed against new reference-style feedback (only originally built)
- The other 5 service templates and the other 5 category pages haven't been through ANY round of visual feedback yet — only PF & ESI Registration and the Registrations category page have had human eyes on them post-build
- ~85 individual service pages (the rest of the 105-page sitemap) don't exist yet — only the 6 templates + category links to them
- Track A (Claude Code/Laravel foundation) and Track B (Antigravity/Gemini additions) assessment is fully parked, not started
- Laravel CMS build-out and final deployment — not started, waiting on all of the above

**Do NOT jump ahead to any of this unless the user explicitly asks.** Stay focused on finishing the PF & ESI Registration section-by-section review first — that's the active task.

---

## TECHNICAL NOTES WORTH REMEMBERING

- Tailwind colour tokens: `ak-orange` (#F28C28), `ak-ink` (#1C2A39), `ak-slate` (#2E3B4E), `ak-navy` (#111C27), `ak-mist` (#F8F9FA) — defined in `tailwind.config.js`. For one-off needs outside this palette (e.g., the ESI blue accent), plain Tailwind defaults like `blue-500`/`zinc-100` are fine to use directly without modifying the config.
- Custom utility classes: `.ak-kicker` / `.ak-kicker--light`, `.ak-mono-label` / `.ak-mono-label--light`, `.ak-outline-orange` — all in `index.css`
- Shared components: `Container`, `Reveal`/`RevealGroup`/`RevealItem` (scroll animations), `Counter` (count-up numbers), `AkButton` (variants: `primary`, `secondary`, `darkSecondary`, `ghost`)
- Icon registry lives in `src/lib/icons.js` — check before using a new icon name; add to the registry if missing (it maps string keys to `lucide-react` icon components)
- **A real bug was found and fixed earlier:** CSS Grid's `align-items: stretch` was silently absorbing staggered margin-top offsets on bento grids, making them render flat. Fix is `items-start` on the grid container. This affected the home page too (not just service pages) — worth remembering if any future grid offset doesn't seem to render.
- Build command: `cd frontend && CI=true yarn build` — must show "Compiled successfully" before committing
- Dev server: `cd frontend && yarn start` — user has a teammate viewing live via local network at `http://192.168.29.31:3000` (their real WiFi IP — note `yarn start`'s own reported "On Your Network" address was wrong, pointed to a virtual adapter, not the real one — if this comes up again, run `ipconfig` and find the adapter with an actual default gateway)

---

## FIRST THING TO DO IN THE NEW THREAD

Ask the user: "Does the round-6 Process section fix look right now, or does it need more adjustment?" Then continue the section-by-section review from wherever they want — either finishing PF & ESI Registration's remaining sections (2, 4, 6, 7, 8, 9) or jumping to whichever section they want to look at next.
