import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { lifecycle } from "../../../data/registrations";

export const RegistrationsLifecycle = () => (
  <section
    id="registry-lifecycle"
    data-testid="registrations-lifecycle-section"
    className="bg-ak-ink py-20 md:py-28"
  >
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{lifecycle.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.04] tracking-tight text-white md:text-4xl">
          {lifecycle.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/45 md:text-lg">{lifecycle.sub}</p>
      </Reveal>

      <div className="relative mt-16">
        {/* connecting spine */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ak-orange/30 to-transparent md:block" />

        <RevealGroup className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8" stagger={0.15}>
          {lifecycle.stages.map((s) => (
            <RevealItem key={s.num} className="text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ak-orange/30 bg-ak-ink text-ak-orange md:mx-0">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="ak-mono-label--light mt-5 text-ak-orange/70">{s.num}</div>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/45">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  </section>
);
