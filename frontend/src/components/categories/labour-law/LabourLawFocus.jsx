import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { focusServices } from "../../../data/labour-law";

const OFFSET = ["", "lg:mt-8", "", "lg:mt-8", "", "lg:mt-8"];

export const LabourLawFocus = () => (
  <section data-testid="labourlaw-focus-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{focusServices.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{focusServices.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{focusServices.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" stagger={0.08}>
        {focusServices.items.map((d, i) => (
          <RevealItem key={d.num} className={OFFSET[i]}>
            <a href={d.href} data-testid={`labourlaw-focus-card-${d.num}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ak-ink/8 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-ak-orange/30 hover:shadow-2xl">
              <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-5xl font-bold leading-none text-ak-ink/[0.05] transition-colors duration-500 group-hover:text-ak-orange/15">{d.num}</span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ak-ink text-ak-orange transition-colors duration-300 group-hover:bg-ak-orange group-hover:text-white">
                <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <h3 className="relative mt-4 font-display text-base font-semibold leading-snug tracking-tight text-ak-ink">{d.title}</h3>
              <p className="relative mt-2 text-[13px] font-medium leading-relaxed text-ak-orange/90">{d.tier}</p>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
