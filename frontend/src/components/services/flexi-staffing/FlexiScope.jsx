import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Scope" section ("What We Manage") — rebuilt per client
 * reference image (Section 5, first review round). Content fields
 * (heading/sub/6 cards) were already an exact match for the reference —
 * no data changes, visual rebuild only.
 *
 * Visual departures from the original:
 * - Funnel/diamond layout: 3 pairs of cards on a single flat 12-column
 *   grid (lg+), each pair given an explicit col-start/col-span/row-start
 *   placement so it narrows and drops down relative to the pair above,
 *   converging toward the centre sparkle — matches the reference's
 *   staggered card arrangement exactly. This needed explicit per-card
 *   grid placement rather than row-wrapper nesting; an earlier attempt
 *   using `display: contents` wrapper divs per row collapsed all 6
 *   cards into a single flat sequence instead of true row pairs once
 *   actually screenshotted, so it was discarded for direct placement.
 *   Collapses to a clean 2-col / 1-col grid below lg, since the
 *   converging-funnel effect has no room to read correctly on a
 *   narrow viewport.
 * - Icon badges switched from ak-ink/ak-orange to two new reference-
 *   sampled tokens: ak-scopeNavy (badge fill) + ak-scopeAmber (icon
 *   stroke) — see tailwind.config.js for PIL sampling provenance.
 * - Centre decorative element: a faint 4-point sparkle/star shape,
 *   sampled from the reference at near-background contrast (~5%
 *   opacity equivalent) — kept deliberately subtle, not a focal object.
 * - Bottom-right corner: soft overlapping ring/circle motif reusing the
 *   same pastel orbit-ring style already established elsewhere on the
 *   page's decorative corners.
 * - Icon size bug fixed: was h-4.5/w-4.5 (non-existent Tailwind class,
 *   same recurring gotcha flagged elsewhere in this codebase) -> h-5/w-5.
 */

/**
 * Per-card placement on a single flat 12-column grid (lg+ only). Each pair
 * narrows and drops down relative to the last, producing the reference's
 * funnel/diamond shape converging toward the centre sparkle. Card-to-row
 * mapping matches the reference image exactly: row 2 is Background
 * Verification + Statutory Filings (data indices 1, 4 — NOT 2,3 as a
 * naive sequential read would suggest), row 3 is Onboarding + Monthly
 * Payroll (indices 2, 3). Column spans widened from an earlier pass that
 * clipped card copy ("ESI card issuance...", "Statutory Filings & Re...")
 * once actually screenshotted at this breakpoint.
 */
const PLACEMENT = [
  "lg:col-start-1 lg:col-span-5 lg:row-start-1",   // 0 Sourcing & Screening — outer left
  "lg:col-start-5 lg:col-span-5 lg:row-start-2",   // 1 Background Verification — mid-left inset
  "lg:col-start-4 lg:col-span-4 lg:row-start-3",   // 2 Onboarding & Documentation — inner left
  "lg:col-start-8 lg:col-span-4 lg:row-start-3",   // 3 Monthly Payroll Processing — inner right
  "lg:col-start-8 lg:col-span-5 lg:row-start-2",   // 4 Statutory Filings & Returns — mid-right inset
  "lg:col-start-8 lg:col-span-5 lg:row-start-1",   // 5 MIS Reporting — outer right
];
const ROW_HEIGHTS = "lg:grid-rows-[auto_auto_auto]";

export const FlexiScope = () => (
  <section
    id="svc-scope"
    data-testid="flexi-scope-section"
    className="relative overflow-hidden bg-ak-mist/40 py-20 md:py-28"
  >
    {/* Centre sparkle — faint 4-point star, near-background contrast per reference */}
    <svg
      className="pointer-events-none absolute left-1/2 top-[60%] hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] lg:block"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 0 C52 30 70 48 100 50 C70 52 52 70 50 100 C48 70 30 52 0 50 C30 48 48 30 50 0 Z"
        fill="#1C2A39"
      />
    </svg>

    {/* Bottom-right decorative rings, matching the site's established orbit motif */}
    <svg
      className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 opacity-50"
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx="60" cy="60" r="34" stroke="#D9DCE3" strokeWidth="14" />
      <circle cx="92" cy="78" r="26" fill="#FBE3D4" />
      <circle cx="150" cy="150" r="70" stroke="#C9D6F2" strokeWidth="16" />
      <circle cx="150" cy="150" r="40" stroke="#F6CDAE" strokeWidth="14" />
    </svg>

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
      </Reveal>

      <RevealGroup
        className={`relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-6 ${ROW_HEIGHTS}`}
        stagger={0.1}
      >
        {scope.cards.map((c, i) => (
          <RevealItem key={c.title} className={PLACEMENT[i]}>
            <div className="h-full rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(28,42,57,0.08)] transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ak-scopeNavy text-ak-scopeAmber">
                <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);

