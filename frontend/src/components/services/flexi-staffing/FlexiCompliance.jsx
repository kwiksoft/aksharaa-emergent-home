import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { compliance } from "../../../data/svc-flexi-staffing";

export const FlexiCompliance = () => (
  <section id="svc-compliance" data-testid="flexi-compliance-section" className="bg-ak-ink py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="ak-kicker ak-kicker--light mb-5">{compliance.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{compliance.heading}</h2>
            <p className="mt-5 text-[14px] leading-relaxed text-white/45">{compliance.sub}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-7 space-y-3">
            {compliance.items.map((it) => (
              <div key={it} className="flex items-start gap-3">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" strokeWidth={2.2} />
                <span className="text-[13px] leading-snug text-white/65">{it}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
          <div className="ak-mono-label--light text-ak-orange/70">{compliance.coverage.title}</div>
          <div className="mt-5 space-y-3">
            {compliance.coverage.stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <span className="text-[12.5px] text-white/55">{s.label}</span>
                <span className="font-display text-sm font-bold text-ak-orange">{s.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
