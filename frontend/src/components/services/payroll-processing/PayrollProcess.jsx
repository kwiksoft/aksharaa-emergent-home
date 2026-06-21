import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-payroll-processing";

export const PayrollProcess = () => (
  <section id="svc-process" data-testid="payroll-process-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{process.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
      </Reveal>

      <div className="relative mt-14 overflow-x-auto pb-2">
        <RevealGroup className="grid min-w-[800px] grid-cols-6 gap-3" stagger={0.08}>
          {process.steps.map((s) => (
            <RevealItem key={s.day} className="text-center">
              <div className="ak-mono-label">{s.day}</div>
              <div
                className={`mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-full ${
                  s.active ? "bg-ak-orange text-white" : "border border-ak-orange/30 bg-white text-ak-orange"
                }`}
              >
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-3 font-display text-[13px] font-bold text-ak-ink">{s.title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-ak-ink/50">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
