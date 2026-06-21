import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { industries } from "../../../data/svc-flexi-staffing";

export const FlexiIndustries = () => (
  <section id="svc-industries" data-testid="flexi-industries-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{industries.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{industries.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{industries.sub}</p>
      </Reveal>
      <RevealGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.05}>
        {industries.items.map((it) => (
          <RevealItem key={it.name} className="flex flex-col items-center gap-2.5 rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 p-5 text-center transition-colors hover:border-ak-orange/30">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
              <Icon name={it.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
            </span>
            <span className="text-[12px] font-semibold leading-tight text-ak-ink">{it.name}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
