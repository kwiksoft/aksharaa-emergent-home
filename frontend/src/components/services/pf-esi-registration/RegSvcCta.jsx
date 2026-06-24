import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { serviceCta } from "../../../data/svc-pf-esi-registration";

/**
 * Section 9 -- Final CTA, rebuilt per direct reference image.
 *
 * Previous structure: flat bg-ak-navy band, kicker/heading/sub on the
 * left, AkButton (primary = orange-on-white-text) + a plain inline
 * phone-icon link on the right.
 *
 * Reference structure (this rebuild):
 *   - Rich orange gradient background with a subtle architectural photo
 *     blended in (low-opacity, reusing the existing hero-building.jpg
 *     asset already used elsewhere on the page, rather than introducing
 *     an unrelated new photo) and a dotted-pattern texture on the right.
 *   - White Start Registration button with orange text + arrow -- the
 *     reference's button is white-on-orange, which is the inverse of
 *     AkButton's "primary" variant (orange-on-white-text), so this is a
 *     one-off custom button rather than reusing/retrofitting AkButton in
 *     a way that could affect other pages using that shared component.
 *   - A vertical divider between the button and the phone block.
 *   - Phone link upgraded from a plain inline icon+text to a circular
 *     white icon badge + bold white phone number, matching the
 *     reference's more prominent treatment.
 */
export const RegSvcCta = () => (
  <section
    id="service-cta"
    data-testid="reg-svc-cta-section"
    className="relative overflow-hidden bg-gradient-to-br from-ak-orange via-ak-orange to-ak-orange-dark py-12 md:py-16"
  >
    {/* subtle architectural photo blended into the gradient, left/center */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.18]"
      style={{ backgroundImage: "url(/assets/hero-building.jpg)" }}
    />
    {/* dotted-pattern texture, right side */}
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.15]"
      style={{ backgroundImage: "radial-gradient(circle, #FFFFFF 1.2px, transparent 1.6px)", backgroundSize: "16px 16px" }}
    />

    <Container className="relative">
      <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 md:text-xs">
            <span className="inline-block h-px w-8 bg-white/60" />
            {serviceCta.kicker}
          </div>
          <h2 className="font-display text-2xl font-extrabold leading-[1.1] text-white md:text-3xl">
            {serviceCta.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[15px]">{serviceCta.sub}</p>
        </div>

        <div className="flex flex-shrink-0 flex-wrap items-center gap-5">
          {/* white-on-orange button -- inverse of AkButton's primary
              variant, so styled directly here rather than retrofitting
              the shared component */}
          <a
            href={serviceCta.ctas[0].href}
            data-testid="reg-svc-final-cta-primary"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ak-orange shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.3)] md:text-[15px]"
          >
            {serviceCta.ctas[0].label}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.4} />
          </a>

          {/* vertical divider */}
          <span className="hidden h-8 w-px bg-white/30 sm:block" />

          {/* phone block -- circular white icon badge + bold number,
              upgraded from the previous plain inline icon+text link */}
          <a href={serviceCta.ctas[1].href} className="flex items-center gap-3 text-white transition-colors hover:text-white/85">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
              <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-bold">{serviceCta.ctas[1].label}</span>
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
