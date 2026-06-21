import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { hero } from "../../../data/payroll-hr-operations";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Payroll & HR Operations category hero — lighter-weight sibling of
 * Payroll Processing's dashboard motif. No live dashboard card here
 * (that's the service page's job) - just the headline, stats, and a
 * subtle ₹ watermark carried over as the category's visual signature.
 */
export const PayrollCatHero = () => (
  <section data-testid="payrollcat-hero-section" className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-16">
    <span className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[14rem] font-extrabold text-ak-ink/[0.025]">₹</span>
    <Container className="relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-5">
        {hero.eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="max-w-2xl font-display text-5xl font-extrabold leading-[0.96] tracking-tight text-ak-ink md:text-6xl lg:text-[3.6rem]"
      >
        {hero.headline[0]} <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
        <br />
        {hero.headline[2]}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="mt-6 max-w-lg text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
      >
        {hero.sub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="payrollcat-hero-cta-primary">
          {hero.ctas[0].label}
        </AkButton>
        <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="payrollcat-hero-cta-secondary">
          {hero.ctas[1].label}
        </AkButton>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 grid grid-cols-2 gap-6 border-t border-ak-ink/10 pt-7 sm:grid-cols-4">
        {hero.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-2xl font-extrabold text-ak-ink">
              {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
            </div>
            <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
