import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { scope } from "../../../data/svc-pf-esi-returns-filing";

/**
 * "Aksharaa's Complete Filing Scope" — full rebuild per client reference
 * image. Previous version was a simple 2-column layout (numbered steps +
 * heading on the left, Filing Guarantee card + contribution table stacked
 * on the right). Reference shows a richer 2-row structure:
 *
 * Row 1 — 3 columns: a photo stack (left), kicker/heading/sub plus a new
 * "Trusted Experts For Your Compliance" card with a Learn More CTA and a
 * 100% Satisfaction badge (centre), and the dark Filing Guarantee card
 * spanning the full row height (right).
 *
 * Row 2 — 2 columns: the numbered steps card (left) and the contribution
 * rates table card (right), both now in their own bordered white cards
 * rather than sitting directly on the section background.
 *
 * Photo placeholders: the reference's two photos (a team member in an
 * Aksharaa-branded polo shirt giving a thumbs up, and a close-up of
 * labelled "PF RETURNS" / "ESI RETURNS" binders) are specific brand
 * photography this build doesn't have source files for. Rather than
 * generating a photorealistic image of a fictional branded person,
 * these are built as clearly-styled icon placeholders in the page's own
 * palette — drop in the real photos at
 * /public/assets/sections/returns-scope-team.jpg and
 * returns-scope-binders.jpg (same aspect ratios as the placeholder divs)
 * whenever they're available, no layout changes needed.
 *
 * Colours: ak.returnsScopeNavy / returnsScopeBlueCard / returnsScopeBlue,
 * all sampled via PIL from the reference image — see tailwind.config.js
 * for provenance. The dark Guarantee-card navy and the 100%-badge navy
 * sampled separately and converged within 2 units per channel, so both
 * reuse the single returnsScopeNavy token.
 *
 * Copy: kicker, heading, sub, all 4 step titles/descriptions, all 6
 * guarantee items, and the full contribution table already matched the
 * reference exactly in the existing data — no copy changes needed, only
 * the new trustedCard content block was added.
 */
export const ReturnsScope = () => (
  <section id="svc-scope" data-testid="returns-scope-section" className="bg-ak-mist/40 py-24 md:py-32">
    <Container>
      {/* ROW 1 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.3fr_1.05fr] lg:gap-6">
        {/* Photo stack */}
        <Reveal className="relative">
          <div className="relative z-0 mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-b from-ak-ink to-ak-ink/85 shadow-md lg:max-w-none">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/90">
              <Icon name="thumbsUp" className="h-14 w-14" strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-wide text-white/50">Team photo placeholder</span>
            </div>
          </div>
          <div className="relative left-1/2 z-10 mt-[-22%] aspect-[4/3] w-[78%] -translate-x-[42%] overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-b from-ak-orange to-ak-orange/85 shadow-lg">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/90">
              <Icon name="folders" className="h-10 w-10" strokeWidth={1.5} />
              <span className="text-center text-[10px] font-medium uppercase tracking-wide text-white/60">PF / ESI returns photo placeholder</span>
            </div>
          </div>
        </Reveal>

        {/* Heading + Trusted Experts card */}
        <div>
          <Reveal delay={0.1}>
            <div className="ak-kicker mb-5">{scope.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-4xl">{scope.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{scope.sub}</p>
          </Reveal>

          <Reveal delay={0.2} className="relative mt-7">
            <div className="rounded-2xl bg-ak-returnsScopeBlueCard p-6 pr-28">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Icon name={scope.trustedCard.icon} className="h-5 w-5 text-ak-returnsScopeBlue" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold leading-snug tracking-tight text-ak-ink">{scope.trustedCard.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ak-ink/55">{scope.trustedCard.desc}</p>
              <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-ak-returnsScopeBlue px-5 py-2.5 text-[13px] font-bold text-white">
                {scope.trustedCard.cta}
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.5} />
              </button>
            </div>
            <div className="absolute -right-2 bottom-3 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl bg-ak-returnsScopeNavy text-center text-white shadow-lg sm:h-24 sm:w-24">
              <span className="font-display text-xl font-extrabold leading-none">{scope.trustedCard.badgeValue}</span>
              <span className="mt-1 px-2 text-[8.5px] font-medium leading-tight text-white/70">{scope.trustedCard.badgeLabel}</span>
            </div>
          </Reveal>
        </div>

        {/* Filing Guarantee card */}
        <Reveal delay={0.25} className="rounded-2xl bg-ak-returnsScopeNavy p-7 text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ak-orange">
            <Icon name="shield" className="h-5 w-5 text-ak-orange" strokeWidth={2} />
          </span>
          <div className="mt-4 font-display text-lg font-extrabold leading-snug tracking-tight">{scope.guarantee.title}</div>
          <ul className="mt-5 divide-y divide-white/10">
            {scope.guarantee.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 py-3 text-[12.5px] leading-snug text-white/70">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" strokeWidth={2.2} />
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* ROW 2 */}
      <RevealGroup className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.12}>
        <RevealItem className="rounded-2xl border border-ak-ink/[0.07] bg-white p-7">
          <div className="relative space-y-7">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ak-orange/25" />
            {scope.steps.map((s, i) => (
              <div key={s.title} className="relative flex gap-5">
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange bg-white font-display text-xs font-bold text-ak-orange">
                  {i + 1}
                </span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ak-orange/10">
                  <Icon name={s.icon} className="h-4.5 w-4.5 text-ak-orange" strokeWidth={2} />
                </span>
                <div className="pt-0.5">
                  <strong className="text-[14px] font-bold text-ak-ink">{s.title}</strong>
                  <span className="text-[13.5px] leading-relaxed text-ak-ink/55"> — {s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="rounded-2xl border border-ak-ink/[0.07] bg-white p-7">
          <div className="font-display text-lg font-extrabold tracking-tight text-ak-ink">{scope.contributions.title}</div>
          <div className="mt-5 overflow-hidden rounded-xl border border-ak-ink/[0.07]">
            <div className="grid grid-cols-3 bg-ak-mist/50 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-ak-ink/45">
              <span /><span>Employee</span><span>Employer</span>
            </div>
            {scope.contributions.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-3 border-t border-ak-ink/[0.06] px-5 py-4 text-[14px]">
                <span className="font-bold text-ak-orange">{r.label}</span>
                <span className="font-medium text-ak-ink/70">{r.employee}</span>
                <span className="font-medium text-ak-ink/70">{r.employer}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-ak-ink/40">{scope.contributions.note}</p>
        </RevealItem>
      </RevealGroup>
    </Container>
  </section>
);
