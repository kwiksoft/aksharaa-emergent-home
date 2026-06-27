import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { process } from "../../../data/svc-pf-compliance";

export const PfCompProcess = () => (
  <section id="svc-process" data-testid="pfcomp-process-section" className="bg-white py-10 md:py-14">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {process.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <RevealGroup className="space-y-7" stagger={0.1}>
          {process.steps.map((s) => (
            <RevealItem key={s.num} className="flex gap-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-ink/10 font-display text-sm font-bold text-ak-ink/50">
                {s.num}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-ak-ink">{s.title}</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ak-ink/55">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* monthly cycle motif — repeating loop visual */}
        <Reveal delay={0.2} className="hidden items-center justify-center lg:flex">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-dashed border-ak-ink/10">
            <div className="absolute inset-6 rounded-full border border-ak-ink/10" />
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-ak-ink text-center">
              <span className="font-display text-xs font-bold text-ak-orange">PF</span>
              <span className="text-[8px] text-white/50">Compliance</span>
              <span className="text-[8px] text-white/50">Cycle</span>
            </div>
            {["Data", "ECR", "Challan", "Register", "Report"].map((label, i) => {
              const angle = (i / 5) * 2 * Math.PI - Math.PI / 2;
              const r = 118;
              const x = 144 + r * Math.cos(angle);
              const y = 144 + r * Math.sin(angle);
              return (
                <span
                  key={label}
                  style={{ left: x - 28, top: y - 14 }}
                  className="absolute flex h-7 w-14 items-center justify-center rounded-full bg-ak-slate text-[8px] font-bold uppercase text-white/80"
                >
                  {label}
                </span>
              );
            })}
            <span className="absolute -bottom-7 text-[10px] uppercase tracking-wide text-ak-ink/35">{process.cycleLabel}</span>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
