import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-employment-agreements";

/**
 * Process — FULL REDESIGN per client reference image (Section 5). See the
 * data-file comment above `process` for content-level rationale (accent/
 * icon per step, turnaround range/unit split, structured formats). This
 * file implements the visual side:
 *
 * - New top photo banner (didn't exist before): reuses the Hero's own
 *   background asset (agreements-hero-bg.jpg — same photo the reference
 *   shows for this section, confirmed by direct visual comparison) rather
 *   than a new client-supplied asset, since this is the same underlying
 *   photograph just shown at full strength instead of Hero's faded crop.
 *   4 floating icon badges over the photo (people / document / scales /
 *   shield-check) connected by a faint dashed orbit arc, reusing the
 *   exact same construction pattern as the Hero's badge layer (absolute
 *   positioning by percentage, white rounded-card chrome) rather than
 *   inventing a new treatment.
 * - Left column: 4-step timeline, each step's numbered circle now in one
 *   of 4 distinct accent colours (vs the old uniform single-colour
 *   circle) connected by a vertical dashed line. Each step also gets a
 *   small coloured icon-box above the title (new — didn't exist before).
 *   Per direct instruction, an icon-box placeholder stands in for the
 *   reference's real per-step photo (no image-generation tool available
 *   in this environment); swapping in a real photo later only needs an
 *   `image` field added per step and an <img> swapped in for the icon
 *   box, no other structural change.
 * - Right column: Turnaround Times card redesigned with a dotted
 *   timeline connector + small orange dot bullets per row (matching the
 *   left column's timeline motif) and a two-line duration pill (bold
 *   range + smaller unit label) replacing the old inline trailing text;
 *   footnote moved into its own bordered/tinted box with an info icon
 *   (was a plain trailing paragraph before). Delivered In card reuses
 *   the page's existing ak.ink (sampled reference value within normal
 *   tolerance for a phone-photographed JPEG) rather than a new token,
 *   gets a new dot-grid watermark (top-right, matching the construction
 *   already used on Section 4), an outlined download icon + orange
 *   underline under the heading, and the two format rows now show a
 *   flat colour-coded file-type badge (blue "WORD" / red "PDF") built as
 *   plain coloured boxes with text — not a reproduction of any real
 *   software's logo artwork.
 */

const orbitBadges = [
  { icon: "users", pos: { left: "38%", top: "8%" } },
  { icon: "fileText", pos: { left: "8%", top: "42%" } },
  { icon: "scale", pos: { left: "92%", top: "38%" } },
  { icon: "shield", pos: { left: "85%", top: "82%" } },
];

const fileBadgeStyle = {
  WORD: "bg-[#1C6BE4] text-white",
  PDF: "bg-[#E0382F] text-white",
};

