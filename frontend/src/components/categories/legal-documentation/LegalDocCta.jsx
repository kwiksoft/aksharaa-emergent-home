import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { categoryCta } from "../../../data/legal-documentation";

export const LegalDocCta = () => (
  <section id="category-cta" data-testid="legaldoc-cta-section" className="relative overflow-hidden bg-ak-ink py-24 text-center md:py-32">
    <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[9rem] font-extrabold uppercase leading-none text-white/[0.025] md:text-[13rem]">
      DRAFTED
    </span>
    <Container className="relative z-10">
      <Reveal className="mx-auto max-w-2xl">
        <div className="ak-kicker ak-kicker--light mx-auto mb-6 justify-center">{categoryCta.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
          <span className="block">{categoryCta.headline[0]}</span>
          <span className="block ak-outline-orange">{categoryCta.headline[1]}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/45 md:text-lg">{categoryCta.sub}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <AkButton href={categoryCta.ctas[0].href} variant="primary" withArrow data-testid="legaldoc-cta-primary">
            {categoryCta.ctas[0].label}
          </AkButton>
          <AkButton href={categoryCta.ctas[1].href} variant="ghost" data-testid="legaldoc-cta-secondary">
            {categoryCta.ctas[1].label}
          </AkButton>
        </div>
      </Reveal>
    </Container>
  </section>
);
