import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { services } from "../../../data/compliance-filings-taxation";

/**
 * Just 2 services — a list or accordion would be absurd overkill here.
 * Spacious side-by-side cards, each given real room to breathe, matching
 * this category's "most calm" character.
 */
export const FilingsCatServices = () => (
  <section id="filing-services" data-testid="filingscat-services-section" className="bg-ak-mist/40 py-24 md:py-32">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{services.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{services.heading}</h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.15}>
        {services.items.map((s) => (
          <RevealItem key={s.num}>
            <a href={s.href} data-testid={`filingscat-service-${s.num}`} className="group flex h-full flex-col rounded-2xl border border-ak-ink/[0.07] bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-ak-orange/30 hover:shadow-xl">
              <span className="ak-mono-label text-ak-orange/70">{s.num}</span>
              <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ak-ink text-ak-orange transition-colors group-hover:bg-ak-orange group-hover:text-white">
                <Icon name={s.icon} className="h-5.5 w-5.5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ak-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ak-ink/55">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-ak-orange">
                Explore Service
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
