import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { finalCta } from "../../data/content";

export const FinalCTA = () => (
  <section
    id="final-cta"
    data-testid="final-cta-section"
    className="relative flex items-center overflow-hidden bg-ak-mist/50 py-24 md:py-36"
  >
    <div className="pointer-events-none absolute inset-0 ak-grid-light opacity-60" />
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[26vw] font-bold leading-none text-ak-ink/[0.045] md:text-[20vw]"
      animate={{ x: ["-2%", "2%", "-2%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      {finalCta.watermark}
    </motion.div>
    <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-ak-orange/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-ak-slate/10 blur-3xl" />

    <Container className="relative">
      <div className="max-w-3xl">
        <Reveal>
          <div className="ak-kicker mb-6">{finalCta.kicker}</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-ak-ink md:text-6xl lg:text-7xl">
            {finalCta.headline[0]}
            <br />
            <span className="text-ak-orange">{finalCta.headline[1]}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ak-ink/60 md:text-lg">
            {finalCta.sub}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={finalCta.ctas[0].href}
              data-testid="final-cta-primary"
              className="inline-flex items-center gap-2 rounded-full bg-ak-orange px-8 py-4 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgba(242,140,40,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ak-orange-dark md:text-base"
            >
              {finalCta.ctas[0].label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
            <a
              href={finalCta.ctas[1].href}
              data-testid="final-cta-secondary"
              className="inline-flex items-center rounded-full border border-ak-ink/20 px-8 py-4 text-sm font-medium text-ak-ink transition-all hover:border-ak-ink hover:bg-ak-ink hover:text-white md:text-base"
            >
              {finalCta.ctas[1].label}
            </a>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
