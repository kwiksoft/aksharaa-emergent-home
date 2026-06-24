import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 -- Process, rebuilt as a true circular/radial layout.
 *
 * Earlier attempts (left/right paired-card grid with the hub squeezed into
 * the middle column) were the wrong LAYOUT FAMILY entirely, not just a
 * spacing/sizing issue -- no amount of measuring gaps or resizing the hub
 * was ever going to converge, because the reference is genuinely a radial
 * arrangement: 6 cards positioned around the hub at distinct angles and
 * distances, each connected to the hub by its own spoke, not 2 columns of
 * 3 rows with 4 cardinal spokes.
 *
 * This version derives real polar coordinates by measuring each card's
 * center position relative to the hub directly from the reference image
 * (pixel-edge scans -> card bounding boxes -> center -> angle + radius
 * from hub center), then mirrors that symmetrically for the right-side
 * cards rather than re-measuring both sides independently:
 *
 *   card 01 (upper-left):  angle -139 deg, radius 343
 *   card 02 (upper-right): angle  -41 deg, radius 343  (mirror of 01)
 *   card 03 (left):        angle  180 deg, radius 413
 *   card 04 (right):       angle    0 deg, radius 413  (mirror of 03)
 *   card 05 (lower-left):  angle  139 deg, radius 362
 *   card 06 (lower-right): angle   41 deg, radius 362  (mirror of 05)
 *
 * All 6 distances/angles scaled down proportionally (factor ~0.69) from
 * the reference's measured pixel values to fit the lg breakpoint's usable
 * container width, preserving the actual relative geometry rather than
 * approximating it.
 *
 * Each card gets its own straight dashed spoke running from the hub's
 * edge to the card's inner edge, matching the reference's wheel-spoke
 * look -- not 4 cardinal spokes serving 6 cards.
 *
 * Mobile/tablet (below lg) falls back to a plain stacked/2-col grid of
 * the same card style -- the radial geometry doesn't translate below
 * 2-column widths.
 */
const CARD_W = 300;
const CARD_H = 200;
const HUB_SIZE = 112;
const RING_SIZE = HUB_SIZE + 24; // outer dotted ring, larger than the white circle so the 4 arrowheads have room to sit on its boundary

// measured center-offsets from the hub, in degrees+radius converted to
// (x, y) -- see header comment for the source angle/radius pairs. Y
// values recomputed to maintain a consistent 61px gap between rows now
// that CARD_H increased (200, up from 164) to fit full description text
// without truncation -- see commit history for the line-clamp removal.
const OFFSETS = {
  0: { x: -172, y: -261 }, // card 01
  1: { x: 172, y: -261 },  // card 02
  2: { x: -275, y: 0 },    // card 03
  3: { x: 275, y: 0 },     // card 04
  4: { x: -182, y: 261 },  // card 05
  5: { x: 182, y: 261 },   // card 06
};

// canvas bounds derived from the offsets + card size, with margin so no
// card or spoke gets clipped
const MARGIN = 20;
const xs = Object.values(OFFSETS).map((o) => o.x);
const ys = Object.values(OFFSETS).map((o) => o.y);
const minX = Math.min(...xs) - CARD_W / 2 - MARGIN;
const maxX = Math.max(...xs) + CARD_W / 2 + MARGIN;
const minY = Math.min(...ys) - CARD_H / 2 - MARGIN;
const maxY = Math.max(...ys) + CARD_H / 2 + MARGIN;

const CANVAS_W = maxX - minX;
const CANVAS_H = maxY - minY;
const hubCenter = { x: -minX, y: -minY };

const cardPos = (i) => ({
  x: hubCenter.x + OFFSETS[i].x - CARD_W / 2,
  y: hubCenter.y + OFFSETS[i].y - CARD_H / 2,
});

