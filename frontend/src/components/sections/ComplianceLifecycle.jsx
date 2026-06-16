import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { lifecycle } from "../../data/content";

export const ComplianceLifecycle = () => (
  <section
    data-testid="lifecycle-section"
    className="relative overflow-hidden bg-ak-ink py-20 md:py-32"
  >
    <div className="pointer-events-none absolute inset-0 ak-grid-dark" />
    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{lifecycle.kicker}</div>
        <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl">
          {lifecycle.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">{lifecycle.sub}</p>
      </Reveal>

      <div className="relative mt-16">
        {/* desktop horizontal rail */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block" />
        <motion.div
          className="absolute left-0 top-8 hidden h-px bg-gradient-to-r from-ak-orange to-ak-orange/40 lg:block"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {/* mobile vertical rail */}
        <div className="absolute bottom-4 left-8 top-4 w-px bg-white/10 lg:hidden" />

        <RevealGroup className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6" stagger={0.16}>
          {lifecycle.steps.map((step) => (
            <RevealItem key={step.num} className="relative flex gap-5 lg:block">
              <div className="relative flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ak-slate text-ak-orange shadow-lg">
                  <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ak-orange font-display text-[11px] font-bold text-white shadow-md">
                  {step.num}
                </span>
              </div>
              <div className="lg:mt-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
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
