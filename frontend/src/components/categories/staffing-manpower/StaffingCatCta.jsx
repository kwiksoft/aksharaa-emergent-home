import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { categoryCta } from "../../../data/staffing-manpower";

export const StaffingCatCta = () => (
  <section id="category-cta" data-testid="staffingcat-cta-section" className="bg-ak-orange py-16 md:py-20">
    <Container>
      <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-3">{categoryCta.kicker}</div>
          <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">
            {categoryCta.headline[0]} {categoryCta.headline[1]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[15px]">{categoryCta.sub}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
          <a href={categoryCta.ctas[0].href} className="inline-flex items-center gap-2 rounded-full bg-ak-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5" data-testid="staffingcat-cta-primary">
            {categoryCta.ctas[0].label}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
          </a>
          <a href={categoryCta.ctas[1].href} className="text-sm font-semibold text-white/90 hover:text-white">
            {categoryCta.ctas[1].label}
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
