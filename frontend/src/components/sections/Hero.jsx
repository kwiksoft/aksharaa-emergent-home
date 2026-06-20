import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Counter } from "../common/Counter";
import { Icon } from "../../lib/icons";
import { hero } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];
const CREAM = "#FBF4EA";

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const DomainCard = ({ d, i = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.4 + i * 0.12, ease: EASE }}
    whileHover={{ x: -4 }}
    className="flex items-start gap-3.5 rounded-2xl border border-ak-ink/[0.06] bg-white/95 p-4 shadow-[0_22px_46px_-26px_rgba(28,42,57,0.45)] backdrop-blur-sm transition-shadow hover:shadow-[0_28px_54px_-26px_rgba(242,140,40,0.45)]"
  >
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
      <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.85} />
    </span>
    <div className="min-w-0">
      <div className="text-sm font-bold leading-tight text-ak-ink">{d.title}</div>
      <div className="mt-1 text-[11px] leading-snug text-ak-ink/50">{d.desc}</div>
    </div>
  </motion.div>
);

const StatBar = ({ className = "" }) => (
  <div
    className={`grid grid-cols-2 gap-y-7 rounded-[1.5rem] border border-ak-ink/[0.06] bg-white/80 p-6 shadow-[0_30px_60px_-38px_rgba(28,42,57,0.45)] backdrop-blur-md sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-ak-ink/10 md:p-7 ${className}`}
  >
    {hero.stats.map((s) => (
      <div key={s.label} className="flex items-start gap-3 sm:px-5 sm:first:pl-0">
        <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ak-orange/30 text-ak-orange">
          <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.7} />
        </span>
        <div className="min-w-0">
          <div className="font-display text-2xl font-bold tracking-tight text-ak-ink md:text-3xl">
            {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
          </div>
          <div className="mt-1 text-[11.5px] font-medium leading-snug text-ak-ink/55">{s.label}</div>
        </div>
      </div>
    ))}
  </div>
);

export const Hero = () => (
  <section id="hero" data-testid="hero-section" className="relative overflow-hidden bg-[#FBF4EA] lg:min-h-[860px]">
    {/* warm ambient design */}
    <div className="pointer-events-none absolute -right-20 -top-40 h-[46rem] w-[46rem] rounded-full bg-[#F6C28B]/40 blur-[2px]" />
    <div
      className="pointer-events-none absolute right-1/4 top-28 hidden h-72 w-72 lg:block"
      style={{
        backgroundImage: "radial-gradient(rgba(242,140,40,0.4) 1.5px, transparent 1.6px)",
        backgroundSize: "18px 18px",
        WebkitMaskImage: "radial-gradient(circle at center, black, transparent 70%)",
        maskImage: "radial-gradient(circle at center, black, transparent 70%)",
      }}
    />
    <svg className="pointer-events-none absolute left-[30%] top-1/4 hidden h-[40rem] w-[40rem] opacity-[0.5] lg:block" viewBox="0 0 400 400" fill="none" aria-hidden="true">
      {[150, 195, 240].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="#F28C28" strokeOpacity="0.1" strokeWidth="1" />
      ))}
    </svg>

    {/* ── desktop full-bleed building ── */}
    <div className="absolute bottom-0 right-0 hidden h-[92%] w-[55%] lg:block">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="h-full w-full object-cover object-[left_bottom]"
        style={{ filter: "sepia(0.5) saturate(1.7) hue-rotate(-12deg) brightness(1.07) contrast(1.02)" }}
      />
      <div className="absolute inset-y-0 left-0 w-2/5" style={{ background: `linear-gradient(to right, ${CREAM}, ${CREAM}99 35%, transparent)` }} />
      <div className="absolute inset-x-0 top-0 h-1/3" style={{ background: `linear-gradient(to bottom, ${CREAM}, transparent)` }} />
    </div>

    {/* ── desktop far-right domain cards ── */}
    <div className="absolute right-5 top-[14%] z-20 hidden w-[16.5rem] flex-col gap-4 lg:flex xl:right-10">
      {hero.domains.map((d, i) => (
        <DomainCard key={d.title} d={d} i={i} />
      ))}
    </div>

    <Container className="relative z-10">
      {/* ── left copy ── */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-[40rem] pt-14 md:pt-20 lg:pt-24"
      >
        <motion.div variants={item} className="ak-kicker mb-6">
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ak-ink md:text-6xl lg:text-7xl"
        >
          <span className="block">{hero.headline[0]}</span>
          <span className="block">{hero.headline[1]}</span>
          <span className="block ak-outline-orange">{hero.headline[2]}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-lg text-base leading-relaxed text-ak-ink/60 md:text-lg">
          {hero.sub}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={hero.ctas[0].href}
            data-testid="hero-cta-primary"
            className="inline-flex items-center gap-2 rounded-full bg-ak-orange px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(242,140,40,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ak-orange-dark"
          >
            {hero.ctas[0].label}
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
          <a
            href={hero.ctas[1].href}
            data-testid="hero-cta-secondary"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-ak-ink transition-colors hover:text-ak-orange"
          >
            {hero.ctas[1].label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
          </a>
        </motion.div>
      </motion.div>

      {/* ── mobile building + cards ── */}
      <div className="mt-12 lg:hidden">
        <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="aspect-[5/4] w-full object-cover object-[center_bottom]"
            style={{ filter: "sepia(0.5) saturate(1.7) hue-rotate(-12deg) brightness(1.07)" }}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hero.domains.map((d, i) => (
            <DomainCard key={d.title} d={d} i={i} />
          ))}
        </div>
      </div>

      {/* ── stat bar (bottom-left on desktop) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        className="relative z-20 mb-14 mt-12 lg:mb-24 lg:mt-20 lg:max-w-[62%]"
      >
        <StatBar />
      </motion.div>
    </Container>
  </section>
);
