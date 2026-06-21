import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { related } from "../../../data/svc-employment-agreements";

export const AgreementsRelated = () => (
  <section id="svc-related" data-testid="agreements-related-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="mb-10 max-w-2xl">
        <div className="ak-kicker mb-5">{related.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{related.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{related.sub}</p>
      </Reveal>
      <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
        {related.items.map((r) => (
          <RevealItem key={r.title}>
            <a href={r.href} className="group flex h-full flex-col rounded-2xl border border-ak-ink/[0.07] bg-[#FAF6EE] p-6 transition-all hover:-translate-y-1 hover:border-ak-orange/30 hover:shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ak-ink text-ak-orange">
                <Icon name={r.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{r.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ak-ink/55">{r.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ak-orange">
                Learn More <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
              </span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
