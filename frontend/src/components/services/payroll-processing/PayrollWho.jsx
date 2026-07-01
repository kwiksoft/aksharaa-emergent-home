import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { who } from "../../../data/svc-payroll-processing";

const PersonaCard = ({ p }) => (
  <div className="flex h-full flex-col rounded-2xl border-2 border-ak-orange/45 bg-white/[0.05] p-7 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)]">
    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ak-orange/15">
      <Icon name={p.icon} className="h-7 w-7 text-ak-orange" strokeWidth={1.75} />
    </span>
    <h3 className="mt-4 text-center font-display text-lg font-extrabold text-white">{p.title}</h3>
    <div className="mt-1 text-center text-[13px] font-bold text-ak-orange">{p.range}</div>

    <ul className="mt-5 space-y-2.5 border-t border-white/[0.12] pt-5">
      {p.points.map((pt) => (
        <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-white/70">
          <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2} />
          {pt}
        </li>
      ))}
    </ul>

    <div className="mt-5 flex flex-1 items-end">
      <div className="flex w-full items-center gap-2.5 rounded-xl bg-black/25 px-4 py-3">
        <Icon name={p.callout.icon} className="h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
        <span className="text-[12px] font-bold leading-snug text-white">{p.callout.text}</span>
      </div>
    </div>
  </div>
);

export const PayrollWho = () => (
  <section id="svc-who" data-testid="payroll-who-section" className="relative bg-white">
    {/* single navy-based section: photo is an absolutely-positioned decorative
        top layer (out of normal flow), so it can never affect the height the
        browser gives the section below it — cards sit in normal flow on the
        section's own bg-payrollWhoNavy base, no negative-margin-across-
        siblings overlap math needed (that approach silently clipped the
        cards against the white section below, since a negative top margin
        shrinks the parent's calculated height by the same amount). */}
    <div className="relative overflow-hidden bg-payrollWhoNavy pb-14 md:pb-20">
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-cover bg-top md:h-[480px]"
        style={{ backgroundImage: `url(${who.bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-payrollWhoNavy/45 via-payrollWhoNavy/70 to-payrollWhoNavy" />
      </div>

      <Container className="relative z-10">
        <Reveal className="max-w-xl pt-16 md:ml-auto md:mr-4 md:pt-24 lg:mr-8">
          <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-[2.65rem]">
            {who.heading[0]} <span className="text-ak-orange">{who.heading[1]}</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70 md:text-base">{who.sub}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3" stagger={0.12}>
          {who.personas.map((p) => (
            <RevealItem key={p.title}>
              <PersonaCard p={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </div>

    {/* bottom banner — unchanged, returns to light theme */}
    <div className="bg-white py-14 md:py-20">
      <Container>
        <Reveal delay={0.15}>
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
    </div>
  </section>
);
