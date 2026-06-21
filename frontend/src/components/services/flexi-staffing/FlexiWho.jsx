import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { who } from "../../../data/svc-flexi-staffing";

const OFFSET = ["", "lg:mt-6", "", "lg:mt-6", "", "lg:mt-6"];

export const FlexiWho = () => (
  <section id="svc-who" data-testid="flexi-who-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{who.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{who.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{who.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {who.cards.map((c, i) => (
          <RevealItem key={c.title} className={OFFSET[i]}>
            <div className="rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 p-6 transition-shadow hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange">
                <Icon name={c.icon} className="h-4.5 w-4.5" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ak-ink">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
