import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { applicability } from "../../../data/svc-pf-compliance";

export const PfCompApplicability = () => (
  <section id="svc-applicability" data-testid="pfcomp-applicability-section" className="bg-ak-mist/40 py-10 md:py-14">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mx-auto mb-5 justify-center">{applicability.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {applicability.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{applicability.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.15}>
        {applicability.cards.map((c, i) => (
          <RevealItem
            key={c.title}
            className={`rounded-2xl border bg-white p-7 ${i === 0 ? "border-ak-ink/10 shadow-lg" : "border-ak-ink/[0.07]"}`}
          >
            <div className="flex items-start justify-between">
              <div>
                {c.titleHref ? (
                  <a href={c.titleHref} className="font-display text-lg font-bold text-ak-ink underline decoration-ak-orange/30 decoration-2 hover:decoration-ak-orange">
                    {c.title}
                  </a>
                ) : (
                  <h3 className="font-display text-lg font-bold text-ak-ink">{c.title}</h3>
                )}
                <div className="ak-mono-label mt-1.5">{c.act}</div>
              </div>
              <div className="text-right">
                <div className={`font-display text-4xl font-extrabold ${i === 0 ? "text-ak-orange" : "text-ak-ink/30"}`}>{c.threshold}</div>
                <div className="text-[10px] font-medium uppercase text-ak-ink/35">or more employees</div>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-ak-ink/60">{c.body}</p>
            <div className="mt-5 space-y-2 border-t border-ak-ink/[0.07] pt-4">
              {c.details.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-3 text-[12.5px]">
                  <span className="font-semibold text-ak-ink/45">{d.label}</span>
                  <span className="text-right font-medium text-ak-ink/75">{d.value}</span>
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.25} className="mx-auto mt-8 max-w-3xl rounded-2xl border border-ak-orange/20 bg-ak-orange/5 p-5 text-center text-[13px] leading-relaxed text-ak-ink/65">
        {applicability.note}
      </Reveal>
    </Container>
  </section>
);
