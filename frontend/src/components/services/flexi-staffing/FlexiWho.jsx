import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Counter } from "../../common/Counter";
import { Icon } from "../../../lib/icons";
import { who, hero } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "Who Needs This" section — rebuilt per client reference
 * (Section 3, first review round). Key departures from the original:
 *
 * - Kicker text ("Right Fit For") replaced entirely with a thin
 *   gradient slider-bar motif per direct instruction — this is a new
 *   decorative pattern not used elsewhere in the codebase yet.
 * - Heading/subheading centred instead of left-aligned.
 * - Card icon badges enlarged with bolder strokes to match reference's
 *   pictogram weight (was h-4.5/w-4.5, a non-existent Tailwind class —
 *   fixed to an arbitrary-value bracket per the established gotcha).
 * - Added the burgundy stat band at the bottom (450+ / 15+ / Pan-India /
 *   100%), reusing hero.stats data rather than duplicating it — this is
 *   the same data the Hero originally displayed before that stat row
 *   was dropped from the Hero per earlier direct instruction.
 * - New ak-burgundy2 token (#56353A) added to tailwind.config.js,
 *   sampled directly from this reference — distinct from ak-burgundy
 *   (#800020) used on the Payroll Processing hero marquee.
 * - Pan-India stat icon uses a client-supplied PNG (flexi-india-icon.png)
 *   rather than a lucide icon or hand-drawn SVG — an initial attempt at
 *   tracing a freehand India outline path produced an unrecognisable
 *   blob, so the client sent the actual asset instead. Recoloured white
 *   via CSS filter (brightness-0 invert) to match the other stat icons'
 *   currentColor treatment without needing a separate white-asset export.
 */
const statIcons = ["building", "award", null, "shield"];

export const FlexiWho = () => (
  <section id="svc-who" data-testid="flexi-who-section" className="bg-white py-10 md:py-14">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="relative mx-auto mb-6 h-px w-40 bg-gradient-to-r from-transparent via-ak-orange/40 to-transparent">
          <span className="absolute left-1/2 top-1/2 h-3 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ak-orange" />
        </div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{who.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/60">{who.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {who.cards.map((c) => (
          <RevealItem key={c.title}>
            <div className="rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(28,42,57,0.06)] transition-shadow hover:shadow-lg">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-ak-orange/15 text-ak-orange">
                <Icon name={c.icon} className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ak-ink">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Stat band — reuses hero.stats data (dropped from Hero per earlier instruction, now shown here) */}
      <Reveal delay={0.1} className="relative mt-12 overflow-hidden rounded-3xl bg-ak-burgundy2 px-8 py-10 md:px-12">
        <div
          className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {hero.stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 px-2 sm:px-5">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                {statIcons[i] ? (
                  <Icon name={statIcons[i]} className="h-6 w-6" strokeWidth={1.8} />
                ) : (
                  <img
                    src="/assets/sections/flexi-india-icon.png"
                    alt=""
                    className="h-6 w-6 object-contain brightness-0 invert"
                  />
                )}
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-ak-orange md:text-3xl">
                  {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
                </div>
                <div className="mt-0.5 text-[12px] font-medium text-white/65">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  </section>
);
