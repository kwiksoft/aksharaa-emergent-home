import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-flexi-staffing";

const EASE = [0.22, 1, 0.36, 1];

/** Soft quarter-circle decoration tucked into each row's right edge. */
const corner_tints = ["bg-ak-crimson/10", "bg-ak-sand/25", "bg-ak-sage/25"];

/**
 * Flexi Staffing "Process" section — rebuilt per client reference image
 * (Section 6, first review round). Original was a horizontal row of
 * small circles connected by a thin line; reference is a vertical stack
 * of large pill-shaped step rows connected by a dotted line.
 *
 * Colour system, per direct instruction — three named tokens
 * (tailwind.config.js), used consistently across all 5 steps rather
 * than the reference's per-step rainbow (red/orange/gold/teal/blue):
 * - ak-crimson (#CB4154): the step capsule/button fill
 * - ak-sand (#F6C28B): the icon-circle fill inside each capsule
 * - ak-sage (#7E8987): hover/interaction state (capsule darkens toward
 *   sage on hover, connector dots brighten to sage)
 *
 * Motion: each row scroll-reveals with a "zoom in while traversing"
 * effect per direct instruction — starts at scale 0.85 and slightly
 * faded, scales up to 1 and fades in as it enters the viewport, layered
 * on top of the existing RevealItem fade/translate rather than
 * replacing it (consistent with how hover motion was layered onto
 * scroll-reveal in the Difference section). Capsule also scales up
 * slightly further on hover, and the connecting dots between rows
 * pulse gently to reinforce the top-to-bottom flow.
 */
export const FlexiProcess = () => (
  <section id="svc-process" data-testid="flexi-process-section" className="bg-ak-mist py-10 md:py-14">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{process.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
      </Reveal>

      <div className="mx-auto mt-14 max-w-4xl">
        {process.steps.map((s, i) => (
          <div key={s.num} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              whileHover={{ scale: 1.015 }}
              className="group relative flex flex-col items-start gap-0 overflow-hidden rounded-[28px] border border-ak-ink/[0.06] bg-white shadow-[0_2px_16px_-8px_rgba(28,42,57,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_30px_-10px_rgba(203,65,84,0.22)] sm:flex-row sm:items-center"
            >
              {/* capsule: number + icon circle, crimson fill, darkens to sage on hover */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 m-2 flex h-[88px] w-[140px] flex-shrink-0 items-center justify-center gap-3 self-stretch rounded-[22px] bg-ak-crimson px-4 transition-colors duration-300 group-hover:bg-ak-sage sm:self-auto"
              >
                <span className="font-display text-4xl font-extrabold text-white/90">{s.num}</span>
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-sand text-ak-crimson transition-colors duration-300 group-hover:text-ak-sage">
                  <Icon name={s.icon} className="h-5 w-5" strokeWidth={2} />
                </span>
              </motion.div>

              {/* title + accent divider + description */}
              <div className="flex flex-1 flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-5 sm:px-6">
                <h3 className="font-display text-base font-bold text-ak-ink sm:w-[180px] sm:flex-shrink-0 sm:text-lg lg:w-[210px]">{s.title}</h3>
                <span className="hidden h-10 w-[3px] flex-shrink-0 rounded-full bg-ak-crimson/70 sm:block" />
                <p className="text-[13px] leading-relaxed text-ak-ink/55 sm:text-sm">{s.desc}</p>
              </div>

              {/* soft quarter-circle decoration, right edge */}
              <div className={`pointer-events-none absolute -right-6 -bottom-6 hidden h-28 w-28 rounded-full ${corner_tints[i % corner_tints.length]} lg:block`} />
            </motion.div>

            {/* dotted connector between rows */}
            {i < process.steps.length - 1 && (
              <div className="relative my-1 flex h-5 w-[140px] items-center justify-center">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: d * 0.25, ease: "easeInOut" }}
                    className="mx-[3px] h-1.5 w-1.5 rounded-full bg-ak-crimson/40"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);
