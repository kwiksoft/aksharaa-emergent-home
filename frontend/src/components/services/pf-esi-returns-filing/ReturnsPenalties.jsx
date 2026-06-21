import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { penalties } from "../../../data/svc-pf-esi-returns-filing";

export const ReturnsPenalties = () => (
  <section id="svc-penalties" data-testid="returns-penalties-section" className="bg-ak-slate py-24 md:py-32">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{penalties.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{penalties.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/45">{penalties.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2" stagger={0.15}>
        {penalties.blocks.map((b, i) => (
          <RevealItem key={b.label} className={`p-7 md:p-8 ${i === 0 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`}>
            <div className="ak-mono-label--light text-ak-orange/70">{b.label}</div>
            <div className="mt-5 space-y-5">
              {b.items.map((it) => (
                <div key={it.desc} className="flex items-start gap-4">
                  <span className="font-display w-20 flex-shrink-0 text-xl font-extrabold text-white">{it.rate}</span>
                  <p className="text-[12.5px] leading-relaxed text-white/50">{it.desc}</p>
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.3} className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-white/[0.06] p-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-[13.5px] leading-relaxed text-white/65">{penalties.ctaText}</p>
        <AkButton href={penalties.cta.href} variant="primary" withArrow data-testid="returns-penalties-cta" className="flex-shrink-0">
          {penalties.cta.label}
        </AkButton>
      </Reveal>
    </Container>
  </section>
);
