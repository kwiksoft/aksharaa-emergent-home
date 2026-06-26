import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { hero } from "../../../data/svc-flexi-staffing";
import { FlexiHeroBadge } from "./FlexiHeroBadge";
import { FlexiHeroWatermark } from "./FlexiHeroWatermark";
import { FlexiHeroOrbit } from "./FlexiHeroOrbit";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Flexi Staffing hero — Section 1, third review round. Full-bleed
 * background image (flexi-hero-bg.jpg, client-supplied) carries the
 * dot/wave/network art; the clipboard+shield motif is NOT part of that
 * file (confirmed by inspection) so it's layered separately here as a
 * low-opacity monochrome watermark (FlexiHeroWatermark.jsx), matched
 * pixel-for-pixel against the reference's tone (~#F4925A at full
 * strength, rendered at 16% opacity to read as faint as the reference).
 *
 * The badge above the headline sits inside a circular white card with a
 * soft shadow, matching the reference exactly, rather than floating bare
 * on the background as in the first pass.
 *
 * Floating orbit element (FlexiHeroOrbit) added on the right per direct
 * request — confirmed via a video-recorded comparison of two placement
 * options (in-Hero vs. a dedicated standalone section) before building
 * either for real; in-Hero was the one approved. Hidden below lg since
 * the Hero's single-column layout doesn't have room for a second column
 * at narrower widths.
 */
export const FlexiHero = () => (
  <section
    id="svc-hero"
    data-testid="flexi-hero-section"
    className="relative overflow-hidden bg-[#FFF3EC] pt-3"
  >
    <img
      src="/assets/sections/flexi-hero-bg.jpg"
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />

    <FlexiHeroWatermark className="pointer-events-none absolute right-[6%] top-1/2 hidden h-[115%] w-auto -translate-y-1/2 opacity-[0.07] md:block" />

    <Container className="relative pt-14 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-[0_8px_24px_-6px_rgba(235,80,97,0.25)]"
          >
            <FlexiHeroBadge className="h-9 w-9" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ak-ink md:text-5xl lg:text-[3.35rem]"
          >
            {hero.headline[0]}
            <br />
            <span className="text-ak-coral">Zero Compliance</span>{" "}
            <span className="text-ak-orange">Hassle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="coral" withArrow data-testid="flexi-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="flexi-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="hidden justify-self-center lg:block"
        >
          <FlexiHeroOrbit />
        </motion.div>
      </div>

      <div className="h-20 lg:h-28" />
    </Container>
  </section>
);
