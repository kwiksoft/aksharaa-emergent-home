import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { overview } from "../../../data/svc-pf-esi-registration";

export const RegSvcOverview = () => (
  <section id="svc-overview" data-testid="reg-svc-overview-section" className="relative overflow-hidden bg-white py-14 md:py-20">
    {/* decorative desk-props background image — positioned near the
        "10+ EMPLOYEES" threshold card per direct feedback (was: pinned
        to the section's far right edge), sits behind the existing
        cards/content (z-0), does not alter their layout */}
    <img
      src="/assets/sections/reg-overview-deskprops.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 z-0 hidden w-[440px] opacity-90 lg:left-[470px] lg:block xl:left-[610px] xl:w-[500px]"
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
  </section>
);
