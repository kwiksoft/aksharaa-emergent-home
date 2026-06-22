import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 — Process, full rebuild per direct reference image.
 *
 * Replaces the previous circular-orbit SVG layout entirely with the
 * reference's hub-and-spoke structure:
 *   - 6 cards in a 2-column x 3-row grid (01/02 top, 03/04 middle, 05/06
 *     bottom), each with an orange top accent bar, a soft-tinted circular
 *     icon badge, number, title, and description.
 *   - A circular "Aksharaa" brand hub sits centered in the gap between
 *     all 6 cards (desktop only -- this geometry doesn't translate to a
 *     single-column mobile layout, so mobile gets a plain stacked list
 *     of the same card style instead, no hub/connectors).
 *   - Dashed directional connectors: horizontal between 01<->02 and
 *     05<->06 (pointing right and left respectively, mirroring the
 *     reference), and vertical from the hub up/down/left/right to all
 *     four cardinal neighbours.
 *   - Bottom benefit strip restyled to the reference's icon-pill layout
 *     (small circular icon, value on top, label beneath).
 *
 * Mobile/tablet keeps a simpler vertical list -- the hub-and-spoke grid
 * geometry only reads correctly at 2-column+ widths.
 */
const ProcessCard = ({ s, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(28,42,57,0.18)]"
  >
    {/* orange top accent bar */}
    <span className="absolute left-0 top-0 h-1.5 w-16 rounded-br-full bg-ak-orange" />

    <div className="flex items-start gap-4">
      <span
        className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${
          s.final ? "bg-ak-orange text-white" : "bg-ak-orange/10 text-ak-orange"
        }`}
      >
        <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.7} />
      </span>
      <div className="pt-1">
        <div className="font-display text-2xl font-extrabold text-ak-orange">{s.num}</div>
        <h3 className="mt-1 font-display text-[16px] font-bold leading-snug text-ak-ink">{s.title}</h3>
      </div>
    </div>

    <div className="mt-3 h-px w-10 bg-ak-orange/50" />
    <p className="mt-3 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
  </motion.div>
);

/** Small dashed connector with a chevron/arrow head, used between adjacent
 *  top-row and bottom-row cards (horizontal) on desktop only. */
const HorizontalConnector = ({ direction = "right", delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: EASE }}
    className="hidden items-center justify-center lg:flex"
  >
    <span className="h-px w-8 border-t-2 border-dashed border-ak-orange/50" />
    <span className="-mx-px flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange/50 bg-white text-ak-orange">
      <Icon
        name={direction === "right" ? "arrowRight" : "arrowUpRight"}
        className={`h-3 w-3 ${direction === "left" ? "rotate-180" : ""}`}
        strokeWidth={2.4}
      />
    </span>
    <span className="h-px w-8 border-t-2 border-dashed border-ak-orange/50" />
  </motion.div>
);

/** Center brand hub -- sits over the grid gap on desktop, with dashed
 *  spokes radiating to all four cardinal directions. */
const CenterHub = () => (
  <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
    {/* dashed spokes, up/down/left/right */}
    <span className="absolute left-1/2 top-1/2 h-24 w-px -translate-x-1/2 -translate-y-full border-l-2 border-dashed border-ak-orange/40" />
    <span className="absolute left-1/2 top-1/2 h-24 w-px -translate-x-1/2 border-l-2 border-dashed border-ak-orange/40" />
    <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-full -translate-y-1/2 border-t-2 border-dashed border-ak-orange/40" />
    <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-y-1/2 border-t-2 border-dashed border-ak-orange/40" />

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-dashed border-ak-orange/40 bg-white p-3 shadow-[0_20px_50px_-18px_rgba(28,42,57,0.2)]"
    >
      <img src="/assets/aksharaa-logo.png" alt="" className="h-full w-full select-none object-contain" draggable="false" />
    </motion.div>
  </div>
);

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-zinc-100 py-14 md:py-20">
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />

    <Container className="relative">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="ak-kicker mx-auto mb-5 justify-center">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {process.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/55">{process.sub}</p>
      </motion.div>

      {/* DESKTOP -- 2x3 card grid with center hub, per reference image */}
      <div className="relative mx-auto mt-16 hidden max-w-5xl lg:block">
        <CenterHub />
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-y-10">
          {/* row 1 */}
          <ProcessCard s={process.steps[0]} delay={0.05} />
          <HorizontalConnector direction="right" delay={0.3} />
          <ProcessCard s={process.steps[1]} delay={0.1} />

          {/* row 2 -- middle column left empty so the absolutely-positioned
              hub reads as sitting between these two cards */}
          <ProcessCard s={process.steps[2]} delay={0.15} />
          <div aria-hidden />
          <ProcessCard s={process.steps[3]} delay={0.2} />

          {/* row 3 */}
          <ProcessCard s={process.steps[4]} delay={0.25} />
          <HorizontalConnector direction="left" delay={0.45} />
          <ProcessCard s={process.steps[5]} delay={0.3} />
        </div>
      </div>

      {/* MOBILE/TABLET fallback -- simple stacked list, same card style,
          no hub/connectors (the radial geometry doesn't translate below
          a 2-column layout) */}
      <div className="lg:hidden">
        <div className="mx-auto mt-12 grid max-w-md gap-5 sm:max-w-2xl sm:grid-cols-2">
          {process.steps.map((s, i) => (
            <ProcessCard key={s.num} s={s} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* bottom benefit strip -- icon-pill layout per reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-5 rounded-2xl border border-ak-ink/[0.08] bg-white p-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-ak-ink/[0.08] lg:mt-14"
      >
        {process.strip.map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-2 md:px-5">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10 text-ak-orange">
              <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <div>
              <div className="text-[12px] leading-snug text-ak-ink/55">{s.value}</div>
              <div className="font-display text-[14px] font-bold leading-snug text-ak-ink">{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
