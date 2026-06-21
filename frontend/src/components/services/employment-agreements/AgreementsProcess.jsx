import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-employment-agreements";

export const AgreementsProcess = () => (
  <section id="svc-process" data-testid="agreements-process-section" className="bg-white py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{process.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{process.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
          </Reveal>

          <RevealGroup className="mt-9 space-y-6" stagger={0.1}>
            {process.steps.map((s) => (
              <RevealItem key={s.num} className="flex gap-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ak-ink font-display text-xs font-bold text-ak-orange">{s.num}</span>
                <div>
                  <h3 className="font-display text-[14px] font-bold text-ak-ink">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="space-y-5">
          <Reveal delay={0.15} className="rounded-2xl border border-ak-ink/[0.07] bg-[#FAF6EE] p-6">
            <div className="font-display text-sm font-bold text-ak-ink">{process.turnaround.title}</div>
            <div className="mt-4 space-y-3">
              {process.turnaround.rows.map((r) => (
                <div key={r.type} className="flex items-center justify-between gap-3 border-b border-ak-ink/[0.06] pb-3 last:border-b-0 last:pb-0">
                  <span className="text-[12.5px] text-ak-ink/60">{r.type}</span>
                  <span className="flex-shrink-0 text-[12px] font-bold text-ak-orange">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-ak-ink/40">{process.turnaround.note}</p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl bg-ak-ink p-6">
            <div className="text-[12px] font-bold uppercase tracking-wide text-white/50">Delivered In</div>
            <div className="mt-4 space-y-2.5">
              {process.formats.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[13px] font-medium text-white">
                  <Icon name="fileText" className="h-4 w-4 text-ak-orange" strokeWidth={1.9} />
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
