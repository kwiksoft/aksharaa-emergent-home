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
    <div className="pointer-events-none absolute inset-0">
      <img
        src={hero.bgAbstract}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover opacity-[0.16]"
      />
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/55" />
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-50" />
    <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-ak-orange/[0.07] blur-3xl" />
    <div className="pointer-events-none absolute -right-10 top-1/4 h-[28rem] w-[28rem] rounded-full bg-ak-slate/[0.06] blur-3xl" />

    <Container className="relative py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-6"
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
            className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ak-ink md:text-6xl lg:text-7xl"
          >
            <span className="block">{hero.headline[0]}</span>
            <span className="block">
              {hero.headline[1]}{" "}
              <span className="ak-outline-orange">{hero.headline[2]}</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ak-ink/60 md:text-lg"
          >
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
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.2}
              />
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
          className="lg:col-span-6"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-ak-ink/8 shadow-[0_40px_80px_-40px_rgba(28,42,57,0.45)]"
            >
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="aspect-[5/4] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ak-ink/40 via-transparent to-ak-slate/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-3 top-8 z-20 hidden rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-md lg:block"
            >
              <div className="font-display text-3xl font-bold tracking-tight text-ak-ink">
                <Counter value={98} suffix="%" />
              </div>
              <div className="mt-0.5 max-w-[7.5rem] text-[11px] font-medium leading-snug text-ak-ink/55">
                Client Retention &amp; Satisfaction
              </div>
              <div className="mt-2 h-1 w-10 rounded-full bg-ak-orange" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              data-testid="hero-domains-card"
              className="mt-6 w-full rounded-2xl border border-white/50 bg-white/85 p-5 shadow-[0_30px_60px_-30px_rgba(28,42,57,0.4)] backdrop-blur-md lg:absolute lg:bottom-8 lg:-left-6 lg:mt-0 lg:w-[330px]"
            >
              <div className="ak-kicker-bare mb-4 flex items-center justify-between">
                {hero.cardLabel}
                <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" />
              </div>
              <div className="space-y-1">
                {hero.domains.map((d) => (
                  <div
                    key={d.title}
                    className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-ak-mist"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ak-ink text-white transition-colors group-hover:bg-ak-orange">
                      <Icon name={d.icon} className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-semibold text-ak-ink">
                        {d.title}
                      </span>
                      <span className="block truncate text-[11px] text-ak-ink/50">{d.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-5 right-10 z-20 hidden items-center gap-2 rounded-full border border-ak-ink/8 bg-white px-4 py-2 text-xs font-semibold text-ak-ink shadow-lg lg:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" /> Pan-India · Multi-State Coverage
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
