import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-pf-compliance";

const EASE = [0.22, 1, 0.36, 1];

/**
 * PF Compliance hero — DARK, statutory-weight identity (distinct from
 * Registrations' light/cream tracker treatment). Grid+dot pattern backdrop,
 * diagonal accent, photograph bottom-left bleeding into dark, "Track Record"
 * stat card floating right with a law-citation footer band.
 */
export const PfCompHero = () => (
  <section id="svc-hero" data-testid="pfcomp-hero-section" className="relative overflow-hidden bg-ak-ink pt-12 pb-16 md:pt-16">
    {/* grid + dot texture */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px), radial-gradient(rgba(255,255,255,1) 1.2px, transparent 1.2px)",
        backgroundSize: "60px 60px, 60px 60px, 30px 30px",
      }}
    />
    <div className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-ak-orange/10 blur-3xl" />
    <div className="absolute left-0 top-0 h-full w-1/3 origin-top-left bg-white/[0.02]" style={{ clipPath: "polygon(0 0, 60% 0, 0 100%)" }} />

    <Container className="relative z-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-ak-orange/25 bg-ak-orange/[0.08] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ak-orange/85">{hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline[0]} <span className="ak-outline-orange">{hero.headline[1]}</span>
            <br />
            {hero.headline[2]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/55 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="pfcomp-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="darkSecondary" data-testid="pfcomp-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5"
          >
            {hero.meta_tags.map((t) => (
              <span key={t} className="flex items-center gap-2 text-[12px] font-medium text-white/40">
                <Icon name="refreshCw" className="h-3 w-3 text-ak-orange/60" strokeWidth={2} />
                {t}
              </span>
            ))}
          </motion.div>

          {/* photograph — bleeds left, dark integration */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
            className="relative mt-10 aspect-[16/9] max-w-md overflow-hidden rounded-2xl"
          >
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ak-ink via-ak-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-ak-orange" />
          </motion.div>
        </div>

        {/* RIGHT — track record card */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <div data-testid="pfcomp-trackrecord-card" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
            <div className="ak-mono-label--light mb-5">{hero.trackRecord.title}</div>
            <div className="grid grid-cols-2 gap-5">
              {hero.trackRecord.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: EASE }}
                >
                  <div
                    className={`font-display text-3xl font-extrabold tracking-tight ${
                      s.accent === "green" ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-white/40">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-ak-navy/60 p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ak-orange text-[10px] font-extrabold text-white">
                {hero.trackRecord.lawBadge}
              </span>
              <div>
                <div className="text-[13px] font-bold text-white">{hero.trackRecord.lawText}</div>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/45">{hero.trackRecord.lawDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
