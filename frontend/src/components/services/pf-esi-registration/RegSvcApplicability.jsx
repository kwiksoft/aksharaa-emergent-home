import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { applicability } from "../../../data/svc-pf-esi-registration";

export const RegSvcApplicability = () => (
  <section id="svc-applicability" data-testid="reg-svc-applicability-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{applicability.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {applicability.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{applicability.sub}</p>
      </Reveal>

      {/* side-by-side comparison cards, NOT a tab switcher — both visible at once,
          differentiator vs. category page's tabbed ledger pattern */}
      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0" stagger={0.15}>
        {applicability.tabs.map((t, i) => (
          <RevealItem
            key={t.id}
            className={`relative overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-white p-7 md:p-8 ${
              i === 0 ? "md:rounded-r-none md:border-r-0" : "md:rounded-l-none md:border-l-2 md:border-l-ak-orange/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
                <Icon name={t.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <div>
                <div className="ak-mono-label">{t.tag}</div>
                <h3 className="font-display text-lg font-bold text-ak-ink">{t.title}</h3>
              </div>
            </div>

            <div className="mt-6 flex items-baseline gap-3 rounded-xl bg-ak-mist/60 p-4">
              <span className="font-display text-4xl font-extrabold text-ak-ink">{t.threshold.num}</span>
              <span className="text-[13px] leading-snug text-ak-ink/55">{t.threshold.label}</span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ak-orange" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between border-t border-ak-ink/[0.07] pt-4">
              <span className="text-[12px] font-medium text-ak-ink/45">{t.wage.label}</span>
              <span className="font-display text-base font-bold text-ak-orange">{t.wage.value}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
