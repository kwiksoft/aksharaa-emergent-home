import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-payroll-processing";

export const PayrollProcess = () => (
  <section id="svc-process" data-testid="payroll-process-section" className="bg-ak-mist/40 py-14 md:py-20">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mx-auto mb-5 justify-center">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {process.heading[0]} <span className="text-ak-orange">{process.heading[1]}</span> {process.heading[2]}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
      </Reveal>

      <div className="relative mt-16 overflow-x-auto pb-2">
        <RevealGroup className="grid min-w-[920px] grid-cols-6 gap-4" stagger={0.08}>
          {process.steps.map((s, i) => (
            <RevealItem key={s.num} className="relative">
              <div className="flex justify-center">
                <span className="rounded-full bg-ak-ink/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ak-ink/60">{s.day}</span>
              </div>

              <div className="relative mt-4 flex justify-center">
                {/* dashed connector to next step */}
                {i < process.steps.length - 1 && (
                  <div className="absolute left-1/2 top-1/2 z-0 h-px w-[calc(100%+1rem)] -translate-y-1/2 border-t-2 border-dashed border-ak-orange/35" />
                )}
                <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ak-orange bg-white">
                  <Icon name={s.icon} className="h-7 w-7 text-ak-orange" strokeWidth={1.75} />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ak-orange text-[11px] font-bold text-white">
                    {s.num}
                  </span>
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-ak-ink/[0.07] bg-white p-4 text-center">
                <h3 className="font-display text-[14.5px] font-bold text-ak-ink">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ak-ink/55">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-ak-orange/25 bg-ak-orange/[0.06] px-3 py-1.5 text-[11px] font-bold text-ak-orange">
                  <Icon name="clock" className="h-3 w-3" strokeWidth={2.2} />
                  {s.day}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.15} className="mt-10">
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-gradient-to-r from-ak-orange/[0.08] to-ak-orange/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.banner.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10">
                <Icon name={b.icon} className="h-[18px] w-[18px] text-ak-orange" strokeWidth={2} />
              </span>
              <div>
                <div className="text-[13px] font-bold text-ak-ink">{b.title}</div>
                <p className="mt-0.5 text-[12px] leading-snug text-ak-ink/55">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  </section>
);
