# AKSHARAA PROJECT — HANDOVER FOR NEW THREAD ("Aksharaa website development 13")

Paste this whole note as your first message in the new thread.

## WHAT THIS NOTE COVERS

This is the **whole-project rolling handover** — it tracks which page/section was last worked on and carries forward patterns/lessons that apply across all pages, not just one. For the detailed section-by-section history of whichever page is currently active, read that page's own tracker file (e.g. `pf_esi_registration_changes.txt`) — this note summarizes, it doesn't replace it.

**Repo:** `kwiksoft/aksharaa-emergent-home` (private, GitHub org `kwiksoft`)
**Most recently active page:** PF & ESI Registration (`/registrations-licensing/pf-esi-registration`) — the template page for the Registrations & Licensing category (26 services total; patterns here propagate once locked).
**File map for that page:**
- Page: `frontend/src/pages/PfEsiRegistration.jsx`
- Section components: `frontend/src/components/services/pf-esi-registration/*.jsx`
- Data: `frontend/src/data/svc-pf-esi-registration.js`
- Tracker: `pf_esi_registration_changes.txt` at repo root — **read this in full before touching any section**
- Latest detailed handover: `handover_2026-06-30.md` at repo root

This thread (12) closed at commit **`b1ad9af`** on `main`. ~21 commits made this session, all individually pushed and verified.

## PF & ESI REGISTRATION — SECTION STATUS (9 sections)

| # | Section | Status |
|---|---------|--------|
| 1 | Hero | Round 6 photo-collage rebuild. Pending sign-off. |
| 2 | Overview | Heavily reworked this thread — Registration Scope timeline appended, desk-props image restructured into normal flow (was absolute-positioned, went through many rounds of pixel-position tuning before being moved into the right column as a flowed element). Pending sign-off. |
| 3 | Applicability | Illustration replaced with v2 transparent PNG (prior thread). Pending sign-off. |
| 4 | Documents | Background image applied, cards made opaque white, card 3 height matched to card 1. Pending sign-off. |
| 5 | Process | Untouched. Pending review. |
| 6 | Penalties | Stock photo replaced with client-supplied risk image. Pending sign-off. |
| 7 | FAQs | Fully rebuilt — two-column layout, restyled accordion, full-bleed background. Pending sign-off. |
| 8 | Related Services | Untouched. Pending review. |
| 9 | Final CTA | Untouched. Pending review. |

**Nothing is marked DONE yet.** Full detail on every change above is in `pf_esi_registration_changes.txt` and `handover_2026-06-30.md`.

## OTHER PAGES (status as of last time each was touched — may be stale, re-confirm if revisiting)

- **Flexi Staffing** (`/staffing-manpower/flexi-staffing`) — last touched thread 06. Hero confirmed good by client. Several sections rebuilt and awaiting confirmation (Overview, Who Needs This, Process, Industries). Section 4 ("The Aksharaa Difference") was explicitly put on hold by the client — do not touch unless they say go.
- **Payroll Processing** — established the shared CTA template used elsewhere.
- **PF & ESI Returns Filing**, **PF Compliance** — got a padding-convention pass in an earlier thread, otherwise not recently touched.
- **Employment Agreements** — most sections signed off in an earlier thread; Section 7 (Related Services) explicitly deferred by the client ("let it be").

If asked to work on any of these, re-clone fresh, read that page's own tracker file in full, and don't assume the table above is still accurate — it may be several threads old.

## KEY LESSONS FROM THREAD 12 (carry forward)

**`overflow-hidden` masks horizontal overflow from standard checks.** Any section with `overflow-hidden` needs its absolutely-positioned children checked via direct bounding-box-vs-section-box comparison at every relevant breakpoint width — a clean `document.scrollWidth` check is not sufficient and will give false confidence. Bit this project twice now (once in thread 11's notes, once again in thread 12's 2cm-image-move).

