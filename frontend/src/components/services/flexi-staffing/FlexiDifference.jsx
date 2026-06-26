import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { difference } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "The Aksharaa Difference" section — aesthetic + motion
 * upgrade per direct instruction ("semi dark color + semi-opacity
 * background image", "cards aesthetically improved with good movement").
 * No reference image for this one — built from the brief.
 *
 * Background: started as a photo (flexi-difference-bg.jpg, a night
 * office tower) at varying opacity across two rounds of feedback —
 * raised for visibility, then lowered again for being cluttered.
 * Removed entirely in this round per direct feedback that it wasn't
 * visible enough to read as intentional and was still "spoiling" the
 * visual at low opacity. Replaced with an inline SVG abstract line
 * pattern (sparse diagonal lines top-right, soft concentric arcs
 * bottom-left, a small connected-node cluster) in light grey/white at
 * very low opacity (5-7%, fillOpacity 12% for the node dots) — a
 * deliberate subtle design rather than a photo trying to be subtle.
 * No image file/asset needed for this approach; flexi-difference-bg.jpg
 * is now unused but left in public/assets/sections in case a future
 * round wants it back.
 *
 * Section base colour remains #4E5654 (darkened from the client's
 * original #7E8987 sage-grey per the previous round's feedback).
 *
 * Cards: previously a flat bordered box with just a number + title +
 * desc. Added: a per-item icon (new `icon` field on difference.items
 * in data/svc-flexi-staffing.js — 'shuffle' added to lib/icons.js,
 * wasn't previously registered), a gradient-ring number badge, a left
 * accent bar that grows on hover, and a hover lift + glow + border
 * brighten driven by framer-motion whileHover (layered on top of the
 * existing RevealItem scroll-stagger, not replacing it — cards still
 * fade/slide in on scroll, then respond to hover once visible).
 */
export const FlexiDifference = () => (
  <section
    id="svc-difference"
    data-testid="flexi-difference-section"
    className="relative overflow-hidden bg-[#4E5654] py-20 md:py-28"
  >
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="1.2">
        {/* sparse diagonal line field, top-right */}
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 900 + i * 60;
          return <line key={`d1-${i}`} x1={x} y1="-100" x2={x - 380} y2="900" />;
        })}
      </g>
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
        {/* large soft concentric arcs, bottom-left */}
        {[120, 220, 320, 420].map((r) => (
          <circle key={r} cx="60" cy="560" r={r} />
        ))}
      </g>
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
        {/* a few scattered nodes connected by thin lines, right side */}
        <line x1="1180" y1="120" x2="1340" y2="260" />
        <line x1="1340" y1="260" x2="1260" y2="420" />
        <line x1="1260" y1="420" x2="1400" y2="520" />
        <line x1="1180" y1="120" x2="1080" y2="260" />
      </g>
      <g fill="#FFFFFF" fillOpacity="0.12">
        <circle cx="1180" cy="120" r="3" />
        <circle cx="1340" cy="260" r="3" />
        <circle cx="1260" cy="420" r="3" />
        <circle cx="1400" cy="520" r="3" />
        <circle cx="1080" cy="260" r="3" />
      </g>
    </svg>

    <Container className="relative">
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{difference.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{difference.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/70">{difference.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {difference.items.map((d) => (
          <RevealItem key={d.num}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.12] bg-black/[0.12] p-6 transition-colors duration-300 hover:border-ak-orange/35 hover:bg-black/[0.16]"
            >
              {/* left accent bar, grows on hover */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-ak-orange/0 transition-all duration-300 group-hover:w-1 group-hover:bg-ak-orange" />

              {/* soft glow on hover */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ak-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-ak-orange/10" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ak-orange/25 to-ak-orange/5 text-ak-orange ring-1 ring-ak-orange/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="font-display text-2xl font-extrabold text-white/15 transition-colors duration-300 group-hover:text-ak-orange/40">{d.num}</span>
              </div>

              <h3 className="relative mt-4 font-display text-base font-bold text-white">{d.title}</h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-white/70">{d.desc}</p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
