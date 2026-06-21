import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stateStyles = {
  done: { dot: "bg-ak-orange", text: "text-ak-ink/40 line-through" },
  active: { dot: "bg-ak-orange ring-4 ring-ak-orange/20", text: "text-ak-ink" },
  pending: { dot: "bg-ak-ink/10", text: "text-ak-ink/35" },
};

/**
 * PF & ESI Registration hero — TEMPLATE PATTERN for all Registrations services.
 *
 * Asymmetric 3-zone composition (distinct from both home's hero and the
 * category hero): photograph anchors bottom-left bleeding off-canvas,
 * headline sits top-left overlapping the photo's top edge, and the live
 * "registration tracker" checklist card floats top-right breaking out of
 * the grid — its steps animate in sequence (done -> done -> done -> active
 * pulsing -> pending), visually dramatizing "where you are in the process"
 * rather than being a static stat card.
 */
export const RegSvcHero = () => (
  <section
    id="svc-hero"
    data-testid="reg-svc-hero-section"
    className="relative overflow-hidden bg-[#FBF4EA] pt-8 md:pt-12"
  >
    <Container className="relative z-10">
      <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div variants={item} className="ak-kicker mb-5">
          {hero.eyebrow}
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* LEFT — headline overlapping photo */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative z-20 font-display text-5xl font-extrabold uppercase leading-[0.94] tracking-tight text-ak-ink md:text-6xl lg:text-[4.4rem]"
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
            <br />
            <span className="ak-outline-orange text-3xl md:text-4xl lg:text-[2.6rem]">{hero.accentWord}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="relative z-20 mt-6 max-w-md text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="relative z-20 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="reg-svc-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="reg-svc-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          {/* photograph — bleeds bottom, headline overlaps its top edge */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="relative -mb-8 mt-10 aspect-[16/10] overflow-hidden rounded-2xl lg:-mb-12"
          >
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ak-ink/35 via-transparent to-transparent" />
          </motion.div>

          {/* stat row beneath photo */}
          <div className="relative z-20 mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-ak-ink/10 pt-6 lg:mt-16">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl font-bold text-ak-ink">
                  {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
                </div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-ak-ink/45">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — live registration tracker */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="lg:sticky lg:top-28"
        >
          <div
            data-testid="reg-svc-tracker-card"
            className="rounded-3xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_30px_70px_-30px_rgba(28,42,57,0.3)] md:p-7"
          >
            <div className="flex items-start gap-3 border-b border-ak-ink/[0.07] pb-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ak-ink text-white">
                <Icon name="checkCircle" className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div>
                <div className="font-display text-base font-bold text-ak-ink">{hero.tracker.title}</div>
                <div className="text-xs text-ak-ink/45">{hero.tracker.sub}</div>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {hero.tracker.steps.map((s, i) => {
                const st = stateStyles[s.state];
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: EASE }}
                    className="flex items-start gap-3"
                  >
                    <span className={`mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${st.dot}`} />
                    <div className="min-w-0">
                      <div className={`text-[13px] font-semibold leading-tight ${st.text}`}>{s.title}</div>
                      <div className="mt-0.5 text-[11px] leading-snug text-ak-ink/40">{s.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="ak-mono-label mt-5 inline-flex items-center gap-1.5 rounded-full bg-ak-orange/10 px-3.5 py-1.5 text-ak-orange">
              <Icon name="clock" className="h-3 w-3" strokeWidth={2.2} />
              {hero.tracker.badge}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
