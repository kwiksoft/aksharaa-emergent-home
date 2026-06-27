import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { penalties } from "../../../data/svc-pf-esi-returns-filing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * "Cost of Late or Missing Filings" — full rebuild per client reference
 * image. Previous version was a single flat dark block with no PF/ESI
 * theming distinction (both columns looked identical) and no header
 * illustration at all. Reference shows a much richer treatment:
 *
 * - A custom illustration (alarm clock face reading "DON'T DELAY", two
 *   floating "Interest"/"Penalty" badge cards, and a stack of "PF
 *   RETURN"/"ESI RETURN" document cards) built as inline SVG/HTML rather
 *   than a raster asset, matching the rest of this page's icon/illustration
 *   language and staying crisp at any size.
 * - Two distinctly themed penalty cards (PF navy, ESI red) on a light
 *   card background, each row now has its own icon chip rather than just
 *   a bare rate number.
 * - A bottom CTA strip with a shield-check icon and "Already behind on
 *   filings?" framing, matching the reference's layout exactly instead
 *   of the previous plain text+button row.
 *
 * Copy: kicker, heading, sub, both block labels, and all 6 items
 * (rate + description, including exact section numbers) already matched
 * the reference exactly in the existing data — no copy changes needed.
 * Only additions: an icon key per row/block for the new chip treatment,
 * and the illustration's own small content block (badge labels, document
 * labels, clock text).
 *
 * Colours: reused returnsScopeNavy (section bg + PF badge circle),
 * returnsEsiHeader (ESI badge circle), returnsPfChip/Icon and
 * returnsEsiChip/Icon (row icon chips) from Sections 2 and 4 rather than
 * adding near-duplicate tokens — all converged within normal sampling
 * variance when checked against this reference. Only one genuinely new
 * token: returnsPenaltyCard, the cards' neutral light-grey background
 * (distinct from pure white).
 */

const FloatingBadge = ({ icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    className="flex w-24 flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
  >
    <Icon name={icon} className="h-6 w-6 text-ak-orange" strokeWidth={1.8} />
    <span className="border-t border-ak-orange/40 pt-1.5 text-[12px] font-bold text-white">{label}</span>
  </motion.div>
);

const DocCard = ({ label, offset, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: EASE }}
    className="absolute w-32 rounded-lg border border-ak-ink/5 bg-white p-3 shadow-lg"
    style={{ left: offset.left, top: offset.top, zIndex: offset.z }}
  >
    <div className="text-[10px] font-extrabold uppercase tracking-wide text-ak-ink">{label}</div>
    <div className="mt-2 space-y-1">
      {[1, 2, 3].map((i) => (
        <span key={i} className="block h-[3px] w-full rounded bg-ak-ink/10" />
      ))}
    </div>
    <span className="mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-ak-orange/15">
      <Icon name="checkCircle" className="h-3 w-3 text-ak-orange" strokeWidth={2.5} />
    </span>
  </motion.div>
);

