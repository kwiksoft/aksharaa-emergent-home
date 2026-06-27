import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { what } from "../../../data/svc-pf-esi-returns-filing";

/**
 * "What Aksharaa Files on Your Behalf" — full rebuild per client reference
 * image. Previous version stacked the two streams vertically with a single
 * shared (white) card style; reference shows them side-by-side as two
 * fully-themed cards — PF in navy/blue, ESI in red — each with its own
 * dark header band, tinted icon chips, and tinted pill.
 *
 * Header emblems: the reference image's two circular header icons are the
 * actual EPFO and ESIC government logos. Reproducing real government
 * insignia on a commercial client site isn't something to attempt pixel-
 * for-pixel, so these were substituted with generic line icons (a cog for
 * PF, a heart-pulse for ESI) inside the same circular badge treatment —
 * keeps the layout and visual rhythm identical to the reference without
 * recreating an official emblem.
 *
 * Colours: all 8 new tokens (ak.returnsPf and ak.returnsEsi prefixed —
 * header band, icon chip bg, icon stroke, pill text) sampled via PIL from
 * the reference image, not eyeballed. See tailwind.config.js for the
 * exact sample provenance.
 *
 * Copy: kicker/heading/sub updated to match the reference exactly. Note the
 * kicker still reads "THREE STREAMS" while the sub explicitly says "Two
 * statutory filing streams" — kept as-is since that's the client's actual
 * reference copy, not a typo introduced here. Also added a 4th ESI row
 * ("Challan Generation & Payment") that the reference shows but the old
 * data was missing — PF and ESI cards are both 4 rows now, matching.
 */
export const ReturnsWhat = () => (
  <section id="svc-what" data-testid="returns-what-section" className="bg-ak-mist/40 py-10 md:py-14">
    <Container>
      <Reveal className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-9 bg-ak-orange/50" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ak-ink md:text-xs">
            {what.kicker}
          </span>
          <span className="h-px w-9 bg-ak-orange/50" />
        </div>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-[2.35rem]">
          <span className="text-ak-ink">{what.headingLine1} </span>
          <span className="text-ak-orange">{what.headingLine2}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ak-ink/60">{what.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.15}>
        {what.streams.map((s) => {
          const isPf = s.theme === "pf";
          const headerBg = isPf ? "bg-ak-returnsPfHeader" : "bg-ak-returnsEsiHeader";
          const chipBg = isPf ? "bg-ak-returnsPfChip" : "bg-ak-returnsEsiChip";
          const iconColor = isPf ? "text-ak-returnsPfIcon" : "text-ak-returnsEsiIcon";
          const pillText = isPf ? "text-ak-returnsPfPillText" : "text-ak-returnsEsiPillText";
          const deadlineColor = "text-ak-orange";

          return (
            <RevealItem key={s.title} className="overflow-hidden rounded-2xl border border-ak-ink/[0.06] bg-white shadow-[0_20px_50px_-25px_rgba(28,42,57,0.18)]">
              <div className={`flex flex-wrap items-center justify-between gap-3 px-7 py-5 ${headerBg}`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/70">
                    <Icon name={s.icon} className="h-5 w-5 text-white" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-white md:text-xl">{s.title}</h3>
                    <div className="mt-0.5 text-[13px] font-medium text-white/75">{s.tag}</div>
                  </div>
                </div>
                <span className={`rounded-full bg-white px-4 py-1.5 text-[12px] font-bold ${pillText}`}>{s.freq}</span>
              </div>

              <div className="divide-y divide-ak-ink/[0.06]">
                {s.rows.map((r) => (
                  <div key={r.name} className="flex gap-4 px-7 py-5">
                    <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${chipBg}`}>
                      <Icon name={r.icon} className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[15px] font-bold leading-snug text-ak-ink">{r.name}</div>
                      <div className={`mt-0.5 text-[12.5px] font-bold ${deadlineColor}`}>{r.deadline}</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-ak-ink/55">{r.what}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  </section>
);
