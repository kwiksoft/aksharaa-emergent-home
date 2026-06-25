import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-payroll-processing";

export const PayrollScope = () => (
  <section id="svc-scope" data-testid="payroll-scope-section" className="relative overflow-hidden bg-ak-ink py-20 md:py-28">
    {/* semi-opacity background photo */}
    <div
      className="absolute inset-0 opacity-[0.22]"
      style={{
        backgroundImage: `url(${scope.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ak-ink/60 via-ak-ink/85 to-ak-ink" />

    <Container className="relative z-10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker--light mx-auto mb-5 justify-center">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{scope.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/55">{scope.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {scope.cards.map((c) => (
          <RevealItem
            key={c.num}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 transition-all duration-300 hover:border-ak-orange hover:bg-ak-orange"
          >
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-3xl font-bold text-white/[0.08] transition-opacity duration-300 group-hover:opacity-0">
              {c.num}
            </span>

            {/* icon — fades/shrinks out on hover, matches the reference's icon-to-fill swap */}
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-ak-orange/15 text-ak-orange transition-all duration-300 group-hover:h-0 group-hover:opacity-0">
              <Icon name={c.icon} className="h-[18px] w-[18px]" strokeWidth={1.85} />
            </span>

            <h3 className="relative mt-4 font-display text-sm font-bold text-white transition-all duration-300 group-hover:mt-0">{c.title}</h3>
            <p className="relative mt-2 text-[12.5px] leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/90">{c.desc}</p>

            {/* reveals on hover, mirrors the reference's "Read More" appearance */}
            <span className="relative mt-0 flex max-h-0 items-center gap-1.5 overflow-hidden text-[12px] font-bold text-white opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-8 group-hover:opacity-100">
              Step {c.num} of 6
              <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
