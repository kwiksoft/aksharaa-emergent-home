import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 — Process, round 4 fixes per human feedback:
 *   1. Tilt removed entirely - cards now perfectly uniform, no rotation
 *   2. Background changed from dark zinc-800 to LIGHT grey
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
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-zinc-100 py-20 md:py-28">
    {/* dotted texture, bottom-left */}
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.08]"
      style={{
        backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)",
        backgroundSize: "14px 14px",
      }}
    />

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mx-auto mb-5 justify-center">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {process.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/55">{process.sub}</p>
      </Reveal>

      {/* horizontal connected flow */}
      <div className="mt-16 overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex min-w-[1040px] items-start gap-1 md:min-w-0 md:gap-0">
          {process.steps.map((s, i) => (
            <div key={s.num} className="flex flex-1 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className={`flex-1 rounded-2xl border p-7 ${
                  s.final
                    ? "border-ak-orange/40 bg-gradient-to-b from-ak-orange/10 to-white"
                    : "border-ak-ink/[0.08] bg-white"
                }`}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.1, ease: EASE }}
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                    s.final ? "border-ak-orange bg-ak-orange text-white shadow-[0_0_24px_rgba(242,140,40,0.35)]" : "border-ak-orange/35 bg-ak-orange/5 text-ak-orange"
                  }`}
                >
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
                </motion.span>

                <div className="mt-5 text-center">
                  <span className="ak-mono-label inline-block border-b-2 border-ak-orange/40 pb-1 text-ak-orange">
                    {s.num}
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-bold leading-snug text-ak-ink">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
                </div>
              </motion.div>

              {i < process.steps.length - 1 && <ChevronDivider delay={i * 0.1 + 0.2} />}
            </div>
          ))}
        </div>
      </div>

      {/* bottom stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mt-12 grid grid-cols-2 gap-5 rounded-2xl border border-ak-ink/[0.08] bg-white p-7 md:grid-cols-4 md:gap-0 md:divide-x md:divide-ak-ink/[0.08]"
      >
        {process.strip.map((s) => (
          <div key={s.label} className="flex items-center gap-3.5 px-2 md:px-6">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10 text-ak-orange">
              <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={1.9} />
            </span>
            <div>
              <div className="font-display text-[15px] font-bold text-ak-ink">{s.value}</div>
              <div className="text-[12px] leading-snug text-ak-ink/50">{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
