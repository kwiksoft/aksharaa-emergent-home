import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { risk } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

/* ── status badge (hero, left rail) ── */
const Badge = ({ icon, label }) => (
  <div className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center transition-colors hover:border-ak-orange/40 lg:flex-none">
    <Icon name={icon} className="h-6 w-6 text-ak-orange" strokeWidth={1.6} />
    <span className="ak-mono-label leading-tight text-white/55">{label}</span>
  </div>
);

/* ── hero mini feature ── */
const Pillar = ({ icon, title, desc }) => (
  <div className="px-0 md:px-5 md:first:pl-0">
    <Icon name={icon} className="mb-2.5 h-6 w-6 text-ak-orange" strokeWidth={1.7} />
    <div className="font-display text-sm font-bold uppercase tracking-wide text-white">{title}</div>
    <p className="mt-1 text-xs leading-relaxed text-white/45">{desc}</p>
  </div>
);

/* ── risk / mitigation list row ── */
const Row = ({ icon, label, tone }) => {
  const isRisk = tone === "risk";
  return (
    <RevealItem y={14}>
      <div
        className={`flex items-center gap-3.5 rounded-xl border-l-2 px-4 py-3 ${
          isRisk ? "border-red-500/70 bg-red-500/[0.05]" : "border-emerald-500/70 bg-emerald-500/[0.05]"
        }`}
      >
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
            isRisk ? "bg-red-500/15 text-red-300" : "bg-emerald-500/15 text-emerald-300"
          }`}
        >
          <Icon name={icon} className="h-4 w-4" strokeWidth={2} />
        </span>
        <span className="text-sm text-white/80">{label}</span>
      </div>
    </RevealItem>
  );
};

/* ── outcome benefit ── */
const Benefit = ({ icon, title, desc }) => (
  <div className="md:px-6 md:first:pl-0">
    <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ak-orange/40 text-ak-orange">
      <Icon name={icon} className="h-5 w-5" strokeWidth={1.8} />
    </span>
    <div className="font-display text-sm font-bold uppercase tracking-wide text-white">{title}</div>
    <p className="mt-1.5 text-xs leading-relaxed text-white/45">{desc}</p>
  </div>
);

export const RiskIntelligence = () => (
  <section id="risk" data-testid="risk-section" className="relative overflow-hidden bg-ak-navy py-20 md:py-28">
    {/* ambient background */}
    <img
      src="/assets/world-map.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -right-20 top-10 w-[55%] max-w-none select-none opacity-[0.06]"
      style={{ filter: "sepia(1) saturate(4) hue-rotate(-10deg)" }}
      draggable="false"
    />
    <div className="pointer-events-none absolute inset-0 ak-dots-dark opacity-60" />
    <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-ak-orange/10 blur-[120px]" />

    <Container className="relative">
      {/* ════ HERO (ref image 1) ════ */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
        {/* status rail */}
        <Reveal className="flex flex-row gap-3 lg:col-span-2 lg:flex-col lg:gap-4">
          {risk.badges.map((b) => (
            <Badge key={b.label} icon={b.icon} label={b.label} />
          ))}
        </Reveal>

        {/* portrait */}
        <div className="hidden lg:col-span-4 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src={risk.image}
              alt={risk.imageAlt}
              className="aspect-[4/5] w-full object-cover object-top brightness-90"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, transparent 35%, rgba(17,28,39,0.85) 100%)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-ak-navy via-transparent to-transparent" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-ak-orange/20" />
            <span className="absolute bottom-6 left-5 font-mono text-[11px] uppercase tracking-[0.32em] text-ak-orange/80">
              Aksharaa
            </span>
          </motion.div>
        </div>

        {/* copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="ak-kicker mb-5">{risk.kicker}</div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.96] tracking-tight text-white md:text-5xl lg:text-[3.4rem]">
              Risk Intelligence &amp; Compliance <span className="ak-outline-white">Control</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">{risk.sub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-7 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
              {risk.pillars.map((p) => (
                <Pillar key={p.title} {...p} />
              ))}
            </div>
            <a
              href={risk.cta.href}
              data-testid="risk-hero-cta"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-ak-orange/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ak-orange transition-all hover:-translate-y-0.5 hover:bg-ak-orange hover:text-white"
            >
              {risk.cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </Reveal>
        </div>
      </div>

      {/* ════ RESILIENCE EXPLAINER (ref image 2) ════ */}
      <Reveal className="mx-auto mt-24 max-w-3xl text-center md:mt-28">
        <div className="ak-kicker mb-5 justify-center">{risk.resilience.kicker}</div>
        <h3 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-4xl">
          {risk.resilience.titleA} <span className="text-ak-orange">{risk.resilience.titleB}</span>
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">{risk.resilience.sub}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_130px_1fr] lg:gap-4">
        {/* risk zones */}
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/55">
                  <AlertTriangle className="h-4 w-4" strokeWidth={2} />
                </span>
                <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">{risk.zones.head}</h4>
              </div>
              <span className="ak-mono-label text-white/35">{risk.zones.tag}</span>
            </div>
            <RevealGroup className="space-y-2.5" stagger={0.07}>
              {risk.zones.items.map((it) => (
                <Row key={it.label} icon={it.icon} label={it.label} tone="risk" />
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        {/* center shield hub */}
        <div className="relative hidden items-center justify-center lg:flex">
          <motion.div
            className="absolute h-28 w-28 rounded-full border border-dashed border-ak-orange/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-36 w-36 rounded-full border border-ak-orange/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
          <ChevronRight className="absolute -left-1 h-5 w-5 text-white/25" strokeWidth={2.5} />
          <ChevronRight className="absolute -right-1 h-5 w-5 text-ak-orange/60" strokeWidth={2.5} />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ak-orange/50 bg-ak-navy shadow-[0_0_40px_-8px_rgba(242,140,40,0.6)]">
            <ShieldCheck className="h-7 w-7 text-ak-orange" strokeWidth={1.8} />
          </span>
        </div>

        {/* mitigation */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-ak-orange/20 bg-ak-slate/30 p-5 shadow-[0_30px_70px_-45px_rgba(242,140,40,0.35)] md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ak-orange/15 text-ak-orange">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">{risk.mitigation.head}</h4>
              </div>
              <span className="ak-mono-label text-ak-orange/70">{risk.mitigation.tag}</span>
            </div>
            <RevealGroup className="space-y-2.5" stagger={0.07}>
              {risk.mitigation.items.map((it) => (
                <Row key={it.label} icon={it.icon} label={it.label} tone="mitigation" />
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>

      {/* outcomes */}
      <Reveal className="mt-6">
        <div className="grid grid-cols-2 gap-y-7 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-4 md:gap-0 md:p-8 md:[&>*:not(:first-child)]:border-l md:[&>*]:border-white/10">
          {risk.benefits.map((b) => (
            <Benefit key={b.title} {...b} />
          ))}
        </div>
      </Reveal>

      {/* CTA bar */}
      <Reveal className="mt-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:p-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-ak-orange/40 text-ak-orange sm:flex">
              <Icon name={risk.ctaBar.icon} className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <div className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">{risk.ctaBar.title}</div>
              <div className="mt-1 text-sm text-white/50">{risk.ctaBar.sub}</div>
            </div>
          </div>
          <a
            href={risk.ctaBar.cta.href}
            data-testid="risk-cta"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-ak-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_-8px_rgba(242,140,40,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ak-orange-dark"
          >
            {risk.ctaBar.cta.label}
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>
      </Reveal>
    </Container>

    {/* ════ running axiom marquee ════ */}
    <div className="relative mt-16 overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 md:mt-20">
      <div className="ak-marquee flex items-center gap-10" style={{ animationDirection: "reverse" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
              Risk does not arise from complexity.{" "}
              <span className="text-ak-orange">It arises from unmanaged systems.</span>
            </span>
            <span className="h-2 w-2 flex-shrink-0 rotate-45 bg-ak-orange" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
