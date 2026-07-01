import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-payroll-processing";

export const PayrollScope = () => (
  <section id="svc-scope" data-testid="payroll-scope-section" className="relative overflow-hidden bg-payrollScopeGreen py-14 md:py-20">
    {/* full-bleed background photo — client reference asset already includes
        the decorative line-art / dot-grid corners, used near-full opacity
        (unlike the previous 0.22 wash) since the new reference shows the
        green clearly, not washed out */}
    <div
      className="absolute inset-0 opacity-90"
      style={{ backgroundImage: `url(${scope.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-payrollScopeGreen/20 via-transparent to-payrollScopeGreen/40" />

    <Container className="relative z-10">
      {/* left-aligned per reference, not centered like the old treatment */}
      <Reveal className="max-w-xl">
        <div className="ak-kicker ak-kicker--light mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{scope.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/60">{scope.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {scope.cards.map((c) => (
          <RevealItem
            key={c.num}
            className="relative overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.04] p-6 transition-colors duration-300 hover:border-ak-orange/50 hover:bg-white/[0.07]"
          >
            <span className="pointer-events-none absolute right-4 top-3 select-none font-display text-3xl font-bold text-white/[0.1]">
              {c.num}
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-orange text-white">
              <Icon name={c.icon} className="h-[19px] w-[19px]" strokeWidth={1.9} />
            </span>

            <h3 className="relative mt-4 font-display text-sm font-bold text-white">{c.title}</h3>
            <p className="relative mt-2 text-[12.5px] leading-relaxed text-white/60">{c.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
