import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { difference } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "The Aksharaa Difference" section — direct feedback
 * round changing the section from dark to light.
 *
 * Prior rounds: dark sage-grey background (#7E8987 -> #4E5654), first a
 * stock night-office photo (opacity tuned up then down, never landed),
 * then an inline SVG abstract line pattern (white-on-dark, worked, but
 * was a holding pattern rather than the final answer for this section).
 *
 * This round: full reversal to a light section per direct instruction.
 * Base colour #EEF4ED (a very light mint-tinted off-white — client-
 * specified). Background image swapped to a client-supplied team
 * meeting photo (flexi-difference-bg.jpg — overwrites the now-unused
 * night-office photo at the same path rather than leaving an orphaned
 * asset), shown at 30% opacity with an additional light tint overlay
 * on top (genuinely semi-opacity per direct instruction — an initial
 * attempt at 50% still read as a normal, fully-clear photo since a
 * bright, high-contrast image against a near-white page doesn't fade
 * the way a dark photo against a dark background did in the earlier
 * rounds; lowered further and added the tint layer to actually achieve
 * the faded look) as a right-side panel rather than
 * full-bleed behind the text column, so it reads as a deliberate photo
 * placement rather than a faint, hard-to-parse wash behind body copy —
 * the full-bleed-photo-behind-text approach is what caused the
 * visibility/clutter back-and-forth in the dark version.
 *
 * Because the base flipped from dark to light, every white-on-dark
 * assumption in this component had to flip too — this is a full
 * rebuild of the colour treatment, not a patch on top of the dark
 * version: heading/body text white -> ak-ink, kicker light variant ->
 * default, abstract SVG pattern removed (white-on-white would be
 * invisible; a light section doesn't need it now that a real photo is
 * back), and cards switched from black-tinted overlays to white cards
 * with a soft border + shadow (the light-section card pattern used
 * elsewhere on this page, e.g. FlexiWho's card grid).
 *
 * Card content/motion logic (icon badge, number, accent bar, hover
 * lift+glow) is unchanged from prior rounds — only the colour values
 * needed to flip.
 */
export const FlexiDifference = () => (
  <section
    id="svc-difference"
    data-testid="flexi-difference-section"
    className="relative overflow-hidden bg-[#EEF4ED] py-20 md:py-28"
  >
    <Container className="relative">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <Reveal className="max-w-xl">
            <div className="ak-kicker mb-5">{difference.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{difference.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{difference.sub}</p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
            {difference.items.map((d) => (
              <RevealItem key={d.num}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white p-6 shadow-[0_2px_14px_-6px_rgba(28,42,57,0.08)] transition-shadow duration-300 hover:border-ak-orange/30 hover:shadow-[0_10px_28px_-10px_rgba(28,42,57,0.16)]"
                >
                  {/* left accent bar, grows on hover */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-ak-orange/0 transition-all duration-300 group-hover:w-1 group-hover:bg-ak-orange" />

                  {/* soft glow on hover */}
                  <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ak-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-ak-orange/10" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ak-orange/20 to-ak-orange/5 text-ak-orange ring-1 ring-ak-orange/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-ak-ink/10 transition-colors duration-300 group-hover:text-ak-orange/35">{d.num}</span>
                  </div>

                  <h3 className="relative mt-4 font-display text-base font-bold text-ak-ink">{d.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-relaxed text-ak-ink/55">{d.desc}</p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* RIGHT — client-supplied team photo, semi-opacity per direct instruction */}
        <Reveal delay={0.15} className="sticky top-24 hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl bg-[#EEF4ED]">
            <img
              src="/assets/sections/flexi-difference-bg.jpg"
              alt="The Aksharaa team reviewing a client engagement together"
              className="h-[520px] w-full object-cover opacity-30"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#EEF4ED]/20" />
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
