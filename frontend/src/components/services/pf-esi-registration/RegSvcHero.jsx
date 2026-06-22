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

/**
 * PF & ESI Registration hero — TEMPLATE PATTERN for all Registrations services.
 *
 * REVISED LAYOUT (per human feedback, round 1):
 *   Row 1: headline+CTAs (left) / framed photo with orange accent square
 *          + overlapping circular accent (right) — Image-1 style framing,
 *          Aksharaa orange instead of the reference's blue.
 *   Row 2: Registration Scope tracker card, now FULL WIDTH beneath row 1
 *          (was previously a narrow sticky card floating top-right).
 *   Row 3: stat row restyled as ONE unified bordered strip with vertical
 *          dividers between each stat (Image-5 style), replacing the
 *          previous loosely-spaced plain stat blocks.
 */
export const RegSvcHero = () => (
  <section
    id="svc-hero"
    data-testid="reg-svc-hero-section"
    className="relative overflow-hidden bg-[#FBF4EA] pt-8 pb-16 md:pt-12 md:pb-20"
  >
    <Container className="relative z-10">
      <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div variants={item} className="ak-kicker mb-5">
          {hero.eyebrow}
        </motion.div>
      </motion.div>

      {/* ROW 1 — headline+CTAs left / framed photo right */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* LEFT — headline, sub, CTAs */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-5xl font-extrabold uppercase leading-[0.94] tracking-tight text-ak-ink md:text-6xl lg:text-[4.4rem]"
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
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="reg-svc-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="reg-svc-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>
        </div>

        {/* RIGHT — framed photo, Image-1 style: orange outline square behind
            + small overlapping circular accent photo, no blue, no badge
            (stats now have their own section below, so no duplicate badge here) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* orange outline square sitting behind/around the photo */}
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-[88%] w-[78%] rounded-2xl border-2 border-ak-orange/70 md:-left-6 md:-top-6"
          />

          {/* main photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(28,42,57,0.25)]">
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ak-ink/25 via-transparent to-transparent" />
          </div>

          {/* small overlapping circular accent photo, bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="absolute -bottom-6 -right-5 h-28 w-28 overflow-hidden rounded-full border-[5px] border-[#FBF4EA] shadow-xl md:-bottom-8 md:-right-7 md:h-36 md:w-36"
          >
            <img src={hero.image} alt="" className="h-full w-full scale-110 object-cover" />
          </motion.div>

          {/* small floating dot accents, matching image-1's decorative dots */}
          <span className="absolute -right-1 -top-3 hidden h-3 w-3 rounded-full bg-ak-orange md:block" />
          <span className="absolute -bottom-2 left-6 hidden h-2.5 w-2.5 rounded-full bg-ak-ink/20 md:block" />
        </motion.div>
      </div>

      {/* ROW 2 — Registration Scope tracker, now full-width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        className="mt-14 md:mt-20"
      >
        <div
          data-testid="reg-svc-tracker-card"
          className="rounded-3xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_30px_70px_-30px_rgba(28,42,57,0.25)] md:p-8"
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

          {/* steps row — circular icon avatars on a dashed connector, numbered,
              active step elevated as a featured card (Image-2 style), while
              done/active/pending states and copy are unchanged from before */}
          <div className="relative mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-2">
            {/* dashed connector line, desktop only, sits behind the circles */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-ak-ink/15 lg:block"
            />

            {hero.tracker.steps.map((s, i) => {
              const isDone = s.state === "done";
              const isActive = s.state === "active";
              const isPending = s.state === "pending";
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.08, ease: EASE }}
                  className={`relative z-10 flex flex-col items-center text-center lg:flex-1 ${
                    isActive
                      ? "rounded-2xl bg-gradient-to-b from-ak-orange/[0.06] to-transparent px-3 pb-5 pt-3 ring-1 ring-ak-orange/15"
                      : "px-2"
                  }`}
                >
                  {/* star ribbon, active step only */}
                  {isActive && (
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-md bg-ak-orange text-white shadow-md">
                      <Icon name="badge" className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                  )}

                  {/* circular icon avatar */}
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-ak-orange text-white shadow-[0_10px_24px_-6px_rgba(242,140,40,0.55)] ring-4 ring-ak-orange/15"
                        : isDone
                        ? "bg-ak-orange/10 text-ak-orange"
                        : "bg-ak-ink/[0.05] text-ak-ink/30"
                    }`}
                  >
                    <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.8} />
                  </span>

                  {/* small state dot beneath circle, matching connector line height */}
                  <span
                    className={`mt-2 h-2 w-2 rounded-full ${
                      isActive ? "bg-ak-orange" : isDone ? "bg-ak-orange/70" : "bg-ak-ink/15"
                    }`}
                  />

                  {/* number */}
                  <div
                    className={`mt-2 font-display text-sm font-extrabold ${
                      isPending ? "text-ak-ink/25" : "text-ak-orange"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* title */}
                  <div
                    className={`mt-1 text-[13px] font-semibold leading-tight ${
                      isPending ? "text-ak-ink/35" : isDone ? "text-ak-ink/40 line-through" : "text-ak-ink"
                    }`}
                  >
                    {s.title}
                  </div>

                  {/* description */}
                  <div className={`mt-1 text-[11px] leading-snug ${isPending ? "text-ak-ink/30" : "text-ak-ink/40"}`}>
                    {s.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="ak-mono-label mt-6 inline-flex items-center gap-1.5 rounded-full bg-ak-orange/10 px-3.5 py-1.5 text-ak-orange">
            <Icon name="clock" className="h-3 w-3" strokeWidth={2.2} />
            {hero.tracker.badge}
          </div>
        </div>
      </motion.div>

      {/* ROW 3 — unified stat strip, Image-5 style: one bordered card,
          vertical dividers between each stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
        className="mt-8"
      >
        <div
          data-testid="reg-svc-hero-stats-strip"
          className="grid grid-cols-1 divide-y divide-ak-ink/[0.08] rounded-2xl border border-ak-ink/[0.07] bg-white shadow-[0_20px_50px_-30px_rgba(28,42,57,0.2)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="px-7 py-6 text-center">
              <div className="font-display text-2xl font-extrabold text-ak-ink md:text-[1.7rem]">
                {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ak-ink/45">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);
