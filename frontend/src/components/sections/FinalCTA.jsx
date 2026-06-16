import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { BracketButton } from "../common/BracketButton";
import { finalCta } from "../../data/content";

export const FinalCTA = () => (
  <section
    id="final-cta"
    data-testid="final-cta-section"
    className="relative flex items-center overflow-hidden bg-ak-ink pb-28 pt-24 md:pb-36 md:pt-28"
  >
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[26vw] font-extrabold uppercase leading-none text-white/[0.03] md:text-[20vw]"
      animate={{ x: ["-2%", "2%", "-2%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      {finalCta.watermark}
    </motion.div>
    <div className="pointer-events-none absolute inset-0 ak-grid-dark opacity-50" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="ak-kicker-bare mb-6 justify-center">{finalCta.kicker}</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
            {finalCta.headline[0]}
            <br />
            <span className="ak-outline-orange">{finalCta.headline[1]}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            {finalCta.sub}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={finalCta.ctas[0].href}
              data-testid="final-cta-primary"
              className="inline-flex -skew-x-12 items-center bg-ak-orange px-8 py-4 text-white shadow-[0_10px_30px_-8px_rgba(242,140,40,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ak-orange-dark"
            >
              <span className="flex skew-x-12 items-center gap-2 text-sm font-semibold uppercase tracking-wide md:text-base">
                {finalCta.ctas[0].label}
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </a>
            <BracketButton href={finalCta.ctas[1].href} data-testid="final-cta-secondary">
              {finalCta.ctas[1].label}
            </BracketButton>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="ak-mono-label mt-8 block text-white/35">
            No commitment · Structured consultation · Pan-India response
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
