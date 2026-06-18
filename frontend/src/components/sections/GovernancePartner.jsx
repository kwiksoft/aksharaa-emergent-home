import { motion } from "framer-motion";
import { ArrowRight, Building2, Quote } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Counter } from "../common/Counter";
import { Sparkline } from "../common/Sparkline";
import { partner } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, x: 28, scale: 0.96 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 + i * 0.16, ease: EASE },
  }),
};

const StatCard = ({ testid, value, suffix, label, sparkline, trend, index }) => (
  <motion.div
    data-testid={testid}
    variants={cardVariants}
    custom={index}
    whileHover={{ y: -5 }}
    className="group rounded-2xl border border-ak-ink/10 bg-ak-mist/50 p-6 transition-all duration-400 hover:border-ak-orange/40 hover:bg-white hover:shadow-[0_28px_60px_-38px_rgba(28,42,57,0.5)] md:p-7"
  >
    <div className="flex items-baseline gap-1 font-display text-4xl font-bold tracking-tight text-ak-ink md:text-5xl">
      <Counter value={value} suffix={suffix} />
    </div>
    <div className="mt-1.5 text-sm font-medium leading-snug text-ak-ink/55">{label}</div>
    {sparkline && (
      <>
        <Sparkline data={[80, 83, 81, 88, 90, 93, 96, 98]} className="mt-3 h-9 w-full" />
        <div className="ak-mono-label mt-2 text-ak-ink/40">{trend}</div>
      </>
    )}
  </motion.div>
);

export const GovernancePartner = () => (
  <section id="partner" data-testid="partner-section" className="relative overflow-hidden bg-white py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-50" />

    <Container className="relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="ak-kicker mb-5 justify-center">{partner.kicker}</div>
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ak-ink md:text-4xl lg:text-[44px]">
          {partner.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
        {/* ── LEFT: quote · 500+ stat · CTA ── */}
        <div className="order-2 lg:order-1 lg:col-span-4">
          <Reveal>
            <div className="relative pl-1">
              <Quote className="absolute -left-1 -top-3 h-9 w-9 text-ak-orange/20" strokeWidth={1.5} />
              <p className="relative font-display text-xl font-medium italic leading-snug text-ak-ink md:text-2xl">
                {partner.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex items-center gap-4 border-t border-ak-ink/10 pt-7">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-ak-ink text-white">
                <Building2 className="h-6 w-6" strokeWidth={1.85} />
              </span>
              <div>
                <div className="font-display text-4xl font-bold tracking-tight text-ak-ink">
                  <Counter value={partner.trust.value} suffix={partner.trust.suffix} />
                </div>
                <div className="mt-0.5 text-sm font-medium leading-snug text-ak-ink/55">
                  {partner.trust.label}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
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

        {/* ── CENTER: branded compliance-team image ── */}
        <div className="order-1 lg:order-2 lg:col-span-4">
          <motion.div
            className="relative mx-auto max-w-[22rem]"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* ambient glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-ak-orange/15 blur-3xl" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[1.75rem] shadow-[0_45px_100px_-45px_rgba(28,42,57,0.6)]"
            >
              <img
                src={partner.image}
                alt={partner.imageAlt}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ak-ink/65 via-transparent to-ak-ink/20" />

              {/* infused Aksharaa brand badge */}
              <div
                data-testid="partner-brand-badge"
                className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md"
              >
                <img src="/assets/aksharaa-logo.png" alt="Aksharaa" className="h-6 w-auto object-contain" draggable="false" />
              </div>

              {/* infused caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="ak-mono-label text-white/70">Aksharaa</div>
                <div className="font-display text-sm font-semibold text-white">{partner.badgeCaption}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT: stacked metric cards (staggered) ── */}
        <motion.div
          className="order-3 flex flex-col gap-5 lg:col-span-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <StatCard
            testid="partner-stat-retention"
            value={partner.metrics[0].value}
            suffix={partner.metrics[0].suffix}
            label={partner.metrics[0].label}
            index={0}
          />
          <StatCard
            testid="partner-stat-experience"
            value={partner.metrics[1].value}
            suffix={partner.metrics[1].suffix}
            label={partner.metrics[1].label}
            index={1}
          />
          <StatCard
            testid="partner-stat-trend"
            value={partner.accent.value}
            suffix={partner.accent.suffix}
            label={partner.accent.label}
            sparkline
            trend="8-yr retention trend"
            index={2}
          />
        </motion.div>
      </div>
    </Container>
  </section>
);
