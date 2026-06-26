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
 * Background: flexi-difference-bg.jpg (Pexels, Line Knipst, free-to-use
 * licence, confirmed before download — same pattern as other placeholder
 * section photography in this repo), a night-time lit office tower.
 * Rendered at low opacity under a navy-to-charcoal gradient overlay
 * (not flat bg-ak-navy) so the section reads as "semi dark" rather than
 * solid black, with the image giving texture without competing with
 * text contrast.
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
    className="relative overflow-hidden bg-ak-navy py-20 md:py-28"
  >
    <img
      src="/assets/sections/flexi-difference-bg.jpg"
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16]"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ak-navy/70 via-ak-navy/85 to-ak-navy" />

    <Container className="relative">
      <Reveal className="max-w-2xl">
        <div className="ak-kicker ak-kicker--light mb-5">{difference.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{difference.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/45">{difference.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {difference.items.map((d) => (
          <RevealItem key={d.num}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-ak-orange/35 hover:bg-white/[0.05]"
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
              <p className="relative mt-2 text-[13px] leading-relaxed text-white/45">{d.desc}</p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
