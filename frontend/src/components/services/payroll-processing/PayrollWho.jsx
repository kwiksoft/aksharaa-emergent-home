import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { who } from "../../../data/svc-payroll-processing";

const PersonaCard = ({ p }) => (
  <div
    className="flex h-full flex-col rounded-2xl border-2 border-ak-orange/45 bg-gradient-to-b from-[#123B82] via-[#0C2F6E] to-[#08285C] p-7 shadow-[0_24px_50px_-24px_rgba(8,40,92,0.55)]"
  >
    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ak-orange/15">
      <Icon name={p.icon} className="h-7 w-7 text-ak-orange" strokeWidth={1.75} />
    </span>
    <h3 className="mt-4 text-center font-display text-lg font-extrabold text-white">{p.title}</h3>
    <div className="mt-1 text-center text-[13px] font-bold text-ak-orange">{p.range}</div>

    <ul className="mt-5 space-y-2.5 border-t border-white/[0.12] pt-5">
      {p.points.map((pt) => (
        <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-white/75">
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
  <section id="svc-who" data-testid="payroll-who-section" className="bg-white">
    {/* photo band — fixed height, normal flow (not absolutely positioned),
        so its height is never ambiguous to anything after it. The asset
        itself fades to white by ~80% down (confirmed by direct pixel
        sampling); the overlay below reinforces that fade across the
        bottom half of whatever height this band renders at, so the
        transition to the white section background is reliable regardless
        of exactly where the crop lands relative to the source image. */}
    <div
      className="relative h-[440px] overflow-hidden bg-cover bg-top md:h-[520px]"
      style={{ backgroundImage: `url(${who.bgImage})` }}
    >
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white" />
      <Container className="relative z-10 h-full">
        <Reveal className="max-w-xl pt-14 md:ml-auto md:mr-4 md:pt-16 lg:mr-8">
          <h2
            className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-[2.65rem]"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.45)" }}
          >
            {who.heading[0]} <span className="text-ak-orange">{who.heading[1]}</span>
          </h2>
          <p
            className="mt-5 text-[15px] leading-relaxed text-white/90 md:text-base"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
          >
            {who.sub}
          </p>
        </Reveal>
      </Container>
    </div>

    {/* cards — separate sibling below the (fixed-height) photo band, pulled
        up slightly for a bit of overlap into the band's already-faded-to-
        white tail. Safe this time: the photo band's height is an explicit
        h-[...] value, not derived from its children, so nothing here can
        shrink it — this negative margin only adjusts the gap between two
        siblings, not a parent's own calculated height (that distinction is
        exactly what broke Section 3 earlier this thread). */}
    <Container>
      <RevealGroup className="-mt-20 grid grid-cols-1 gap-6 md:-mt-24 md:grid-cols-3" stagger={0.12}>
        {who.personas.map((p) => (
          <RevealItem key={p.title}>
            <PersonaCard p={p} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>

    {/* bottom banner — unchanged */}
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
