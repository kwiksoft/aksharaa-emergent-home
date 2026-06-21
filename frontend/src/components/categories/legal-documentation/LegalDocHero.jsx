import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/legal-documentation";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Legal & Documentation category hero — sibling to Employment Agreements'
 * service-page identity: same warm parchment background (#FAF6EE), same
 * document-preview motif, but the document this hero "represents" is
 * the entire 18-document suite (5 families) rather than one agreement.
 */
export const LegalDocHero = () => (
  <section data-testid="legaldoc-hero-section" className="relative overflow-hidden bg-[#FAF6EE] pt-12 pb-16 md:pt-16">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-5">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ak-ink md:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline[0]}
            <br />
            <em className="ak-outline-orange not-italic">{hero.headline[1]} {hero.headline[2]}</em>
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
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <AkButton href={hero.ctas[0].href} variant="secondary" withArrow className="!bg-ak-ink !text-white !border-ak-ink hover:!bg-ak-slate" data-testid="legaldoc-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="legaldoc-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-9 space-y-2.5">
            {hero.trustItems.map((t) => (
              <div key={t} className="flex items-center gap-2.5 text-[13px] font-medium text-ak-ink/60">
                <Icon name="checkCircle" className="h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — document suite preview */}
        <motion.div initial={{ opacity: 0, x: 36, rotate: -1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: EASE }}>
          <div className="overflow-hidden rounded-2xl border border-ak-ink/10 bg-white shadow-[0_40px_80px_-30px_rgba(28,42,57,0.3)]">
            <div className="flex items-center gap-2.5 bg-ak-ink px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[11px] font-semibold text-white/60">{hero.docPreview.title}</span>
            </div>
            <div className="space-y-4 p-6">
              {hero.docPreview.groups.map((g, i) => (
                <motion.div key={g} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }} className="flex items-center gap-3 rounded-lg bg-[#FAF6EE] p-3.5">
                  <span className="font-display text-[11px] font-bold text-ak-orange/70">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="ak-mono-label">{g}</div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-ak-ink/[0.06]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
