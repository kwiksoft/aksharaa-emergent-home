import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/labour-law";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Labour Law & HR Compliance category hero — sibling to PF Compliance's
 * service-page identity: same grid+dot dark texture, same law-citation
 * card pattern, but scoped to the category (18 services) rather than one
 * service. This is the category-level inheritance pattern: visual DNA
 * carries over, content/scope differs.
 */
export const LabourLawHero = () => (
  <section id="labour-hero" data-testid="labourlaw-hero-section" className="relative overflow-hidden bg-ak-ink pt-12 pb-16 md:pt-16">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px), radial-gradient(rgba(255,255,255,1) 1.2px, transparent 1.2px)",
        backgroundSize: "60px 60px, 60px 60px, 30px 30px",
      }}
    />
    <div className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative z-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="inline-flex items-center gap-2 rounded-full border border-ak-orange/25 bg-ak-orange/[0.08] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ak-orange/85">{hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[3.6rem]"
          >
            <span className="block">{hero.headline[0]}</span>
            <span className="block">
              {hero.headline[1]} <span className="ak-outline-orange">{hero.headline[2]}</span>
            </span>
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
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="labourlaw-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="darkSecondary" data-testid="labourlaw-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          {/* photograph */}
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

          {/* stat row */}
          <div className="relative z-20 mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl font-extrabold text-white">
                  {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
                </div>
                <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — law citation card */}
        <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
            <div className="ak-mono-label--light mb-5">18 Services · One Engagement</div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ak-navy/60 p-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ak-orange text-[10px] font-extrabold text-white">
                {hero.lawBadge}
              </span>
              <div>
                <div className="text-[13px] font-bold text-white">{hero.lawText}</div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-white/45">{hero.lawDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
