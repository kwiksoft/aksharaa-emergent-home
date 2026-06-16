import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { workforce } from "../../data/content";

export const IntegratedWorkforce = () => (
  <section data-testid="workforce-section" className="bg-white py-20 md:py-32">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="ak-kicker mb-5">{workforce.kicker}</div>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ak-ink md:text-4xl lg:text-[42px]">
                {workforce.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ak-ink/60">{workforce.intro}</p>
              <div className="mt-7 rounded-2xl border border-ak-ink/8 bg-ak-mist/60 p-6">
                <p className="font-display text-[15px] font-medium leading-snug text-ak-ink">
                  {workforce.note}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <RevealGroup
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5"
            stagger={0.1}
          >
            {workforce.areas.map((area, i) => (
              <RevealItem
                key={area.title}
                className={i % 2 === 1 ? "sm:mt-8" : ""}
              >
                <div className="group h-full rounded-2xl border border-ak-ink/8 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-ak-orange/30 hover:shadow-xl md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-ink text-white transition-colors duration-300 group-hover:bg-ak-orange">
                    <Icon name={area.icon} className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug tracking-tight text-ak-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-ak-ink/55">{area.sub}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Container>
  </section>
);
