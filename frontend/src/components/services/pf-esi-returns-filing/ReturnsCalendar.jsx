import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { calendar } from "../../../data/svc-pf-esi-returns-filing";

/**
 * "Your Monthly Compliance Calendar" — full rebuild per client reference
 * image (prior thread), then two corrections this thread.
 *
 * Original rebuild: previous version was month-tiles only, no intro
 * illustration; reference showed a two-column top section (kicker/
 * heading/sub on the left, a 3D-style desk-calendar illustration on the
 * right) ABOVE the month-tile row, plus a right-pointing arrow connector
 * between the active "Every Month" tile and April, a line-dot-line
 * divider under every month label, and a faint ghost calendar-icon
 * watermark in the bottom-right corner of each inactive tile.
 *
 * CORRECTION (this thread): replaced the hand-built inline SVG
 * desk-calendar illustration with the client's real supplied image
 * (calendar01.jpeg — the same "Stay Compliant. Stay Ahead." / "Aksharaa
 * ensures every deadline is met, every time." composition the SVG was
 * approximating). Downscaled 1367x1150 -> 800x673 and re-saved as an
 * optimised JPG (~64KB) to match this page's other asset sizes, placed
 * at frontend/public/assets/sections/returns-calendar-illustration.jpg.
 * Also removed the arrow connector between the active "Every Month"
 * tile and April per client request, and increased the month-card text
 * sizes (label, divider spacing, and each filing row's name/due-date
 * text) for legibility.
 *
 * Colours: ak.returnsCalendarBadge (#F57418) sampled via PIL from the
 * "Every Month" tile's icon badge fill — see tailwind.config.js for
 * provenance. Inactive-tile badge colour reuses ak.ink (#1C2A39): the
 * reference's navy badge sampled to #1D293D, a 1-4 unit difference per
 * channel from ak.ink already in the palette — within anti-aliasing
 * noise, so reused rather than adding a near-duplicate token.
 */

const DeskCalendarIllustration = () => (
  <div className="mx-auto w-full max-w-md">
    <img
      src="/assets/sections/returns-calendar-illustration.jpg"
      alt="Desk calendar reading Stay Compliant, Stay Ahead — Aksharaa ensures every deadline is met, every time"
      className="w-full rounded-2xl"
    />
  </div>
);

export const ReturnsCalendar = () => (
  <section id="svc-calendar" data-testid="returns-calendar-section" className="bg-white py-10 md:py-14">
    <Container>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <div className="ak-kicker mb-5">{calendar.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-4xl lg:text-[2.5rem]">{calendar.heading}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ak-ink/60">{calendar.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <DeskCalendarIllustration />
        </Reveal>
      </div>

      <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {calendar.months.map((m, i) => (
          <div key={m.name} className="relative">
            <RevealItem
              className={`relative h-full overflow-hidden rounded-2xl p-6 ${
                m.active ? "border-2 border-ak-orange/70 bg-ak-orange/[0.06]" : "border border-ak-ink/[0.08] bg-white"
              }`}
            >
              {/* Faint ghost calendar watermark, bottom-right corner */}
              <Icon
                name="calendarPlain"
                className={`pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 ${m.active ? "text-ak-orange/[0.07]" : "text-ak-ink/[0.05]"}`}
                strokeWidth={1.5}
              />

              <div className="relative flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: m.active ? "#F57418" : "#1C2A39" }}
                >
                  <Icon name="calendarPlain" className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <div className={`mt-3 font-display text-base font-extrabold uppercase tracking-wide ${m.active ? "text-ak-orange" : "text-ak-ink"}`}>
                  {m.name}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className={`h-px w-6 ${m.active ? "bg-ak-orange/40" : "bg-ak-ink/20"}`} />
                  <span className={`h-1 w-1 rounded-full ${m.active ? "bg-ak-orange/60" : "bg-ak-ink/30"}`} />
                  <span className={`h-px w-6 ${m.active ? "bg-ak-orange/40" : "bg-ak-ink/20"}`} />
                </div>
              </div>

              <div className="relative mt-5 space-y-3.5">
                {m.filings.map((f) => (
                  <div key={f.name} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${f.type === "pf" ? "bg-ak-orange" : "bg-ak-ink"}`} />
                    <div>
                      <div className="text-sm font-bold text-ak-ink">{f.name}</div>
                      <div className="text-[12.5px] text-ak-ink/45">{f.due}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealItem>
          </div>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 px-6 py-4">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-orange" /> PF Filing</span>
          <span className="flex items-center gap-2 text-[12px] font-medium text-ak-ink/60"><span className="h-2 w-2 rounded-full bg-ak-ink" /> ESI Filing</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ak-ink/50">
          <Icon name="clock" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={2} />
          {calendar.note}
        </div>
      </Reveal>
    </Container>
  </section>
);
