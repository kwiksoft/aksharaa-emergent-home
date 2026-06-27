import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { obligations } from "../../../data/svc-pf-compliance";

export const PfCompObligations = () => (
  <section id="svc-obligations" data-testid="pfcomp-obligations-section" className="bg-white py-10 md:py-14">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* LEFT — numbered obligations list */}
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{obligations.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {obligations.heading}
            </h2>
          </Reveal>

          <RevealGroup className="mt-9 space-y-5" stagger={0.08}>
            {obligations.items.map((o) => (
              <RevealItem key={o.num} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ak-ink font-display text-xs font-bold text-ak-orange">
                  {o.num}
                </span>
                <div>
                  <span className="text-[14px] font-bold text-ak-ink">{o.title}</span>
                  <span className="text-[13.5px] leading-relaxed text-ak-ink/55"> — {o.desc}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* RIGHT — penalty panel with severity gauge */}
        <Reveal delay={0.15} className="rounded-2xl bg-ak-ink p-7 text-white">
          <div className="ak-mono-label--light text-ak-orange/70">{obligations.penaltyPanel.label}</div>
          <h3 className="mt-2 font-display text-xl font-bold">{obligations.penaltyPanel.title}</h3>

          <div className="mt-6">
            <div className="text-[11px] font-medium text-white/40">{obligations.penaltyPanel.gaugeLabel}</div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-ak-orange/60 to-red-500"
                style={{ width: `${obligations.penaltyPanel.gaugeFill}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-white/35">
              {obligations.penaltyPanel.gaugeSteps.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
            {obligations.penaltyPanel.items.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-ak-orange">
                  <Icon name={p.icon} className="h-4 w-4" strokeWidth={1.85} />
                </span>
                <div>
                  <div className="text-[13px] font-bold">{p.title}</div>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-white/45">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
