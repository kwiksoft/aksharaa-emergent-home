import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { framework } from "../../data/content";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export const GovernanceFramework = () => (
  <section
    id="framework"
    data-testid="framework-section"
    className="relative overflow-hidden bg-ak-navy py-20 md:py-32"
  >
    <div className="pointer-events-none absolute inset-0 ak-dots-dark opacity-60" />

    <Container className="relative">
      <Reveal className="max-w-4xl">
        <div className="ak-kicker mb-5">{framework.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-6xl">
          A Structured Governance <span className="ak-outline-white">Framework</span>
          <span className="mt-2 block text-xl font-bold text-white/40 md:text-2xl">
            — Not Just Filing Services
          </span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          {framework.sub}
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12" stagger={0.12}>
        {framework.pillars.map((p, i) => (
          <RevealItem key={p.num} className={SPANS[i]}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ak-slate/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ak-orange/30 hover:bg-ak-slate md:p-10">
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-ak-orange/10 md:text-[9rem]">
                {p.num}
              </span>
              <div className="relative">
                <div className="ak-kicker-bare text-ak-orange">{p.label}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <div className="mt-4 h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-ak-orange" />
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">{p.desc}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-12">
        <div className="flex items-start gap-5 rounded-2xl border border-white/8 bg-gradient-to-r from-ak-slate/40 to-transparent p-7 md:p-10">
          <div className="mt-1 h-14 w-1 flex-shrink-0 rounded-full bg-ak-orange" />
          <p className="font-display text-xl font-medium leading-snug text-white md:text-2xl">
            <span className="text-white">{framework.statementStrong}</span>
            <span className="text-white/55">{framework.statementRest}</span>
          </p>
        </div>
      </Reveal>
    </Container>
  </section>
);
