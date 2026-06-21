import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-pf-esi-returns-filing";

export const ReturnsScope = () => (
  <section id="svc-scope" data-testid="returns-scope-section" className="bg-ak-mist/40 py-24 md:py-32">
    <Container>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{scope.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
          </Reveal>

          <RevealGroup className="relative mt-10 space-y-7" stagger={0.12}>
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ak-orange/25" />
            {scope.steps.map((s, i) => (
              <RevealItem key={s.title} className="relative flex gap-5 pl-0">
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange bg-white font-display text-xs font-bold text-ak-orange">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <strong className="text-[14px] font-bold text-ak-ink">{s.title}</strong>
                  <span className="text-[13.5px] leading-relaxed text-ak-ink/55"> — {s.desc}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="space-y-5">
          <Reveal delay={0.15} className="rounded-2xl bg-ak-ink p-7 text-white">
            <Icon name="shield" className="h-7 w-7 text-ak-orange" strokeWidth={1.7} />
            <div className="mt-3 font-display text-lg font-bold">{scope.guarantee.title}</div>
            <ul className="mt-5 space-y-3">
              {scope.guarantee.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-white/65">
                  <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" strokeWidth={2.2} />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl border border-ak-ink/[0.07] bg-white p-6">
            <div className="font-display text-sm font-bold text-ak-ink">{scope.contributions.title}</div>
            <div className="mt-4 overflow-hidden rounded-xl border border-ak-ink/[0.07]">
              <div className="grid grid-cols-3 bg-ak-mist/50 px-4 py-2 text-[11px] font-bold uppercase text-ak-ink/45">
                <span /><span>Employee</span><span>Employer</span>
              </div>
              {scope.contributions.rows.map((r) => (
                <div key={r.label} className="grid grid-cols-3 border-t border-ak-ink/[0.06] px-4 py-3 text-[13px]">
                  <span className="font-bold text-ak-orange">{r.label}</span>
                  <span className="font-medium text-ak-ink/70">{r.employee}</span>
                  <span className="font-medium text-ak-ink/70">{r.employer}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-ak-ink/40">{scope.contributions.note}</p>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
