import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { control } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

/* Desktop hub-and-spoke geometry. viewBox 1000x720, hub centred at (500,360). */
const NODES = [
  { pos: "left-0 top-0", line: { x2: 338, y2: 214 }, dot: { left: "33.8%", top: "29.7%" } },
  { pos: "right-0 top-0", line: { x2: 662, y2: 214 }, dot: { left: "66.2%", top: "29.7%" } },
  { pos: "left-0 bottom-0", line: { x2: 338, y2: 506 }, dot: { left: "33.8%", top: "70.3%" } },
  { pos: "right-0 bottom-0", line: { x2: 662, y2: 506 }, dot: { left: "66.2%", top: "70.3%" } },
];

const ControlCard = ({ c, compact = false }) => (
  <div
    data-testid={`control-card-${c.num}`}
    className="group relative h-full overflow-hidden rounded-2xl border border-ak-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(28,42,57,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-ak-orange/40 hover:shadow-[0_36px_80px_-44px_rgba(242,140,40,0.5)] md:p-7"
  >
    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-ak-orange transition-transform duration-500 group-hover:scale-x-100" />
    <div className="flex items-center justify-between">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-ink text-white transition-colors duration-300 group-hover:bg-ak-orange">
        <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.85} />
      </span>
      <span className="ak-mono-label text-ak-orange">Module {c.num}</span>
    </div>
    <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-ak-ink">
      {c.title}
    </h3>
    <p className={`mt-2.5 text-sm leading-relaxed text-ak-ink/55 ${compact ? "" : "max-w-[15rem]"}`}>
      {c.desc}
    </p>
  </div>
);

/* The animated central control hub: pulsing rings, rotating orbit, radar sweep core. */
const Hub = ({ size = 184 }) => (
  <div
    data-testid="control-hub"
    className="relative flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    {/* expanding pulse rings */}
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute rounded-full border border-ak-orange/30"
        style={{ width: size, height: size }}
        animate={{ scale: [1, 1.85], opacity: [0.45, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.06, ease: "easeOut" }}
      />
    ))}

    {/* rotating dashed orbit carrying data dots */}
    <motion.div
      className="absolute rounded-full border border-dashed border-ak-ink/15"
      style={{ width: size * 1.32, height: size * 1.32 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
    >
      <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ak-orange shadow-[0_0_12px_rgba(242,140,40,0.85)]" />
      <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-ak-ink/40" />
      <span className="absolute top-1/2 -left-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ak-orange/70" />
    </motion.div>

    {/* core */}
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-full bg-ak-ink text-white shadow-[0_30px_70px_-30px_rgba(28,42,57,0.8)]" style={{ width: size * 0.82, height: size * 0.82 }}>
      {/* radar sweep */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(242,140,40,0.42) 55deg, transparent 120deg)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />
      {/* concentric radar rings */}
      <span className="absolute inset-[18%] rounded-full border border-white/10" />
      <span className="absolute inset-[34%] rounded-full border border-white/10" />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ak-orange/15 text-ak-orange">
        <Icon name="radar" className="h-6 w-6" strokeWidth={1.85} />
      </span>
      <span className="ak-mono-label relative mt-2 text-ak-orange/80">Active</span>
      <span className="relative mt-0.5 text-center font-display text-[11px] font-semibold uppercase leading-tight tracking-wide text-white/90">
        Compliance<br />Control Core
      </span>
    </div>
  </div>
);

export const ComplianceControl = () => (
  <section id="control" data-testid="control-section" className="relative overflow-hidden bg-white py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-60" />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{control.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-ak-ink md:text-5xl">
          Compliance Control <span className="ak-outline-ink">Systems</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{control.sub}</p>
      </Reveal>

      {/* ── Desktop: central hub with spokes to floating cards ── */}
      <div className="relative mx-auto mt-16 hidden h-[720px] max-w-5xl lg:block">
        {/* connecting lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {NODES.map((n, i) => (
            <g key={i}>
              <motion.line
                x1="500"
                y1="360"
                x2={n.line.x2}
                y2={n.line.y2}
                stroke="#1C2A39"
                strokeOpacity="0.14"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: EASE }}
              />
              <motion.line
                x1="500"
                y1="360"
                x2={n.line.x2}
                y2={n.line.y2}
                stroke="#F28C28"
                strokeWidth="1.5"
                strokeDasharray="5 11"
                vectorEffect="non-scaling-stroke"
                animate={{ strokeDashoffset: [0, -64] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              />
            </g>
          ))}
        </svg>

        {/* connection nodes where lines meet cards */}
        {NODES.map((n, i) => (
          <span
            key={`dot-${i}`}
            className="absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-ak-orange shadow-[0_0_10px_rgba(242,140,40,0.7)]"
            style={{ left: n.dot.left, top: n.dot.top }}
          />
        ))}

        {/* hub */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <Hub />
        </div>

        {/* floating cards */}
        {control.cards.map((c, i) => (
          <motion.div
            key={c.num}
            className={`absolute z-10 w-[290px] ${NODES[i].pos}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.45 + i * 0.15, ease: EASE }}
          >
            <ControlCard c={c} />
          </motion.div>
        ))}
      </div>

      {/* ── Mobile / tablet: compact hub + stacked cards ── */}
      <div className="mt-14 lg:hidden">
        <Reveal className="flex justify-center pb-12">
          <Hub size={150} />
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
          {control.cards.map((c) => (
            <RevealItem key={c.num}>
              <ControlCard c={c} compact />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
