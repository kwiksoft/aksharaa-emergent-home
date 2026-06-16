import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Counter } from "../common/Counter";
import { Icon } from "../../lib/icons";
import { hero } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const Hero = () => (
  <section id="hero" data-testid="hero-section" className="relative overflow-hidden bg-white">
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-70" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ak-ink/10 to-transparent" />
    <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-ak-orange/[0.06] blur-3xl" />
    <div className="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-ak-slate/[0.07] blur-3xl" />

    <Container className="relative py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-7"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ak-ink/10 bg-white px-4 py-1.5 text-xs font-medium text-ak-ink/70 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ak-orange opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ak-orange" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display font-bold tracking-tight text-ak-ink"
          >
            <span className="block text-2xl font-semibold text-ak-ink/50 md:text-3xl">
              {hero.headline[0]}
            </span>
            <span className="mt-1 block text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              {hero.headline[1]}
            </span>
            <span className="block text-5xl leading-[0.95] text-ak-orange md:text-6xl lg:text-7xl">
              {hero.headline[2]}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ak-ink/60 md:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.ctas[0].href}
              data-testid="hero-cta-primary"
              className="inline-flex items-center gap-2 rounded-full bg-ak-orange px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-6px_rgba(242,140,40,0.55)] transition-all hover:-translate-y-0.5 hover:bg-ak-orange-dark md:text-[15px]"
            >
              {hero.ctas[0].label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
            <a
              href={hero.ctas[1].href}
              data-testid="hero-cta-secondary"
              className="inline-flex items-center rounded-full border border-ak-ink/15 px-7 py-3.5 text-sm font-medium text-ak-ink transition-all hover:border-ak-ink hover:bg-ak-ink hover:text-white md:text-[15px]"
            >
              {hero.ctas[1].label}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ak-ink/8 bg-ak-ink/8 sm:grid-cols-4"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="bg-white px-4 py-5">
                <div className="font-display text-2xl font-bold tracking-tight text-ak-ink md:text-[26px]">
                  {s.text ? (
                    s.text
                  ) : (
                    <Counter value={s.value} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ak-ink/45">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 z-20 hidden items-center gap-1.5 rounded-xl border border-ak-ink/8 bg-white px-4 py-2 text-xs font-semibold text-ak-ink shadow-md sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" /> Pan-India Coverage
            </div>
            <div className="relative z-10 rounded-[1.75rem] border border-ak-ink/8 bg-white/90 p-6 shadow-[0_30px_60px_-30px_rgba(28,42,57,0.35)] backdrop-blur-sm md:p-7">
              <div className="ak-kicker-bare mb-5 flex items-center justify-between">
                {hero.cardLabel}
                <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" />
              </div>
              <div className="space-y-1.5">
                {hero.domains.map((d) => (
                  <div
                    key={d.title}
                    className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-ak-mist"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-ak-ink text-white transition-colors group-hover:bg-ak-orange">
                      <Icon name={d.icon} className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ak-ink">{d.title}</span>
                      <span className="block text-xs text-ak-ink/50">{d.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  </section>
);
