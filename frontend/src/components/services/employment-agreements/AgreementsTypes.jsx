import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { types } from "../../../data/svc-employment-agreements";

export const AgreementsTypes = () => (
  <section
    id="svc-types"
    data-testid="agreements-types-section"
    className="relative overflow-hidden py-20 md:py-28"
  >
    {/* Background photo (handshake over a signed contract), per client
        request. A white tint overlay sits on top so the kicker/heading/
        sub text and card content stay fully readable — the photo alone
        is busy enough (concentric ring decorations + visible contract
        text) that placing dark text directly over it would be illegible
        in places. Cards keep their existing opaque fills (parchment
        #FAF6EE), so they read clearly as solid surfaces above the photo
        rather than needing their own separate treatment. */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url(/assets/sections/agreements-types-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div className="absolute inset-0 bg-white/85" />

    <Container className="relative">
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{types.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{types.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{types.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {types.cards.map((c) => (
          <RevealItem key={c.num} className="relative overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-[#FAF6EE] p-6 transition-shadow hover:shadow-lg">
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-4xl font-bold text-ak-ink/[0.06]">{c.num}</span>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ak-ink text-ak-orange">
              <Icon name={c.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
            </span>
            <h3 className="relative mt-4 font-display text-base font-bold text-ak-ink">{c.title}</h3>
            <p className="relative mt-2 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ak-ink/50">{t}</span>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
