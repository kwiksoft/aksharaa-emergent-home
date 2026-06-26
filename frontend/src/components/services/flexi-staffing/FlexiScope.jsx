import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Scope" section ("What We Manage") — third rebuild.
 *
 * The second attempt (commit c6a4d8f) fixed the column-overlap bug but
 * introduced a different real problem, caught by the client comparing
 * screenshots side by side: cards were NOT equal width. That version
 * used a DIFFERENT col-span per row (row 1: span-5, row 2: span-4, row
 * 3: span-3 on a 12-col grid) to create the narrowing effect — which
 * narrows the row's footprint by shrinking the cards themselves, not by
 * moving equal-sized cards closer together. The reference image's
 * cards are genuinely the same size throughout; only their horizontal
 * position shifts row to row.
 *
 * This rebuild uses a 24-column grid with a SINGLE fixed span (9
 * columns) for every one of the 6 cards — equal width is now
 * structural/guaranteed, not something to eyeball from a screenshot.
 * Only the col-start shifts per row, narrowing the gap between each
 * row's pair while both cards keep the exact same width:
 *   row 1: cols 1-9 and 16-24  -> gap 6 columns (widest, outer pair)
 *   row 2: cols 2-10 and 15-23 -> gap 4 columns
 *   row 3: cols 3-11 and 14-22 -> gap 2 columns (narrowest, inner pair)
 * Verified by direct arithmetic before building (not just visual
 * inspection) that every row's gap is positive and every card's span
 * is identical — see the shift constant below.
 *
 * Heading centring: because each row's pair is symmetric around the
 * grid's own centre (24 columns, so centre falls at column 12.5 for
 * every row), centring the heading block to the full container width
 * places it centred in row 1's gap automatically — no separate
 * positioning needed for that to line up correctly.
 */
/**
 * IMPORTANT: every class below is written as a literal string, not built
 * via template interpolation. Tailwind's JIT compiler statically scans
 * source files for class names it can see directly — it cannot execute
 * `` `lg:col-start-${start}` `` to discover which classes a runtime
 * variable will produce, so a dynamically-built version of this array
 * would silently generate no CSS at all for any of these positions.
 * Caught before shipping by checking the project's tailwind.config.js
 * content-scanning setup (plain JIT, no safelist) rather than assuming
 * string interpolation would work.
 *
 * Second thing caught the same way (verified against the actual
 * compiled CSS output, not assumed): col-start-14/15/16 don't exist
 * even as literal strings, because Tailwind's default scale for
 * col-start only goes up to 13. Those three are written using
 * arbitrary-value bracket shorthand instead (`col-[14/23]` = CSS
 * `grid-column:14/23`, equivalent to col-start-14 + col-span-9), which
 * the JIT generates for any value. Confirmed present in the built CSS
 * by direct substring search before trusting it.
 */
const PLACEMENT_BY_DATA_INDEX = [
  "lg:col-start-1 lg:col-span-9 lg:row-start-1",       // 0 Sourcing & Screening — row 1 left, cols 1-9
  "lg:col-start-2 lg:col-span-9 lg:row-start-2",       // 1 Background Verification — row 2 left, cols 2-10
  "lg:col-start-3 lg:col-span-9 lg:row-start-3",       // 2 Onboarding & Documentation — row 3 left, cols 3-11
  "lg:col-[14/23] lg:row-start-3",                     // 3 Monthly Payroll Processing — row 3 right, cols 14-22
  "lg:col-[15/24] lg:row-start-2",                     // 4 Statutory Filings & Returns — row 2 right, cols 15-23
  "lg:col-[16/25] lg:row-start-1",                     // 5 MIS Reporting — row 1 right, cols 16-24
];

export const FlexiScope = () => (
  <section
    id="svc-scope"
    data-testid="flexi-scope-section"
    className="relative overflow-hidden bg-ak-mist/40 py-20 md:py-28"
  >
    {/* Bottom-left chevron/arrow decoration, sampled from the reference at near-white opacity */}
    <svg
      className="pointer-events-none absolute bottom-0 left-0 h-48 w-96 opacity-60"
      viewBox="0 0 400 200"
      fill="none"
    >
      <path d="M0 40 L70 90 L0 140" stroke="#E6E6F0" strokeWidth="10" />
      <path d="M90 60 L180 110 L90 180" stroke="#E6E6F0" strokeWidth="10" />
      <path d="M200 90 L290 130 L210 200" stroke="#E6E6F0" strokeWidth="10" />
    </svg>

    {/* Centre sparkle — faint 4-point star */}
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

    {/* Bottom-right decorative rings */}
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
        className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:gap-x-5 lg:gap-y-6"
        stagger={0.1}
      >
        {scope.cards.map((c, i) => (
          <RevealItem key={c.title} className={PLACEMENT_BY_DATA_INDEX[i]}>
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

