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
    // Border bumped from white/10 to white/25 per client correction —
    // reference shows a clearly visible thin outline around each badge,
    // not the near-invisible 10%-opacity hairline this had before.
    className="flex w-24 flex-col items-start gap-2 rounded-2xl border border-white/25 bg-white/[0.04] p-4"
  >
    <Icon name={icon} className="h-6 w-6 text-ak-orange2" strokeWidth={1.8} />
    <span className="border-t border-ak-orange2/40 pt-1.5 text-[12px] font-bold text-white">{label}</span>
  </motion.div>
);

const PenaltyIllustration = () => (
  // Switched from a fixed-height absolute-overlay layout (badges + image
  // all centred on top of each other inside a short h-[230px] box) to a
  // flex row with natural height. The fixed short box was the root cause
  // of a real bug caught via Playwright measurement: the image's bottom
  // edge (y=548.8px) overlapped the PF/ESI card row's top edge (y=496.3px)
  // by ~52px — same class of collision the original hand-built clock hit
  // in the prior rebuild (bells vs doc-cards), just recurring with the new
  // asset because the short fixed-height container didn't account for the
  // image's actual 1.5:1 aspect ratio. A flex row with auto height removes
  // the fixed-box constraint entirely rather than re-guessing a taller
  // fixed value.
  <div className="mx-auto hidden w-full max-w-3xl items-center justify-center gap-5 lg:flex">
    <div className="flex flex-shrink-0 flex-col gap-4">
      <FloatingBadge icon={penalties.illustration.badges[0].icon} label={penalties.illustration.badges[0].label} delay={0.1} />
      <FloatingBadge icon={penalties.illustration.badges[1].icon} label={penalties.illustration.badges[1].label} delay={0.2} />
    </div>

    {/* Real client-supplied illustration (clock face + PF/ESI document
        card stack), replacing the previous hand-built SVG/HTML clock and
        DocCard components per explicit client request. The source image
        already renders the document cards fanned/tilted with a natural
        offset, so no separate CSS rotation treatment is needed for the
        "cards twist" ask — it's baked into the asset itself.
        Source: clock_and_files.png, downscaled 1536x1024 -> 900x600 and
        re-saved with optimisation (2.3MB -> ~250KB) to match this page's
        other section assets' file-size range; true alpha transparency
        confirmed (corner pixels alpha=0), so it sits cleanly on the
        section's navy background with no surrounding white box.
        Sized up progressively per client feedback: first attempt 220x330
        (too small, read as a corner accent), then 300x200 (still felt
        small relative to the reference), now widened to 380px (height
        ~253px at the asset's 1.5:1 ratio). Checked available room before
        resizing rather than guessing: 67.6px of vertical clearance existed
        between the image's previous bottom edge and the PF/ESI card row
        below it (496.3px), so the ~53px height increase stays clear with
        margin. Row's max-width bumped from max-w-lg to max-w-xl to keep
        the badges+image combination comfortably centred rather than
        running tight against the old cap. */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      className="relative flex-shrink-0"
    >
      {/* Warm ambient glow behind the clock image, scaled with the image. */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ak-orange2/25 blur-2xl" />
      <img
        src="/assets/sections/returns-penalties-clock.png"
        alt="Alarm clock reading Don't Delay beside a PF Return and ESI Return document stack"
        className="relative h-auto w-[560px] drop-shadow-2xl"
      />
    </motion.div>
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
            <span className="text-ak-orange2">{penalties.headingLine2}</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-ak-orange2" />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">{penalties.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <PenaltyIllustration />
        </Reveal>
      </div>

      <RevealGroup className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.15}>
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
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange2">
            <Icon name="shield" className="h-5 w-5 text-ak-orange2" strokeWidth={2} />
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