const ProcessCard = ({ s, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    style={{ position: "absolute", left: x, top: y, width: CARD_W, height: CARD_H }}
    className="relative z-10 overflow-hidden rounded-2xl bg-white p-5 shadow-[0_20px_50px_-25px_rgba(28,42,57,0.18)]"
  >
    <span className="absolute left-0 top-0 h-1.5 w-14 rounded-br-full bg-ak-orange" />
    <div className="flex items-start gap-3">
      <span
        className={`relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${
          s.final ? "bg-ak-orange/15" : "bg-ak-orange/10"
        }`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              s.final ? "bg-ak-orange text-white" : "bg-ak-orange/10 text-ak-orange"
            }`}
          >
            <Icon name={s.icon} className="h-5 w-5" strokeWidth={2.1} />
          </span>
        </span>
      </span>
      <div className="pt-0.5">
        <div className="font-display text-lg font-extrabold text-ak-orange">{s.num}</div>
        {/* fixed 2-line slot regardless of actual title length, so every
            card's header occupies the same height -- this is the real fix
            for the apparent off-center hub: longer titles (e.g. card 04's
            "Code Issuance & Follow-up", card 06's full title) were wrapping
            to 2 lines and pushing those specific cards taller than their
            1-line counterparts, breaking the symmetry the radial math
            depends on */}
        <h3 className="mt-0.5 line-clamp-2 min-h-[36px] font-display text-[14px] font-bold leading-snug text-ak-ink">
          {s.title}
        </h3>
      </div>
    </div>
    <div className="mt-2 h-px w-8 bg-ak-orange/50" />
    <p className="mt-2 text-[11.5px] leading-snug text-ak-ink/55">{s.desc}</p>
  </motion.div>
);

/** Exact distance from the origin, along a ray at the given angle, to
 *  where it exits an axis-aligned rectangle of half-width hw and
 *  half-height hh centered at the origin. Replaces an earlier flat
 *  approximation (min(CARD_W,CARD_H)/2.6) that produced inconsistent
 *  results across angles -- diagonal cards and horizontal cards have
 *  genuinely different true edge distances, not a fixed fraction of the
 *  card's smaller dimension. */
const rectEdgeDistance = (angleRad, hw, hh) => {
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);
  const tx = Math.abs(cos) > 1e-6 ? hw / Math.abs(cos) : Infinity;
  const ty = Math.abs(sin) > 1e-6 ? hh / Math.abs(sin) : Infinity;
  return Math.min(tx, ty);
};

/** Straight dashed spoke from the hub's edge to a specific card's inner
 *  edge, computed individually per card from its measured angle/radius
 *  rather than 4 shared cardinal spokes. */
const Spoke = ({ i, delay }) => {
  const offset = OFFSETS[i];
  const angle = Math.atan2(offset.y, offset.x);
  const dist = Math.hypot(offset.x, offset.y);

  // start at the ring's edge (RING_SIZE/2 out from center along this
  // angle, right where the arrowhead sits), end exactly at the card's
  // near edge via true rectangle intersection
  const startR = RING_SIZE / 2;
  const endR = dist - rectEdgeDistance(angle, CARD_W / 2, CARD_H / 2);

  const x1 = hubCenter.x + Math.cos(angle) * startR;
  const y1 = hubCenter.y + Math.sin(angle) * startR;
  const x2 = hubCenter.x + Math.cos(angle) * endR;
  const y2 = hubCenter.y + Math.sin(angle) * endR;

  const length = Math.hypot(x2 - x1, y2 - y1);
  const deg = (angle * 180) / Math.PI;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      style={{
        position: "absolute",
        left: x1,
        top: y1,
        width: length,
        height: 0,
        transform: `rotate(${deg}deg)`,
        transformOrigin: "0 0",
      }}
      className="z-0 border-t-2 border-dotted border-ak-orange/40"
    />
  );
};

/** Small dashed connector-with-arrow between two specific cards (used for
 *  the 01<->02 and 05<->06 pairs) -- independent of the hub spokes, this
 *  is purely a decorative link between adjacent same-row cards, matching
 *  the reference's chevron-arrow detail that the radial rebuild had
 *  dropped entirely. */
const RowArrow = ({ i1, i2, direction, delay }) => {
  const o1 = OFFSETS[i1];
  const o2 = OFFSETS[i2];
  const midX = hubCenter.x + (o1.x + o2.x) / 2;
  const midY = hubCenter.y + (o1.y + o2.y) / 2;
  const gap = Math.abs(o2.x - o1.x) - CARD_W; // visible horizontal gap between the two cards
  const w = Math.max(gap, 32);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      style={{ position: "absolute", left: midX, top: midY, width: w, height: 24 }}
      className="z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <span className="h-px flex-1 border-t-2 border-dotted border-ak-orange/50" />
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange/50 bg-white text-ak-orange">
        <Icon
          name={direction === "right" ? "arrowRight" : "arrowUpRight"}
          className={`h-3 w-3 ${direction === "left" ? "rotate-180" : ""}`}
          strokeWidth={2.4}
        />
      </span>
      <span className="h-px flex-1 border-t-2 border-dotted border-ak-orange/50" />
    </motion.div>
  );
};

const CenterHub = () => (
  <div
    style={{ position: "absolute", left: hubCenter.x, top: hubCenter.y, width: RING_SIZE, height: RING_SIZE }}
    className="z-20 -translate-x-1/2 -translate-y-1/2"
  >
    {/* outer dotted ring -- separate layer from the white circle, sized
        to leave room for the 4 arrowheads to sit on its boundary */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="absolute inset-0 rounded-full border-[3px] border-dotted border-ak-orange"
    />

    {/* 4 arrowheads sitting exactly on the ring's cardinal points,
        pointing outward -- the detail the reference has that a plain
        spoke line doesn't capture */}
    {[
      { pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2", rot: "-rotate-90" },
      { pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2", rot: "rotate-90" },
      { pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2", rot: "rotate-180" },
      { pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2", rot: "" },
    ].map(({ pos, rot }, idx) => (
      <span
        key={idx}
        className={`absolute ${pos} flex h-4 w-4 items-center justify-center rounded-full bg-white text-ak-orange ${rot}`}
      >
        <Icon name="arrowRight" className="h-3 w-3" strokeWidth={3} />
      </span>
    ))}

    {/* inner white circle with the logo, centered within the ring */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      style={{ width: HUB_SIZE, height: HUB_SIZE }}
      className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-[0_20px_50px_-18px_rgba(28,42,57,0.3)]"
    >
      <img src="/assets/aksharaa-logo.png" alt="" className="h-full w-full select-none object-contain" draggable="false" />
    </motion.div>
  </div>
);

export const RegSvcProcess = () => (
  <section
    id="svc-process"
    data-testid="reg-svc-process-section"
    className="relative overflow-hidden bg-zinc-100 py-14 md:py-20"
    style={{
      backgroundImage: "url(/assets/sections/process-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >

    <Container className="relative">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="ak-kicker mx-auto mb-5 justify-center">{process.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {process.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ak-ink/55">{process.sub}</p>
      </motion.div>

      {/* DESKTOP -- true radial canvas: 6 cards at measured angle/radius
          offsets from the hub, each with its own straight dashed spoke */}
      <div className="relative mx-auto mt-16 hidden lg:block" style={{ width: CANVAS_W, height: CANVAS_H }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Spoke key={`spoke-${i}`} i={i} delay={0.3 + i * 0.04} />
        ))}

        <RowArrow i1={0} i2={1} direction="right" delay={0.5} />
        <RowArrow i1={4} i2={5} direction="left" delay={0.6} />

        {[0, 1, 2, 3, 4, 5].map((i) => {
          const { x, y } = cardPos(i);
          return <ProcessCard key={process.steps[i].num} s={process.steps[i]} x={x} y={y} delay={0.05 + i * 0.07} />;
        })}

        <CenterHub />
      </div>

      {/* MOBILE/TABLET fallback -- simple stacked list, same card style,
          no hub/spokes (the radial geometry doesn't translate below a
          2-column layout) */}
      <div className="lg:hidden">
        <div className="mx-auto mt-12 grid max-w-md gap-5 sm:max-w-2xl sm:grid-cols-2">
          {process.steps.map((s, i) => (
            <div key={s.num} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(28,42,57,0.18)]">
              <span className="absolute left-0 top-0 h-1.5 w-16 rounded-br-full bg-ak-orange" />
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${
                    s.final ? "bg-ak-orange text-white" : "bg-ak-orange/10 text-ak-orange"
                  }`}
                >
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.7} />
                </span>
                <div className="pt-1">
                  <div className="font-display text-2xl font-extrabold text-ak-orange">{s.num}</div>
                  <h3 className="mt-1 font-display text-[16px] font-bold leading-snug text-ak-ink">{s.title}</h3>
                </div>
              </div>
              <div className="mt-3 h-px w-10 bg-ak-orange/50" />
              <p className="mt-3 text-[13px] leading-relaxed text-ak-ink/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* bottom benefit strip -- icon-pill layout per reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-5 rounded-2xl border border-ak-ink/[0.08] bg-white p-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-ak-ink/[0.08] lg:mt-14"
      >
        {process.strip.map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-2 md:px-5">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10 text-ak-orange">
              <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <div>
              <div className="text-[12px] leading-snug text-ak-ink/55">{s.value}</div>
              <div className="font-display text-[14px] font-bold leading-snug text-ak-ink">{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
