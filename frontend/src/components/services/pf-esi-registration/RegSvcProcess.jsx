import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 — Process, round 5 rebuild per reference screenshot.
 *
 * Complete recomposition: from a horizontal row into a CIRCULAR ORBIT
 * layout — 6 nodes positioned around a circle using trigonometry, each
 * with its icon-node + number + title + description "petal" radiating
 * outward, connected by curved arc segments with chevron direction
 * markers. The heading/intro block sits in the dead center of the
 * circle. Background stays the existing light grey (zinc-100) per
 * explicit instruction — only the composition changes, not the palette.
 *
 * Desktop-only composition (absolute positioning needs real width to
 * read correctly); collapses to a simple vertical stacked list on
 * mobile/tablet where a circle layout can't work.
 */
const RADIUS = 420; // px, distance from center to each node — increased from 290 to clear the center card and prevent petal text overlap
const NODE_COUNT = 6;

// angle for node i: start at top (-90deg) and go clockwise
const angleForIndex = (i) => -90 + (360 / NODE_COUNT) * i;
const toRad = (deg) => (deg * Math.PI) / 180;

const nodePosition = (i) => {
  const angle = toRad(angleForIndex(i));
  return {
    x: RADIUS * Math.cos(angle),
    y: RADIUS * Math.sin(angle),
  };
};

// Arc path between consecutive nodes, drawn along the circle's circumference
const ArcSegment = ({ i, isOrange, delay }) => {
  const startAngle = angleForIndex(i);
  const endAngle = angleForIndex(i + 1);
  const r = RADIUS;
  const cx = 0;
  const cy = 0;
  const start = { x: cx + r * Math.cos(toRad(startAngle)), y: cy + r * Math.sin(toRad(startAngle)) };
  const end = { x: cx + r * Math.cos(toRad(endAngle)), y: cy + r * Math.sin(toRad(endAngle)) };
  const midAngle = toRad((startAngle + endAngle) / 2);
  const chevronPos = { x: cx + r * Math.cos(midAngle), y: cy + r * Math.sin(midAngle) };
  const chevronRotate = ((startAngle + endAngle) / 2) + 90;

  return (
    <>
      <motion.path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`}
        fill="none"
        stroke={isOrange ? "#F28C28" : "#C8C8C8"}
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
        <circle r="12" fill="#FFFFFF" stroke={isOrange ? "#F28C28" : "#C8C8C8"} strokeWidth="1.5" />
        <path d="M -3 -4 L 3 0 L -3 4" fill="none" stroke={isOrange ? "#F28C28" : "#9A9A9A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </>
  );
};

const OrbitNode = ({ s, i, pos, delay }) => {
  // Petal text block offsets away from center, based on node angle
  const angle = angleForIndex(i);
  const isTop = angle > -135 && angle < -45;
  const isBottom = angle > 45 && angle < 135;
  const isLeft = angle >= 135 || angle <= -135;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      style={{
        position: "absolute",
        left: `calc(50% + ${pos.x}px)`,
        top: `calc(50% + ${pos.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      className="z-10 flex w-[200px] flex-col items-center text-center"
    >
      <span
        className={`flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full border-2 ${
          s.final ? "border-ak-orange bg-ak-orange text-white shadow-[0_0_22px_rgba(242,140,40,0.45)]" : "border-ak-orange bg-white text-ak-orange shadow-[0_0_16px_rgba(242,140,40,0.25)]"
        }`}
      >
        <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.7} />
      </span>
      <span className="mt-2.5 font-display text-lg font-extrabold text-ak-orange">{s.num}</span>
      <h3 className="mt-1 font-display text-[15px] font-bold leading-snug text-ak-ink">{s.title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
    </motion.div>
  );
};

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-zinc-100 py-20 md:py-28">
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />

    <Container className="relative">
      {/* DESKTOP — circular orbit layout */}
      <div className="relative mx-auto hidden h-[1180px] w-[1180px] max-w-full lg:block">
        {/* connecting arcs (SVG, centered) */}
        <svg viewBox="-470 -470 940 940" className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-visible">
          {Array.from({ length: NODE_COUNT }).map((_, i) => (
            <ArcSegment key={i} i={i} isOrange={i % 2 === 0} delay={i * 0.12} />
          ))}
        </svg>

        {/* center heading block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="absolute left-1/2 top-1/2 z-20 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-ak-ink/[0.08] bg-white/90 p-7 text-center shadow-[0_20px_60px_-20px_rgba(28,42,57,0.15)] backdrop-blur-sm"
        >
          <div className="ak-kicker mx-auto mb-3 justify-center">{process.kicker}</div>
          <h2 className="font-display text-xl font-extrabold leading-[1.1] tracking-tight text-ak-ink">
            Aksharaa&apos;s <span className="text-ak-orange">Registration Process</span>
          </h2>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ak-ink/55">
            {process.sub.split("typically")[0]}
            typically <span className="font-semibold text-ak-orange">{process.sub.split("typically")[1]}</span>
          </p>
        </motion.div>

        {/* orbit nodes */}
        {process.steps.map((s, i) => (
          <OrbitNode key={s.num} s={s} i={i} pos={nodePosition(i)} delay={0.2 + i * 0.1} />
        ))}
      </div>

      {/* MOBILE/TABLET fallback — simple vertical list, circle layout needs real width */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-xl text-center">
          <div className="ak-kicker mx-auto mb-5 justify-center">{process.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink">
            {process.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ak-ink/55">{process.sub}</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-md">
          <div className="absolute left-[33px] top-2 bottom-2 w-px bg-ak-orange/25" />
          {process.steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <span className={`relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 ${s.final ? "border-ak-orange bg-ak-orange text-white" : "border-ak-orange bg-white text-ak-orange"}`}>
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <div className="pt-1">
                <span className="font-display text-base font-extrabold text-ak-orange">{s.num}</span>
                <h3 className="mt-1 font-display text-[15px] font-bold text-ak-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom stat strip — kept on all breakpoints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-5 rounded-2xl border border-ak-ink/[0.08] bg-white p-7 md:grid-cols-4 md:gap-0 md:divide-x md:divide-ak-ink/[0.08]"
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
