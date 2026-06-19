import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { trust } from "../../data/content";

export const TrustStrip = () => {
  const loop = [...trust.logos, ...trust.logos];
  return (
    <section data-testid="trust-strip" className="border-y border-ak-ink/8 bg-ak-mist/60 py-8">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="ak-kicker mb-3">{trust.kicker}</div>
            <p className="max-w-xl font-display text-2xl font-semibold tracking-tight text-ak-ink md:text-3xl">
              {trust.label}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="ak-mono-label md:whitespace-nowrap">{trust.caption}</span>
          </Reveal>
        </div>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ak-mist to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ak-mist to-transparent md:w-32" />
        <div className="ak-marquee flex items-center gap-16 px-8">
          {loop.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-14 w-auto max-w-[210px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0 md:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
