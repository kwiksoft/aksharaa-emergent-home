# AKSHARAA PROJECT — HANDOVER FOR NEW THREAD ("Aksharaa website development 06")

Paste this whole note as your first message in the new thread.

## WHAT THIS THREAD WAS

This thread continued the **Flexi Staffing** page (`/staffing-manpower/flexi-staffing`), the template page for the Staffing & Manpower category (9 services total — patterns here propagate once locked). Picked up from a prior handover after the Payroll Processing template was completed.

**Repo:** `kwiksoft/aksharaa-emergent-home` (private, GitHub org `kwiksoft`)
**File map:**
- Page: `frontend/src/pages/FlexiStaffing.jsx`
- Section components: `frontend/src/components/services/flexi-staffing/*.jsx`
- Data: `frontend/src/data/svc-flexi-staffing.js`
- Tracker: `flexi_staffing_changes.txt` at repo root (kept up to date all session — view it first thing in the new thread)

This thread closed at commit **`9e0ff17`** on `main`. ~30 commits made this session, all pushed.

## SECTION-BY-SECTION STATUS (11 sections total)

| # | Section | Status |
|---|---------|--------|
| 1 | **Hero** | ✅ Confirmed good by Tharun ("Fine and good, Great work"). Client background image (`flexi-hero-bg.jpg`), badge in circular card, monochrome clipboard/shield watermark at 7% opacity, **animated floating orbit element added** (see below — this was the big addition this session). |
| 2 | **Overview** | Team photo added under the "When Businesses Use Flexi Staffing" info card, rounded corners + card shadow/border polish. Awaiting final confirmation (not yet explicitly re-approved). |
| 3 | **Who Needs This** | Rebuilt per reference: slider-bar motif (orange gradient line + pill dot) replaces the old kicker text, centred heading, enlarged card icon badges, burgundy stat band added below the 6-card grid (reuses `hero.stats` data — 450+/15+/Pan-India/100%). Pan-India stat icon is a client-supplied PNG, recoloured white via CSS filter (`brightness-0 invert`). Awaiting confirmation. |
| 4 | **The Aksharaa Difference** | **ON HOLD per Tharun's explicit instruction** ("we hold section 4 this for a while"). Currently sitting at the gradient-bg/dark-cards version (commit `3ccece4`) — gradient from light sage `#C7D6C9` through client's `#7E8987` to dark sage `#3E4543`, photo as sticky right panel at full clarity, 6 cards reverted to dark glass treatment. **Do not touch until Tharun says go** — this section went through ~7 rounds of back-and-forth (dark→lighter→darker→no-image→light flip→corrected back to gradient+dark) and is deliberately parked. |
| 5 | **Scope** ("What We Manage") | Untouched — Pending review, no reference yet. |
| 6 | **Process** | Rebuilt per reference: vertical pill-row layout (was horizontal circles+line). Colour system per direct client spec — `#CB4154` (crimson, capsule fill), `#F6C28B` (sand, icon-circle fill), `#7E8987` (sage, hover state) applied **uniformly across all 5 steps**, not as a per-step rainbow like the reference image showed. "Zoom in while traversing" scroll motion (scale 0.85→1, staggered by index), pulsing dotted connectors between rows. Mobile bug caught and fixed (fixed-width row was clipping titles/hiding descriptions below `sm` breakpoint — now stacks vertically on mobile). Awaiting confirmation. |
| 7 | **Compliance Layer** | Untouched — Pending review, no reference yet. |
| 8 | **Industries** | Rebuilt per reference: pill badge (rounded-full, rose border, red text) replaces kicker — note `industries.heading` and `industries.sub` **swap visual roles** (heading text now sits inside the pill, sub becomes the actual H1) rather than any data restructuring. Gradient background + diagonal sunburst rays, cards rebuilt as dashed-border pill shapes with red→blue gradient icon badges. **Also fixed 2 data-level icon mismatches** found while rebuilding (not asked for, but real): Food & Hospitality had a generic "building" icon → fixed to `conciergeBell`; Startups & SMEs had "shield" → fixed to `rocket`. Awaiting confirmation. |
| 9 | **FAQs** | Untouched — Pending review, no reference yet. |
| 10 | **Related Services** | Untouched — Pending review, no reference yet. |
| 11 | **Final CTA** | Untouched — Pending review, no reference yet. |

## THE HERO ORBIT ELEMENT (this session's main feature work)

Tharun asked: "the given image [hexagon logo + 6 orbiting icon circles] can [be] overlayed as an animated element with circular motion and glitters on the hero. how it will be?"

