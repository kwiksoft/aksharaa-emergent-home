# AKSHARAA PROJECT — HANDOVER NOTE FOR NEW THREAD (Thread 04)

Paste this whole note as your first message in the new thread.

---

## WHAT THIS THREAD WAS

This was **Thread 03**, a continuation of the PF & ESI Registration template page work (Registrations & Licensing category, 26 services). The page is the TEMPLATE for that whole category — patterns locked here propagate to the other 25 service pages once finalised.

**Repo:** `github.com/kwiksoft/aksharaa-emergent-home` (private, GitHub org `kwiksoft`)
**Active file:** `frontend/src/pages/PfEsiRegistration.jsx` and its 9 child section components under `frontend/src/components/services/pf-esi-registration/`

---

## GITHUB TOKEN — HOW THIS WORKS, READ THIS FIRST

Each new Claude thread gets a **completely fresh, empty sandbox** — no filesystem, no credentials, no memory of anything carried over from a previous thread except what's written down (like this note) or what's actually committed to GitHub itself. This means **every new thread needs a fresh GitHub Personal Access Token (PAT)** before Claude can clone, commit, or push anything.

**The established workflow (do this every time, every thread):**

1. Go to **github.com/settings/tokens** → **Fine-grained tokens** → **Generate new token**
2. Fill in:
   - **Token name:** something identifying this thread/window, e.g. `aksharaa-thread-04-25jun26` (date-stamped so there's no ambiguity about when it was made)
   - **Resource owner:** `kwiksoft` org
   - **Expiration:** Custom date, **1 day out** from today. This is a deliberate security choice — even if a token leaks via a chat transcript, the damage window is capped automatically.
   - **Repository access:** "Only select repositories" → `kwiksoft/aksharaa-emergent-home`
   - **Permissions:** Contents → **Read and write**; Metadata → Read-only (this one is mandatory/auto-selected)
3. Click **Generate token**, copy it immediately (GitHub only shows it once)
4. Paste it to Claude in the new thread. Claude will run something like:
   ```
   git clone https://<token-name>:<token>@github.com/kwiksoft/aksharaa-emergent-home.git
   ```
   or `git remote set-url origin ...` if the repo's already cloned in that sandbox.
5. **At the end of the session (or if the thread runs long enough that the token might be close to expiring), revoke the token manually on GitHub** — don't wait for the 1-day auto-expiry. Go back to Settings → Developer settings → Personal access tokens → Fine-grained tokens, find it, click Delete.

**Why this matters / the actual risk:** Anything typed into a Claude.ai chat is stored in that conversation's history. A PAT pasted into chat should be treated as potentially exposed the moment it's sent, regardless of how careful anyone is — that's just the nature of the channel, not a flaw in this specific setup. The mitigations that make this an acceptable working pattern are: (a) the token is scoped to **one single repo**, nothing org-wide; (b) it can **only read/write repo contents**, no admin/delete/settings access; (c) it expires within **1 day** even if nobody remembers to revoke it manually. None of these alone would be enough — together they cap the blast radius tightly enough that this is a reasonable tradeoff for the speed it buys.

**A real incident from earlier in this session, for reference:** at one point a token was generated with a *30-day* expiry (the very first one, before this 1-day discipline was adopted) and pasted into chat. We caught it, the user revoked it immediately and regenerated with a 1-day expiry going forward, and that's been the standard ever since. Separately, **a previous token expired mid-session** (push failed with "Authentication failed" / "Password authentication is not supported") — this is normal and expected given the 1-day policy; the fix is just: generate a new one, update the git remote URL with it, and retry the push. No work was lost when this happened — the commit was already made locally, it just couldn't push until the new token was in place.

**One Windows-specific gotcha encountered this session (unrelated to tokens, but worth knowing):** after a `git pull` on the user's Windows machine, git's pack-file cleanup step sometimes fails with `Unlink of file '...idx' failed. Should I try again? (y/n)`. This is caused by another process (most likely OneDrive's "Backup your Desktop" sync feature, since the repo lives under `Desktop\...`, or possibly Windows Defender's real-time scanner) holding a lock on the file at that exact moment. Fix: press `y` a couple of times (often resolves on retry), or if it keeps failing, close all terminals/editors, pause OneDrive sync, and retry — a full system restart also clears it reliably (confirmed working this session). The actual pull/fast-forward always completes successfully *before* this error appears — it's purely a post-pull cleanup step failing, not data loss.

---

## WHAT GOT DONE THIS SESSION (Thread 03) — IN ORDER

### 1. Hero section — Registration Scope tracker rebuild
The tracker card (5-step done/active/pending checklist) was rebuilt from a flat dotted-row layout into a **circular icon-avatar + dashed-connector** style, matching a reference image:
- Circular icon avatars with a genuine **double-ring effect** (icon circle → white ring layer → soft tinted halo) — this 3-layer pattern came up again later for the Process section's icons, so it's now an established pattern on this page.
- Removed a strikethrough on "done" step titles (was visually confusing, removed per direct feedback) — replaced with a short orange underline accent under each title instead.
- Fixed the dashed connector line to run continuously behind every circle (not just between them).
- Tightened the card's internal padding (it read as too tall/spacious initially).

**Files touched:** `RegSvcHero.jsx`, `svc-pf-esi-registration.js` (added `icon` key per tracker step).

### 2. Page-wide spacing reduction
All 9 sections' outer `py-*`/`pt-*`/`pb-*` values were reduced proportionally (roughly one Tailwind step down each) per explicit instruction to tighten the whole page's vertical rhythm. This touched every section file. Internal layouts were untouched — only the breathing room above/below each section changed.

### 3. Process section — the big one, full structural rebuild (went through ~10 commits)
This took by far the most iteration. Final state: a **true radial/circular layout** — 6 step-cards arranged around a center "Aksharaa" hub at measured angles/distances (not a left-right grid, which was tried first and was the wrong layout family entirely).

**Key lessons baked into the final version, useful if more changes are needed here:**
- All positioning is computed from explicit pixel-measured constants (`CARD_W`, `CARD_H`, `OFFSETS` per card as `{x, y}` from the hub center, `HUB_SIZE`, `RING_SIZE`) — derived by pixel-scanning the reference images directly (Python/PIL `getpixel()` edge-scans) rather than eyeballing proportions. When the layout didn't match, the fix was almost always re-measuring the reference more precisely, not guessing new numbers.
- Card height **must be a fixed value, not `minHeight`** — letting cards grow to fit content (when one title wraps to 2 lines and another doesn't) breaks the radial symmetry the hub-centering math depends on, since the "visual center" of an asymmetric card-block doesn't match the "mathematical center" of the coordinate system. This actually caused a real, hard-to-diagnose "hub looks off-center" bug that took a few rounds to root-cause.
- Each card's spoke (the dashed line from hub to card) end-point is computed via **exact ray-rectangle intersection** based on that card's specific angle — an earlier flat approximation (`min(CARD_W,CARD_H)/2.6`) made some spokes visibly fall short of their card while others touched correctly, because a rectangle's true edge distance varies by angle and a flat fraction doesn't capture that.
- The hub itself is a 3-layer construction: outer dotted ring (`RING_SIZE`) → 4 arrowhead markers sitting exactly on the ring's cardinal points (pointing outward) → inner white circle with the logo. A real bug here: the inner circle was centered via Tailwind's `left-1/2 + -translate-x/y-1/2` trick, but it's also a `motion.div` with an animated `scale` — Framer Motion's animated transform and Tailwind's static transform both write to the CSS `transform` property and conflicted, causing visible drift once the animation kicked in. Fixed by computing the centered position via explicit `left`/`top` pixel math instead of any transform-based centering on elements that also animate `scale`/`rotate` via Framer Motion. **This is a general pattern worth remembering for any future animated, precisely-positioned element on this page.**
- Background is a provided pre-composed image asset (`public/assets/sections/process-bg.png`), not a CSS-generated pattern.
- Description text must NOT be `line-clamp`'d — this was tried as a fix for the height-symmetry bug and visibly truncated every card's text, which is worse than the bug it was meant to fix. The real fix was sizing `CARD_H` tall enough for the longest real description (155 chars) to fit without clamping.

**User's last message on this section:** "see the difference you have done. good — We may need little changes but will think about it later." So **Process is in a good, accepted state**, but the user has unspecified minor tweaks they want to revisit later — nothing concrete was named, so don't assume what they are; ask when it comes up again.

### 4. Penalties section — multiple refinement rounds
Originally rebuilt (in a *previous* thread, before this one started) to the side-by-side PF/ESI card layout. This session did three more precision passes:
- Sampled the reference image's actual orange (`#FE6F06`→ rounded to `#FF6B05`, saved as new Tailwind token `ak-orange2`) and blue (`#082C6F` → rounded to `#0C2F73`, saved as `ak-blue2`) directly via pixel sampling, rather than reusing the page's existing `ak-orange`/`ak-navy` tokens, since the reference's colours were genuinely different (more saturated orange, true navy-blue vs the page's darker charcoal-navy). **Both kept as separate tokens, not overwrites** — `ak-orange`/`ak-navy` are still used elsewhere on already-confirmed sections and weren't touched.
- Fixed the photo's aspect ratio (measured the reference precisely: ~1.6:1 / 8:5, not the initially-assumed 4:3) and its height-matching behaviour against the left text column.
- "Not" in the "Consequences of **Not** Registering" heading highlighted in the new `ak-orange2`.
- Most recent round (last commit before this handover): kicker icon now sits in its own small badge (was previously just inline), photo rounded only on the left side (sharp edge on the right, not all 4 corners), and the decorative circle outline + floating shield badge repositioned to sit in the gap *between* the text column and the photo (was previously overlapping the photo's corner).

**Known open item:** the large decorative circle outline's exact size/position (`h-44 w-44` at `-left-16`) was estimated, not pixel-measured against the latest reference — flagged to the user as something to double check once live.

### 5. Final CTA section — full rebuild
Was a flat dark-navy band; rebuilt to match a reference showing a rich orange background with a building photo and dotted texture. Two iterations:
1. First built the background as layered CSS (gradient + low-opacity photo div + dotted-pattern div).
2. User then provided the **actual pre-composed background asset** (`cta_bag_01.png` → saved as `public/assets/sections/cta-bg.png`) which has everything baked in already — replaced the layered approach with this single image via `background-image` + `cover`. Much simpler and now pixel-accurate since it's the literal source art.

Also: button is now white-background/orange-text (the inverse of the shared `AkButton` component's "primary" variant, which is orange-bg/white-text) — built as a one-off custom button directly in this component rather than retrofitting `AkButton` and risking changing its appearance elsewhere on the site. Phone link upgraded to a circular icon badge + bold number, with a vertical divider before it.

### 6. Footer — full visual rebuild, SITE-WIDE
**Important: `Footer.jsx` is a shared layout component, used on every page, not just this one.** This change affects the whole site, not just PF & ESI Registration.

Rebuilt per a reference image + a provided background asset (`footer_bg.png` → `public/assets/sections/footer-bg.png`):
- Split-coloured top tagline (white + orange clauses), flanked by short gradient lines ending in solid dots.
- Brand lockup: circular icon-only badge + real text "AKSHARAA / CORPORATE SERVICES" instead of the previous plain horizontal logo image. **No standalone icon-only logo asset existed** — one was cropped out of the existing combined logo+wordmark PNG using Python/PIL (isolated via the alpha-channel bounding box of just the top icon-mark region), saved as `public/assets/aksharaa-icon.png`. Visually inspected before use to confirm no wordmark leakage in the crop.
- Orange square icon badges on contact rows (was bare icons), orange-ringed social icons (was white-ringed), orange underline accents under column headings (was full-width grey dividers), orange arrow icons added next to every footer link (didn't exist before), and a glowing circular icon badge centered on the bottom divider line.

**Explicitly NOT changed, on purpose, flagged to the user as a separate follow-up:**
- The footer's category links still point to homepage anchor IDs (`#architecture`, `#framework`, etc.) instead of real sitemap URLs like `/labour-law-compliance`. This was identified as broken/stale during this session but intentionally left alone since the user's request was specifically about the *visual* rebuild — conflating a content/routing fix with a visual change in the same pass was avoided on purpose.
- Phone and email are confirmed-intentional **placeholders** per the original project spec (found via conversation_search on an earlier thread) — `company.email` is currently `info@aksharaa.com`, a stated placeholder. The spec explicitly says these go into an admin-editable `site_settings` table later, pending Aksharaa providing real business details. Don't "fix" these by guessing a real email — they're meant to stay placeholder until the client provides real info.

---

## CURRENT STATE OF THE PF & ESI REGISTRATION PAGE, SECTION BY SECTION

| # | Section | testid | Status this session |
|---|---------|--------|----------------------|
| 1 | Hero | `reg-svc-hero-section` | Tracker rebuilt (circular avatars, double-ring icons), confirmed good by user in an earlier thread for the photo/headline row; tracker itself went through several rounds this session and the latest version hasn't had explicit final confirmation — last action was a spacing/connector-alignment fix, not yet re-confirmed after that |
| 2 | Overview | `reg-svc-overview-section` | **Not touched this session.** No visual feedback round yet, ever. |
| 3 | Applicability | `reg-svc-applicability-section` | Confirmed good in an earlier thread (orange/blue colour-coded cards, calendar illustration). Not touched this session except the page-wide spacing reduction. |
| 4 | Documents | `reg-svc-documents-section` | **Not touched this session.** No visual feedback round yet, ever. |
| 5 | Process | `reg-svc-process-section` | Fully rebuilt as radial layout, **user said "good" with minor unspecified tweaks to revisit later** |
| 6 | Penalties | `reg-svc-penalties-section` | Multiple refinement rounds this session, last action was kicker-badge/photo-rounding/decorative-repositioning fix — **not yet re-confirmed by user after that latest push** |
| 7 | FAQs | `reg-svc-faqs-section` | **Not touched this session.** No visual feedback round yet, ever. |
| 8 | Related Services | `reg-svc-related-section` | **Not touched this session.** No visual feedback round yet, ever. |
| 9 | Final CTA | `reg-svc-cta-section` | Fully rebuilt with the provided background asset — **not yet confirmed by user after the asset swap** (the swap happened right as a git-pull/Windows lock issue interrupted the flow; conversation moved to the footer before circling back to confirm) |

**The section reference file `pf_esi_registration_changes.txt` at the repo root is now significantly stale** — it still describes Process as a "dark navy vertical timeline" and Penalties/CTA with their pre-rebuild descriptions. It was already flagged as unreliable in the previous thread's handover, and remains so. **Recommend either updating it now in the new thread, or continuing to treat it as historical/inaccurate and not relying on it for section status.**

---

## TAILWIND TOKENS ADDED THIS SESSION (in `frontend/tailwind.config.js`)

- `ak.orange2` = `#FF6B05` — sampled from the Penalties/Process reference images' actual orange. More saturated/red than the original `ak.orange` (`#F28C28`). Used in: Penalties (PF card theme, "Not" highlight, kicker), Process (kept original `ak.orange` here actually — confirmed via direct pixel sampling that Process's reference uses the original `#F28C28`, not `orange2` — **don't assume orange2 is used everywhere now, check per-section**).
- `ak.blue2` = `#0C2F73` — sampled from Penalties' ESI card reference. A genuine navy-blue, distinct from the existing `ak.navy` (`#111C27`, much darker/charcoal). Used only in Penalties' ESI card theme so far.

Both are intentionally kept separate from the original `ak.orange`/`ak.navy` rather than overwriting them, since those originals are still in active use on sections already confirmed by the client (Hero, Applicability, Process). A global swap was considered and explicitly avoided to prevent silently changing colours the client hasn't asked to revisit.

---

## NEW IMAGE ASSETS ADDED THIS SESSION

All under `frontend/public/assets/`:
- `aksharaa-icon.png` — icon-only crop of the existing combined logo (used in Footer)
- `sections/process-bg.png` — Process section background
- `sections/cta-bg.png` — Final CTA section background
- `sections/footer-bg.png` — Footer background

All confirmed present in `frontend/build/assets/...` after building, each time, before committing.

---

## TECHNICAL PATTERNS / GOTCHAS ESTABLISHED THIS SESSION (in addition to what's in the original project memory)

- **No yarn binary in this sandbox** — only `npm` and `node` are available, despite the project being yarn-managed (`yarn.lock` present, no `package-lock.json` tracked). Workflow: `npm install --legacy-peer-deps --no-audit --no-fund`, then discard any changes to `yarn.lock` and delete any stray `package-lock.json` before committing (`git checkout -- frontend/yarn.lock && rm -f frontend/package-lock.json`) so the commit only contains intended source changes.
- A pre-existing `ajv`/`ajv-keywords` version mismatch causes `craco build` to fail right after a fresh `npm install` (npm hoists an incompatible `ajv@6` where `ajv-keywords@5` needs `ajv@^8`). Fix: `npm install ajv@^8.17.1 --no-save --legacy-peer-deps --no-audit --no-fund` immediately after the main install, before building. This is a toolchain artifact, not a code bug — yarn's resolution wouldn't hit this.
- **Never use dynamic Tailwind class construction** (e.g. `` `bg-${variable}` ``) — Tailwind's JIT scanner only matches literal class-name strings in source and will silently purge anything built dynamically at runtime. This bit us once this session (Penalties' orange/navy theme switch) and was caught before shipping by reverting to explicit conditional literal strings (`isOrange ? "bg-ak-orange2" : "bg-ak-blue2"`). The project's `tailwind.config.js` already has a comment documenting an earlier, separate incident of this same bug class — this is a recurring risk on this project specifically.
- **Tailwind's spacing scale has a gap at 5.5** — `h-5.5`/`w-5.5` don't exist (jumps from `5` to `6` with no `.5` step there), and using them silently renders an unsized element rather than erroring. Caught once this session; fixed with arbitrary-value bracket syntax (`h-[22px]`) instead.
- **`git config user.name`/`user.email` need to be set in every fresh sandbox** before the first commit — this isn't carried over between threads. Use `Claude <claude@kwiksoft.in>` to match the existing commit history's author identity.
- Before every commit this session: `CI=true npx craco build` run and confirmed "Compiled successfully" — this discipline held throughout and should continue.
- When a numeric/geometric claim seems off (a gap, a position, a size), the reliable fix has consistently been to **pixel-measure the actual reference image directly** (Python + PIL, `img.getpixel((x,y))` edge-scans to find boundaries, then compute ratios/centers/angles from real numbers) rather than adjust constants by feel. This pattern resolved several multi-round back-and-forths faster than guessing would have, especially for the Process section's radial geometry.

---

## WORKING STYLE NOTES (how this user gives feedback, reconfirmed this session)

- Feedback often comes as cropped/zoomed screenshots of one specific element (e.g. just the hub, just one card's icon) rather than full-page screenshots — these tight crops were consistently the fastest path to a correct fix, much faster than full-page comparisons. When feedback feels vague or keeps not converging, the move that worked was asking for (or proactively doing) a closer, more specific comparison rather than another full-page guess.
- The user will sometimes send the *same* reference image again rather than a new one, when a previous fix didn't fully land — this means "look again, more carefully," not "I have a new ask." Worth checking actual rendered output against the reference very literally (even re-deriving pixel measurements) rather than assuming the previous fix was sufficient.
- Direct, sometimes terse correction language ("you say what is missing," "compare and you will know," "exact not relativeness") — this reflects genuine frustration when rounds don't converge, not a request to change tone. The effective response has been: acknowledge the gap honestly, find the *specific* root cause (not just nudge numbers again), explain what was actually wrong in plain terms, and fix it precisely.
- The user is fine pausing mid-thread on unfinished items ("we may need little changes but will think about it later") — don't chase closure on every loose end before moving on if the user signals they're moving on.

---

## FIRST THING TO DO IN THE NEW THREAD

1. Get a fresh GitHub PAT from the user (see token section above) and clone/configure the repo.
2. Ask the user directly: are we continuing work on the **PF & ESI Registration** page (e.g. confirming the Final CTA background swap, Penalties' latest tweaks, or finally giving Sections 2/4/7/8 their first visual pass), or moving to a **different page/workstream** entirely (the user's last message in the previous thread was "we goto next page," suggesting the latter)?
3. If moving to a new page: confirm which one, and whether this should be a brand-new thread per the project's thread-per-workstream discipline (it should be, per established practice) — this note should be the first message in that new thread.
