import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { difference } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "The Aksharaa Difference" section — full rebuild per
 * direct instruction, replacing the previous 2-column layout (text+cards
 * on the left, sticky team photo on the right) entirely.
 *
 * Reference: a Techno-template "Why Choose Us" section — full-bleed photo
 * background with a strong blue overlay, centred heading, and a 4-card
 * row below. The same treatment is applied here, with two differences
 * the client specified directly:
 *   1. Photo: reuses the EXISTING flexi-difference-bg.jpg asset (the same
 *      team photo previously shown as a sticky side panel) rather than a
 *      new image — removed from its old position, now the full section
 *      background instead.
 *   2. Card count: this section has 6 items, not 4 like the reference.
 *      Arranged as row 1 = items 01-04 (4 columns), row 2 = blank /
 *      05 / 06 / blank — two real cards centred in a 4-column row,
 *      flanked by fully empty grid cells (not ghost placeholders) on
 *      either side. Built with explicit col-start placement on a 4-col
 *      grid rather than a 2-col centred row, so the two row-2 cards
 *      align under columns 2-3 of row 1 exactly.
 *
 * Overlay colour: ak-differenceOverlay (#1E52AA), PIL-sampled from the
 * reference image's clean overlay area — see tailwind.config.js for
 * provenance. Applied as a semi-transparent wash over the photo (not a
 * solid fill) so the photo still reads as a backdrop, matching how
 * little photo detail survives in the reference once overlaid.
 *
 * Cards: kept the established dark-glass treatment (bg-white/[0.06],
 * border-white/[0.1], backdrop-blur) and full hover motion (spring lift,
 * accent bar, glow, icon scale) unchanged from every prior round of this
 * section — only the macro layout changed, not the card's own look.
 */
const ROW2_COLS = ["lg:col-start-2", "lg:col-start-3"]; // items[4], items[5] -> centre two of four columns

export const FlexiDifference = () => (
  <section
    id="svc-difference"
    data-testid="flexi-difference-section"
    className="relative overflow-hidden bg-ak-ink py-10 md:py-14"
  >
    {/* Full-bleed photo background — the same asset previously used as a sticky side panel */}
    <div className="absolute inset-0">
      <img
        src="/assets/sections/flexi-difference-bg.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ak-differenceOverlay/80" />
    </div>

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker ak-kicker--light mb-5">{difference.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl">{difference.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">{difference.sub}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {difference.items.map((d, i) => (
          <RevealItem key={d.num} className={i >= 4 ? ROW2_COLS[i - 4] : ""}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-ak-orange/40 hover:bg-white/[0.1]"
            >
              {/* left accent bar, grows on hover */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-ak-orange/0 transition-all duration-300 group-hover:w-1 group-hover:bg-ak-orange" />

              {/* soft glow on hover */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ak-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-ak-orange/15" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ak-orange/30 to-ak-orange/10 text-ak-orange ring-1 ring-ak-orange/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="font-display text-2xl font-extrabold text-white/20 transition-colors duration-300 group-hover:text-ak-orange/50">{d.num}</span>
              </div>

              <h3 className="relative mt-4 font-display text-base font-bold text-white">{d.title}</h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-white/65">{d.desc}</p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