const PenaltyIllustration = () => (
  <div className="relative mx-auto hidden h-[230px] w-full max-w-md lg:block">
    <div className="absolute left-0 top-2 z-10 flex flex-col gap-4">
      <FloatingBadge icon={penalties.illustration.badges[0].icon} label={penalties.illustration.badges[0].label} delay={0.1} />
      <FloatingBadge icon={penalties.illustration.badges[1].icon} label={penalties.illustration.badges[1].label} delay={0.2} />
    </div>

    {/* Warm ambient glow behind the clock face */}
    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ak-orange/25 blur-2xl" />

    {/* Fixed-size wrapper so every absolutely-positioned detail (bells,
        feet) measures from the same stable box as the clock face,
        instead of an unsized motion.div whose bounds depend on its
        content — that mismatch was the root cause of the bells and feet
        rendering in the wrong place initially. */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      className="absolute left-1/2 top-1/2 z-20 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Alarm bells on top */}
      <div className="absolute -top-6 left-1/2 z-30 flex -translate-x-1/2 gap-9">
        <span className="h-5 w-5 rounded-full border-[3px] border-ak-ink bg-ak-slate" />
        <span className="h-5 w-5 rounded-full border-[3px] border-ak-ink bg-ak-slate" />
      </div>
      <span className="absolute -top-8 left-1/2 z-30 h-4 w-1.5 -translate-x-1/2 rounded-full bg-ak-ink" />

      <div className="relative h-full w-full rounded-full border-[7px] border-ak-ink bg-white shadow-2xl">
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <span className="font-display text-xl font-extrabold leading-tight text-ak-ink">{penalties.illustration.clockLine1}</span>
          <span className="font-display text-xl font-extrabold leading-tight text-ak-orange">{penalties.illustration.clockLine2}</span>
        </div>
      </div>

      {/* Feet */}
      <span className="absolute -bottom-2 left-4 h-3 w-2.5 rounded-full bg-ak-ink" />
      <span className="absolute -bottom-2 right-4 h-3 w-2.5 rounded-full bg-ak-ink" />
    </motion.div>

    <div className="absolute right-0 top-24 z-0 h-44 w-36">
      <DocCard label={penalties.illustration.documents[0].label} offset={{ left: "30%", top: "0%", z: 1 }} delay={0.25} />
      <DocCard label={penalties.illustration.documents[1].label} offset={{ left: "10%", top: "26%", z: 2 }} delay={0.35} />
    </div>
  </div>
);

export const ReturnsPenalties = () => (
  <section id="svc-penalties" data-testid="returns-penalties-section" className="bg-ak-returnsScopeNavy py-24 md:py-32">
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="ak-kicker ak-kicker--light mb-5">{penalties.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl">
            {penalties.headingLine1}
            <br />
            <span className="text-ak-orange">{penalties.headingLine2}</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-ak-orange" />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">{penalties.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <PenaltyIllustration />
        </Reveal>
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.15}>
        {penalties.blocks.map((b) => {
          const isPf = b.theme === "pf";
          const badgeBg = isPf ? "bg-ak-returnsScopeNavy" : "bg-ak-returnsEsiHeader";
          const chipBg = isPf ? "bg-ak-returnsPfChip" : "bg-ak-returnsEsiChip";
          const iconColor = isPf ? "text-ak-returnsPfIcon" : "text-ak-returnsEsiIcon";
          const textColor = isPf ? "text-ak-ink" : "text-ak-returnsEsiHeader";
          const lineColor = isPf ? "bg-ak-ink" : "bg-ak-returnsEsiHeader";
          const dotColor = isPf ? "bg-ak-ink" : "bg-ak-returnsEsiHeader";

          return (
            <RevealItem key={b.label} className="rounded-2xl bg-ak-returnsPenaltyCard p-7">
              <div className="flex items-center gap-4">
                <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${badgeBg}`}>
                  <Icon name={b.icon} className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <h3 className={`font-display text-lg font-extrabold uppercase tracking-wide ${textColor}`}>{b.label}</h3>
                <span className={`ml-auto hidden h-px flex-1 sm:block ${lineColor} opacity-25`} />
                <span className={`hidden h-1.5 w-1.5 rounded-full sm:block ${dotColor}`} />
              </div>

              <div className="mt-6 divide-y divide-ak-ink/[0.07]">
                {b.items.map((it) => (
                  <div key={it.desc} className="flex items-center gap-4 py-4">
                    <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${chipBg}`}>
                      <Icon name={it.icon} className={`h-4 w-4 ${iconColor}`} strokeWidth={2} />
                    </span>
                    <span className={`font-display w-24 flex-shrink-0 text-xl font-extrabold ${textColor}`}>{it.rate}</span>
                    <p className="text-[13px] leading-relaxed text-ak-ink/60">{it.desc}</p>
                  </div>
                ))}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.3} className="mt-6 flex flex-col items-start gap-6 rounded-2xl bg-white/[0.05] p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange">
            <Icon name="shield" className="h-5 w-5 text-ak-orange" strokeWidth={2} />
          </span>
          <div>
            <div className="font-display text-base font-extrabold text-white">{penalties.ctaTitle}</div>
            <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-white/55">
              Aksharaa helps you regularise arrears and get back on track — minimising penalty exposure.
            </p>
          </div>
        </div>
        <AkButton href={penalties.cta.href} variant="primary" withArrow data-testid="returns-penalties-cta" className="flex-shrink-0">
          {penalties.cta.label}
        </AkButton>
      </Reveal>
    </Container>
  </section>
);
