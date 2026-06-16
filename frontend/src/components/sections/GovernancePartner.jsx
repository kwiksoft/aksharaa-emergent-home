import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Counter } from "../common/Counter";
import { Sparkline } from "../common/Sparkline";
import { partner } from "../../data/content";

export const GovernancePartner = () => (
  <section id="partner" data-testid="partner-section" className="bg-white py-20 md:py-32">
    <Container>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl border border-ak-orange/30 lg:block" />
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-35px_rgba(28,42,57,0.5)]">
              <img
                src={partner.image}
                alt={partner.imageAlt}
                className="aspect-[4/5] w-full object-cover md:aspect-[5/5]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-7 -right-4 rounded-2xl border border-ak-ink/8 bg-white/90 p-5 shadow-[0_20px_45px_-20px_rgba(28,42,57,0.4)] backdrop-blur-md md:-right-8 md:p-6"
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
            <a
              href={partner.cta.href}
              data-testid="partner-cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ak-ink/15 px-7 py-3.5 text-sm font-medium text-ak-ink transition-all hover:border-ak-ink hover:bg-ak-ink hover:text-white"
            >
              {partner.cta.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
