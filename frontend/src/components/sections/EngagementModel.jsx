import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { engagement } from "../../data/content";

export const EngagementModel = () => (
  <section id="engagement" data-testid="engagement-section" className="bg-ak-mist/50 py-20 md:py-32">
    <Container>
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker-bare mb-5">{engagement.kicker}</div>
        <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-ak-ink md:text-6xl">
          {engagement.heading}
        </h2>
        <p className="mt-5 text-base text-ak-ink/60 md:text-lg">{engagement.sub}</p>
      </Reveal>

      <RevealGroup
        className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.15}
      >
        {engagement.steps.map((step, i) => (
          <RevealItem key={step.num} className="relative">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl font-bold leading-none text-ak-ink/15 md:text-6xl">
                {step.num}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ak-ink text-white">
                <Icon name={step.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
            </div>
            <div className="mt-6 h-px w-full bg-ak-ink/10">
              <div className="h-px w-10 bg-ak-orange" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ak-ink">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ak-ink/55">{step.desc}</p>

            {i < engagement.steps.length - 1 && (
              <ArrowRight
                className="absolute -right-3 top-4 hidden h-5 w-5 text-ak-orange/40 lg:block"
                strokeWidth={2}
              />
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
