import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { obligations } from "../../../data/svc-payroll-processing";

export const PayrollObligations = () => (
  <section id="svc-obligations" data-testid="payroll-obligations-section" className="bg-ak-ink py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="ak-kicker ak-kicker--light mb-4">{obligations.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{obligations.heading}</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/45">{obligations.sub}</p>
          </Reveal>

          <RevealGroup className="mt-8 space-y-4" stagger={0.08}>
            {obligations.items.map((o) => (
              <RevealItem key={o.num} className="flex items-start gap-4 rounded-xl bg-white/[0.03] p-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ak-orange/15 font-display text-xs font-bold text-ak-orange">
                  {o.num}
                </span>
                <div>
                  <span className="text-[13.5px] font-bold text-white">{o.title}</span>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-white/45">{o.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
          <div className="ak-mono-label--light text-ak-orange/70">{obligations.consequences.label}</div>
          <h3 className="mt-2 font-display text-lg font-bold text-white">{obligations.consequences.title}</h3>
          <div className="mt-6 space-y-5">
            {obligations.consequences.items.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <Icon name={c.icon} className="h-4 w-4" strokeWidth={1.85} />
                </span>
                <div>
                  <div className="text-[13px] font-bold text-white">{c.title}</div>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-white/40">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
