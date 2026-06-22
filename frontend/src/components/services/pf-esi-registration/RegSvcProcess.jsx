import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 — Process, round 2 rebuild per reference screenshot.
 *
 * Rebuilt from a vertical connected timeline into a horizontal flow:
 * 6 circular icon nodes in a row, connected by small chevron arrows
 * between each (not just a line) — same dark navy background as before,
 * but now with a dotted texture accent bottom-left, an underline accent
 * beneath each step number, the final step highlighted in solid orange
 * (using the existing `final: true` flag already in our data), and a
 * bottom 4-item stat strip built from our own real content (timeline,
 * establishments served, years experience, support model) rather than
 * invented copy. Horizontal scroll on mobile where 6 columns won't fit.
 */
const ChevronDivider = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -6 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay, ease: EASE }}
    className="hidden flex-shrink-0 items-center justify-center px-1 lg:flex"
  >
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ak-orange/30 text-ak-orange/70">
      <Icon name="arrowRight" className="h-3 w-3" strokeWidth={2.4} />
    </span>
  </motion.div>
);

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-ak-ink py-20 md:py-28">
    {/* dotted texture, bottom-left */}
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(circle, #F28C28 1px, transparent 1.4px)",
        backgroundSize: "14px 14px",
      }}
    />

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker ak-kicker--light mx-auto mb-5 justify-center">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">
          {process.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/45">{process.sub}</p>
      </Reveal>

      {/* horizontal connected flow — scrolls on mobile, full row on desktop */}
      <div className="mt-14 overflow-x-auto pb-2 md:overflow-visible">
        <div className="flex min-w-[920px] items-start gap-1 md:min-w-0 md:gap-0">
          {process.steps.map((s, i) => (
            <div key={s.num} className="flex flex-1 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className={`flex-1 rounded-2xl border p-5 ${
                  s.final
                    ? "border-ak-orange/40 bg-gradient-to-b from-ak-orange/15 to-transparent"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.1, ease: EASE }}
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                    s.final ? "border-ak-orange bg-ak-orange text-white shadow-[0_0_24px_rgba(242,140,40,0.45)]" : "border-ak-orange/35 bg-ak-ink text-ak-orange"
                  }`}
                >
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
                </motion.span>

                <div className="mt-4 text-center">
                  <span className="ak-mono-label--light inline-block border-b-2 border-ak-orange/50 pb-1 text-ak-orange/75">
                    {s.num}
                  </span>
                  <h3 className="mt-2 font-display text-[13.5px] font-bold leading-snug text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/40">{s.desc}</p>
                </div>
              </motion.div>

              {i < process.steps.length - 1 && <ChevronDivider delay={i * 0.1 + 0.2} />}
            </div>
          ))}
        </div>
      </div>

      {/* bottom stat strip — 4 items, real content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10"
      >
        {process.strip.map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-2 md:px-5">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/15 text-ak-orange">
              <Icon name={s.icon} className="h-4 w-4" strokeWidth={1.9} />
            </span>
            <div>
              <div className="font-display text-[13px] font-bold text-white">{s.value}</div>
              <div className="text-[10.5px] leading-snug text-white/40">{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
