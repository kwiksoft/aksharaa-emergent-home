import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { obligations } from "../../../data/svc-payroll-processing";

export const PayrollObligations = () => (
  <section id="svc-obligations" data-testid="payroll-obligations-section" className="bg-white py-14 md:py-20">
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        {/* LEFT — light, numbered connector-spine list */}
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{obligations.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {obligations.heading[0]} <span className="text-ak-orange">{obligations.heading[1]}</span> {obligations.heading[2]}
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ak-ink/55">{obligations.sub}</p>
          </Reveal>

          <RevealGroup className="relative mt-9 space-y-4 pl-5" stagger={0.08}>
            {/* connector spine */}
            <div className="absolute bottom-6 left-1 top-6 border-l-2 border-dashed border-ak-orange/40" />
            {obligations.items.map((o) => (
              <RevealItem key={o.num} className="relative">
                <span className="absolute -left-[18px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 border-ak-orange bg-white" />
                <div className="flex items-start gap-4 rounded-2xl border border-ak-ink/[0.07] bg-white p-4 pl-5 shadow-[0_2px_10px_-4px_rgba(28,42,57,0.06)]">
                  <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10">
                    <Icon name={o.icon} className="h-5 w-5 text-ak-orange" strokeWidth={1.85} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ak-orange text-[11px] font-bold text-white">
                      {o.num}
                    </span>
                  </span>
                  <div>
                    <div className="font-display text-[14.5px] font-bold text-ak-ink">{o.title}</div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ak-ink/55">{o.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* RIGHT — dark consequences panel */}
        <Reveal delay={0.15} className="rounded-3xl bg-ak-ink p-7 md:p-8">
          <div className="flex items-center gap-2">
            <Icon name="history" className="h-4 w-4 text-ak-orange" strokeWidth={2} />
            <span className="ak-mono-label--light text-ak-orange/80">{obligations.consequences.label}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-white">{obligations.consequences.title}</h3>
          <div className="mt-2 h-1 w-10 rounded-full bg-ak-orange" />

          <div className="mt-7 space-y-3.5">
            {obligations.consequences.items.map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-ak-orange">
                  <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.85} />
                </span>
                <div>
                  <div className="text-[14px] font-bold text-white">{c.title}</div>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-white/50">
                    {c.segments.map((s, i) => (
                      <span key={i} className={s.highlight ? "font-bold text-ak-orange" : undefined}>
                        {s.text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* bottom highlighted CTA card */}
          <div className="mt-5 rounded-2xl border border-ak-orange/30 bg-ak-orange/[0.07] p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange text-white shadow-[0_0_24px_rgba(242,140,40,0.5)]">
                <Icon name={obligations.cta.icon} className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <div className="font-display text-[15px] font-bold text-white">{obligations.cta.heading}</div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/55">{obligations.cta.sub}</p>
              </div>
            </div>
            <a
              href={obligations.cta.button.href}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ak-orange px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-ak-orange-dark sm:w-auto"
            >
              {obligations.cta.button.label}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
