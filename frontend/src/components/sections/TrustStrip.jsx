import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { trust } from "../../data/content";

export const TrustStrip = () => {
  const loop = [...trust.logos, ...trust.logos];
  return (
    <section data-testid="trust-strip" className="border-y border-ak-ink/8 bg-ak-mist/60 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ak-ink/40 md:text-left">
            {trust.label}
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ak-mist to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ak-mist to-transparent md:w-32" />
        <div className="ak-marquee flex items-center gap-14 px-8">
          {loop.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-9 w-auto max-w-[140px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
