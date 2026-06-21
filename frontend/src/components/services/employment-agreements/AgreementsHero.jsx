import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-employment-agreements";

const EASE = [0.22, 1, 0.36, 1];

const widthMap = { dp_full: "100%", dp_three_quarter: "75%", dp_half: "50%", dp_two_thirds: "66%" };

/**
 * Employment Agreements hero — editorial/typographic identity (warm
 * parchment background), distinct from every other template. Document
 * preview card on the right shows skeleton document lines + a clause
 * table-of-contents excerpt with one highlighted clause, mac-window chrome.
 */
export const AgreementsHero = () => (
  <section id="svc-hero" data-testid="agreements-hero-section" className="relative overflow-hidden bg-[#FAF6EE] pt-12 pb-16 md:pt-16">
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
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-5xl lg:text-[3.1rem]"
          >
            {hero.headline[0]}
            <br />
            <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
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
            <AkButton href={hero.ctas[0].href} variant="secondary" withArrow className="!bg-ak-ink !text-white !border-ak-ink hover:!bg-ak-slate" data-testid="agreements-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="agreements-hero-cta-secondary">
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

        {/* RIGHT — document preview */}
        <motion.div initial={{ opacity: 0, x: 36, rotate: -1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: EASE }}>
          <div data-testid="agreements-doc-preview" className="overflow-hidden rounded-2xl border border-ak-ink/10 bg-white shadow-[0_40px_80px_-30px_rgba(28,42,57,0.3)]">
            <div className="flex items-center gap-2.5 bg-ak-ink px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[11px] font-semibold text-white/60">{hero.docPreview.title}</span>
            </div>

            <div className="space-y-4 p-6">
              {hero.docPreview.sections.map((s, i) => (
                <motion.div key={s} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}>
                  <div className="ak-mono-label">{s}</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-ak-mist/60" />
                  <div className="mt-1.5 h-2 w-3/4 rounded-full bg-ak-mist/60" />
                </motion.div>
              ))}

              <div className="space-y-3 border-t border-ak-ink/[0.07] pt-4">
                {hero.docPreview.clauses.map((c, i) => (
                  <motion.div
                    key={c.num}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className={`flex gap-3 rounded-lg p-3 ${c.highlight ? "bg-ak-orange/[0.08]" : ""}`}
                  >
                    <span className={`font-display text-[11px] font-bold ${c.highlight ? "text-ak-orange" : "text-ak-ink/35"}`}>{c.num}</span>
                    <div className="flex-1">
                      <div className="text-[11.5px] font-bold text-ak-ink">{c.title}</div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-ak-mist/50" />
                      <div className="mt-1 h-1.5 w-2/3 rounded-full bg-ak-mist/50" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-ak-ink/[0.07] bg-ak-mist/30 px-5 py-3.5">
              {hero.docPreview.badges.map((b) => (
                <span key={b} className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ak-ink/65">
                  <Icon name="checkCircle" className="h-3 w-3 text-ak-orange" strokeWidth={2.4} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
