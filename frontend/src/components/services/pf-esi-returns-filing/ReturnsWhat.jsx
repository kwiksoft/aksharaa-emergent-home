import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { what } from "../../../data/svc-pf-esi-returns-filing";

export const ReturnsWhat = () => (
  <section id="svc-what" data-testid="returns-what-section" className="bg-ak-mist/40 py-24 md:py-32">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{what.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{what.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{what.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 space-y-8" stagger={0.15}>
        {what.streams.map((s) => (
          <RevealItem key={s.title} className="overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ak-ink/[0.07] bg-ak-ink px-7 py-5">
              <div>
                <div className="ak-mono-label--light text-ak-orange/70">{s.tag}</div>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{s.title}</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/70">{s.freq}</span>
            </div>
            <div className="divide-y divide-ak-ink/[0.06]">
              {s.rows.map((r) => (
                <div key={r.name} className="grid grid-cols-1 gap-2 p-6 md:grid-cols-[1fr_140px_1.4fr] md:items-start md:gap-6">
                  <div className="text-[14px] font-bold text-ak-ink">{r.name}</div>
                  <div className="ak-mono-label text-ak-orange">{r.deadline}</div>
                  <div className="text-[13px] leading-relaxed text-ak-ink/55">{r.what}</div>
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
