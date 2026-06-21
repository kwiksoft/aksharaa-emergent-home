import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { difference } from "../../../data/svc-flexi-staffing";

export const FlexiDifference = () => (
  <section id="svc-difference" data-testid="flexi-difference-section" className="bg-ak-navy py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{difference.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{difference.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/45">{difference.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {difference.items.map((d) => (
          <RevealItem key={d.num} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
            <div className="font-display text-3xl font-extrabold text-ak-orange/40">{d.num}</div>
            <h3 className="mt-3 font-display text-base font-bold text-white">{d.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/45">{d.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
