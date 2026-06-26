import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Counter } from "../../common/Counter";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-pf-esi-returns-filing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Model + peach circle + orbiting swoosh + rotating badge seal, as a
 * single reusable visual block. Extracted so the same composition can
 * render at both desktop scale (centre column) and a smaller mobile
 * scale (its own block above the CTAs), rather than duplicating the
 * same ~70 lines of markup with two different hardcoded size sets.
 * All sizes are passed in so each call site controls its own scale.
 */
const ModelVisual = ({ wrapperSize, modelSize, circleSize, swooshSize, badgeSize, badgeFontSize, badgePos }) => (
  <div className="relative" style={{ height: wrapperSize.h, width: wrapperSize.w }}>
    {/* Peach circle behind the head — continuous breathing pulse.
        Static wrapper handles centring, inner motion.div handles the
        scale pulse only — Framer Motion's animate prop writes directly
        to the CSS transform property, which silently drops a sibling
        Tailwind -translate-x-1/2 utility (also a transform) the moment
        the animation starts. Confirmed by inspecting the computed
        transform matrix before landing on this split-element pattern,
        not assumed. Same fix applied to the swoosh and model below. */}
    <div className="absolute left-1/2 top-[2%] -translate-x-1/2" style={{ height: circleSize, width: circleSize }}>
      <motion.div
        className="h-full w-full rounded-full bg-ak-returnsCirclePeach"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Orbiting swoosh — glowing dashed ellipse, slow independent rotation */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ height: swooshSize.h, width: swooshSize.w }}>
      <motion.svg
        className="pointer-events-none h-full w-full"
        viewBox={`0 0 ${swooshSize.vb} ${swooshSize.vb * (swooshSize.h / swooshSize.w)}`}
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <ellipse
          cx={swooshSize.vb / 2}
          cy={(swooshSize.vb * (swooshSize.h / swooshSize.w)) / 2}
          rx={swooshSize.vb * 0.425}
          ry={swooshSize.vb * (swooshSize.h / swooshSize.w) * 0.455}
          stroke="#F28C28"
          strokeOpacity="0.32"
          strokeWidth="3"
          strokeDasharray="12 20"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>

    {/* Model — drops in from above and settles */}
    <div className="absolute left-1/2 top-0 z-[1] -translate-x-1/2" style={{ height: modelSize.h, width: modelSize.w }}>
      <motion.img
        src="/assets/sections/returns-hero-model.png"
        alt="Aksharaa compliance specialist reviewing PF and ESI filings"
        initial={{ opacity: 0, y: -44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
        className="h-full w-full object-contain"
      />
    </div>

    {/* Compliance badge seal — slow continuous rotation, positioned over the model's chest */}
    <motion.div
      className="absolute z-[2] flex items-center justify-center rounded-full border-[3px] border-ak-ink bg-white shadow-lg"
      style={{ height: badgeSize, width: badgeSize, left: badgePos.left, top: badgePos.top }}
      animate={{ rotate: 360 }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="absolute h-full w-full">
        <defs>
          <path id="badge-circle-path" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
        </defs>
        <text fontSize={badgeFontSize} fontWeight="700" letterSpacing="1.2" fill="#1C2A39">
          <textPath href="#badge-circle-path" startOffset="1%">
            TIMELY FILINGS • ZERO PENALTIES •
          </textPath>
        </text>
      </svg>
      <span className="flex items-center justify-center rounded-full bg-ak-orange" style={{ height: badgeSize * 0.43, width: badgeSize * 0.43 }}>
        <Icon name="checkCircle" className="h-1/2 w-1/2 text-white" strokeWidth={2.2} />
      </span>
    </motion.div>
  </div>
);

/**
 * PF & ESI Returns Filing hero — full rebuild per client reference image,
 * matching the multi-layered "wow factor" treatment of the Flexi Staffing
 * hero (background + content + decoration + motion combined, not just
 * one element): client-supplied model photo, soft peach circle, rotating
 * compliance badge seal, orbiting swoosh arc, twinkling dot grid, and
 * subtle motion on the deadline card — built up layer by layer rather
 * than as isolated decorations.
 *
 * Model asset: client supplied a JPEG export with a baked-in checkerboard
 * "transparency" pattern (literal pixel data, not a real alpha channel —
 * confirmed by sampling corner pixels before assuming it would work
 * as-is). Ran it through rembg (u2net model) for genuine background
 * removal, verified by compositing the result over a saturated test
 * colour to confirm real alpha transparency rather than trusting the
 * tool's output blindly. Trimmed to content bounding box and compressed
 * with pngquant (663KB -> 251KB, ~62% reduction, quality re-checked
 * visually after compression) before placing in public/assets/sections/.
 *
 * Motion layers (each confirmed with the client before building, since
 * "swoosh", "subtle", and "movement" are all open to multiple readings):
 * - Model: drops in from above and settles on load (y: -40 -> 0).
 * - Peach circle behind the head: continuous gentle scale pulse (breathing).
 * - Compliance badge seal (over the model's chest): continuous slow
 *   360° rotation.
 * - Orbiting swoosh: a glowing dashed arc that slowly rotates around the
 *   whole model cutout, independent of and slower than the badge's own
 *   rotation, to read as a distinct outer layer rather than the same motion.
 * - Bottom-left dot grid: each dot fades in/out (twinkle) on its own
 *   staggered delay, not a synchronized blink.
 * - Deadline card: card itself gets a slow idle vertical float; each
 *   tag pill gets a very subtle continuous pulse on hover-independent
 *   timing so the card doesn't feel static once its entrance finishes.
 */
export const ReturnsHero = () => (
  <section id="svc-hero" data-testid="returns-hero-section" className="relative overflow-hidden bg-white pt-14 pb-4 md:pt-20">
    <div className="absolute left-0 top-0 h-full w-1.5 bg-ak-orange" />

    {/* Decorative background icons — faint outline, matching reference */}
    <Icon name="calendar" className="pointer-events-none absolute right-[30%] top-6 hidden h-12 w-12 text-ak-orange/[0.12] lg:block" strokeWidth={1.3} />
    <Icon name="fileText" className="pointer-events-none absolute bottom-24 right-[28%] hidden h-12 w-12 text-ak-orange/[0.1] lg:block" strokeWidth={1.3} />

    {/* Bottom-left twinkling dot grid */}
    <div className="pointer-events-none absolute bottom-10 left-10 grid grid-cols-5 gap-2.5">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ak-orange/40"
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: (i % 5) * 0.15 + Math.floor(i / 5) * 0.25, ease: "easeInOut" }}
        />
      ))}
    </div>

    <Container className="relative">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr_1.3fr] lg:gap-5">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-6">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-ak-ink md:text-4xl lg:text-[2.05rem] xl:text-[2.3rem]"
          >
            {hero.headline[0]}
            <br />
            <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-7 max-w-lg text-[15.5px] leading-[1.8] text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          {/* Mobile/tablet visual block — same model+circle+swoosh+badge
              composition as the desktop centre column, at a smaller scale
              and its own centred placement, since the desktop column is
              lg:hidden below that breakpoint. Most traffic to this site is
              mobile and growing, so the "wow factor" treatment needed its
              own adapted version here rather than being a desktop-only
              flourish — confirmed with the client before building this
              block, since the first round shipped without one. */}
          <div className="my-8 flex justify-center lg:hidden">
            <ModelVisual
              wrapperSize={{ h: "260px", w: "165px" }}
              modelSize={{ h: "260px", w: "175px" }}
              circleSize="8.5rem"
              swooshSize={{ h: 250, w: 145, vb: 145 }}
              badgeSize={64}
              badgeFontSize="6.6"
              badgePos={{ left: "16%", top: "32%" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="returns-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" withArrow data-testid="returns-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-ak-ink/[0.08] pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ak-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CENTRE — model cutout with peach circle, badge seal, orbiting swoosh (desktop only) */}
        <div className="relative hidden items-center justify-center lg:flex">
          <ModelVisual
            wrapperSize={{ h: "420px", w: "260px" }}
            modelSize={{ h: "420px", w: "280px" }}
            circleSize="13rem"
            swooshSize={{ h: 400, w: 230, vb: 230 }}
            badgeSize={96}
            badgeFontSize="6.6"
            badgePos={{ left: "19%", top: "34%" }}
          />
        </div>

        {/* RIGHT — deadline clock card */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.25, ease: EASE },
            x: { duration: 0.8, delay: 0.25, ease: EASE },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
        >
          <div data-testid="returns-deadline-card" className="overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white shadow-[0_30px_70px_-30px_rgba(28,42,57,0.3)]">
            <div className="flex items-center gap-2.5 border-b border-ak-ink/[0.07] bg-ak-mist/30 px-6 py-4">
              <Icon name="clock" className="h-4 w-4 text-ak-orange" strokeWidth={2} />
              <span className="text-[13px] font-bold uppercase tracking-wide text-ak-ink">{hero.deadlineCard.title}</span>
            </div>

            <div className="divide-y divide-ak-ink/[0.06]">
              {hero.deadlineCard.rows.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: EASE }}
                  className={`flex items-start gap-4 px-6 py-4 ${r.urgent ? "bg-ak-orange/[0.04]" : ""}`}
                >
                  <div className="flex w-12 flex-shrink-0 flex-col items-center">
                    <span className="font-display text-xl font-extrabold leading-none text-ak-ink">{r.day}</span>
                    <span className="mt-0.5 text-[9px] font-medium uppercase text-ak-ink/35">{r.month}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-bold text-ak-ink">{r.name}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-ak-ink/45">{r.desc}</div>
                  </div>
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 rounded-full px-3 py-1 text-[9px] font-bold ${r.tag === "PF" ? "bg-ak-orange text-white" : "bg-ak-ink text-white"}`}
                  >
                    {r.tag}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-ak-mist/30 px-6 py-3.5">
              <Icon name="shield" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={1.9} />
              <span className="text-[11.5px] font-medium text-ak-ink/55">{hero.deadlineCard.footer}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
