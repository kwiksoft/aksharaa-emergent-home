import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { hero } from "../../../data/svc-flexi-staffing";
import { FlexiHeroBadge } from "./FlexiHeroBadge";
import { FlexiHeroIllustration } from "./FlexiHeroIllustration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Flexi Staffing hero — rebuilt against client reference image (Section 1,
 * first review round). Departs from the photo+overlay-card pattern used by
 * every other template hero so far: cream/blush gradient background with
 * faint sunburst rays, a small circular line-art badge above the headline,
 * a three-colour headline split (navy / coral / orange), and a flat
 * line-art illustration (clipboard checklist + shield) on the right in
 * place of a photograph. No stat row and no caption line below the CTAs —
 * both were either absent or placeholder-only in the reference and were
 * dropped per direct instruction rather than carried over.
 */
export const FlexiHero = () => (
  <section
    id="svc-hero"
    data-testid="flexi-hero-section"
    className="relative overflow-hidden bg-gradient-to-br from-[#FFF6F1] via-[#FFF1EA] to-[#FFE9DF] pt-3"
  >
    {/* soft blob shapes, top-left */}
    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-white/70 to-transparent blur-2xl" />
    <div className="pointer-events-none absolute left-10 top-8 h-40 w-40 rounded-full bg-white/50 blur-xl" />

    {/* sunburst rays, right half */}
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-[60%] opacity-50"
      viewBox="0 0 600 700"
      preserveAspectRatio="none"
    >
      <g stroke="#F28C28" strokeOpacity="0.18" strokeWidth="1.5">
        {Array.from({ length: 28 }).map((_, i) => {
          const angle = (i / 28) * 360;
          const rad = (angle * Math.PI) / 180;
          const x2 = 300 + 700 * Math.cos(rad);
          const y2 = 250 + 700 * Math.sin(rad);
          return <line key={i} x1="300" y1="250" x2={x2} y2={y2} />;
        })}
      </g>
    </svg>

    <Container className="relative pt-14 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="mb-6">
            <FlexiHeroBadge className="h-14 w-14" />
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

        {/* RIGHT — line-art illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <FlexiHeroIllustration className="w-full max-w-lg lg:max-w-none lg:w-[115%]" />
        </motion.div>
      </div>
      <div className="h-14 lg:h-20" />
    </Container>
  </section>
);
