import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { applicability } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Section 3 — Applicability, round 2 rebuild per reference screenshot.
 *
 * Each card now carries its own accent identity — PF in Aksharaa orange,
 * ESI in blue — communicating "two distinct acts, two distinct colour
 * identities" the way the reference does. Left-border accent stripe,
 * tinted icon circle, tinted threshold highlight box, dotted decorative
 * pattern top-right of each card, and a calendar illustration anchoring
 * the section header (built as layered SVG shapes, not an image asset,
 * so it inherits the design system's icon weight/style).
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

const CalendarIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: -16, rotate: -4 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: EASE }}
    className="pointer-events-none absolute -top-2 right-2 hidden h-32 w-28 md:block lg:right-6 lg:h-40 lg:w-36"
  >
    {/* soft radial glow behind */}
    <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-ak-orange/[0.06] blur-xl" />
    <div className="relative h-full w-full rounded-2xl border border-ak-ink/[0.08] bg-white shadow-lg">
      <div className="h-2.5 rounded-t-2xl bg-ak-orange" />
      <div className="absolute -top-1.5 left-4 h-3 w-1.5 rounded-full bg-ak-ink/15" />
      <div className="absolute -top-1.5 right-4 h-3 w-1.5 rounded-full bg-ak-ink/15" />
      <div className="grid grid-cols-4 gap-1.5 p-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${i === 6 ? "bg-ak-orange" : "bg-ak-mist"}`} />
        ))}
      </div>
    </div>
    {/* small bell accent bottom-right */}
    <motion.div
      initial={{ rotate: -8 }}
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-ak-orange shadow-md"
    >
      <Icon name="clock" className="h-3.5 w-3.5 text-white" strokeWidth={2} />
    </motion.div>
  </motion.div>
);

export const RegSvcApplicability = () => (
  <section id="svc-applicability" data-testid="reg-svc-applicability-section" className="relative overflow-hidden bg-ak-mist/40 py-20 md:py-28">
    <Container className="relative">
      <CalendarIllustration />

      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{applicability.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {applicability.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{applicability.sub}</p>
      </Reveal>

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