**When a "verify the fix" moment is high-stakes, verify with numbers, not a re-screenshot.** Thread 12's position-restore correction cloned the known-good commit separately, ran it on a second dev server, and diffed actual rendered coordinates between the two versions — this is more rigorous than eyeballing two screenshots and caught a regression that likely would have looked "close enough" otherwise.

**Absolutely-positioned decorative images with hand-tuned per-breakpoint pixel values are fragile and drift with repeated small adjustments.** When a client reference shows an element as part of a column's natural content stack (not floating decoration), restructuring into normal document flow is usually the more robust fix — it also tends to fix responsive behavior for free, since `hidden below lg` absolute elements never show on tablet/mobile, while flowed elements naturally do.

**Translucent card backgrounds (`bg-ak-mist/30`-style) read fine on plain white sections but look muddy on vivid/non-neutral background images.** Came up twice this thread (FAQs, then Documents) with the same fix both times: switch to opaque white + drop shadow. Worth checking proactively whenever a background image is added to a section with translucent cards.

**A screenshot described in chat is not the same as a file the client can actually open.** When a visual judgment call is needed, write the PNG to `/mnt/user-data/outputs/` and use `present_files` — don't assume an inline description or a `view` call's render is visible on the client's end.

**rembg (u2net) beats color-distance thresholding for cutting out images with a soft ambient glow/vignette baked in.** A flat-background image isn't automatically safe for simple color-threshold cutout if it has any soft lighting effect near the subject — the FAQs illustration this thread needed semantic segmentation instead, since the glow's pixel values overlapped real subject content (light folder pages, light laptop screen) at every threshold tried.

## ESTABLISHED PATTERNS — CARRY FORWARD UNCHANGED

- `npm install --legacy-peer-deps`, then `npm install ajv@^8.17.1 --no-save --legacy-peer-deps` (known nested-ajv conflict in this project's dependency tree) — never commit the resulting `yarn.lock`/`package-lock.json` changes; discard before every commit.
- `git config user.email "info@kwiksoft.in" / user.name "Kwiksoft"` if not already set in the sandbox.
- `CI=true npx craco build` before every commit — confirm clean build, no exceptions.
- Dev server: `setsid npm start > logfile 2>&1 < /dev/null &`, then a separate `sleep 30` + `curl` check in its own call. Background processes do not reliably survive across tool calls in this environment — expect to restart periodically through a session.
- Playwright for all visual verification: screenshot at 1440/768/390px minimum for every section touched, check zero console errors and no horizontal overflow at each. `scrollIntoViewIfNeeded()` before screenshotting, with a settle delay (~1.3s) for scroll-reveal animations.
- Push verification: `git push <url> main` then `git fetch <url> main` and check `FETCH_HEAD` matches — this is reliable, but does NOT update the cached `origin/main` tracking ref (run a plain `git fetch origin` periodically if you want `git status`'s ahead/behind framing to stay accurate too).
- Split commits: code/asset change first, tracker file update second referencing the code commit — never batched.
- 96px/inch convention for any cm-to-px conversion the client specifies; document the conversion in the commit message each time.
- New asset files go to `public/assets/sections/` with a clear, page-prefixed filename (e.g. `reg-faqs-bg.jpg`) — check for the garbled-AI-text problem and fake-transparency-checkerboard problem on any new uploaded/AI-generated image before using it.
- Commit messages are long-form and explicit: what changed, why, what was tried and rejected, what was verified and how — they're the project's record of *why* a decision was made if it's ever questioned later.
- Fresh fine-grained GitHub PAT at the start of every thread (Contents read/write only, 1-day expiry, single repo) — never reuse a token that's appeared in a prior transcript.

## FIRST THING TO DO IN THE NEW THREAD

1. Clone the repo fresh with a new PAT, confirm `HEAD` is `b1ad9af`.
2. Read `pf_esi_registration_changes.txt` in full (941 lines as of this handover) if continuing that page, or the relevant page's own tracker if switching pages.
3. Ask the client which section/page they want to work on next — likely candidates on the current page: Section 1 (Hero) final sign-off, Section 5 (Process, untouched), or revisiting any of the sections worked this thread once the client has reviewed them live.