**Process followed (worth knowing for how Tharun likes to work):**
1. Flagged the real design tension upfront — Hero already has a primary headline+CTA focus; an animated orbit risks competing with it; "glitter" reads off-brand for a B2B compliance page. Didn't just build it.
2. Asked whether to embed it quietly in the Hero, build it as its own section, or mock up both — Tharun chose "show me both."
3. Built two mockups (`OrbitMockup.jsx` + `HeroMockupQuiet.jsx` + `SectionMockupFull.jsx`), wired temporarily into the page, screenshotted, **then removed the temp wiring** (never left mockups live on the real page).
4. Tharun asked to see them again later — recorded actual `.webm` videos via Playwright's video capture, converted to GIF via ffmpeg (`fps=12, scale=720`), delivered as files. Static screenshots don't sell motion; video/GIF was the right call and Tharun explicitly asked for this format on the second viewing.
5. Tharun confirmed **Mockup A (in-Hero)** was the right direction, with specific refinements: bigger, two concentric rings with dots (not one), logo "stylishly placed" at centre, subtle pulsing/disappearing ring effect.
6. Built the real version for real this time (`FlexiHeroOrbit.jsx`), wired into the actual `FlexiHero.jsx` as a right-column element (`hidden lg:block`, two-column grid `1.25fr_0.75fr`).
7. Final follow-up: swap the hand-built SVG "A" mark for the **real Aksharaa logo** (`public/assets/aksharaa-logo.png` — same asset the site header uses via `Logo.jsx`). Tharun said he didn't have it to hand at that moment; it was already in the repo, so no asset round-trip was needed.

**What `FlexiHeroOrbit.jsx` actually contains now:**
- 440px square, two concentric rings: outer (solid crimson dots at icon-midpoints + thin connecting line), inner (faint dashed ring with 16 small tick-dots)
- Centre hexagon: official logo PNG, drop shadow (`filter: drop-shadow(...)`), clip-path hexagon shape
- Pulsing halo ring around the hexagon — expands + fades on a 2.6s loop (the "subtly disappearing" effect)
- 6 icon circles orbiting on a 30s linear rotation, counter-rotated individually so icons stay upright while orbiting
- Hidden below `lg` breakpoint (no room in the single-column mobile Hero layout)
- Existing watermark's opacity was dropped from 16%→7% because the bigger orbit now overlaps the same screen area and the two were visually clashing at the old opacity

**Important nuance:** the orbit reuses icons already in `lib/icons.js` (`search`, `user`, `trendingUp`, `fileText`, `shield` ×2) — no new icon imports needed for this component.

## KEY LEARNINGS FROM THIS SESSION (carry forward)

**On reading feedback carefully — a real miss worth knowing about:**
Mid-session, Tharun sent a team photo + "Background Colour and image setting: refer to the image 1... background colour can be gradient... 6 cards back in old dark colour box... clarity of bg colour as well as image in reference... attached image is for reference only don't pull any content." This was misread as "rebuild the section using that photo as a literal layout/content reference" and the whole section was flipped light (including cards) — wrong on both counts. Tharun corrected immediately ("You understood wrongly"). The fix: re-read it as "the photo's own tonal qualities (light-to-dark gradient direction) are the reference, not its content," gradient background restored, cards reverted to dark. **Lesson:** when a reference image is paired with "don't pull content from it," the image is being cited for an abstract quality (tone, mood, gradient direction, spacing rhythm) — slow down and ask which quality if it's not obvious, rather than defaulting to "recreate this layout."

**On opacity/colour feedback — tends to need iteration, build in stops:**
Several rounds this session were "more opacity" → "too much, less" → "now remove it" type oscillation (Section 4's background image went through 16%→40%→18%→removed; the Difference section's photo went 50%→30%; the gradient gif went through multiple stop adjustments). When given a colour/opacity instruction, implement it, screenshot, and sanity-check readability/contrast yourself before presenting — don't just apply the number and assume it's right, because "semi opacity" and similar qualitative asks have a wide range of literal interpretations and the first guess is often not the one that lands.

**On mobile — always check, don't assume desktop layout degrades gracefully:**
Two real mobile bugs were caught and fixed only because of actually screenshotting mobile after building for desktop:
- Process section: fixed pixel widths (capsule 140px + title 180px) left zero room for the divider/description below `sm`, clipping titles and hiding descriptions entirely. Fixed by switching to `flex-col` stacking below `sm`.
- (Earlier session, Payroll thread): similar class of issue, hence the standing practice now of always screenshotting mobile (390px) before calling any section done.

**On colour token discipline:**
Every new hex value gets a named, documented Tailwind token in `tailwind.config.js` (`ak.crimson`, `ak.sand`, `ak.sage`, `ak.coral`, `ak.burgundy2`, etc.) rather than scattered arbitrary-value hexes in components — each with a comment explaining where it came from (sampled from a reference image, client-specified directly, etc.) and why it's a separate token from anything similar that already exists. This makes the colour system traceable across a long multi-round session.

