import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Icon } from "../../../lib/icons";
import { process } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 5 -- Process, rebuilt with exact pixel-anchored positioning.
 *
 * The previous attempt used a 3-row CSS grid with the hub absolutely
 * positioned at the *container's* geometric center -- that only
 * coincidentally lined up with row 2, gave row 1 and row 3 no visual
 * connection to the hub at all, and the spoke lengths were guessed
 * rather than measured. This version fixes that by building the whole
 * desktop layout as a single relative canvas of a known fixed size,
 * with every card AND every connector placed at explicit (x, y)
 * coordinates derived from the same layout constants -- so the hub's
 * spokes and the row connectors are geometrically guaranteed to align
 * with the cards, not estimated.
 *
 * Canvas layout (desktop, lg+):
 *   - 2 columns x 3 rows of cards, each CARD_W x CARD_H, with COL_GAP
 *     between columns and ROW_GAP between rows.
 *   - Hub sits at the exact horizontal AND vertical center of the
 *     whole canvas -- which is the vertical center of row 2 and the
 *     horizontal midpoint between the two columns.
 *   - Hub spokes: up into the row1/row2 gap, down into the row2/row3
 *     gap, left/right to the edges of cards 03/04.
 *   - Row 1 and row 3 each get their own short horizontal dashed
 *     connector-with-arrow directly between their two cards, at the
 *     same x-center as the hub (so they read as vertically aligned
 *     with it, matching the reference) but NOT physically joined to
 *     the hub's spokes.
 *
 * Mobile/tablet (below lg) falls back to a plain stacked/2-col grid of
 * the same card style -- the radial canvas geometry doesn't translate
 * below 2-column widths.
 */
const CARD_W = 380;
const CARD_H = 200;
const COL_GAP = 68;
const ROW_GAP = 20;
const HUB_SIZE = 107;

const CANVAS_W = CARD_W * 2 + COL_GAP;
const CANVAS_H = CARD_H * 3 + ROW_GAP * 2;

const colX = (col) => (col === 0 ? 0 : CARD_W + COL_GAP);
const rowY = (row) => row * (CARD_H + ROW_GAP);

const hubCenter = { x: CANVAS_W / 2, y: CANVAS_H / 2 };

const ProcessCard = ({ s, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    style={{ position: "absolute", left: x, top: y, width: CARD_W, minHeight: CARD_H }}
    className="relative z-10 overflow-visible rounded-2xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(28,42,57,0.18)]"
  >
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
  </motion.div>
);

/** Short horizontal dashed connector with an arrow, placed between the
 *  two cards of row 1 or row 3, centered exactly in the column gap. */
const RowConnector = ({ y, direction, delay }) => {
  const x = colX(0) + CARD_W;
  const w = COL_GAP;
  const cy = y + CARD_H / 2;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      style={{ position: "absolute", left: x, top: cy - 12, width: w, height: 24 }}
      className="z-10 flex items-center justify-center"
    >
      <span className="h-px flex-1 border-t-2 border-dashed border-ak-orange/50" />
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange/50 bg-white text-ak-orange">
        <Icon
          name={direction === "right" ? "arrowRight" : "arrowUpRight"}
          className={`h-3 w-3 ${direction === "left" ? "rotate-180" : ""}`}
          strokeWidth={2.4}
        />
      </span>
      <span className="h-px flex-1 border-t-2 border-dashed border-ak-orange/50" />
    </motion.div>
  );
};

/** Center brand hub with 4 dashed spokes, each measured to the exact
 *  edge of its neighbouring card/gap rather than a guessed length. */
const CenterHub = () => {
  const row1Bottom = rowY(0) + CARD_H;
  const row3Top = rowY(2);
  const hubTop = hubCenter.y - HUB_SIZE / 2;
  const hubBottom = hubCenter.y + HUB_SIZE / 2;
  const upLen = hubTop - row1Bottom;
  const downLen = row3Top - hubBottom;

  const card03Right = colX(0) + CARD_W;
  const card04Left = colX(1);
  const hubLeft = hubCenter.x - HUB_SIZE / 2;
  const hubRight = hubCenter.x + HUB_SIZE / 2;
  // hub is intentionally larger than COL_GAP per the reference -- it overlaps
  // the inner edges of cards 03/04 rather than floating in a clear gap with
  // visible side spokes. Clamp to 0 rather than render a negative width.
  const leftLen = Math.max(0, hubLeft - card03Right);
  const rightLen = Math.max(0, card04Left - hubRight);

  return (
    <div
      style={{ position: "absolute", left: hubCenter.x, top: hubCenter.y }}
      className="z-20 -translate-x-1/2 -translate-y-1/2"
    >
      {/* up spoke -- reaches up to row 1's bottom edge */}
      <span
        style={{ height: upLen }}
        className="pointer-events-none absolute left-1/2 top-0 w-px -translate-x-1/2 -translate-y-full border-l-2 border-dashed border-ak-orange/40"
      />
      {/* down spoke -- reaches down to row 3's top edge */}
      <span
        style={{ height: downLen }}
        className="pointer-events-none absolute left-1/2 top-full w-px -translate-x-1/2 border-l-2 border-dashed border-ak-orange/40"
      />
      {/* left spoke -- reaches to card 03's right edge */}
      <span
        style={{ width: leftLen }}
        className="pointer-events-none absolute right-full top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-ak-orange/40"
      />
      {/* right spoke -- reaches to card 04's left edge */}
      <span
        style={{ width: rightLen }}
        className="pointer-events-none absolute left-full top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-ak-orange/40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ width: HUB_SIZE, height: HUB_SIZE }}
        className="relative z-10 flex items-center justify-center rounded-full border-4 border-dashed border-ak-orange/40 bg-white p-3 shadow-[0_20px_50px_-18px_rgba(28,42,57,0.2)]"
      >
        <img src="/assets/aksharaa-logo.png" alt="" className="h-full w-full select-none object-contain" draggable="false" />
      </motion.div>
    </div>
  );
};

export const RegSvcProcess = () => (
  <section id="svc-process" data-testid="reg-svc-process-section" className="relative overflow-hidden bg-zinc-100 py-14 md:py-20">
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-[0.08]"
      style={{ backgroundImage: "radial-gradient(circle, #F28C28 1.4px, transparent 1.8px)", backgroundSize: "14px 14px" }}
    />

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

      {/* DESKTOP -- exact pixel-anchored canvas, fixed width and centered
          (CANVAS_W comfortably fits inside the container at lg+ widths) */}
      <div className="relative mx-auto mt-16 hidden lg:block" style={{ width: CANVAS_W, height: CANVAS_H }}>
        <ProcessCard s={process.steps[0]} x={colX(0)} y={rowY(0)} delay={0.05} />
        <ProcessCard s={process.steps[1]} x={colX(1)} y={rowY(0)} delay={0.1} />
        <ProcessCard s={process.steps[2]} x={colX(0)} y={rowY(1)} delay={0.15} />
        <ProcessCard s={process.steps[3]} x={colX(1)} y={rowY(1)} delay={0.2} />
        <ProcessCard s={process.steps[4]} x={colX(0)} y={rowY(2)} delay={0.25} />
        <ProcessCard s={process.steps[5]} x={colX(1)} y={rowY(2)} delay={0.3} />

        <RowConnector y={rowY(0)} direction="right" delay={0.35} />
        <RowConnector y={rowY(2)} direction="left" delay={0.45} />

        <CenterHub />
      </div>

      {/* MOBILE/TABLET fallback -- simple stacked list, same card style,
          no hub/connectors (the radial geometry doesn't translate below
          a 2-column layout) */}
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
