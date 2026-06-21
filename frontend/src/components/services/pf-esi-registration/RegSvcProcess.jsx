import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="bg-ak-ink py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">
          {process.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/45">{process.sub}</p>
      </Reveal>

      {/* vertical connected timeline — distinct from the category page's
          horizontal 3-stage flow and home's horizontal lifecycle */}
      <div className="relative mx-auto mt-14 max-w-2xl">
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-ak-orange/40 via-ak-orange/15 to-transparent md:left-[31px]" />

        <RevealGroup stagger={0.12}>
          {process.steps.map((s) => (
            <RevealItem key={s.num} className="relative flex gap-5 pb-10 last:pb-0 md:gap-6">
              <span
                className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border-2 md:h-16 md:w-16 ${
                  s.final ? "border-ak-orange bg-ak-orange text-white" : "border-ak-orange/30 bg-ak-ink text-ak-orange"
                }`}
              >
                <Icon name={s.icon} className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
              </span>
              <div className="pt-1">
                <span className="ak-mono-label--light text-ak-orange/65">{s.num}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white md:text-xl">{s.title}</h3>
                <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-white/45 md:text-sm">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
