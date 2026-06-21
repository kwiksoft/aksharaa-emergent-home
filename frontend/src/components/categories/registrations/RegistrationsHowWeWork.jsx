import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { howWeWork } from "../../../data/registrations";

export const RegistrationsHowWeWork = () => (
  <section
    id="registry-how"
    data-testid="registrations-howwework-section"
    className="bg-white py-20 md:py-28"
  >
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{howWeWork.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.04] tracking-tight text-ak-ink md:text-4xl">
          {howWeWork.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{howWeWork.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-ak-ink/[0.07] sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {howWeWork.steps.map((s) => (
          <RevealItem key={s.num} className="relative bg-white p-7 transition-colors hover:bg-ak-mist/40">
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-4xl font-bold leading-none text-ak-ink/[0.06]">
              {s.num}
            </span>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-ak-orange/10 text-ak-orange">
              <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={1.9} />
            </span>
            <h3 className="relative mt-4 font-display text-sm font-bold leading-snug text-ak-ink">{s.title}</h3>
            <p className="relative mt-2 text-[13px] leading-relaxed text-ak-ink/50">{s.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
