import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { control } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];
const ACCENT = "#CB4154";
const CONNECT = "#7e8987";

const StepCard = ({ card, protrude = false }) => (
  <div className="group relative min-w-0 flex-1 rounded-[1.4rem] bg-white p-6 pr-24 shadow-[0_28px_55px_-30px_rgba(126,137,135,0.65)] ring-1 ring-ak-ink/5 transition-transform duration-300 hover:-translate-y-1.5">
    <span className="font-mono text-[11px] font-bold tracking-[0.2em]" style={{ color: ACCENT }}>
      STEP {card.num}
    </span>
    <h3 className="mt-2.5 font-display text-base font-bold leading-snug tracking-tight text-ak-ink lg:text-lg">
      {card.title}
    </h3>
    <p className="mt-2 text-xs leading-relaxed text-ak-ink/55">{card.desc}</p>
    <span
      className={`absolute top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_16px_34px_-14px_rgba(203,65,84,0.75)] ring-1 transition-transform duration-300 group-hover:scale-105 ${
        protrude ? "right-0 translate-x-1/2" : "right-3"
      }`}
      style={{ color: ACCENT, "--tw-ring-color": "rgba(203,65,84,0.28)" }}
    >
      <Icon name={card.icon} className="h-8 w-8" strokeWidth={1.7} />
    </span>
  </div>
);

const Connector = ({ dir, delay }) => {
  const over = dir === "over";
  const d = over ? "M2 96 C 22 34, 42 34, 62 96" : "M2 96 C 22 158, 42 158, 62 96";
  return (
    <div className="flex w-14 flex-shrink-0 items-center justify-center self-stretch lg:w-20">
      <svg viewBox="0 0 64 192" className="h-48 w-full overflow-visible" fill="none">
        <motion.path
          d={d}
          stroke={CONNECT}
          strokeWidth="2.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay, ease: EASE }}
        />
        <motion.polygon
          points="56,88 56,104 70,96"
          fill={CONNECT}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.7 }}
        />
      </svg>
    </div>
  );
};

export const ComplianceControl = () => (
  <section
    id="control"
    data-testid="control-section"
    className="relative overflow-hidden py-20 md:py-32"
    style={{ backgroundColor: "#EAEDEC" }}
  >
    {/* peach halftone design */}
    <div
      className="pointer-events-none absolute right-0 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 translate-x-1/4 md:block"
      style={{
        backgroundImage: "radial-gradient(rgba(246,194,139,0.7) 2.2px, transparent 2.4px)",
        backgroundSize: "16px 16px",
        WebkitMaskImage: "radial-gradient(circle at center, black 8%, transparent 68%)",
        maskImage: "radial-gradient(circle at center, black 8%, transparent 68%)",
      }}
    />
    <div
      className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full blur-[120px]"
      style={{ backgroundColor: "rgba(246,194,139,0.25)" }}
    />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="mb-4 flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md"
            style={{ backgroundColor: "rgba(203,65,84,0.12)", color: ACCENT }}
          >
            <Icon name="radar" className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
            Step-by-Step · {control.kicker}
          </span>
        </div>
        <h2 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-5xl lg:text-[3.25rem]">
          {control.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ak-ink/60">{control.sub}</p>
      </Reveal>

      {/* ── Desktop: connected step cards ── */}
      <motion.div
        className="mt-24 hidden items-stretch pr-10 lg:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {control.cards.map((card, i) => (
          <div key={card.num} className="contents">
            <StepCard card={card} protrude />
            {i < control.cards.length - 1 && (
              <Connector dir={i % 2 === 0 ? "over" : "under"} delay={0.3 + i * 0.25} />
            )}
          </div>
        ))}
      </motion.div>

      {/* ── Mobile / tablet: vertical step flow ── */}
      <div className="mt-14 lg:hidden">
        {control.cards.map((card, i) => (
          <div key={card.num}>
            <Reveal delay={i * 0.05}>
              <StepCard card={card} />
            </Reveal>
            {i < control.cards.length - 1 && (
              <div className="flex justify-center py-3">
                <svg width="20" height="42" viewBox="0 0 20 42" fill="none">
                  <line x1="10" y1="2" x2="10" y2="32" stroke={CONNECT} strokeWidth="2.2" strokeDasharray="4 5" strokeLinecap="round" />
                  <polygon points="4,30 16,30 10,42" fill={CONNECT} />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);
