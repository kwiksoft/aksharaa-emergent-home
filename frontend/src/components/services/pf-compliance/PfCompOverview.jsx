import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { overview } from "../../../data/svc-pf-compliance";

export const PfCompOverview = () => (
  <section id="svc-overview" data-testid="pfcomp-overview-section" className="bg-white py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{overview.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {overview.heading}
            </h2>
            <div className="ak-mono-label mt-4 inline-flex items-center gap-2 rounded-full bg-ak-mist/60 px-3.5 py-1.5">
              <Icon name="building" className="h-3 w-3" strokeWidth={2.2} />
              {overview.actPill}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-ak-ink/65">
            {overview.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        {/* quick reference card */}
        <Reveal delay={0.15} className="rounded-2xl bg-ak-ink p-7 text-white">
          <div className="ak-mono-label--light text-ak-orange/70">{overview.quickRef.label}</div>
          <h3 className="mt-2 font-display text-lg font-bold">{overview.quickRef.title}</h3>
          <p className="mt-1 text-[12px] text-white/40">{overview.quickRef.sub}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {overview.quickRef.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ak-orange">{s.num}</div>
                <div className="mt-0.5 text-[11px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
            {overview.quickRef.links.map((l) => (
              <a key={l.label} href={l.href} className="group flex items-center justify-between gap-2 text-[12.5px] font-medium text-white/65 hover:text-white">
                {l.label}
                <Icon name="arrowRight" className="h-3.5 w-3.5 flex-shrink-0 text-ak-orange transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
