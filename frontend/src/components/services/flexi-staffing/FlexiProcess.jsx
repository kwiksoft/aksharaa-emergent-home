import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-flexi-staffing";

export const FlexiProcess = () => (
  <section id="svc-process" data-testid="flexi-process-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{process.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-ak-ink/10 lg:block" />
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4" stagger={0.1}>
          {process.steps.map((s) => (
            <RevealItem key={s.num} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ak-orange text-white">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.85} />
              </div>
              <h3 className="mt-3 font-display text-[13px] font-bold text-ak-ink">{s.title}</h3>
              <p className="mt-1 text-[11.5px] leading-snug text-ak-ink/50">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
