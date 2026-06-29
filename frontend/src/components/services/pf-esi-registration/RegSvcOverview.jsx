import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { overview } from "../../../data/svc-pf-esi-registration";

export const RegSvcOverview = () => (
  <section id="svc-overview" data-testid="reg-svc-overview-section" className="relative overflow-hidden bg-white">
    {/* WRAPPER restoring the section's original (pre-timeline) footprint —
        decorative desk-props image below is a direct child of THIS div,
        exactly as it was before the Registration Scope timeline was
        appended, so its bottom-[38px]/left-[...] values resolve against
        the same coordinate system they were originally tuned against.
        (Earlier attempt nested the image inside Container + an extra div,
        which also shifted its horizontal position — Container adds its
        own max-w-7xl/px-16 box that isn't present in the original markup.
        This wrapper restores the exact original nesting instead.) Carries
        BOTH the top and bottom padding that used to live directly on the
        <section> (py-14 md:py-20) — moved here in full rather than split,
        after measuring that splitting it (top kept on <section>, bottom
        moved to wrapper) still left the wrapper 80px shorter than the
        original section's true height, since the wrapper didn't include
        the top-padding contribution either. Confirmed via direct
        offsetParent height measurement against the pre-timeline commit:
        729.5px wrapper vs 809.5px original (off by exactly one pt-20) on
        the first attempt; this version matches 809.5px exactly. */}
    <div className="relative py-14 md:py-20">
      {/* decorative desk-props background image — positioned near the
          "10+ EMPLOYEES" threshold card per direct feedback (was: pinned
          to the section's far right edge), sits behind the existing
          cards/content (z-0), does not alter their layout */}
      <img
        src="/assets/sections/reg-overview-deskprops.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[38px] z-0 hidden w-[440px] opacity-90 lg:left-[666px] lg:w-[340px] lg:block xl:left-[890px] xl:w-[370px]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* MAIN — wider column */}
          <div>
          <Reveal>
            <div className="ak-kicker mb-5">{overview.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {overview.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-ak-ink/65 md:text-base">
            {overview.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {overview.definitions.map((d) => (
              <p key={d.term}>
                <strong className="font-semibold text-ak-ink">{d.term}</strong> {d.desc}
              </p>
            ))}
          </Reveal>

          {/* threshold pair — asymmetric, not boxed-equal: PF tile larger */}
          <Reveal delay={0.2} className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-[1.15fr_1fr]">
            {overview.thresholds.map((t, i) => (
              <div
                key={t.act}
                className={`rounded-2xl p-6 ${i === 0 ? "bg-ak-ink text-white" : "border border-ak-ink/10 bg-ak-mist/50 text-ak-ink"}`}
              >
                <div className="font-display text-4xl font-extrabold tracking-tight">{t.num}</div>
                <div className={`mt-0.5 text-xs font-medium uppercase tracking-wide ${i === 0 ? "text-white/55" : "text-ak-ink/45"}`}>
                  {t.label}
                </div>
                <div className="mt-3 text-sm font-semibold">{t.act}</div>
                <div className={`mt-1 text-xs ${i === 0 ? "text-white/45" : "text-ak-ink/40"}`}>{t.note}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* SIDE — offset upward to break the row alignment */}
        <div className="lg:mt-8">
          <Reveal delay={0.15} className="rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/40 p-6">
            <div className="font-display text-sm font-bold text-ak-ink">{overview.whoNeeds.title}</div>
            <ul className="mt-4 space-y-2.5">
              {overview.whoNeeds.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/60">
                  <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-4 flex items-start gap-3 rounded-2xl bg-ak-orange/10 p-5">
            <Icon name="scan" className="mt-0.5 h-5 w-5 flex-shrink-0 text-ak-orange" strokeWidth={1.9} />
            <p className="text-[13px] leading-relaxed text-ak-ink/70">{overview.alert}</p>
          </Reveal>
        </div>
        </div>
      </Container>
    </div>

    {/* APPENDED — "Registration Scope" 5-step horizontal timeline, per
        direct client reference. Kept in the same light theme as the rest
        of this section (white card on the section's white background) —
        the reference's own card is white-on-peach, but the established
        house style here is light-on-white, so the peach page-backdrop
        was not carried over, only the card itself and its internal
        step styling. Step 04 is the highlighted/"current" step exactly
        as in the reference; step 05 is dimmed (upcoming) and steps
        01-03 sit in their plain completed/default state. Sits OUTSIDE
        the wrapper above (which exists purely to restore the original
        image's coordinate system) — this is a plain sibling section
        within the same <section>, with its own Container. */}
    <Container className="relative z-10 pb-14 md:pb-20">
      <Reveal delay={0.1} className="mt-12 rounded-2xl border border-ak-ink/[0.07] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(28,42,57,0.12)] md:p-8">
        <div className="flex items-center gap-4 border-b border-ak-ink/[0.07] pb-5">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ak-ink text-white">
            <Icon name="checkCircle" className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <div className="font-display text-base font-bold text-ak-ink">{overview.registrationScope.title}</div>
            <div className="text-[13px] text-ak-ink/50">{overview.registrationScope.sub}</div>
          </div>
        </div>

        {/* DESKTOP — horizontal timeline with a single dashed connector
            running behind all 5 step markers */}
        <div className="relative mt-9 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          <div className="absolute left-[10%] right-[10%] top-7 z-0 border-t-2 border-dashed border-ak-ink/15" />
          {overview.registrationScope.steps.map((s, i) => {
            const isActive = i === overview.registrationScope.activeStep;
            const isUpcoming = i > overview.registrationScope.activeStep;
            return (
              <div
                key={s.num}
                className={`relative z-10 rounded-2xl p-4 text-center ${
                  isActive ? "border border-dashed border-ak-orange bg-ak-orange/[0.06]" : ""
                }`}
              >
                {isActive && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ak-orange text-white shadow-sm">
                    <Icon name="checkCircle" className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                )}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
                  <span className={`absolute inset-0 rounded-full ${isUpcoming ? "bg-ak-ink/[0.04]" : "bg-ak-orange/10"}`} />
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full ${
                      isActive ? "bg-ak-orange text-white" : isUpcoming ? "bg-ak-ink/10 text-ak-ink/30" : "bg-white text-ak-orange shadow-sm"
                    }`}
                  >
                    <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                </div>
                <span className={`mx-auto mt-2 block h-1.5 w-1.5 rounded-full ${isUpcoming ? "bg-ak-ink/20" : "bg-ak-orange"}`} />
                <div className={`mt-2 font-display text-sm font-extrabold ${isUpcoming ? "text-ak-ink/30" : "text-ak-orange"}`}>{s.num}</div>
                <div className={`mt-1.5 font-display text-[13px] font-bold leading-snug ${isUpcoming ? "text-ak-ink/35" : "text-ak-ink"}`}>
                  {s.title}
                </div>
                <div className={`mx-auto mt-2 h-px w-7 ${isUpcoming ? "bg-ak-ink/15" : "bg-ak-orange/50"}`} />
                <p className={`mt-2 text-[12px] leading-snug ${isUpcoming ? "text-ak-ink/30" : "text-ak-ink/55"}`}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* MOBILE/TABLET — stacked list, vertical dashed connector */}
        <div className="relative mt-8 space-y-6 lg:hidden">
          <div className="absolute bottom-7 left-7 top-7 z-0 border-l-2 border-dashed border-ak-ink/15" />
          {overview.registrationScope.steps.map((s, i) => {
            const isActive = i === overview.registrationScope.activeStep;
            const isUpcoming = i > overview.registrationScope.activeStep;
            return (
              <div key={s.num} className="relative z-10 flex items-start gap-4">
                <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center">
                  <span className={`absolute inset-0 rounded-full ${isUpcoming ? "bg-ak-ink/[0.04]" : "bg-ak-orange/10"}`} />
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full ${
                      isActive ? "bg-ak-orange text-white" : isUpcoming ? "bg-ak-ink/10 text-ak-ink/30" : "bg-white text-ak-orange shadow-sm"
                    }`}
                  >
                    <Icon name={s.icon} className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                </div>
                <div className={`flex-1 rounded-2xl p-4 ${isActive ? "border border-dashed border-ak-orange bg-ak-orange/[0.06]" : ""}`}>
                  <div className={`font-display text-sm font-extrabold ${isUpcoming ? "text-ak-ink/30" : "text-ak-orange"}`}>{s.num}</div>
                  <div className={`mt-1 font-display text-[14px] font-bold leading-snug ${isUpcoming ? "text-ak-ink/35" : "text-ak-ink"}`}>
                    {s.title}
                  </div>
                  <p className={`mt-1.5 text-[12.5px] leading-snug ${isUpcoming ? "text-ak-ink/30" : "text-ak-ink/55"}`}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-ak-orange/10 px-4 py-2">
          <Icon name="clock" className="h-3.5 w-3.5 text-ak-orange" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-ak-orange">{overview.registrationScope.duration}</span>
        </div>
      </Reveal>
    </Container>
  </section>
);
