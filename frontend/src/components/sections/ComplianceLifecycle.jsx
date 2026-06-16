import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { lifecycle } from "../../data/content";

export const ComplianceLifecycle = () => (
  <section
    id="lifecycle"
    data-testid="lifecycle-section"
    className="relative overflow-hidden bg-ak-ink pb-24 pt-28 md:pb-32 md:pt-40"
  >
    {/* diagonal split edge from the light section above */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-white md:h-20"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 100%)" }}
    />
    <div className="pointer-events-none absolute inset-0 ak-grid-dark" />
    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{lifecycle.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-6xl">
          The Structured Compliance <span className="ak-outline-white">Lifecycle</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">{lifecycle.sub}</p>
      </Reveal>

      <div className="relative mt-20">
        {/* desktop rail through the diamond centers */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
        <motion.div
          className="absolute left-0 top-7 hidden h-px bg-gradient-to-r from-ak-orange to-ak-orange/40 lg:block"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* mobile vertical rail */}
        <div className="absolute bottom-6 left-7 top-2 w-px bg-white/10 lg:hidden" />

        <RevealGroup className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6" stagger={0.18}>
          {lifecycle.steps.map((step) => (
            <RevealItem key={step.num} className="relative flex gap-6 lg:block">
              <div className="relative z-10 flex-shrink-0">
                <div className="flex h-14 w-14 rotate-45 items-center justify-center border border-ak-orange/60 bg-ak-slate shadow-[0_0_0_7px_#1c2a39]">
                  <span className="-rotate-45 font-mono text-sm font-semibold text-ak-orange">
                    {step.num}
                  </span>
                </div>
              </div>
              <div className="relative lg:mt-9">
                <span className="pointer-events-none absolute -top-4 right-0 hidden select-none font-display text-7xl font-extrabold leading-none text-white/[0.04] lg:block">
                  {step.num}
                </span>
                <div className="mb-2 flex items-center gap-2">
                  <Icon name={step.icon} className="h-5 w-5 text-ak-orange" strokeWidth={1.8} />
                  <span className="ak-mono-label text-white/40">Stage {step.num}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/50">
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
