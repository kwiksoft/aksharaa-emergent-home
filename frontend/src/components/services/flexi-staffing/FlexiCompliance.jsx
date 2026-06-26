import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { compliance } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Compliance Layer" section — rebuilt per client reference
 * image (Section 7, first review round). Content fields (kicker/heading/
 * sub/5 checklist items/coverage title+5 rows) were already an exact
 * match for the reference — visual rebuild only. One real content
 * addition: the bottom 5-stat band (100% / 50K+ / 25+ / On-Time / 10+
 * Years) didn't exist anywhere in the data file before this round — added
 * to compliance.bottomStats, kept separate from hero.stats since the
 * numbers and framing are specific to this section's reference image.
 *
 * Visual departures from the original:
 * - Section background switched from ak-ink to a new reference-sampled
 *   ak-complianceBg (#001745), a true navy rather than the site's usual
 *   near-black ak-ink — distinctly bluer once compared side by side.
 * - "Responsibility" heading word recoloured to a new sampled orange
 *   (ak-complianceOrange, #F17602) instead of the default white/orange
 *   split the original used implicitly via plain text colour.
 * - Checklist checkmarks switched from a generic emerald Tailwind class
 *   to a new sampled blue token (ak-complianceCheck) matching the
 *   reference's circular blue check-badges exactly, plus a soft glow
 *   ring to match the reference's lit appearance.
 * - Coverage card: per DIRECT INSTRUCTION, given a solid pale cream fill
 *   (ak-complianceCardFill, originally #ECCE8E gold then swapped to
 *   #FEF5DC per a follow-up instruction — both user-specified, neither
 *   sampled from the reference, which itself uses a dark glass card)
 *   instead of the original's white/[0.04] translucent panel. Because
 *   this flips the card to a light background, all card-internal text
 *   recoloured to dark (ak-ink / ak-ink/70) for contrast — heading,
 *   subtitle, row labels, and dividers all switched from white-on-dark
 *   to dark-on-light. Value-text colours (green for positive outcomes,
 *   amber for deadline-type values) were re-tuned for contrast against
 *   the card fill rather than reusing the reference's dark-background
 *   green/orange, which read too washed-out once tested against the
 *   original #ECCE8E — both tokens were re-checked against #FEF5DC too
 *   and clear AA with room to spare, so no further change was needed
 *   when the fill colour itself changed.
 * - Each of the 5 coverage rows now has its own icon badge with a
 *   distinct colour (blue/indigo/teal/purple/rose), sampled from the
 *   reference's 5 differently-coloured row icons — the original had no
 *   per-row icon at all, just a label/value pair.
 * - New bottom stat band: 5-column row of circular icon + value + label,
 *   matching the reference's bottom strip exactly. Icon circles use the
 *   reference-sampled ak-complianceStatIcon blue.
 */
export const FlexiCompliance = () => (
  <section
    id="svc-compliance"
    data-testid="flexi-compliance-section"
    className="relative overflow-hidden bg-ak-complianceBg py-10 md:py-14"
  >
    <Container className="relative">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="ak-kicker ak-kicker--light mb-5">{compliance.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">
              {(() => {
                const [before, after] = compliance.heading.split(" — ");
                return after ? (
                  <>
                    {before} — <span className="text-ak-complianceOrange">{after}</span>
                  </>
                ) : (
                  compliance.heading
                );
              })()}
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-white/55">{compliance.sub}</p>
          </Reveal>

          <RevealGroup className="mt-7 space-y-3" stagger={0.08}>
            {compliance.items.map((it) => (
              <RevealItem key={it}>
                <div className="flex items-start gap-3 border-b border-white/[0.06] pb-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ak-complianceCheck shadow-[0_0_12px_-2px_rgba(15,84,181,0.8)]">
                    <Icon name="checkCircle" className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="pt-0.5 text-[13px] leading-snug text-white/75">{it}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Coverage card — solid gold fill per direct instruction, all text recoloured dark for contrast */}
        <Reveal delay={0.2} className="rounded-2xl border border-ak-ink/10 bg-ak-complianceCardFill p-7 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ak-complianceCheck">
              <Icon name="shield" className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-base font-extrabold leading-tight text-ak-ink">Compliance Coverage</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ak-ink/55">At a Glance</div>
            </div>
          </div>

          <div className="mt-6 space-y-1">
            {compliance.coverage.stats.map((s, i) => {
              const badgeBg = [
                "bg-ak-complianceRow1Badge text-ak-complianceRow1Accent",
                "bg-ak-complianceRow2Badge text-ak-complianceRow2Accent",
                "bg-ak-complianceRow3Badge text-ak-complianceRow3Accent",
                "bg-ak-complianceRow4Badge text-ak-complianceRow4Accent",
                "bg-ak-complianceRow5Badge text-ak-complianceRow5Accent",
              ][i];
              const valueColor = s.tone === "positive" ? "text-ak-complianceGreen" : "text-ak-complianceDeadline";
              return (
                <div key={s.label} className="flex items-center gap-3 border-b border-ak-ink/[0.08] py-3 last:border-b-0">
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${badgeBg}`}>
                    <Icon name={s.icon} className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex-1 text-[12.5px] font-medium text-ak-ink/75">{s.label}</span>
                  <span className={`font-display text-sm font-bold ${valueColor}`}>{s.value}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Bottom stat band — new content, matches reference's 5-column strip */}
      <RevealGroup
        className="relative mt-14 grid grid-cols-2 gap-y-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-8 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5 lg:gap-x-6"
        stagger={0.08}
      >
        {compliance.bottomStats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex items-center gap-3 px-2">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-complianceStatIcon text-white">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <div>
                <div className="font-display text-lg font-extrabold leading-tight text-white md:text-xl">{s.value}</div>
                <div className="mt-0.5 text-[11.5px] leading-snug text-white/55">{s.label}</div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
