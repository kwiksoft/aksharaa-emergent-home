import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { why } from "../../../data/labour-law";

export const LabourLawWhy = () => (
  <section data-testid="labourlaw-why-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{why.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{why.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{why.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-ak-ink/[0.07] md:grid-cols-3" stagger={0.12}>
        {why.points.map((p) => (
          <RevealItem key={p.title} className="bg-white p-8 transition-colors duration-300 hover:bg-ak-mist/30">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-ink text-ak-orange">
              <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.85} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ak-ink">{p.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ak-ink/55">{p.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
