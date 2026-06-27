import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { calendar } from "../../../data/svc-pf-esi-returns-filing";

/**
 * "Your Monthly Compliance Calendar" — full rebuild per client reference
 * image. Previous version was month-tiles only, no intro illustration;
 * reference shows a two-column top section (kicker/heading/sub on the
 * left, a 3D-style desk-calendar illustration on the right) ABOVE the
 * month-tile row, plus several details the old tiles didn't have:
 * a right-pointing arrow connector between the active "Every Month" tile
 * and April, a line-dot-line divider under every month label, and a faint
 * ghost calendar-icon watermark in the bottom-right corner of each
 * inactive tile.
 *
 * Desk-calendar illustration: built as a custom inline SVG rather than a
 * raster asset, since nothing in the reference requires a photographic
 * texture — flat shapes (card body, orange side-edge for the 3D tilt,
 * two binder rings, badge, text, note pill) reproduce the reference
 * closely while staying crisp at any size and matching the rest of the
 * site's icon/line-art language.
 *
 * Colours: ak.returnsCalendarBadge (#F57418) sampled via PIL from the
 * "Every Month" tile's icon badge fill — see tailwind.config.js for
 * provenance. Inactive-tile badge colour reuses ak.ink (#1C2A39): the
 * reference's navy badge sampled to #1D293D, a 1-4 unit difference per
 * channel from ak.ink already in the palette — within anti-aliasing
 * noise, so reused rather than adding a near-duplicate token.
 */

const DeskCalendarIllustration = () => (
  <div className="relative mx-auto w-full max-w-md">
    <svg viewBox="0 0 420 380" className="w-full" fill="none">
      {/* Soft ambient glow behind the card */}
      <circle cx="260" cy="180" r="170" fill="#FDEDE0" opacity="0.6" />

      {/* Orange base/stand, gives the "easel" foot of a desk calendar */}
      <path d="M150 330 L290 330 L300 360 L140 360 Z" fill="#F28C28" />

      {/* Card's orange side edge (right + bottom), reads as 3D thickness */}
      <path d="M70 60 L330 50 L340 320 L80 332 Z" fill="#E8791C" />

      {/* Card front face (white) */}
      <rect x="60" y="48" width="262" height="270" rx="14" fill="#FFFFFF" stroke="#F1E4D8" strokeWidth="1.5" />

      {/* Binder rings — chunky metal spiral-style loops */}
      {[110, 165, 220, 275].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="42" rx="11" ry="16" fill="none" stroke="#AEB6C2" strokeWidth="5" />
          <rect x={x - 11} y="42" width="22" height="22" fill="#FFFFFF" />
        </g>
      ))}

      {/* Icon badge circle */}
      <circle cx="118" cy="148" r="34" fill="#FCEEE3" />
      <circle cx="118" cy="148" r="34" fill="none" stroke="#F28C28" strokeWidth="1.5" opacity="0.4" />
      <g transform="translate(102,132)">
        <rect x="0" y="4" width="32" height="28" rx="5" fill="none" stroke="#F28C28" strokeWidth="2.4" />
        <line x1="0" y1="13" x2="32" y2="13" stroke="#F28C28" strokeWidth="2.4" />
        <line x1="9" y1="0" x2="9" y2="8" stroke="#F28C28" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="23" y1="0" x2="23" y2="8" stroke="#F28C28" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10 22 L14 26 L22 17" stroke="#F28C28" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Headline text on the card face */}
      <text x="168" y="142" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="19" fill="#1C2A39">Stay Compliant.</text>
      <text x="168" y="168" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="19" fill="#F28C28">Stay Ahead.</text>
      <line x1="168" y1="180" x2="210" y2="180" stroke="#F28C28" strokeWidth="2.5" strokeLinecap="round" />

      {/* Note pill near the bottom of the card */}
      <rect x="88" y="222" width="210" height="58" rx="12" fill="#FCFAF7" stroke="#F1E4D8" strokeWidth="1" />
      <circle cx="115" cy="251" r="14" fill="#FCEEE3" />
      <path d="M115 244 l7 3 v6 c0 5 -3 8 -7 10 c-4 -2 -7 -5 -7 -10 v-6 z" fill="none" stroke="#F28C28" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M111.5 251 l2.3 2.3 l4.7 -5" fill="none" stroke="#F28C28" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="138" y="247" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11.5" fill="#1C2A39">Aksharaa ensures every</text>
      <text x="138" y="262" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11.5" fill="#1C2A39">deadline is met, every time.</text>
    </svg>
  </div>
);

export const ReturnsCalendar = () => (
  <section id="svc-calendar" data-testid="returns-calendar-section" className="bg-white py-24 md:py-32">
    <Container>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <div className="ak-kicker mb-5">{calendar.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-4xl lg:text-[2.5rem]">{calendar.heading}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ak-ink/60">{calendar.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <DeskCalendarIllustration />
        </Reveal>
      </div>

      <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {calendar.months.map((m, i) => (
          <div key={m.name} className="relative">
            <RevealItem
              className={`relative h-full overflow-hidden rounded-2xl p-6 ${
                m.active ? "border-2 border-ak-orange/70 bg-ak-orange/[0.06]" : "border border-ak-ink/[0.08] bg-white"
              }`}
            >
              {/* Faint ghost calendar watermark, bottom-right corner */}
              <Icon
                name="calendarPlain"
                className={`pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 ${m.active ? "text-ak-orange/[0.07]" : "text-ak-ink/[0.05]"}`}
                strokeWidth={1.5}
              />

              <div className="relative flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: m.active ? "#F57418" : "#1C2A39" }}
                >
                  <Icon name="calendarPlain" className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <div className={`mt-3 font-display text-sm font-extrabold uppercase tracking-wide ${m.active ? "text-ak-orange" : "text-ak-ink"}`}>
                  {m.name}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className={`h-px w-6 ${m.active ? "bg-ak-orange/40" : "bg-ak-ink/20"}`} />
                  <span className={`h-1 w-1 rounded-full ${m.active ? "bg-ak-orange/60" : "bg-ak-ink/30"}`} />
                  <span className={`h-px w-6 ${m.active ? "bg-ak-orange/40" : "bg-ak-ink/20"}`} />
                </div>
              </div>

              <div className="relative mt-5 space-y-3.5">
                {m.filings.map((f) => (
                  <div key={f.name} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${f.type === "pf" ? "bg-ak-orange" : "bg-ak-ink"}`} />
                    <div>
                      <div className="text-[12.5px] font-bold text-ak-ink">{f.name}</div>
                      <div className="text-[11px] text-ak-ink/45">{f.due}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealItem>

            {/* Arrow connector between the active tile and the next one (desktop only) */}
            {m.active && (
              <div className="absolute -right-7 top-1/2 hidden -translate-y-1/2 lg:block">
                <Icon name="arrowRight" className="h-7 w-7 text-ak-orange" strokeWidth={3} />
              </div>
            )}
          </div>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 px-6 py-4">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-orange" /> PF Filing</span>
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-ink" /> ESI Filing</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ak-ink/50">
          <Icon name="clock" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={2} />
          {calendar.note}
        </div>
      </Reveal>
    </Container>
  </section>
);
