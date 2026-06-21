import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { overview } from "../../../data/svc-payroll-processing";

export const PayrollOverview = () => (
  <section id="svc-overview" data-testid="payroll-overview-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{overview.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{overview.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-ak-ink/65">
            {overview.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={0.2} className="mt-6 rounded-xl border-l-2 border-ak-orange bg-ak-orange/5 p-5 text-[13.5px] leading-relaxed text-ak-ink/70">
            {overview.highlight}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="rounded-2xl border border-ak-ink/[0.07] bg-white p-7">
          <div className="ak-mono-label">{overview.deliverables.label}</div>
          <h3 className="mt-2 font-display text-lg font-bold text-ak-ink">{overview.deliverables.title}</h3>
          <div className="mt-5 space-y-3">
            {overview.deliverables.items.map((it) => (
              <div key={it.title} className="flex items-start gap-2.5">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                <div className="text-[13px] leading-snug text-ak-ink/65">
                  <strong className="font-semibold text-ak-ink">{it.title}</strong> — {it.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2 border-t border-ak-ink/[0.07] pt-4">
            {overview.deliverables.links.map((l) => (
              <a key={l.label} href={l.href} className="group flex items-center justify-between text-[12.5px] font-medium text-ak-orange">
                {l.label}
                <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
