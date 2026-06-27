import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-employment-agreements";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Employment Agreements Hero — FULL REBUILD per client reference image,
 * replacing the previous document-preview-card concept entirely.
 *
 * CORRECTION (this thread, after initial build): the background asset
 * (agreements-hero-bg.jpg) was initially treated as a boxed right-side
 * photo panel with its own rounded corners. Re-examining both the
 * reference and the supplied background asset side by side showed this
 * was wrong on two counts: (1) the photo has no hard edge at all in the
 * reference — it fades to nothing via a soft vignette baked into the
 * asset itself, confirmed by cropping the same region from both images;
 * (2) the asset's own aspect ratio (1672x941, wide/landscape) and its
 * left-side orange hexagon decorations only make sense as a FULL-WIDTH
 * section background spanning both the text column and the photo area
 * as one continuous image — not a separate component sitting beside the
 * text. Rebuilt accordingly: the image is now the section's own
 * background (object-cover, top-aligned), and the hexagon decorations
 * that were almost hand-coded as a separate layer are correctly left
 * out, since they're already part of this one asset.
 *
 * Foreground layer (NOT in the background asset — confirmed absent by
 * diffing crops): the shield+checkmark centrepiece, the two dotted
 * rings with dot markers, the small isolated orange dot, and the 4
 * floating badge cards. All built as positioned elements over the
 * background. The 3-item rich trust checklist (icon box + title + desc)
 * replaces the old single-line 4-item check-icon list, and the bottom
 * trust strip (4 items) is a new section that did not exist before —
 * both per the reference image. Sub-copy shortened to the reference's
 * 2-line version. Second CTA gets a one-off orange-bordered outline
 * (inline override, not a new global AkButton variant, since this
 * specific look only appears on this Hero).
 */
