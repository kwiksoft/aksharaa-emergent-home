import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { calendar } from "../../../data/svc-pf-esi-returns-filing";

export const ReturnsCalendar = () => (
  <section id="svc-calendar" data-testid="returns-calendar-section" className="bg-white py-24 md:py-32">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{calendar.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{calendar.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{calendar.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {calendar.months.map((m) => (
          <RevealItem
            key={m.name}
            className={`rounded-2xl p-6 ${m.active ? "bg-ak-orange text-white" : "border border-ak-ink/[0.07] bg-ak-mist/30"}`}
          >
            <div className={`font-display text-sm font-bold ${m.active ? "text-white" : "text-ak-ink"}`}>{m.name}</div>
            <div className="mt-4 space-y-3">
              {m.filings.map((f) => (
                <div key={f.name} className="flex items-start gap-2.5">
                  <span className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${m.active ? "bg-white" : f.type === "pf" ? "bg-ak-ink" : "bg-ak-slate"}`} />
                  <div>
                    <div className={`text-[12px] font-bold ${m.active ? "text-white" : "text-ak-ink"}`}>{f.name}</div>
                    <div className={`text-[11px] ${m.active ? "text-white/75" : "text-ak-ink/45"}`}>{f.due}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 px-6 py-4">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-ink" /> PF Filing</span>
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-slate" /> ESI Filing</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ak-ink/50">
          <Icon name="clock" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={2} />
          {calendar.note}
        </div>
      </Reveal>
    </Container>
  </section>
);
