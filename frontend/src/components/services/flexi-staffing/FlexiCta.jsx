import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { serviceCta } from "../../../data/svc-flexi-staffing";

export const FlexiCta = () => (
  <section id="service-cta" data-testid="flexi-cta-section" className="bg-ak-orange py-16 md:py-20">
    <Container>
      <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">{serviceCta.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[15px]">{serviceCta.sub}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
          <a href={serviceCta.ctas[0].href} className="inline-flex items-center gap-2 rounded-full bg-ak-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5" data-testid="flexi-final-cta-primary">
            {serviceCta.ctas[0].label}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
          </a>
          <a href={serviceCta.ctas[1].href} className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
            <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
            {serviceCta.ctas[1].label}
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
