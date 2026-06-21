import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { hero } from "../../../data/compliance-filings-taxation";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Filings & Taxation category hero — the most spacious treatment of all
 * 6 category pages, matching this being the smallest category (2
 * services). Sibling to Returns Filing's calm/deadline-driven identity -
 * orange left accent bar, generous whitespace, no dense visual elements.
 */
export const FilingsCatHero = () => (
  <section data-testid="filingscat-hero-section" className="relative overflow-hidden bg-white pt-14 pb-4 md:pt-20">
    <div className="absolute left-0 top-0 h-full w-1.5 bg-ak-orange" />
    <Container>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-6">
        {hero.eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-5xl lg:text-[3.2rem]"
      >
        {hero.headline[0]}
        <br />
        <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="mt-7 max-w-xl text-[15.5px] leading-[1.8] text-ak-ink/60 md:text-base"
      >
        {hero.sub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="filingscat-hero-cta-primary">
          {hero.ctas[0].label}
        </AkButton>
        <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="filingscat-hero-cta-secondary">
          {hero.ctas[1].label}
        </AkButton>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 flex flex-wrap gap-x-12 gap-y-5 border-t border-ak-ink/[0.08] pt-8">
        {hero.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-2xl font-extrabold text-ak-ink">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
