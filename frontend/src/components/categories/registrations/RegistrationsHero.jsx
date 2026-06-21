import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/registrations";

const EASE = [0.22, 1, 0.36, 1];
const INK = "#1C2A39";

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/**
 * Registrations & Licensing hero — "Official / Certified / Stamped" motif.
 * Differentiator vs. home hero: a rotating seal/stamp graphic instead of
 * floating domain cards, and a vertical registry-ledger strip on the right
 * instead of a horizontal stat bar — reinforcing the "certificate issued"
 * feeling specific to this category.
 */
const SealMark = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
    animate={{ opacity: 1, scale: 1, rotate: -8 }}
    transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
    className="absolute -right-4 top-10 hidden h-36 w-36 items-center justify-center rounded-full border-[3px] border-dashed border-ak-orange/40 lg:flex xl:-right-2 xl:h-44 xl:w-44"
  >
    <div className="flex h-[82%] w-[82%] flex-col items-center justify-center rounded-full border-2 border-ak-orange/70 text-center">
      <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ak-orange">Registered</span>
      <span className="mt-1 font-display text-2xl font-extrabold text-ak-ink">26</span>
      <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ak-ink/50">Licenses</span>
    </div>
  </motion.div>
);

const RegistryRow = ({ d, i }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.4 + i * 0.14, ease: EASE }}
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

export const RegistrationsHero = () => (
  <section
    id="registrations-hero"
    data-testid="registrations-hero-section"
    className="relative overflow-hidden bg-[#FBF4EA] lg:min-h-[820px]"
  >
    {/* faint dashed registry-grid backdrop, distinct from home's photographic hero */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 38px, #1C2A39 38px, #1C2A39 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, #1C2A39 38px, #1C2A39 39px)",
      }}
    />

    <SealMark />

    {/* far-right registry strip on desktop */}
    <div className="absolute right-5 top-[16%] z-20 hidden w-[16.5rem] flex-col gap-4 lg:flex xl:right-10">
      {hero.domains.map((d, i) => (
        <RegistryRow key={d.title} d={d} i={i} />
      ))}
    </div>

    <Container className="relative z-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-[42rem] pt-14 md:pt-20 lg:pt-24"
      >
        <motion.div variants={item} className="ak-kicker mb-4">
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ak-ink md:text-6xl lg:text-[4.6rem]"
        >
          <span className="block">{hero.headline[0]}</span>
          <span className="block">{hero.headline[1]}</span>
          <span className="block ak-outline-orange">{hero.headline[2]}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-ak-ink/60 md:text-lg">
          {hero.sub}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="reg-hero-cta-primary">
            {hero.ctas[0].label}
          </AkButton>
          <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="reg-hero-cta-secondary">
            {hero.ctas[1].label}
          </AkButton>
        </motion.div>
      </motion.div>

      {/* mobile registry strip */}
      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        {hero.domains.map((d, i) => (
          <RegistryRow key={d.title} d={d} i={i} />
        ))}
      </div>

      {/* registry-ledger stat strip — vertical-feel cards, not a horizontal bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        className="relative z-20 mb-14 mt-12 grid grid-cols-2 gap-3 lg:mb-24 lg:mt-20 lg:max-w-[64%] lg:grid-cols-4 lg:gap-4"
      >
        {hero.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-ak-ink/[0.07] bg-white/85 p-4 shadow-[0_20px_40px_-28px_rgba(28,42,57,0.4)] backdrop-blur-md"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ak-orange/30 text-ak-orange">
              <Icon name={s.icon} className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="mt-3 font-display text-2xl font-bold tracking-tight text-ak-ink">
              {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
            </div>
            <div className="mt-1 text-[11px] font-medium leading-snug text-ak-ink/55">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