export const AgreementsProcess = () => (
  <section id="svc-process" data-testid="agreements-process-section" className="bg-white py-10 md:py-14">
    {/* Top photo banner — reuses the Hero's own background photo at full
        strength (no fade mask), since the reference shows the same
        underlying photograph. Desktop only, matching the Hero's own
        lg:block convention for this asset's wide/landscape crop. */}
    <Container>
      <div className="relative mb-14 overflow-hidden rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <Reveal className="relative z-10 bg-[#FAF6EE] px-6 py-10 md:px-10 md:py-14 lg:bg-transparent">
            <div className="ak-kicker mb-5">{process.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {process.heading[0]}
              <span className="text-ak-agreementsOrange">{process.heading[1]}</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ak-ink/60">{process.sub}</p>
          </Reveal>

          <div className="relative hidden min-h-[340px] lg:block" data-testid="agreements-process-visual">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/assets/sections/agreements-hero-bg.jpg)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* faint dashed orbit arc, same construction as Hero's rings */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
              <path d="M38 12 A 45 45 0 0 1 90 40" stroke="#FA8021" strokeOpacity="0.4" strokeWidth="0.5" strokeDasharray="1 3" fill="none" />
              <path d="M90 40 A 45 45 0 0 1 83 80" stroke="#FA8021" strokeOpacity="0.4" strokeWidth="0.5" strokeDasharray="1 3" fill="none" />
            </svg>
            {orbitBadges.map((b, i) => (
              <div
                key={b.icon}
                className="absolute"
                style={{ left: b.pos.left, top: b.pos.top, transform: "translate(-50%, -50%)" }}
              >
                <Reveal
                  delay={0.3 + i * 0.1}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-10px_rgba(28,42,57,0.25)]"
                >
                  <Icon name={b.icon} className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={2} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        {/* LEFT — 4-step timeline */}
        <RevealGroup className="relative space-y-5" stagger={0.1}>
          {/* continuous dashed connector spanning the full badge column,
              behind the numbered circles (z-0) */}
          <span className="absolute left-5 top-5 bottom-5 w-px -translate-x-1/2 border-l border-dashed border-ak-ink/15" aria-hidden="true" />
          {process.steps.map((s) => (
            <RevealItem key={s.num} className="relative flex gap-5">
              {/* numbered circle, sits above the connector line */}
              <span
                className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold text-white"
                style={{ backgroundColor: s.accent }}
              >
                {s.num}
              </span>
              <div className="flex-1 rounded-2xl border border-ak-ink/[0.06] bg-white p-5 shadow-[0_4px_20px_-12px_rgba(28,42,57,0.1)]">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: s.tint, color: s.accent }}
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-3 font-display text-[14.5px] font-bold text-ak-ink">{s.title}</h3>
                <span className="mt-1.5 block h-[2px] w-7 rounded-full" style={{ backgroundColor: s.accent }} />
                <p className="mt-2 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* RIGHT — Turnaround Times + Delivered In */}
        <div className="space-y-5">
          <Reveal delay={0.15} className="rounded-2xl border border-ak-ink/[0.07] bg-[#FAF6EE] p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="clock" className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={1.9} />
              <div className="font-display text-sm font-bold text-ak-ink">{process.turnaround.title}</div>
            </div>
            <div className="relative mt-5">
              {/* continuous dotted connector behind the row bullets */}
              <span className="absolute left-1 top-2 bottom-2 w-px border-l border-dotted border-ak-agreementsOrange/40" aria-hidden="true" />
              <div className="space-y-4">
                {process.turnaround.rows.map((r) => (
                  <div key={r.type} className="relative flex items-start justify-between gap-3 pl-5">
                    <span className="absolute left-0 top-[5px] z-10 h-2 w-2 flex-shrink-0 rounded-full bg-ak-agreementsOrange" />
                    <span className="text-[12.5px] leading-snug text-ak-ink/70">{r.type}</span>
                    <span className="flex-shrink-0 rounded-lg bg-ak-agreementsIconBg px-3 py-1.5 text-center">
                      <span className="block font-display text-[13px] font-extrabold leading-tight text-ak-agreementsRust">{r.range}</span>
                      <span className="block text-[9.5px] leading-tight text-ak-agreementsRust/80">{r.unit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-ak-agreementsIconBg p-3.5">
              <Icon name="alertCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-agreementsRust" strokeWidth={2} />
              <p className="text-[11px] leading-relaxed text-ak-ink/60">{process.turnaround.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative overflow-hidden rounded-2xl bg-ak-ink p-6">
            <svg className="pointer-events-none absolute right-4 top-4 h-16 w-20" viewBox="0 0 80 64" fill="none" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, row) =>
                Array.from({ length: 5 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={6 + col * 16} cy={6 + row * 16} r="1.6" fill="white" opacity="0.15" />
                ))
              )}
            </svg>
            <div className="relative flex items-center gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-ak-agreementsOrange/50">
                <Icon name="download" className="h-4.5 w-4.5 text-ak-agreementsOrange" strokeWidth={2} />
              </span>
              <div className="font-display text-[15px] font-bold text-white">Delivered In</div>
            </div>
            <span className="relative mt-3 block h-[2px] w-8 rounded-full bg-ak-agreementsOrange" />
            <div className="relative mt-5 space-y-3.5 divide-y divide-white/10">
              {process.formats.map((f) => (
                <div key={f.ext} className="flex items-center gap-3 pt-3.5 first:pt-0">
                  <span className={`flex h-8 w-11 flex-shrink-0 items-center justify-center rounded-md text-[9px] font-extrabold tracking-tight ${fileBadgeStyle[f.ext]}`}>
                    {f.ext}
                  </span>
                  <span className="text-[13px] font-medium text-white/90">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
