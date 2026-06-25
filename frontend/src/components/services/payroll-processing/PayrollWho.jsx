import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { who } from "../../../data/svc-payroll-processing";

const PersonaCard = ({ p }) => (
  <div className="relative flex h-full flex-col">
    {/* connector + badge above the card (01, 03) */}
    {!p.featured && (
      <div className="mx-auto mb-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-ak-orange/40 bg-white font-display text-xs font-extrabold text-ak-orange">
        {p.num}
      </div>
    )}
    {!p.featured && <div className="mx-auto h-6 w-px border-l-2 border-dashed border-ak-orange/30" />}

    <div
      className={
        p.featured
          ? "flex flex-1 flex-col rounded-2xl border-2 border-ak-orange/25 bg-white p-7 shadow-[0_24px_50px_-20px_rgba(242,140,40,0.25)]"
          : "flex flex-1 flex-col rounded-2xl border border-ak-ink/[0.07] bg-white p-7"
      }
    >
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ak-orange/10">
        <Icon name={p.icon} className="h-7 w-7 text-ak-orange" strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-center font-display text-lg font-extrabold text-ak-ink">{p.title}</h3>
      <div className="mt-1 text-center text-[13px] font-bold text-ak-orange">{p.range}</div>

      <ul className="mt-5 space-y-2.5 border-t border-ak-ink/[0.07] pt-5">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-ak-ink/65">
            <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2} />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-ak-orange/[0.08] px-4 py-3">
        <Icon name={p.callout.icon} className="h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
        <span className="text-[12px] font-bold leading-snug text-ak-ink">{p.callout.text}</span>
      </div>
    </div>

    {/* connector + badge below the featured card (02) */}
    {p.featured && (
      <>
        <div className="mx-auto h-6 w-px border-l-2 border-dashed border-ak-orange/30" />
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-ak-orange/40 bg-white font-display text-xs font-extrabold text-ak-orange">
          {p.num}
        </div>
      </>
    )}
  </div>
);

export const PayrollWho = () => (
  <section id="svc-who" data-testid="payroll-who-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mx-auto mb-5 justify-center">{who.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {who.heading[0]} <span className="text-ak-orange">{who.heading[1]}</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{who.sub}</p>
      </Reveal>

      <RevealGroup className="mt-16 grid grid-cols-1 items-start gap-6 md:grid-cols-3" stagger={0.12}>
        {who.personas.map((p) => (
          <RevealItem key={p.title} className={p.featured ? "md:-mt-6" : "md:mt-6"}>
            <PersonaCard p={p} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.15} className="mt-10">
        <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-ak-orange/[0.06] to-ak-orange/[0.02] p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange text-white">
              <Icon name={who.banner.icon} className="h-6 w-6" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-base font-bold text-ak-ink">{who.banner.heading}</div>
              <p className="mt-0.5 text-[13px] text-ak-ink/55">{who.banner.sub}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {who.banner.benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <Icon name={b.icon} className="h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                <span className="text-[13px] font-medium text-ak-ink/70">{b.text}</span>
              </div>
            ))}
          </div>

          <a
            href={who.banner.cta.href}
            className="flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-ak-orange px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-ak-orange-dark"
          >
            {who.banner.cta.label}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
