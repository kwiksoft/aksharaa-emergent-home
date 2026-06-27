import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope, scopeTrustStrip } from "../../../data/svc-employment-agreements";

/**
 * Scope — FULL REDESIGN per client reference image (Section 4). See the
 * data-file comment above `scope` for the content-level rationale (numeral
 * field, fill treatment, icon re-mapping, new trust strip). This file
 * implements the visual side:
 *
 * - Section switched from a plain 3-col uniform grid to a 2-col layout
 *   (2 cards per row, 3 rows), each card now carrying a large numeral
 *   top-right and one of four fill treatments (gold / rust / dark solid
 *   fills with white text+icon-box, vs a plain bordered light-card with
 *   coloured numeral/underline) — reproducing the reference's specific
 *   alternating pattern exactly via the new `fill` field, not a generic
 *   nth-child alternation.
 * - New header decoration: a dot-grid watermark (top-right, desktop only)
 *   built as a simple inline SVG grid of dots — no existing precedent in
 *   this codebase for a dot-grid, built fresh as flat shapes per the
 *   project's established "simple SVG, no raster" convention.
 * - New bottom trust-strip block (didn't exist before): single bordered
 *   card, 4 items in a row (2x2 on mobile) separated by thin dividers,
 *   each with a circular icon badge alternating gold/rust fill.
 */

const fillStyles = {
  gold: {
    card: "bg-ak-agreementsGold text-white",
    iconBox: "bg-white text-ak-agreementsGold",
    numeral: "text-white/40",
    title: "text-white",
    desc: "text-white/80",
    rule: "bg-white/40",
  },
  rust: {
    card: "bg-ak-agreementsRust text-white",
    iconBox: "bg-white text-ak-agreementsRust",
    numeral: "text-white/40",
    title: "text-white",
    desc: "text-white/80",
    rule: "bg-white/40",
  },
  dark: {
    card: "bg-ak-ink text-white",
    iconBox: "bg-white text-ak-ink",
    numeral: "text-ak-agreementsGold/50",
    title: "text-white",
    desc: "text-white/70",
    rule: "bg-ak-agreementsGold/50",
  },
  light: {
    card: "border border-ak-ink/[0.08] bg-white text-ak-ink",
    iconBox: "border border-ak-agreementsGold/40 bg-white text-ak-agreementsGold",
    numeral: "text-ak-agreementsGold/70",
    title: "text-ak-ink",
    desc: "text-ak-ink/55",
    rule: "bg-ak-agreementsGold/70",
  },
};

const stripAccent = {
  gold: "bg-ak-agreementsGold",
  rust: "bg-ak-agreementsRust",
};

const ScopeCard = ({ item }) => {
  const s = fillStyles[item.fill];
  return (
    <RevealItem className={`relative overflow-hidden rounded-2xl p-7 ${s.card}`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${s.iconBox}`}>
          <Icon name={item.icon} className="h-5.5 w-5.5" strokeWidth={1.85} />
        </span>
        <span className={`font-display text-4xl font-extrabold leading-none ${s.numeral}`}>{item.display}</span>
      </div>
      <h3 className={`mt-5 font-display text-base font-bold leading-snug ${s.title}`}>{item.title}</h3>
      <span className={`mt-2.5 block h-[2px] w-7 rounded-full ${s.rule}`} />
      <p className={`mt-2.5 text-[13px] leading-relaxed ${s.desc}`}>{item.desc}</p>
    </RevealItem>
  );
};

export const AgreementsScope = () => (
  <section id="svc-scope" data-testid="agreements-scope-section" className="relative overflow-hidden bg-ak-mist/40 py-10 md:py-14">
    {/* dot-grid watermark, top-right, desktop only */}
    <svg
      className="pointer-events-none absolute right-10 top-10 hidden h-28 w-36 lg:block"
      viewBox="0 0 140 100"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={8 + col * 18} cy={8 + row * 18} r="2" fill="#D29D2D" opacity="0.3" />
        ))
      )}
    </svg>

    <Container className="relative">
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{scope.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {scope.heading[0]}
          <span className="text-ak-agreementsGold">{scope.heading[1]}</span>
          {scope.heading[2]}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2" stagger={0.08}>
        {scope.items.map((item) => (
          <ScopeCard key={item.display} item={item} />
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-6 rounded-2xl border border-ak-ink/[0.08] bg-white p-6 md:p-7">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:divide-x md:divide-ak-ink/[0.08]">
          {scopeTrustStrip.map((it, i) => (
            <div key={it.title} className={`flex items-start gap-3.5 ${i > 0 ? "md:pl-6" : ""}`}>
              <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white ${stripAccent[it.accent]}`}>
                <Icon name={it.icon} className="h-4.5 w-4.5" strokeWidth={2} />
              </span>
              <div>
                <div className="font-display text-[13.5px] font-bold leading-snug text-ak-ink">{it.title}</div>
                <p className="mt-1 text-[12px] leading-relaxed text-ak-ink/55">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  </section>
);
