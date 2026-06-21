import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { why } from "../../../data/registrations";

export const RegistrationsWhy = () => (
  <section
    id="registry-why"
    data-testid="registrations-why-section"
    className="bg-ak-navy py-20 md:py-28"
  >
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{why.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.04] tracking-tight text-white md:text-4xl">
          {why.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/45 md:text-lg">{why.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-3" stagger={0.12}>
        {why.points.map((p) => (
          <RevealItem key={p.title} className="bg-ak-navy p-8 transition-colors duration-300 hover:bg-white/[0.025]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
              <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.85} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/45">{p.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
