import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-pf-esi-returns-filing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * "Frequently Asked Questions" — full rebuild per client reference image
 * + client-supplied photo collage asset (Faq_image01.png). Previous
 * version was a centered single-column accordion with no imagery at all.
 * Rebuilt to match the reference's two-column layout:
 *
 * - Left: the client's photo collage (calculator/charts photo, PF/ESI
 *   binder photo, consultation photo, plus a "15+ Years of Experience"
 *   badge and dotted-circle decoration) — all baked into a single
 *   supplied composite image, used as-is rather than reassembled or
 *   overlaid with duplicate elements.
 * - Right: kicker changed from "Common Questions" to "FAQ's" with a
 *   chat-bubble icon (reference shows this exact label + icon, not the
 *   generic kicker text the old version had), heading/sub unchanged
 *   (already matched), then the accordion — first item open by default
 *   with a richer treatment (calendar+clock icon, light peach-tinted
 *   background, minus-circle toggle) vs. collapsed items (plain white
 *   card, plus-circle toggle).
 * - Bottom: a new CTA strip ("One Point of Contact. Timely Filings.
 *   Complete Compliance." + "Talk To Us Now" button with a solid-orange
 *   headset-icon circle), matching the page's existing CTA-strip pattern
 *   from ReturnsPenalties.jsx but with a filled icon circle instead of
 *   an outlined ring, per the reference.
 *
 * New colour token: returnsFaqTint (#FEF8F5, PIL-sampled from both the
 * open item's background and the CTA strip's background, which
 * converged on the same value — distinct from ak.mist, added once and
 * reused in both places rather than duplicated).
 *
 * New icons: messagesSquare (kicker), minus (open-item toggle, replacing
 * the previous reuse of the "x" icon for both close-state purposes).
 * Reused the existing `calendar` icon (CalendarClock) for the open
 * item's illustration rather than adding a new key, since the
 * reference's icon is a plain calendar+clock badge with no element this
 * mapping doesn't already cover.
 */

const FaqCollage = () => (
  // Sized to match the accordion column's full height per client
  // request — the image was previously sized by width only (h-auto),
  // which at its natural 1000x799 aspect ratio rendered noticeably
  // shorter than the right column (measured: 358px vs 717px at
  // 1440px). Wrapping in an h-full container (enabled by the parent
  // grid's items-stretch, see below) and using object-cover lets the
  // image fill the full column height without distorting its aspect
  // ratio — it crops slightly at the sides/edges instead of stretching.
  <div className="mx-auto hidden h-full w-full max-w-md lg:block">
    <motion.img
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      src={faqs.collageImage}
      alt="Aksharaa team reviewing PF and ESI returns filing documents with a client, 15+ years of experience"
      className="h-full w-full rounded-2xl object-cover"
    />
  </div>
);

export const ReturnsFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="svc-faqs" data-testid="returns-faqs-section" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <Reveal className="h-full">
            <FaqCollage />
          </Reveal>

          <div>
            <Reveal className="ak-kicker-bare mb-5 inline-flex items-center gap-2">
              <Icon name="messagesSquare" className="h-4 w-4 text-ak-orange2" strokeWidth={2} />
              {faqs.kicker}
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{faqs.heading}</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ak-ink/60">{faqs.sub}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 space-y-4">
              {faqs.items.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={f.q}
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isOpen ? "border-ak-orange2/20 bg-ak-returnsFaqTint" : "border-ak-ink/[0.07] bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      data-testid={`returns-faq-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                    >
                      <span className="font-display text-[14.5px] font-semibold leading-snug text-ak-ink md:text-[15px]">{f.q}</span>
                      <span
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? "border-ak-orange2 bg-ak-orange2 text-white" : "border-ak-ink/15 text-ak-ink/40"
                        }`}
                      >
                        <Icon name={isOpen ? "minus" : "plus"} className="h-3.5 w-3.5" strokeWidth={2.4} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-4 px-6 pb-6 md:px-7">
                            {f.icon && (
                              <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center">
                                <Icon name={f.icon} className="h-8 w-8 text-ak-orange2" strokeWidth={1.6} />
                              </span>
                            )}
                            <p className="text-[13.5px] leading-relaxed text-ak-ink/60">{f.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={0.15}
          className="relative mt-14 flex flex-col items-start gap-6 overflow-hidden rounded-2xl bg-ak-returnsFaqTint p-6 md:flex-row md:items-center md:justify-between"
        >
          {/* Dotted decoration, right edge — same technique as the collage's. */}
          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-40 md:block"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(242,112,24,0.3) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              maskImage: "radial-gradient(circle at right, black, transparent 75%)",
            }}
          />
          <div className="relative z-10 flex items-start gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange2">
              <Icon name="headset" className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-base font-extrabold text-ak-ink">{faqs.ctaStrip.title}</div>
              <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-ak-ink/55">{faqs.ctaStrip.sub}</p>
            </div>
          </div>
          <AkButton href={faqs.ctaStrip.cta.href} variant="primary" withArrow data-testid="returns-faqs-cta" className="relative z-10 flex-shrink-0">
            {faqs.ctaStrip.cta.label}
          </AkButton>
        </Reveal>
      </Container>
    </section>
  );
};