**On asset provenance:**
- Client-supplied images go straight into `public/assets/sections/` under a clear filename, reusing the existing path/filename when superseding an unused prior asset rather than leaving orphans.
- When sourcing placeholder stock photography (only happened once this session, Section 4's now-superseded night-office photo), confirm Pexels free-to-use licence before downloading, same as the established pattern from the Payroll thread.
- Check the repo for an existing official asset before hand-building an approximation — the Hero orbit's logo mark should have started from `public/assets/aksharaa-logo.png` (it was sitting right there, already used by `Logo.jsx`) rather than a hand-drawn SVG gradient placeholder; this got corrected but cost an extra round.

**On PAT discipline (same standing rule, repeatedly reinforced this session):**
Tharun pasted a GitHub PAT directly into chat at the very start of this session. It was flagged and he was asked to rotate it before use, despite his pushback that it was already short-lived/scoped correctly — the point being that pasting into a chat transcript is its own exposure event independent of the token's expiry or scope. He rotated it, the second one was used. **That second PAT is still embedded in this sandbox's git remote and has not been confirmed revoked.** Flag this again at the start of the new thread and get a fresh one rotated in before any further repo work — same fine-grained, single-repo, 1-day-expiry pattern as every prior thread.

## ESTABLISHED PATTERNS — CARRY FORWARD UNCHANGED

- `npm install --legacy-peer-deps --no-audit --no-fund`, then `npm install ajv@^8.17.1 --no-save --legacy-peer-deps --no-audit --no-fund`, discard `yarn.lock` changes, delete stray `package-lock.json`
- `git config user.name "Claude" / user.email "claude@kwiksoft.in"` in every fresh sandbox
- `CI=true npx craco build` before every commit — confirm clean build, no exceptions
- Server: `setsid nohup npx serve -s build -l 4173 > /tmp/serve.log 2>&1 < /dev/null &` as its own isolated bash call, `sleep 5-6`, verify with `curl` in a separate call. If `curl` returns connection-refused (`000`) immediately after starting, it's usually just not bound yet — re-check after another few seconds rather than assuming the launch failed.
- When killing and restarting the server, do it as fully separate calls (`pkill` alone, then `setsid nohup ...` alone, then `curl` alone) — combining them in one call has caused timeouts/race conditions in this environment before.
- Playwright for all visual verification: screenshot at 1440px (desktop) and 390px (mobile) minimum for every section touched. Use `scroll_into_view_if_needed()` for natural positioning; if a sticky-header overlap appears in a screenshot, verify with an actual bounding-box measurement before treating it as a real bug (one such "bug" this session was confirmed to be a `scrollIntoView` artifact, not a real layout issue, after measuring — don't add unnecessary spacing fixes for non-bugs).
- `h-4.5`/`w-4.5` and any non-integer Tailwind size class is a recurring landmine — always caught and fixed to bracket arbitrary-value syntax whenever found in passing.
- Every new colour gets a named, documented `ak.*` token in `tailwind.config.js`, never a bare arbitrary hex repeated across files.
- New asset files go to `public/assets/sections/` (page sections) or `public/assets/` (site-wide, e.g. logo) per existing convention — never inline-imported.
- JPEG compression check on any sourced/uploaded background image before committing — this session's hero background went from 1.2MB PNG to 65KB JPEG with zero visible quality loss; always worth the test.
- Commit messages are long-form and explicit: what changed, why, what was tried and rejected, what was verified and how. This thread's commits are the best record of *why* a decision was made if it's ever questioned later.
- Tracker (`flexi_staffing_changes.txt`) gets a status-line update + its own commit immediately after every section's real commit — never batched, never skipped.
- Mockups/comparisons built for client decision-making (not yet approved for the real page) are wired in *temporarily*, screenshotted/recorded, then the temporary wiring is fully removed before moving on — they don't get committed unless and until approved. The component files can sit uncommitted in the sandbox if there's a reasonable chance they'll be reused shortly; delete them once superseded by a real implementation (as happened with `OrbitMockup.jsx` etc. once `FlexiHeroOrbit.jsx` was built for real).

## FIRST THING TO DO IN THE NEW THREAD

1. Flag the PAT situation — get Tharun to confirm revocation of the last-used token and issue a fresh one before any repo work.
2. Clone the repo fresh, `view` the current `flexi_staffing_changes.txt` to re-confirm this exact state.
3. Ask Tharun which section he wants next — likely candidates given the table above: Section 5 (Scope) or Section 7 (Compliance Layer), both untouched with no reference yet; or he may want to revisit Section 4 (Difference) if he's ready to take it off hold.
