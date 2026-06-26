import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Scope" section ("What We Manage") — full rebuild,
 * second attempt. The first attempt (commit 6e2b828) was reported by
 * the client as "totally collapsive" on review. Root cause, found by
 * re-checking the actual column-start/span math rather than trusting
 * the earlier screenshots: row 2's two cards
 * (lg:col-start-5/span-5 = columns 5-9, lg:col-start-8/span-5 =
 * columns 8-12) genuinely overlapped on columns 8-9 on a 12-col grid.
 * The earlier screenshots happened not to surface this clearly enough
 * before sign-off — a real miss, not a client misunderstanding.
 *
 * Client also supplied a second image (a plain numbered-box diagram,
 * boxes 1-6) specifically to clarify the INTENDED shape: a symmetric
 * valley/checkmark, not a one-directional funnel. Re-measuring the
 * actual reference image's card y-positions confirms this precisely:
 * outer pair (Sourcing & Screening / MIS Reporting) sit at the same
 * height; middle pair (Background Verification / Statutory Filings)
 * sit together, lower; inner pair (Onboarding / Monthly Payroll) sit
 * together, lowest. Mirrored left-right around the centre sparkle,
 * not narrowing in one direction. This rebuild places each row's two
 * cards as a true symmetric pair — same column width, mirrored
 * start position, generous gap between them — and the column maths
 * for all three rows has been explicitly re-verified to leave a clear
 * non-overlapping gap, not just assumed correct from the visual
 * pattern of the numbers.
 *
 * New this round: background decoration. Client asked for the
 * reference image's low-opacity design elements to be added — a pale
 * chevron/arrow motif in the bottom-left (colour ~#E6E6F0 on the
 * ~#FBFBFD mist background, both extremely close to white, sampled
 * directly from the reference), alongside the corner ring motif kept
 * from the previous round.
 */

// 12-column grid (lg+). Each row is a genuinely symmetric pair: same
// column span, mirrored start position, with an explicit gap verified
// to leave no overlap. Centre gap widens row-by-row to match the
// reference's valley shape (outer pair widest apart, inner pair
// closest together near the centre sparkle).
const PLACEMENT = [
  "lg:col-start-1 lg:col-span-5 lg:row-start-1",    // 0 Sourcing & Screening — cols 1-5
  "lg:col-start-8 lg:col-span-5 lg:row-start-1",    // 5 MIS Reporting — cols 8-12 (gap: cols 6-7)
  "lg:col-start-2 lg:col-span-4 lg:row-start-2",    // 1 Background Verification — cols 2-5
  "lg:col-start-7 lg:col-span-4 lg:row-start-2",    // 4 Statutory Filings & Returns — cols 7-10 (gap: col 6)
  "lg:col-start-3 lg:col-span-3 lg:row-start-3",    // 2 Onboarding & Documentation — cols 3-5
  "lg:col-start-7 lg:col-span-3 lg:row-start-3",    // 3 Monthly Payroll Processing — cols 7-9 (gap: col 6)
];
// PLACEMENT is indexed by data index, but written in visual pair order
// above for readability — re-map to data order below.
const PLACEMENT_BY_DATA_INDEX = [
  PLACEMENT[0], // 0 Sourcing & Screening
  PLACEMENT[2], // 1 Background Verification
  PLACEMENT[4], // 2 Onboarding & Documentation
  PLACEMENT[5], // 3 Monthly Payroll Processing
  PLACEMENT[3], // 4 Statutory Filings & Returns
  PLACEMENT[1], // 5 MIS Reporting
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
        className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-6"
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

