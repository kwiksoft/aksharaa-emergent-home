import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-pf-esi-returns-filing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * PF & ESI Returns Filing hero — calm, spacious, deadline-clock motif.
 * The smallest category (2 services) gets the most breathing room of any
 * template — generous whitespace, a single focused "Upcoming Deadlines"
 * card rather than a busy dashboard, deliberate restraint.
 */
export const ReturnsHero = () => (
  <section id="svc-hero" data-testid="returns-hero-section" className="relative overflow-hidden bg-white pt-14 pb-4 md:pt-20">
    <div className="absolute left-0 top-0 h-full w-1.5 bg-ak-orange" />
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-6">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-5xl lg:text-[2.95rem]"
          >
            {hero.headline[0]}
            <br />
            <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-7 max-w-lg text-[15.5px] leading-[1.8] text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="returns-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="returns-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-ak-ink/[0.08] pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ak-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — deadline clock card */}
        <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: EASE }}>
          <div data-testid="returns-deadline-card" className="overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white shadow-[0_30px_70px_-30px_rgba(28,42,57,0.3)]">
            <div className="flex items-center gap-2.5 border-b border-ak-ink/[0.07] bg-ak-mist/30 px-6 py-4">
              <Icon name="clock" className="h-4 w-4 text-ak-ink/50" strokeWidth={2} />
              <span className="text-[13px] font-bold text-ak-ink">{hero.deadlineCard.title}</span>
            </div>

            <div className="divide-y divide-ak-ink/[0.06]">
              {hero.deadlineCard.rows.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: EASE }}
                  className={`flex items-start gap-4 px-6 py-4 ${r.urgent ? "bg-ak-orange/[0.04]" : ""}`}
                >
                  <div className="flex w-12 flex-shrink-0 flex-col items-center">
                    <span className="font-display text-xl font-extrabold leading-none text-ak-ink">{r.day}</span>
                    <span className="mt-0.5 text-[9px] font-medium uppercase text-ak-ink/35">{r.month}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-bold text-ak-ink">{r.name}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-ak-ink/45">{r.desc}</div>
                  </div>
                  <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold ${r.tag === "PF" ? "bg-ak-ink text-ak-orange" : "bg-ak-slate text-white"}`}>
                    {r.tag}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-ak-mist/30 px-6 py-3.5">
              <Icon name="shield" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={1.9} />
              <span className="text-[11.5px] font-medium text-ak-ink/55">{hero.deadlineCard.footer}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
