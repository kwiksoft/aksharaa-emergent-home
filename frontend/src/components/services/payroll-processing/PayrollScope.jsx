import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-payroll-processing";

export const PayrollScope = () => (
  <section id="svc-scope" data-testid="payroll-scope-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-ak-ink/[0.07] sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {scope.cards.map((c) => (
          <RevealItem key={c.num} className="relative bg-white p-6 transition-colors hover:bg-ak-mist/40">
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-3xl font-bold text-ak-ink/[0.06]">{c.num}</span>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-ak-orange/10 text-ak-orange">
              <Icon name={c.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
            </span>
            <h3 className="relative mt-4 font-display text-sm font-bold text-ak-ink">{c.title}</h3>
            <p className="relative mt-2 text-[12.5px] leading-relaxed text-ak-ink/55">{c.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
