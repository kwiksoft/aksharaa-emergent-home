import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Counter } from "../common/Counter";
import { Sparkline } from "../common/Sparkline";
import { partner } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

/* Floating chip: staggered fade + slide-up entry, lift on hover (mirrors video chips). */
const chipVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.94 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.35 + i * 0.18, ease: EASE },
  }),
};

const AvatarStack = () => (
  <div className="flex items-center">
    <div className="flex -space-x-2.5">
      {["bg-ak-ink", "bg-ak-orange", "bg-ak-slate"].map((c, i) => (
        <span
          key={i}
          className={`flex h-7 w-7 items-center justify-center rounded-full ${c} ring-2 ring-white`}
        >
          <Users className="h-3 w-3 text-white/85" strokeWidth={2} />
        </span>
      ))}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ak-mist text-[10px] font-bold text-ak-ink ring-2 ring-white">
        +
      </span>
    </div>
  </div>
);

export const GovernancePartner = () => (
  <section id="partner" data-testid="partner-section" className="relative overflow-hidden bg-white py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-50" />

    <Container className="relative">
      <div className="grid grid-cols-1 items-center gap-y-20 gap-x-12 lg:grid-cols-12 lg:gap-16">
        {/* ── Visual side: compliance team image + floating data chips ── */}
        <Reveal className="lg:col-span-6">
          <div className="relative">
            {/* decorative orange frame */}
            <motion.div
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-2xl border border-ak-orange/30 lg:block"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            />

            {/* image with scale-reveal */}
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_90px_-45px_rgba(28,42,57,0.55)]">
              <motion.img
                src={partner.image}
                alt={partner.imageAlt}
                className="aspect-[4/5] w-full object-cover md:aspect-[5/5]"
                initial={{ scale: 1.18, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE }}
              />

              {/* legibility gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ak-ink/55 via-transparent to-ak-ink/15" />

              {/* infused Aksharaa brand badge */}
              <motion.div
                data-testid="partner-brand-badge"
                className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md"
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              >
                <img src="/assets/aksharaa-logo.png" alt="Aksharaa" className="h-6 w-auto object-contain" draggable="false" />
              </motion.div>

              {/* infused caption */}
              <div className="absolute bottom-4 left-4">
                <div className="ak-mono-label text-white/70">Aksharaa</div>
                <div className="font-display text-sm font-semibold text-white">{partner.badgeCaption}</div>
              </div>
            </div>

            {/* floating trust badge (pulsing) — top right */}
            <motion.div
              data-testid="partner-trust-badge"
              className="absolute -right-3 -top-6 rounded-2xl border border-ak-ink/8 bg-white/90 p-4 shadow-[0_22px_45px_-22px_rgba(28,42,57,0.45)] backdrop-blur-md md:-right-7"
              variants={chipVariants}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <AvatarStack />
              <div className="mt-2.5 font-display text-2xl font-bold tracking-tight text-ak-ink">
                <Counter value={partner.trust.value} suffix={partner.trust.suffix} />
              </div>
              <div className="mt-0.5 max-w-[7.5rem] text-[11px] font-medium leading-snug text-ak-ink/55">
                {partner.trust.label}
              </div>
              {/* pulsing live dot */}
              <span className="absolute right-3 top-3 flex h-2.5 w-2.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-ak-orange/60"
                  animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ak-orange" />
              </span>
            </motion.div>

            {/* floating retention chip + sparkline — bottom right */}
            <motion.div
              data-testid="partner-retention-chip"
              variants={chipVariants}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-8 -right-4 rounded-2xl border border-ak-ink/8 bg-white/90 p-5 shadow-[0_22px_50px_-22px_rgba(28,42,57,0.45)] backdrop-blur-md md:-right-8 md:p-6"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-ak-ink md:text-5xl">
                <Counter value={partner.accent.value} suffix={partner.accent.suffix} />
              </div>
              <div className="mt-1 max-w-[8rem] text-xs font-medium leading-snug text-ak-ink/55">
                {partner.accent.label}
              </div>
              <Sparkline data={[80, 83, 81, 88, 90, 93, 96, 98]} className="mt-3 h-9 w-full" />
              <div className="ak-mono-label mt-2 text-ak-ink/40">8-yr retention trend</div>
            </motion.div>
          </div>
        </Reveal>

        {/* ── Copy side ── */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="ak-kicker mb-5">{partner.kicker}</div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ak-ink md:text-4xl lg:text-[44px]">
              {partner.heading}
            </h2>
          </Reveal>

          {partner.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-7 border-l-2 border-ak-orange bg-ak-mist/60 py-4 pl-5 pr-4">
              <p className="font-display text-base font-medium italic leading-snug text-ak-ink">
                {partner.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ak-ink/8 pt-7">
              {partner.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-3xl font-bold tracking-tight text-ak-ink md:text-4xl">
                    <Counter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium text-ak-ink/50">{m.label}</div>
                </div>
              ))}
            </div>
            <motion.a
              href={partner.cta.href}
              data-testid="partner-cta"
              whileHover={{ y: -2 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ak-ink/15 px-7 py-3.5 text-sm font-medium text-ak-ink transition-colors hover:border-ak-ink hover:bg-ak-ink hover:text-white"
            >
              {partner.cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </motion.a>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
