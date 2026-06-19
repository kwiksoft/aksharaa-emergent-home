import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { lifecycle } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

const colVar = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.16, duration: 0.6, ease: EASE } }),
};
const circleVar = {
  hidden: { scale: 0.3, opacity: 0 },
  show: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.25 + i * 0.16, type: "spring", stiffness: 190, damping: 15 },
  }),
};

const NodeCircle = ({ step, size = "lg" }) => {
  const dim = size === "lg" ? "h-24 w-24" : "h-16 w-16";
  const iconSize = size === "lg" ? "h-8 w-8" : "h-6 w-6";
  return (
    <div className={`group relative flex ${dim} flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-ak-ink/70 backdrop-blur-sm transition-colors duration-300 hover:border-ak-orange/60`}>
      <motion.span
        className="absolute inset-0 rounded-full border border-ak-orange/40"
        animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
      />
      <Icon name={step.icon} className={`${iconSize} text-ak-orange transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.7} />
      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ak-orange font-mono text-xs font-semibold text-white ring-4 ring-ak-slate">
        {step.num}
      </span>
    </div>
  );
};

export const ComplianceLifecycle = () => (
  <section
    id="lifecycle"
    data-testid="lifecycle-section"
    className="relative overflow-hidden bg-ak-slate pb-24 pt-28 md:pb-32 md:pt-40"
  >
    {/* diagonal split edge from the light section above */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-white md:h-20"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 100%)" }}
    />
    {/* faint global business map */}
    <img
      src="/assets/world-map.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[56%] w-[125%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.07]"
      draggable="false"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ak-ink/45 via-transparent to-ak-ink/55" />
    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{lifecycle.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-6xl">
          The Structured Compliance <span className="ak-outline-white">Lifecycle</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">{lifecycle.sub}</p>
      </Reveal>

      {/* ── Desktop: horizontal node flow with growing rail + travelling pulse ── */}
      <div className="relative mt-24 hidden lg:block">
        {/* base rail */}
        <div className="absolute left-[10%] right-[10%] top-12 h-px bg-white/12" />
        {/* growing orange rail */}
        <motion.div
          className="absolute left-[10%] top-12 h-px bg-gradient-to-r from-ak-orange via-ak-orange to-ak-orange/30"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* travelling data pulse */}
        <motion.span
          className="absolute top-12 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ak-orange shadow-[0_0_14px_rgba(242,140,40,0.9)]"
          animate={{ left: ["10%", "90%"] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
        />

        <motion.div
          className="grid grid-cols-5 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {lifecycle.steps.map((step, i) => (
            <motion.div key={step.num} variants={colVar} custom={i} className="flex flex-col items-center text-center">
              <motion.div variants={circleVar} custom={i} className="relative z-10" whileHover={{ y: -4 }}>
                <NodeCircle step={step} />
              </motion.div>
              <div className="mt-7">
                <span className="ak-mono-label block text-ak-orange/70">Stage {step.num}</span>
                <h3 className="mt-1.5 font-display text-lg font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-relaxed text-white/55">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Mobile / tablet: vertical node timeline ── */}
      <div className="relative mt-16 lg:hidden">
        <div className="absolute bottom-8 left-[31px] top-8 w-px bg-white/12" />
        <RevealGroup className="space-y-9" stagger={0.16}>
          {lifecycle.steps.map((step) => (
            <RevealItem key={step.num} className="relative flex items-start gap-5">
              <div className="relative z-10">
                <NodeCircle step={step} size="sm" />
              </div>
              <div className="pt-1.5">
                <span className="ak-mono-label block text-ak-orange/70">Stage {step.num}</span>
                <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/55">{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
