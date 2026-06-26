import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Scope" section ("What We Manage") — fifth rebuild.
 *
 * Fourth attempt built true square cards on a proportional 60-column
 * grid (10 cols = 1 card-width), which produced ~179px squares — far
 * too small for the longest description (107 chars, "Statutory
 * Filings & Returns") once actually screenshotted: text clipped
 * mid-word, icon badges overlapped between rows. Estimated the real
 * minimum card height needed before guessing a bigger number: icon
 * (48px) + gaps + 2-line title + ~6 lines of 13px description +
 * padding ≈ 286px, so cards needed to roughly DOUBLE from the
 * previous size, not just bump up slightly.
 *
 * That surfaced a genuine geometric conflict: at ~290px cards, the
 * space strictly between Row 1's two cards (the container minus 2
 * card-widths) is only ~570px — barely enough for Row 2's own two
 * cards side by side, let alone the previously-agreed "2 card-widths"
 * gap between them. A literal nested-containment + exact-2x-gap
 * layout simply doesn't fit alongside cards large enough for this
 * text, within a normal container width. Flagged this rather than
 * silently shrinking the cards back down or silently breaking the
 * gap ratio; confirmed with the client that an approximate (not
 * exact) gap ratio is fine in exchange for properly-sized cards.
 *
 * Implementation: abandoned the proportional grid-column approach
 * (which only works when card size is a fixed fraction of container
 * width) in favour of fixed-pixel card sizing (290px square) with
 * each row built as its own independently flex-centred pair, gap
 * specified directly in pixels per row rather than derived from
 * card-width multiples:
 *   Row 1 gap: ~572px (container width minus 2 cards) — wide, also
 *     doubles as the heading's available space, naturally centred.
 *   Row 2 gap: 220px — a deliberately wide gap, no longer pinned to
 *     exactly 2x card-width, but still clearly the widest of the two
 *     narrowing rows.
 *   Row 3 gap: 50px — small, narrowest gap, cards close together.
 * All three rows are independently centred within the container
 * (not nested inside the row above's inner edges), which keeps the
 * narrowing-valley visual effect without requiring impossible nested
 * containment.
 *
 * Cards: still true squares (aspect-square), now at a size verified
 * by direct Playwright text-overflow check to actually fit the
 * longest content without clipping before treating this as done.
 *
 * Decoration: kept the abstract diagonal-line motif from the previous
 * round (replacing the earlier "not impressive" corner-ring/chevron
 * combination) plus the centre sparkle accent.
 */
const CARD_SIZE = "h-[290px] w-[290px]"; // fixed square, sized for the longest description (~107 chars) without clipping

export const FlexiScope = () => (
  <section
    id="svc-scope"
    data-testid="flexi-scope-section"
    className="relative overflow-hidden bg-ak-mist/40 py-10 md:py-14"
  >
    {/* Abstract line motif — long diagonal lines at varying angle/opacity, plus a faint ring cluster */}
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 1400" preserveAspectRatio="none" fill="none">
      <line x1="-100" y1="1200" x2="500" y2="300" stroke="#1C2A39" strokeOpacity="0.05" strokeWidth="2" />
      <line x1="-60" y1="1300" x2="560" y2="400" stroke="#1C2A39" strokeOpacity="0.07" strokeWidth="2" />
      <line x1="-20" y1="1400" x2="620" y2="500" stroke="#F28C28" strokeOpacity="0.1" strokeWidth="2" />
      <line x1="980" y1="1350" x2="1500" y2="700" stroke="#1C2A39" strokeOpacity="0.05" strokeWidth="2" />
      <line x1="1040" y1="1400" x2="1560" y2="800" stroke="#1C2A39" strokeOpacity="0.07" strokeWidth="2" />
      <circle cx="1300" cy="1200" r="70" stroke="#1C2A39" strokeOpacity="0.06" strokeWidth="10" />
      <circle cx="1340" cy="1260" r="40" stroke="#F28C28" strokeOpacity="0.12" strokeWidth="8" />
    </svg>

    {/* Centre sparkle — faint 4-point star */}
    <svg
      className="pointer-events-none absolute left-1/2 top-[55%] hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] lg:block"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 0 C52 30 70 48 100 50 C70 52 52 70 50 100 C48 70 30 52 0 50 C30 48 48 30 50 0 Z"
        fill="#1C2A39"
      />
    </svg>

    <Container className="relative">
      {/* Desktop: heading nested inside Row 1's own gap (between Card1/Card2), then Rows 2-3 below */}
      <div className="mt-16 hidden flex-col items-center gap-10 lg:mt-20 lg:flex">
        {/* Row 1 — Card1, heading block, Card2. Heading sits IN the gap, not above the row stack. */}
        <RevealGroup className="flex items-start justify-center gap-x-10" stagger={0.1}>
          <RevealItem>
            <div className={`${CARD_SIZE} flex flex-col rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(28,42,57,0.08)] transition-shadow hover:shadow-lg`}>
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ak-scopeNavy text-ak-scopeAmber">
                <Icon name={scope.cards[0].icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{scope.cards[0].title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{scope.cards[0].desc}</p>
            </div>
          </RevealItem>

          <RevealItem className="flex h-[290px] w-[340px] flex-shrink-0 flex-col items-center justify-center text-center">
            <div className="ak-kicker mb-5">{scope.kicker}</div>
            <h2 className="font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-ak-ink xl:text-3xl">{scope.heading}</h2>
            <p className="mx-auto mt-4 text-sm leading-relaxed text-ak-ink/60">{scope.sub}</p>
          </RevealItem>

          <RevealItem>
            <div className={`${CARD_SIZE} flex flex-col rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(28,42,57,0.08)] transition-shadow hover:shadow-lg`}>
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ak-scopeNavy text-ak-scopeAmber">
                <Icon name={scope.cards[5].icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{scope.cards[5].title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{scope.cards[5].desc}</p>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Rows 2-3 — gap narrowing (220px -> 50px), each independently centred */}
        {[
          [scope.cards[1], scope.cards[4], "gap-x-[220px]"], // Row 2 — Background Verification / Statutory Filings & Returns
          [scope.cards[2], scope.cards[3], "gap-x-[50px]"],  // Row 3 — Onboarding & Documentation / Monthly Payroll Processing
        ].map(([left, right, gapClass], rowIdx) => (
          <RevealGroup key={rowIdx} className={`flex items-start justify-center ${gapClass}`} stagger={0.1}>
            {[left, right].map((c) => (
              <RevealItem key={c.title}>
                <div className={`${CARD_SIZE} flex flex-col rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(28,42,57,0.08)] transition-shadow hover:shadow-lg`}>
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ak-scopeNavy text-ak-scopeAmber">
                    <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.85} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        ))}
      </div>

      {/* Mobile/tablet fallback: heading rendered separately above, plain stacked/2-col grid below */}
      <Reveal className="mx-auto max-w-2xl text-center lg:hidden">
        <div className="ak-kicker mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
      </Reveal>

      <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden" stagger={0.1}>
        {scope.cards.map((c) => (
          <RevealItem key={c.title}>
            <div className="h-full rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(28,42,57,0.08)]">
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

