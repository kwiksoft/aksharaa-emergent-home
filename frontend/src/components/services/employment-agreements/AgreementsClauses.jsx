import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { clauses } from "../../../data/svc-employment-agreements";

/**
 * Key Clauses — FULL REDESIGN per client reference image (Section 3).
 * Previous version: dark navy theme, plain §-numbered rows with no
 * icons, inline footnote within the same bordered list. Per direct
 * instruction ("redesign it ... no need of 3D make it simple"):
 *
 * - Switched from dark (bg-ak-ink) to light theme matching the page's
 *   warm parchment palette used elsewhere.
 * - Heading split for an orange-emphasis word ("Must Have") with a
 *   hand-drawn-style squiggle underline beneath it (inline SVG,
 *   matching the reference's loose sketched line rather than a
 *   straight rule).
 * - New illustration block (top-right) replacing empty space that
 *   didn't exist before: a flat/outline-style clipboard with checklist
 *   lines and a pen, a shield+checkmark badge, and three small orbiting
 *   icon circles (person, scale, document) connected by dashed arcs —
 *   built as simple flat SVG/icon shapes per direct instruction to
 *   avoid a 3D treatment, not a raster mockup of the reference's 3D
 *   render.
 * - Each row gets a colour-circle icon (mapped per clause in the data
 *   file) + a large plain numeral (01-09, replacing the old "§ N"
 *   display) + a vertical divider, before the title/description.
 * - Tier pills redesigned: Essential is now an outlined pill (orange
 *   border, orange text, transparent fill); Critical is a solid filled
 *   pill in a distinct deeper rust-orange (ak.agreementsCritical,
 *   genuinely different from the page's standard accent orange,
 *   PIL-sampled from the reference with documented provenance in
 *   tailwind.config.js) with white text — both replacing the old
 *   uniform-orange-tint-vs-stronger-fill treatment.
 * - Footnote moved out of the bordered list into its own separate
 *   boxed card below it, with a light peach tint background matching
 *   the icon-circle colour (ak.agreementsIconBg).
 */
export const AgreementsClauses = () => (
  <section id="svc-clauses" data-testid="agreements-clauses-section" className="bg-[#FFFCF9] py-20 md:py-28">
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
        {/* LEFT — kicker, heading, sub */}
        <Reveal>
          <div className="ak-kicker mb-5">{clauses.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ak-ink md:text-4xl">
            {clauses.heading[0]}
            <span className="relative inline-block text-ak-agreementsOrange">
              {clauses.heading[1]}
              <svg
                className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 160 14"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 9 C 30 3, 55 11, 80 6 C 105 1, 130 10, 158 5"
                  stroke="#FA8021"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ak-ink/55">{clauses.sub}</p>
        </Reveal>

        {/* RIGHT — flat illustration: clipboard + checklist + pen, shield
            badge, orbiting icon circles connected by dashed arcs. */}
        <Reveal delay={0.1} className="relative mx-auto hidden h-[280px] w-full max-w-md lg:block">
          {/* dashed orbit arcs */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 280" fill="none">
            <path d="M70 70 A 150 150 0 0 1 340 90" stroke="#FA8021" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
            <path d="M340 90 A 150 150 0 0 1 330 220" stroke="#FA8021" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
          </svg>

          {/* clipboard card */}
          <div className="absolute left-1/2 top-2 h-[260px] w-[230px] -translate-x-1/2 rounded-2xl border-[3px] border-ak-ink bg-white shadow-[0_20px_50px_-20px_rgba(28,42,57,0.25)]">
            <div className="absolute -top-4 left-1/2 h-7 w-16 -translate-x-1/2 rounded-md bg-ak-ink/80" />
            <div className="flex h-full flex-col gap-3 p-5 pt-7">
              <div className="font-display text-[12px] font-extrabold uppercase leading-tight tracking-wide text-ak-ink">Employment Agreement</div>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-sm border border-ak-agreementsOrange">
                    <Icon name="checkCircle" className="h-2.5 w-2.5 text-ak-agreementsOrange" strokeWidth={3} />
                  </span>
                  <span className="h-1.5 flex-1 rounded-full bg-ak-ink/10" />
                </div>
              ))}
              <div className="mt-auto flex justify-end">
                <Icon name="edit3" className="h-5 w-5 text-ak-ink/70" strokeWidth={1.8} />
              </div>
            </div>
          </div>

          {/* shield badge, lower-left, overlapping the clipboard's edge */}
          <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ak-agreementsOrange shadow-lg">
            <Icon name="checkCircle" className="h-8 w-8 text-white" strokeWidth={2.4} />
          </div>

          {/* orbiting icon circles */}
          <div className="absolute left-3 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(28,42,57,0.18)]">
            <Icon name="user" className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={2} />
          </div>
          <div className="absolute right-2 top-16 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(28,42,57,0.18)]">
            <Icon name="scale" className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={2} />
          </div>
          <div className="absolute right-6 top-[210px] flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(28,42,57,0.18)]">
            <Icon name="fileText" className="h-4.5 w-4.5 text-ak-agreementsOrange" strokeWidth={2} />
          </div>
        </Reveal>
      </div>

      <RevealGroup className="mt-12 divide-y divide-ak-ink/[0.06] rounded-2xl border border-ak-ink/[0.07] bg-white" stagger={0.05}>
        {clauses.items.map((c) => (
          <RevealItem key={c.display} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:gap-5 md:p-6">
            <div className="flex flex-shrink-0 items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-agreementsIconBg">
                <Icon name={c.icon} className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={1.9} />
              </span>
              <span className="h-8 w-px flex-shrink-0 bg-ak-ink/10" />
              <span className="font-display w-9 flex-shrink-0 text-xl font-extrabold text-ak-agreementsOrange">{c.display}</span>
            </div>
            <div className="flex-1">
              <div className="text-[14.5px] font-bold text-ak-ink">{c.title}</div>
              <p className="mt-1 text-[13px] leading-relaxed text-ak-ink/55">{c.desc}</p>
            </div>
            <span
              className={`flex-shrink-0 self-start whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wide md:self-center ${
                c.tier === "Critical"
                  ? "bg-ak-agreementsCritical text-white"
                  : "border border-ak-agreementsOrange/50 text-ak-agreementsOrange"
              }`}
            >
              {c.tier}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.15} className="mt-6 flex items-start gap-4 rounded-2xl bg-ak-agreementsIconBg p-6">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white">
          <Icon name="fileText" className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={1.9} />
        </span>
        <p className="text-[13.5px] leading-relaxed text-ak-ink/65">{clauses.note}</p>
      </Reveal>
    </Container>
  </section>
);
