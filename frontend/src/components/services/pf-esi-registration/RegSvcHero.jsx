import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * PF & ESI Registration hero — TEMPLATE PATTERN for all Registrations
 * services. FULL REBUILD (this thread) per client reference image — see
 * the data-file comment above `hero` for the content-level rationale
 * (photo collage replacing the single-photo+tracker layout, new
 * complianceBadge, restructured stats, new bottomFeatures row, removed
 * tracker). This file implements the visual side.
 *
 * Layout, top to bottom:
 *   Row 1: headline + prominent orange accent line + sub + CTAs (left) /
 *          3-photo collage with overlapping circular compliance badge
 *          (right) — photo positions/sizes geometrically derived from the
 *          reference (photo1 ~1:1 top-left, photo2 ~1:1 circle-cropped
 *          top-right, photo3 ~3:2 rounded-square bottom-right, badge
 *          centred on the photos' shared junction point).
 *   Row 2: stat-boxes card (20+/10+/All India), 3 columns with vertical
 *          dividers, circular icon badges above each number — replaces
 *          the old plain-text stat strip.
 *   Row 3: bottomFeatures, a plain unbordered 4-item row (icon circle +
 *          title + desc) — entirely new, no equivalent existed before.
 *
 * Real client-supplied photos are wired in for all 3 slots (this
 * thread); see the data-file comment for exact specs/provenance.
 */
export const RegSvcHero = () => (
  <section
    id="svc-hero"
    data-testid="reg-svc-hero-section"
    className="relative overflow-hidden bg-[#FBF4EA] pt-8 pb-12 md:pt-10 md:pb-16"
  >
    {/* dot-grid watermark, top-right corner, per reference */}
    <svg className="pointer-events-none absolute right-8 top-6 hidden h-20 w-24 lg:block" viewBox="0 0 100 80" fill="none" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={6 + col * 17} cy={6 + row * 16} r="2" fill="#FA8021" opacity="0.35" />
        ))
      )}
    </svg>

    <Container className="relative z-10">
      <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="ak-kicker mb-5"
        >
          {hero.eyebrow}
        </motion.div>
      </motion.div>

      {/* ROW 1 — headline+CTAs left / 3-photo collage right */}
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* LEFT — headline, accent line, sub, CTAs */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-5xl font-extrabold uppercase leading-[0.94] tracking-tight text-ak-ink md:text-6xl lg:text-[4.2rem]"
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-3"
          >
            <span className="font-display text-2xl font-bold text-ak-orange md:text-3xl">{hero.accentWord}</span>
            <span className="mt-3 block h-[3px] w-16 rounded-full bg-ak-orange" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="reg-svc-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="reg-svc-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>
        </div>

        {/* RIGHT — 3-photo collage + overlapping compliance badge.
            Geometry derived from the reference: photo1 top-left ~1:1,
            photo2 top-right TRUE CIRCLE, photo3 bottom-right ~3:2, badge
            overlapping the 3 photos' shared junction. CORRECTION (this
            thread, round 2): a direct side-by-side comparison against
            the reference (scale-matched crops, not eyeballed separately)
            showed the first fix still didn't match — Photo 1 was far too
            short, the badge was noticeably undersized, and Photo 3 sat
            with a visible gap instead of tucking under the badge. Re-
            measured every element from scratch with a fine 20px grid
            overlay directly on the original reference image (not the
            earlier coarse 25-50px grid), reading exact boundary
            crossings rather than approximate edges: Photo 1 spans
            y148-645 (not y148-469 as first measured — nearly 70% taller
            than originally read), the badge spans a much larger 350px
            diameter circle that overlaps the bottom-left of Photo 2 and
            the top of Photo 3 (not a smaller non-overlapping circle),
            and Photo 3 starts almost directly under the badge with
            near-zero gap. Column bounding box recomputed as the union of
            all 4 elements' true extents (830x735 px, aspect 1.129:1 —
            different again from the previous 869:748 estimate). */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative mx-auto aspect-[830/735] w-full max-w-xl lg:max-w-none"
          data-testid="reg-svc-hero-visual"
        >
          {/* Photo 1 — top-left, tall rounded rectangle, orange border */}
          <div
            className="absolute overflow-hidden rounded-3xl border-2 border-ak-orange/70 shadow-[0_24px_50px_-20px_rgba(28,42,57,0.25)]"
            style={{ left: "0%", top: "2.4%", width: "33.7%", height: "67.6%" }}
          >
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
          </div>

          {/* Photo 2 — top-right, TRUE circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="absolute overflow-hidden rounded-full border-2 border-ak-orange/70 shadow-[0_24px_50px_-20px_rgba(28,42,57,0.25)]"
            style={{ left: "49.4%", top: "0%", width: "47.6%", height: "53.7%" }}
          >
            <img src={hero.image2} alt={hero.image2Alt} className="h-full w-full object-cover" />
          </motion.div>

          {/* Photo 3 — bottom-right, rounded square, no border, tucks
              almost directly under the badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="absolute overflow-hidden rounded-3xl shadow-[0_24px_50px_-20px_rgba(28,42,57,0.25)]"
            style={{ left: "32.5%", top: "60.5%", width: "67.5%", height: "39.5%" }}
          >
            <img src={hero.image3} alt={hero.image3Alt} className="h-full w-full object-cover" />
          </motion.div>

          {/* Compliance badge — white circle, overlaps Photo 1's right
              edge, Photo 2's bottom-left, and Photo 3's top. CORRECTION
              (this thread, round 3): rounds 1-2 both mis-measured this
              element by eye against a busy, low-contrast background (the
              orange ring is only ~2px thick and easy to misread against
              office-photo textures) — round 1 had it too small, round 2
              overcorrected and made it far too large (42.2%x46.3%,
              visibly engulfing most of Photo 1 and Photo 2 on the live
              page, caught via direct user feedback). Abandoned manual
              grid-reading for this element specifically and instead
              detected it programmatically: isolated the badge's solid
              white fill via colour-threshold + connected-component
              labelling (reliable here because white-on-photo has far
              higter contrast than the thin orange ring against the
              cream page background), confirmed it forms a near-perfect
              circle (199x196px raw), then added the ~2px ring stroke
              measured directly via pixel sampling. Final corrected size:
              24.0% x 27.2% of the column (830x735px) — these percentages
              are NOT equal because the column itself isn't square, but
              both resolve to ~199px in actual rendered pixels, so the
              badge still renders as a true circle. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full border border-ak-orange/30 bg-white text-center shadow-[0_20px_45px_-15px_rgba(28,42,57,0.3)]"
            style={{ left: "37.5%", top: "41%", width: "24%", height: "27.2%" }}
            data-testid="reg-svc-compliance-badge"
          >
            <Icon name="shield" className="h-5 w-5 text-ak-ink" strokeWidth={1.8} />
            <span className="mt-1 font-display text-[11px] font-extrabold italic tracking-wide text-ak-orange md:text-xs">{hero.complianceBadge.title}</span>
            <span className="text-[10px] font-semibold text-ak-ink md:text-[11px]">{hero.complianceBadge.sub}</span>
            <span className="mt-0.5 flex items-center gap-0.5">
              {Array.from({ length: hero.complianceBadge.stars }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-2 w-2 fill-ak-orange">
                  <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.8L10 1.5z" />
                </svg>
              ))}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ROW 2 — stat boxes (20+/10+/All India), bordered card, dividers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        className="mt-12 md:mt-16"
      >
        <div
          data-testid="reg-svc-hero-stats-strip"
          className="grid grid-cols-1 divide-y divide-ak-ink/[0.08] rounded-2xl border border-ak-ink/[0.07] bg-white shadow-[0_20px_50px_-30px_rgba(28,42,57,0.2)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {hero.stats.map((s) => (
            <div key={s.note} className="flex flex-col items-center px-7 py-7 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ak-orange/10 text-ak-orange">
                <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="mt-3 font-display text-3xl font-extrabold text-ak-ink">
                {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
              </div>
              {s.label && <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-ak-ink/45">{s.label}</div>}
              <div className="mt-1.5 text-[12.5px] font-semibold text-ak-orange">{s.note}</div>
              <span className="mt-2 h-[2px] w-6 rounded-full bg-ak-orange/40" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ROW 3 — bottomFeatures, plain 4-item row, no card border */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        data-testid="reg-svc-hero-bottom-features"
      >
        {hero.bottomFeatures.map((f) => (
          <div key={f.title} className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ak-orange/50 text-ak-orange">
              <Icon name={f.icon} className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div>
              <div className="font-display text-[14px] font-bold leading-snug text-ak-ink">{f.title}</div>
              <p className="mt-1 text-[12.5px] leading-snug text-ak-ink/55">{f.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
