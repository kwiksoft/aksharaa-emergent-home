import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { architecture } from "../../data/content";

const COL_OFFSET = ["lg:mt-0", "lg:mt-12", "lg:mt-24"];

export const ComplianceArchitecture = () => (
  <section
    id="architecture"
    data-testid="architecture-section"
    className="bg-ak-mist/50 py-20 md:py-32"
  >
    <Container>
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{architecture.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-ak-ink md:text-5xl">
          Comprehensive Compliance &amp; Workforce <span className="ak-outline-ink">Architecture</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">
          {architecture.sub}
        </p>
      </Reveal>

      <RevealGroup
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        stagger={0.1}
      >
        {architecture.domains.map((d, i) => (
          <RevealItem key={d.num} className={COL_OFFSET[i % 3]}>
            <a
              href="#final-cta"
              data-testid={`architecture-card-${d.num}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ak-ink/8 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-ak-orange/30 hover:shadow-2xl"
            >
              <span className="pointer-events-none absolute right-5 top-4 select-none font-display text-6xl font-bold leading-none text-ak-ink/[0.05] transition-colors duration-500 group-hover:text-ak-orange/15">
                {d.num}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-ak-ink text-white transition-colors duration-300 group-hover:bg-ak-orange">
                <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <span className="ak-mono-label relative mt-5 block text-ak-orange">Domain {d.num}</span>
              <h3 className="relative mt-1.5 font-display text-xl font-semibold leading-snug tracking-tight text-ak-ink">
                {d.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ak-ink/55">
                {d.desc}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ak-orange">
                Explore domain
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
