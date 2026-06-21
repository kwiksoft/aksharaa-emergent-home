import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { categoryCta } from "../../../data/payroll-hr-operations";

export const PayrollCatCta = () => (
  <section id="category-cta" data-testid="payrollcat-cta-section" className="bg-ak-ink py-16 md:py-20">
    <Container>
      <Reveal className="flex flex-col items-start gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="max-w-xl">
          <div className="ak-kicker ak-kicker--light mb-4">{categoryCta.kicker}</div>
          <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">
            {categoryCta.headline[0]} <span className="ak-outline-orange">{categoryCta.headline[1]}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/45 md:text-[15px]">{categoryCta.sub}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
          <AkButton href={categoryCta.ctas[0].href} variant="primary" withArrow data-testid="payrollcat-cta-primary">
            {categoryCta.ctas[0].label}
          </AkButton>
          <AkButton href={categoryCta.ctas[1].href} variant="darkSecondary" data-testid="payrollcat-cta-secondary">
            {categoryCta.ctas[1].label}
          </AkButton>
        </div>
      </Reveal>
    </Container>
  </section>
);
