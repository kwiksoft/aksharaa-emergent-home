import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { clauses } from "../../../data/svc-employment-agreements";

export const AgreementsClauses = () => (
  <section id="svc-clauses" data-testid="agreements-clauses-section" className="bg-ak-ink py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{clauses.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{clauses.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/45">{clauses.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 divide-y divide-white/[0.07] rounded-2xl border border-white/10" stagger={0.05}>
        {clauses.items.map((c) => (
          <RevealItem key={c.num} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:gap-6 md:p-6">
            <span className="font-display w-12 flex-shrink-0 text-sm font-bold text-ak-orange/60">{c.num}</span>
            <div className="flex-1">
              <div className="text-[14px] font-bold text-white">{c.title}</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-white/45">{c.desc}</p>
            </div>
            <span
              className={`flex-shrink-0 self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide md:self-center ${
                c.tier === "Critical" ? "bg-ak-orange/15 text-ak-orange" : "bg-white/10 text-white/50"
              }`}
            >
              {c.tier}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-6 flex items-start gap-3 rounded-xl bg-white/[0.04] p-5">
        <Icon name="fileText" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-orange/70" strokeWidth={1.9} />
        <p className="text-[12.5px] leading-relaxed text-white/45">{clauses.note}</p>
      </Reveal>
    </Container>
  </section>
);
