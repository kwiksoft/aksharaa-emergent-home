import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { penalties } from "../../../data/svc-pf-esi-registration";

export const RegSvcPenalties = () => (
  <section id="svc-penalties" data-testid="reg-svc-penalties-section" className="bg-ak-mist/40 py-14 md:py-20">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* LEFT — text + photo, asymmetric narrower column */}
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{penalties.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {penalties.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5 space-y-4 text-[15px] leading-relaxed text-ak-ink/60">
            {penalties.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.2}>
            <AkButton href={penalties.cta.href} variant="primary" withArrow className="mt-7" data-testid="reg-svc-penalties-cta">
              {penalties.cta.label}
            </AkButton>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={penalties.image} alt={penalties.imageAlt} className="h-full w-full object-cover" />
          </Reveal>
        </div>

        {/* RIGHT — penalty cards, wider column */}
        <RevealGroup className="space-y-5" stagger={0.15}>
          {penalties.cards.map((c) => (
            <RevealItem key={c.title} className="overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-white">
              <div className="flex items-center gap-3 border-b border-ak-ink/[0.07] bg-ak-ink p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ak-orange font-display text-xs font-extrabold text-white">
                  {c.tag}
                </span>
                <h3 className="font-display text-base font-bold text-white">{c.title}</h3>
              </div>
              <ul className="divide-y divide-ak-ink/[0.06]">
                {c.rows.map((r) => (
                  <li key={r.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-[13px] leading-snug text-ak-ink/60">{r.label}</span>
                    <span className="flex-shrink-0 font-display text-sm font-bold text-ak-orange">{r.value}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
