import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { who } from "../../../data/svc-payroll-processing";

export const PayrollWho = () => (
  <section id="svc-who" data-testid="payroll-who-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker mx-auto mb-5 justify-center">{who.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{who.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{who.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3" stagger={0.12}>
        {who.personas.map((p, i) => (
          <RevealItem key={p.title} className={i === 1 ? "md:mt-6" : ""}>
            <div className="rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
                <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <div className="ak-mono-label mt-4">{p.tag}</div>
              <h3 className="mt-1 font-display text-base font-bold text-ak-ink">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{p.desc}</p>
              <ul className="mt-4 space-y-2 border-t border-ak-ink/[0.07] pt-4">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[12px] leading-snug text-ak-ink/55">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ak-orange" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
