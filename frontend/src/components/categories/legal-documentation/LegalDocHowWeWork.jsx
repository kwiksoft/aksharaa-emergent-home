import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { howWeWork } from "../../../data/legal-documentation";

export const LegalDocHowWeWork = () => (
  <section data-testid="legaldoc-howwework-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{howWeWork.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{howWeWork.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{howWeWork.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-ak-ink/[0.07] sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {howWeWork.steps.map((s) => (
          <RevealItem key={s.num} className="relative bg-[#FAF6EE] p-7">
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-4xl font-bold text-ak-ink/[0.06]">{s.num}</span>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-ak-ink font-display text-xs font-bold text-ak-orange">{s.num}</span>
            <h3 className="relative mt-4 font-display text-[14px] font-bold text-ak-ink">{s.title}</h3>
            <p className="relative mt-2 text-[12.5px] leading-relaxed text-ak-ink/55">{s.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
