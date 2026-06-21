import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { serviceCta } from "../../../data/svc-pf-esi-returns-filing";

export const ReturnsCta = () => (
  <section id="service-cta" data-testid="returns-cta-section" className="bg-ak-ink py-16 md:py-20">
    <Container>
      <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">{serviceCta.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/45 md:text-[15px]">{serviceCta.sub}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
          <AkButton href={serviceCta.ctas[0].href} variant="primary" withArrow data-testid="returns-final-cta-primary">
            {serviceCta.ctas[0].label}
          </AkButton>
          <a href={serviceCta.ctas[1].href} className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
            <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
            {serviceCta.ctas[1].label}
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
