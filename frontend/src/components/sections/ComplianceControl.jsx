import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { control } from "../../data/content";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export const ComplianceControl = () => (
  <section id="control" data-testid="control-section" className="bg-white py-20 md:py-32">
    <Container>
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{control.kicker}</div>
        <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ak-ink md:text-5xl">
          {control.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{control.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6" stagger={0.12}>
        {control.cards.map((c, i) => (
          <RevealItem key={c.num} className={SPANS[i]}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-ak-ink/10 bg-ak-mist/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ak-orange/40 hover:bg-white hover:shadow-2xl md:p-10">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-ak-orange transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ak-ink text-white transition-colors duration-300 group-hover:bg-ak-orange">
                  <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.85} />
                </span>
                <span className="font-display text-4xl font-bold leading-none text-ak-ink/10 transition-colors duration-500 group-hover:text-ak-orange/30">
                  {c.num}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-ak-ink">
                {c.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ak-ink/55">{c.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
