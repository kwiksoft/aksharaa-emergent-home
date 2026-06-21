import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { services } from "../../../data/staffing-manpower";

export const StaffingCatServices = () => (
  <section id="staffing-services" data-testid="staffingcat-services-section" className="bg-ak-mist/40 py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{services.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{services.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{services.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 divide-y divide-ak-ink/[0.07] overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-white" stagger={0.05}>
        {services.items.map((s) => (
          <RevealItem key={s.num}>
            <a href={s.href} data-testid={`staffingcat-service-${s.num}`} className="group flex items-center gap-5 px-6 py-5 transition-colors hover:bg-ak-mist/30 md:px-8">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ak-orange/10 text-ak-orange transition-colors group-hover:bg-ak-orange group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-[15px] font-bold text-ak-ink">{s.title}</h3>
                <p className="mt-0.5 text-[12.5px] leading-snug text-ak-ink/50">{s.desc}</p>
              </div>
              <Icon name="arrowUpRight" className="h-4 w-4 flex-shrink-0 text-ak-ink/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ak-orange" strokeWidth={2.2} />
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
