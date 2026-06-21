import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-flexi-staffing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Flexi Staffing hero — warmest, most people-centric of the templates so
 * far (per the design principle that Staffing should lead with human
 * photography). Full-bleed photo right, "What Aksharaa Handles" feature
 * list overlaying its edge, orange top accent bar.
 */
export const FlexiHero = () => (
  <section id="svc-hero" data-testid="flexi-hero-section" className="relative overflow-hidden bg-white pt-3">
    <div className="h-1.5 w-full bg-gradient-to-r from-ak-orange via-ak-orange to-ak-orange/30" />
    <Container className="pt-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-5">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ak-ink md:text-5xl lg:text-[3.2rem]"
          >
            {hero.headline[0]}
            <br />
            <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
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
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="flexi-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="flexi-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          {/* stat row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 grid grid-cols-2 gap-5 border-t border-ak-ink/10 pt-6 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl font-extrabold text-ak-ink">
                  {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
                </div>
                <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo with overlaying feature card */}
        <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EASE }} className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-ak-ink/60 via-transparent to-transparent" />

          <div className="absolute -bottom-8 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-ak-ink/[0.07] bg-white p-5 shadow-2xl md:p-6">
            <div className="ak-mono-label">{hero.handles.title}</div>
            <div className="mt-3 space-y-3">
              {hero.handles.items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ak-orange/10 text-ak-orange">
                    <Icon name={it.icon} className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <div>
                    <div className="text-[12.5px] font-bold text-ak-ink">{it.title}</div>
                    <div className="text-[11px] leading-snug text-ak-ink/45">{it.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-ak-ink/[0.07] pt-3">
              <span className="text-[11px] font-medium text-ak-ink/45">{hero.handles.footerText}</span>
              <span className="rounded-full bg-ak-orange/10 px-2.5 py-1 text-[10px] font-bold text-ak-orange">{hero.handles.badge}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-12 lg:h-16" />
    </Container>
  </section>
);
