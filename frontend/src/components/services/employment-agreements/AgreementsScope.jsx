import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-employment-agreements";

export const AgreementsScope = () => (
  <section id="svc-scope" data-testid="agreements-scope-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
      </Reveal>
      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {scope.items.map((s) => (
          <RevealItem key={s.title} className="flex items-start gap-4 rounded-2xl bg-white p-6">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
              <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
            </span>
            <div>
              <h3 className="font-display text-[14px] font-bold text-ak-ink">{s.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ak-ink/55">{s.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
