import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { serviceCta } from "../../../data/svc-employment-agreements";

/**
 * Final CTA — rebuilt to match the shared service-cta-section template
 * used across Payroll Processing (PayrollCta.jsx, the original) and
 * Flexi Staffing (FlexiCta.jsx), per direct instruction to do this
 * section exactly as on those other pages. Previously this section was
 * a flat bg-ak-ink fill with a single combined Reveal fade-up and a
 * dark AkButton pill — replaced wholesale with the shared template's
 * structure: bg-ak-orange fill + shared cta-bg.png background image,
 * staggered entrance (kicker -> heading -> sub -> actions rather than
 * one combined fade-up), white pill primary button with a soft
 * breathing glow behind it, a vertical divider, and a phone link whose
 * icon badge pulses on hover. testids kept as agreements-prefixed
 * (not payroll- or flexi-prefixed) since this is the Employment
 * Agreements page; same data fields otherwise (kicker added to
 * svc-employment-agreements.js's serviceCta block, which didn't have
 * one before).
 */
export const AgreementsCta = () => (
  <section
    id="service-cta"
    data-testid="agreements-cta-section"
    className="relative overflow-hidden bg-ak-orange py-12 md:py-16"
    style={{
      backgroundImage: "url(/assets/sections/cta-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container className="relative">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <Reveal delay={0}>
            <div className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 md:text-xs">
              <span className="inline-block h-px w-8 bg-white/60" />
              {serviceCta.kicker}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">{serviceCta.heading}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[15px]">{serviceCta.sub}</p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="flex flex-shrink-0 flex-wrap items-center gap-5">
          <div className="relative">
            {/* soft breathing glow behind the button */}
            <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-white/30 blur-xl" />
            <a
              href={serviceCta.ctas[0].href}
              data-testid="agreements-final-cta-primary"
              className="relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ak-orange shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.3)] md:text-[15px]"
            >
              {serviceCta.ctas[0].label}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>

          {/* vertical divider */}
          <span className="hidden h-8 w-px bg-white/30 sm:block" />

          {/* phone block — circular icon badge gently pulses to draw the eye */}
          <a href={serviceCta.ctas[1].href} className="group flex items-center gap-3 text-white transition-colors hover:text-white/85">
            <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
              <Icon name="phone" className="relative h-4 w-4" strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-bold">{serviceCta.ctas[1].label}</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>
);
