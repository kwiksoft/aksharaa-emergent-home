import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { applicability } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 3 — Applicability, round 4 rebuild per client reference image.
 *
 * Each card carries its own accent identity — PF in Aksharaa orange,
 * ESI in blue — communicating "two distinct acts, two distinct colour
 * identities". Left-border accent stripe, tinted icon circle, tinted
 * threshold highlight box, dotted decorative pattern top-right of each
 * card. The 2-card PF/ESI comparison grid is unchanged across every
 * round of this section's header rework; it's the structural core.
 *
 * Header has gone through two photo treatments before this one:
 * (1) original — small SVG calendar illustration, corner accent
 * (2) round 3 — real desk photo, framed card, right side of header
 * (3) THIS ROUND — client supplied an actual reference image showing
 *     a wide 3D-style illustration (growth-bar/podium graphic with
 *     "20+ employees -> PF Registration" / "10+ employees -> ESI
 *     Registration" callout bubbles, plus a compliance-checklist
 *     clipboard and labelled binders) spanning the full width of the
 *     header row, sitting directly on the page background with no
 *     card frame. Text column narrowed accordingly to give the wide
 *     illustration room; illustration placed bare (no border/shadow)
 *     since the reference shows it blending directly into the
 *     section background rather than being boxed.
 */
const accent = {
  pf: {
    border: "border-l-ak-orange",
    iconBg: "bg-ak-orange/10",
    iconText: "text-ak-orange",
    thresholdBg: "bg-ak-orange/10",
    thresholdNum: "text-ak-orange",
    tickColor: "text-ak-orange",
    wageValue: "text-ak-orange",
    tagColor: "text-ak-orange",
  },
  esi: {
    border: "border-l-blue-500",
    iconBg: "bg-blue-50",
    iconText: "text-blue-500",
    thresholdBg: "bg-blue-50",
    thresholdNum: "text-blue-500",
    tickColor: "text-blue-500",
    wageValue: "text-blue-500",
    tagColor: "text-blue-500",
  },
};

const ApplicabilityIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: EASE }}
    className="relative w-full"
  >
    <img
      src="/assets/sections/reg-applicability-illustration.jpg"
      alt="Employee growth bars showing the 20+ employee threshold for PF Registration and 10+ employee threshold for ESI Registration, alongside a compliance checklist clipboard and labelled PF and ESI registration binders"
      className="w-full"
      loading="lazy"
    />
  </motion.div>
);

export const RegSvcApplicability = () => (
  <section id="svc-applicability" data-testid="reg-svc-applicability-section" className="relative overflow-hidden bg-ak-mist/40 py-14 md:py-20">
    <Container className="relative">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.3fr] lg:gap-10">
        <Reveal>
          <div className="ak-kicker mb-5">{applicability.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
            {applicability.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ak-ink/60">{applicability.sub}</p>
        </Reveal>

        <ApplicabilityIllustration />
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.18}>
        {applicability.tabs.map((t) => {
          const a = accent[t.id];
          return (
            <RevealItem key={t.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`relative overflow-hidden rounded-2xl border border-ak-ink/[0.07] border-l-4 bg-white p-7 shadow-sm md:p-8 ${a.border}`}
              >
                {/* dotted decorative pattern, top-right */}
                <div
                  aria-hidden
                  className="absolute right-5 top-5 grid grid-cols-5 gap-1.5 opacity-[0.12]"
                  style={{ width: 64 }}
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-ak-ink" />
                  ))}
                </div>

                <div className="relative flex items-center gap-3">
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${a.iconBg} ${a.iconText}`}>
                    <Icon name={t.icon} className="h-5.5 w-5.5" strokeWidth={1.85} />
                  </span>
                  <div>
                    <div className={`ak-mono-label ${a.tagColor}`}>{t.tag}</div>
                    <h3 className="font-display text-lg font-bold text-ak-ink">{t.title}</h3>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                  className={`relative mt-6 flex items-center gap-4 rounded-xl p-4 ${a.thresholdBg}`}
                >
                  <span className={`font-display text-4xl font-extrabold leading-none ${a.thresholdNum}`}>
                    {t.threshold.num}<span className="text-2xl">+</span>
                  </span>
                  <span className="text-[13px] leading-snug text-ak-ink/60">{t.threshold.label}</span>
                </motion.div>

                <ul className="relative mt-5 space-y-2.5">
                  {t.points.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: EASE }}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/65"
                    >
                      <Icon name="checkCircle" className={`mt-0.5 h-4 w-4 flex-shrink-0 ${a.tickColor}`} strokeWidth={2.2} />
                      {p}
                    </motion.li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-ak-ink/[0.07] pt-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${a.iconBg} ${a.iconText}`}>
                      <span className="text-[13px] font-bold">₹</span>
                    </span>
                    <span className="text-[12px] font-medium leading-snug text-ak-ink/50">{t.wage.label}</span>
                  </div>
                  <div className="text-right">
                    <span className={`font-display text-base font-extrabold ${a.wageValue}`}>{t.wage.value.split("/")[0]}</span>
                    <span className="block text-[10px] text-ak-ink/35">/{t.wage.value.split("/")[1]}</span>
                  </div>
                </div>
              </motion.div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  </section>
);
