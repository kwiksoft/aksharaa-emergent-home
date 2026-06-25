import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { overview } from "../../../data/svc-flexi-staffing";

export const FlexiOverview = () => (
  <section id="svc-overview" data-testid="flexi-overview-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{overview.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{overview.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-ak-ink/65">
            {overview.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
        <Reveal delay={0.15} className="overflow-hidden rounded-2xl border border-ak-ink/[0.06] bg-white p-7 shadow-[0_18px_40px_-20px_rgba(28,42,57,0.12)]">
          <div className="font-display text-sm font-bold text-ak-ink">{overview.infoCard.title}</div>
          <ul className="mt-4 space-y-3">
            {overview.infoCard.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/60">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ak-orange" />
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-6 overflow-hidden rounded-xl">
            <img
              src="/assets/sections/flexi-overview-team.jpg"
              alt="Aksharaa team reviewing a flexi staffing deployment plan together"
              className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
