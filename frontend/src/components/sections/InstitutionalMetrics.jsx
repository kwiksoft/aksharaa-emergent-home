import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Counter } from "../common/Counter";
import { Icon } from "../../lib/icons";
import { metrics } from "../../data/content";

export const InstitutionalMetrics = () => (
  <section id="metrics" data-testid="metrics-section" className="relative overflow-hidden bg-ak-navy pb-24 pt-24 md:pb-28 md:pt-28">
    {/* faint India/global dotted map */}
    <img
      src="/assets/world-map.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 hidden h-[70%] w-[48%] select-none object-contain opacity-[0.1] lg:block"
      style={{ filter: "sepia(1) saturate(5) hue-rotate(-8deg)" }}
      draggable="false"
    />
    <div className="pointer-events-none absolute inset-0 ak-grid-dark opacity-50" />
    <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-ak-orange/10 blur-[120px]" />
    {/* dual-colour cut: white lower half behind the card */}
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-[59%] z-0 bg-white"
      style={{ clipPath: "polygon(0 22px, 100% 0, 100% 100%, 0 100%)" }}
    />

    <Container className="relative">
      {/* ── top: headline + play ── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="ak-kicker mb-6">{metrics.kicker}</div>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-5xl">
            Institutional Scale.
            <br />
            Disciplined <span className="ak-outline-white">Execution.</span>
          </h2>
          <div className="mt-7 flex items-center gap-2">
            <span className="h-0.5 w-12 rounded-full bg-ak-orange" />
            <span className="h-0.5 w-2 rounded-full bg-ak-orange/50" />
          </div>
          <a
            href={metrics.cta.href}
            data-testid="metrics-cta"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-ak-orange/60 px-8 py-3.5 text-sm font-semibold text-ak-orange transition-all hover:-translate-y-0.5 hover:bg-ak-orange hover:text-white"
          >
            {metrics.cta.label}
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </Reveal>

        {/* dotted halo + play */}
        <div className="relative hidden min-h-[340px] items-center justify-center lg:col-span-5 lg:flex">
          <div
            className="absolute h-72 w-72"
            style={{
              backgroundImage: "radial-gradient(rgba(242,140,40,0.45) 1.5px, transparent 1.6px)",
              backgroundSize: "14px 14px",
              WebkitMaskImage: "radial-gradient(circle at center, black, transparent 62%)",
              maskImage: "radial-gradient(circle at center, black, transparent 62%)",
            }}
          />
          <div data-testid="metrics-play" className="group relative cursor-pointer">
            <motion.span
              className="absolute inset-0 rounded-[50%] border-2 border-ak-orange/40"
              animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="flex h-28 w-24 items-center justify-center rounded-[50%] border-2 border-ak-orange/50 bg-ak-ink/70 shadow-[0_0_55px_-8px_rgba(242,140,40,0.55)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Play className="h-9 w-9 translate-x-0.5 fill-ak-orange text-ak-orange" strokeWidth={1} />
            </span>
          </div>
        </div>
      </div>

      {/* ── metrics card ── */}
      <div className="relative mt-24 rounded-[1.75rem] bg-white px-2 pb-10 pt-6 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.55)] md:mt-28 md:px-6">
        {/* faint crosshatch */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(28,42,57,0.028) 0 1px, transparent 1px 24px), repeating-linear-gradient(45deg, rgba(28,42,57,0.02) 0 1px, transparent 1px 24px)",
            }}
          />
        </div>

        <div className="relative grid grid-cols-2 gap-y-16 lg:grid-cols-4 lg:gap-y-0">
          {metrics.items.map((m, i) => (
            <Reveal
              key={m.label}
              delay={0.08 * i}
              className={`flex flex-col items-center px-4 text-center lg:px-8 ${
                i !== 0 ? "lg:border-l lg:border-ak-ink/10" : ""
              }`}
            >
              <span className="-mt-16 mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-ak-orange shadow-[0_18px_36px_-12px_rgba(0,0,0,0.3)] ring-1 ring-ak-ink/5">
                <Icon name={m.icon} className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <div
                className={`font-display font-bold tracking-tight text-ak-ink ${
                  m.text ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
                }`}
              >
                {m.text ? m.text : <Counter value={m.value} suffix={m.suffix} />}
              </div>
              <motion.div
                className="mt-4 h-1 rounded-full bg-ak-orange"
                initial={{ width: 0 }}
                whileInView={{ width: "2.25rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + 0.1 * i, ease: "easeInOut" }}
              />
              <div className="mt-4 max-w-[12rem] text-sm font-medium leading-snug text-ak-ink/55">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
