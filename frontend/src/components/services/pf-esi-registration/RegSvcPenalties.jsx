import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { penalties } from "../../../data/svc-pf-esi-registration";

/**
 * Section 6 -- Penalties, full rebuild per direct reference image.
 *
 * Previous structure: text+CTA+photo stacked in a narrow left column,
 * two PF/ESI cards stacked vertically in a wide right column, each card
 * with a dark navy header bar and a flat divided row list (no per-row
 * icons).
 *
 * Reference structure (this rebuild):
 *   - Top row: heading block (kicker with warning-triangle icon,
 *     heading, underline accent, paragraphs -- no CTA button) on the
 *     left, a large photo on the right with a small decorative dot
 *     trail and a floating circular shield-icon badge beside it.
 *   - Below: PF and ESI cards sit SIDE BY SIDE (not stacked), each with
 *     a light card background, a light/tinted header row (icon badge +
 *     small coloured tag chip + title, underline accent beneath the
 *     title) -- not a dark bar -- and every row carries its own small
 *     circular icon (percent, calendar, scale, rupee, etc.) to the left
 *     of the label, value in bold colour-matched text on the right.
 *   - PF card uses the orange theme throughout (icon badges, tag chip,
 *     value colour); ESI card uses navy/blue throughout, matching the
 *     reference's colour split between the two cards.
 */
const PenaltyCard = ({ c, delay }) => {
  const isOrange = c.theme === "orange";
  return (
    <RevealItem className="overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-white shadow-[0_20px_50px_-25px_rgba(28,42,57,0.15)]">
      {/* orange/navy top accent bar, matching the reference's coloured edge per card */}
      <span className={`block h-1.5 w-20 rounded-br-full ${isOrange ? "bg-ak-orange" : "bg-ak-navy"}`} />

      {/* light header row -- icon badge, tag chip, title + underline */}
      <div className="flex items-center gap-3 px-5 pb-4 pt-4">
        <span
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
            isOrange ? "bg-ak-orange/10 text-ak-orange" : "bg-ak-navy/10 text-ak-navy"
          }`}
        >
          <Icon name={c.icon} className="h-[22px] w-[22px]" strokeWidth={1.8} />
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md font-display text-[11px] font-extrabold text-white ${
            isOrange ? "bg-ak-orange" : "bg-ak-navy"
          }`}
        >
          {c.tag}
        </span>
        <div>
          <h3 className="font-display text-[15px] font-bold leading-tight text-ak-ink">{c.title}</h3>
          <div className={`mt-1 h-[2px] w-8 rounded-full ${isOrange ? "bg-ak-orange" : "bg-ak-navy"}`} />
        </div>
      </div>

      <ul className="divide-y divide-ak-ink/[0.06]">
        {c.rows.map((r) => (
          <li key={r.label} className="flex items-center gap-3 px-5 py-3.5">
            <span
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
                isOrange ? "bg-ak-orange/10 text-ak-orange" : "bg-ak-navy/10 text-ak-navy"
              }`}
            >
              <Icon name={r.icon} className="h-4 w-4" strokeWidth={1.9} />
            </span>
            <span className="flex-1 text-[13px] leading-snug text-ak-ink/65">{r.label}</span>
            <span className={`flex-shrink-0 font-display text-sm font-bold ${isOrange ? "text-ak-orange" : "text-ak-navy"}`}>
              {r.value}
            </span>
          </li>
        ))}
      </ul>
    </RevealItem>
  );
};

export const RegSvcPenalties = () => (
  <section id="svc-penalties" data-testid="reg-svc-penalties-section" className="bg-ak-mist/40 py-14 md:py-20">
    <Container>
      {/* TOP ROW -- heading/text left, photo right, per reference */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5 inline-flex items-center gap-1.5">
              <Icon name="alertTriangle" className="h-3.5 w-3.5" strokeWidth={2.2} />
              {penalties.kicker}
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {penalties.heading}
            </h2>
            <div className="mt-4 h-[3px] w-14 rounded-full bg-ak-orange" />
          </Reveal>
          <Reveal delay={0.1} className="mt-5 space-y-4 text-[15px] leading-relaxed text-ak-ink/60">
            {penalties.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        {/* photo, with the reference's decorative dot trail + floating
            shield-icon badge sitting beside it */}
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          {/* dot trail -- a few scattered dots between the text column and the photo */}
          <span aria-hidden className="absolute -left-10 top-6 hidden h-2 w-2 rounded-full bg-ak-ink/20 lg:block" />
          <span aria-hidden className="absolute -left-16 top-24 hidden h-1.5 w-1.5 rounded-full bg-ak-orange/40 lg:block" />

          {/* floating circular shield badge, overlapping the photo's bottom-left */}
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 z-10 hidden h-20 w-20 items-center justify-center rounded-full bg-ak-orange/10 lg:flex"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ak-orange text-white shadow-[0_10px_24px_-6px_rgba(242,140,40,0.5)]">
              <Icon name="shield" className="h-6 w-6" strokeWidth={1.8} />
            </span>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(28,42,57,0.2)]">
            <img src={penalties.image} alt={penalties.imageAlt} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>

      {/* BOTTOM ROW -- PF and ESI cards side by side, per reference */}
      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.15}>
        {penalties.cards.map((c) => (
          <PenaltyCard key={c.title} c={c} />
        ))}
      </RevealGroup>
    </Container>
  </section>
);