export const AgreementsHero = () => (
  <section
    id="svc-hero"
    data-testid="agreements-hero-section"
    className="relative overflow-hidden bg-[#FAF6EE] pt-12 pb-0 md:pt-16"
  >
    {/* Full-width background image — photo + soft vignette + faint
        city-skyline watermark + left-side orange hexagons, all baked
        into this single asset. Sized to cover the hero's upper area
        (kicker through badges); the bottom trust strip sits below it
        on the plain parchment background. A bottom fade mask blends
        the image's lower edge into the parchment rather than cutting
        off sharply — the reference shows a smooth fade, not a hard
        seam, confirmed by the supplied background asset's own vignette
        treatment along its edges. */}
    <div
      className="absolute inset-x-0 top-0 hidden lg:block"
      style={{
        height: "min(56.3vw, 740px)",
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        backgroundImage: "url(/assets/sections/agreements-hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    />

    <Container className="relative">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-6">
        {/* LEFT — headline, sub, CTAs, trust checklist */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-5">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-5xl lg:text-[2.85rem]"
          >
            {hero.headline[0]}
            <br />
            <span className="text-ak-agreementsOrange">{hero.headline[1]}</span>
          </motion.h1>

          {/* Orange line-dot divider — matches the established pattern used
              on other template heroes (e.g. PF & ESI Returns Filing). */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
            className="mt-5 flex items-center gap-1.5 origin-left"
          >
            <span className="h-[3px] w-12 rounded-full bg-ak-agreementsOrange" />
            <span className="h-1.5 w-1.5 rounded-full bg-ak-agreementsOrange" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-5 max-w-md whitespace-pre-line text-[15px] leading-relaxed text-ak-ink/60 md:text-base"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <AkButton
              href={hero.ctas[0].href}
              variant="secondary"
              withArrow
              className="!border-ak-ink !bg-ak-ink !px-5 !py-3 !text-[13.5px] !text-white hover:!bg-ak-slate"
              data-testid="agreements-hero-cta-primary"
            >
              {hero.ctas[0].label}
            </AkButton>
            <AkButton
              href={hero.ctas[1].href}
              variant="secondary"
              withArrow
              className="!border-ak-agreementsOrange !px-5 !py-3 !text-[13.5px] !text-ak-ink hover:!bg-ak-agreementsOrange hover:!text-white"
              data-testid="agreements-hero-cta-secondary"
            >
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>

          {/* Rich 3-item trust checklist — icon box + title + description,
              replacing the old single-line 4-item check-icon list. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 max-w-md divide-y divide-ak-ink/[0.07]"
          >
            {hero.trustItems.map((t, i) => (
              <div key={t.title} className={`flex items-start gap-4 ${i === 0 ? "pb-4" : "py-4"}`}>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_-4px_rgba(28,42,57,0.12)]">
                  <Icon name={t.icon} className="h-5 w-5 text-ak-agreementsOrange" strokeWidth={2} />
                </span>
                <div>
                  <div className="font-display text-[15px] font-bold text-ak-ink">{t.title}</div>
                  <p className="mt-0.5 text-[13px] leading-snug text-ak-ink/55">{t.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — empty spacer column on desktop (the photo is the section
            background, not a boxed element here) carrying the foreground
            decorations: shield, rings, badges. On mobile/tablet the photo
            background is hidden (it's tuned for the wide desktop crop, per
            the asset's own landscape ratio), so this column collapses and
            shows nothing — badges over a missing photo would float over
            blank parchment and look broken. */}
        <div className="relative hidden min-h-[600px] lg:block" data-testid="agreements-hero-visual">
          {/* Decorative dotted rings — two concentric arcs with small dot
              markers. Slow independent rotation, same treatment as the
              dotted ring on the PF & ESI Returns Filing hero. */}
          <motion.svg
            className="pointer-events-none absolute"
            style={{ left: "4%", top: "4%", width: "62%", height: "62%" }}
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="48" stroke="white" strokeOpacity="0.8" strokeWidth="0.8" strokeDasharray="1 5" strokeLinecap="round" />
            {[20, 110, 200, 290].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x = 50 + 48 * Math.cos(rad);
              const y = 50 + 48 * Math.sin(rad);
              return <circle key={deg} cx={x} cy={y} r="1.7" fill="white" />;
            })}
          </motion.svg>
          <motion.svg
            className="pointer-events-none absolute"
            style={{ left: "-6%", top: "-8%", width: "82%", height: "82%" }}
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="48" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" strokeDasharray="0.5 7" strokeLinecap="round" />
          </motion.svg>
          {/* small isolated orange dot, lower-left of the shield */}
          <span className="absolute h-2 w-2 rounded-full bg-ak-agreementsOrange/70" style={{ left: "30%", top: "62%" }} />
          {/* bottom-right dot grid, per reference */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-24 w-32"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1.4px, transparent 1.4px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Centre shield + checkmark — semi-transparent so the document
              underneath shows through, matching the reference exactly. */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="absolute"
            style={{ left: "8%", top: "10%", width: "28%", height: "44%" }}
            viewBox="0 0 100 140"
            fill="none"
          >
            <path
              d="M50 4 L94 22 V70 C94 104 74 124 50 136 C26 124 6 104 6 70 V22 Z"
              stroke="#FA8021"
              strokeWidth="5"
              fill="white"
              fillOpacity="0.18"
              strokeLinejoin="round"
            />
            <path d="M30 70 L46 88 L72 52" stroke="#FA8021" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Floating badge cards */}
          {hero.badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: EASE }}
              className="absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_34px_-12px_rgba(28,42,57,0.22)]"
              style={{ left: b.pos.left, top: b.pos.top, transform: "translate(-50%, -50%)" }}
              data-testid={`agreements-hero-badge-${i}`}
            >
              <Icon name={b.icon} className="h-5 w-5 flex-shrink-0 text-ak-agreementsOrange" strokeWidth={2} />
              <div className="whitespace-nowrap text-[13px] font-bold leading-tight text-ak-ink">
                <div>{b.title}</div>
                <div>{b.title2}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom trust strip — new section, did not exist before. Sits on
          the plain parchment background below the photo (which fades
          out well above this point in the reference). */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
        className="relative z-10 mt-14 grid grid-cols-2 gap-y-6 rounded-2xl bg-ak-agreementsStripBg p-6 sm:grid-cols-4 sm:gap-x-4 sm:py-6"
      >
        {hero.bottomStrip.map((item, i) => (
          <div key={item.title} className={`flex items-start gap-3 ${i > 0 ? "sm:border-l sm:border-ak-ink/10 sm:pl-5" : ""}`}>
            <Icon name={item.icon} className="h-7 w-7 flex-shrink-0 text-ak-agreementsOrange" strokeWidth={1.8} />
            <div>
              <div className="font-display text-[13.5px] font-bold leading-snug text-ak-ink">{item.title}</div>
              <p className="mt-0.5 text-[12px] leading-snug text-ak-ink/55">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="h-12 md:h-16" />
    </Container>
  </section>
);
