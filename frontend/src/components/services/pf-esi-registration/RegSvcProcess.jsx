import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 — Process, round 6 polish pass.
 *
 * Fixes from the round-5 screenshot review:
 *   1. Circle shrunk significantly (radius 420 -> 300) — round-5's
 *      version left huge dead whitespace above/below the circle inside
 *      the section; this tightens it to a proportionate size.
 *   2. Chevron markers now properly visible at all 6 arc midpoints —
 *      previous version's white-fill circles were nearly invisible
 *      against the light section background; switched to a solid
 *      orange/grey fill matching the arc colour with a white icon,
 *      giving real contrast at every position, not just one.
 *   3. Bottom stat strip given a dedicated top margin so it no longer
 *      visually collides with node 04's description text underneath
 *      the (now smaller) circle.
 *   4. Section heading separated OUT of the center card and placed
 *      above the whole circle as a normal section intro — the center
 *      card now only carries the short tagline, removing the
 *      cramped-feeling double-heading effect from round 5.
 */
const RADIUS = 300;
const NODE_COUNT = 6;

const angleForIndex = (i) => -90 + (360 / NODE_COUNT) * i;
const toRad = (deg) => (deg * Math.PI) / 180;

const nodePosition = (i) => {
  const angle = toRad(angleForIndex(i));
  return { x: RADIUS * Math.cos(angle), y: RADIUS * Math.sin(angle) };
};

const ArcSegment = ({ i, isOrange, delay }) => {
  const startAngle = angleForIndex(i);
  const endAngle = angleForIndex(i + 1);
  const r = RADIUS;
  const start = { x: r * Math.cos(toRad(startAngle)), y: r * Math.sin(toRad(startAngle)) };
  const end = { x: r * Math.cos(toRad(endAngle)), y: r * Math.sin(toRad(endAngle)) };
  const midAngle = toRad((startAngle + endAngle) / 2);
  const chevronPos = { x: r * Math.cos(midAngle), y: r * Math.sin(midAngle) };
  const chevronRotate = (startAngle + endAngle) / 2 + 90;
  const colour = isOrange ? "#F28C28" : "#B8B8B8";

  return (
    <>
      <motion.path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`}
        fill="none"
        stroke={colour}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: EASE }}
      />
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.3, ease: EASE }}
        transform={`translate(${chevronPos.x}, ${chevronPos.y}) rotate(${chevronRotate})`}
      >
        {/* solid-fill circle with real contrast at every position */}
        <circle r="13" fill={colour} />
        <path d="M -3.2 -4.2 L 3.2 0 L -3.2 4.2" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </>
  );
};

const OrbitNode = ({ s, i, pos, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: EASE }}
    style={{ position: "absolute", left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)`, transform: "translate(-50%, -50%)" }}
    className="z-10 flex w-[190px] flex-col items-center text-center"
  >
    <span
      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 ${
        s.final ? "border-ak-orange bg-ak-orange text-white shadow-[0_0_18px_rgba(242,140,40,0.4)]" : "border-ak-orange bg-white text-ak-orange shadow-[0_0_12px_rgba(242,140,40,0.2)]"
      }`}
    >
      <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.7} />
    </span>
    <span className="mt-2 font-display text-base font-extrabold text-ak-orange">{s.num}</span>
    <h3 className="mt-1 font-display text-[14px] font-bold leading-snug text-ak-ink">{s.title}</h3>
    <p className="mt-1.5 text-[12px] leading-relaxed text-ak-ink/55">{s.desc}</p>
  </motion.div>
);

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-zinc-100 py-20 md:py-28">
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />

    <Container className="relative">
      {/* Section intro — separated out from the center card */}
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

      {/* DESKTOP — tightened circular orbit layout */}
      <div className="relative mx-auto mt-16 hidden h-[780px] w-[780px] max-w-full lg:block">
        <svg viewBox="-330 -330 660 660" className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-visible">
          {Array.from({ length: NODE_COUNT }).map((_, i) => (
            <ArcSegment key={i} i={i} isOrange={i % 2 === 0} delay={i * 0.12} />
          ))}
        </svg>

        {/* center tagline card — short, no duplicate heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="absolute left-1/2 top-1/2 z-20 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-ak-orange/20 bg-white text-center shadow-[0_20px_50px_-18px_rgba(28,42,57,0.18)]"
        >
          <Icon name="refreshCw" className="h-7 w-7 text-ak-orange" strokeWidth={1.6} />
          <span className="mt-2.5 font-display text-[13px] font-extrabold leading-tight text-ak-ink">6-Step Cycle</span>
          <span className="mt-1 text-[11px] font-semibold text-ak-orange">7–10 Working Days</span>
        </motion.div>

        {process.steps.map((s, i) => (
          <OrbitNode key={s.num} s={s} i={i} pos={nodePosition(i)} delay={0.2 + i * 0.1} />
        ))}
      </div>

      {/* MOBILE/TABLET fallback — vertical list */}
      <div className="lg:hidden">
        <div className="relative mx-auto mt-12 max-w-md">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-ak-orange/25" />
          {process.steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <span className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 ${s.final ? "border-ak-orange bg-ak-orange text-white" : "border-ak-orange bg-white text-ak-orange"}`}>
                <Icon name={s.icon} className="h-5.5 w-5.5" strokeWidth={1.7} />
              </span>
              <div className="pt-1">
                <span className="font-display text-sm font-extrabold text-ak-orange">{s.num}</span>
                <h3 className="mt-1 font-display text-[14px] font-bold text-ak-ink">{s.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ak-ink/55">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom stat strip — dedicated top margin, clear of the circle on every breakpoint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-5 rounded-2xl border border-ak-ink/[0.08] bg-white p-7 md:grid-cols-4 md:gap-0 md:divide-x md:divide-ak-ink/[0.08] lg:mt-16"
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
