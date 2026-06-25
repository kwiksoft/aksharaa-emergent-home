import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-payroll-processing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Payroll Processing hero — multi-panel "Aksharaa Payroll Dashboard" motif,
 * distinct from Registrations' tracker card and PF Compliance's dark/statutory
 * hero. Stat tiles + trend chart + statutory compliance status + footer strip,
 * rebuilt per client reference (real content preserved, layout follows reference).
 */
export const PayrollHero = () => (
  <section id="svc-hero" data-testid="payroll-hero-section" className="relative bg-white pt-10 pb-0">
    {/* decorative ambient shapes — soft peach blob + dot grid, per reference */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-ak-orange/[0.07] blur-2xl" />
      <div
        className="absolute right-0 top-0 h-64 w-64 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #F28C28 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
    </div>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -right-10 top-0 select-none font-display text-[14rem] font-extrabold text-ak-ink/[0.025]">
        ₹
      </span>
    </div>
    <Container className="relative z-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="ak-kicker mb-5">
            {hero.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-5xl font-extrabold leading-[0.96] tracking-tight text-ak-ink md:text-6xl lg:text-[3.8rem]"
          >
            {hero.headline[0]} <em className="ak-outline-orange not-italic">{hero.headline[1]}</em>
            <br />
            {hero.headline[2]}
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
            <AkButton href={hero.ctas[0].href} variant="primary" withArrow data-testid="payroll-hero-cta-primary">
              {hero.ctas[0].label}
            </AkButton>
            <AkButton href={hero.ctas[1].href} variant="secondary" data-testid="payroll-hero-cta-secondary">
              {hero.ctas[1].label}
            </AkButton>
          </motion.div>
        </div>

        {/* RIGHT — small representative dashboard + large person photo.
            Card and photo each have their own independent entrance
            animation (previously yoked to one shared parent wrapper). */}
        <div className="relative mb-8 sm:mb-0">
          <div className="relative">
            {/* dashboard card — small, representative only; slides in on its own */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              data-testid="payroll-dashboard-card"
              className="relative z-10 mx-auto max-w-[320px] overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white shadow-[0_40px_80px_-30px_rgba(28,42,57,0.35)] lg:mx-0 lg:max-w-[340px]"
            >
              <div className="flex items-center justify-between bg-ak-ink px-4 py-3">
                <span className="text-[13px] font-bold text-white">{hero.dashboard.title}</span>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-end">
                  <span className="flex items-center gap-1.5 rounded-full border border-ak-ink/10 px-2.5 py-1 text-[10px] font-semibold text-ak-ink/70">
                    <Icon name="calendar" className="h-3 w-3 text-ak-ink/50" strokeWidth={2} />
                    {hero.dashboard.monthLabel}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  {hero.dashboard.statTiles.map((t, i) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                      className="rounded-lg border border-ak-ink/[0.07] bg-ak-mist/60 p-2"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ak-orange/10">
                        <Icon name={t.icon} className="h-3 w-3 text-ak-orange" strokeWidth={2.2} />
                      </span>
                      <div className="mt-1.5 font-display text-[13px] font-extrabold text-ak-ink">{t.value}</div>
                      <div className="text-[8px] leading-tight text-ak-ink/45">{t.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 rounded-xl border border-ak-ink/[0.07] p-3">
                  <div className="text-[10px] font-bold text-ak-ink/70">{hero.dashboard.chart.title}</div>
                  <div className="mt-1.5 h-[100px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={hero.dashboard.chart.months.map((m, i) => ({
                          month: m,
                          value: hero.dashboard.chart.values[i],
                        }))}
                        margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="payrollAreaFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F28C28" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="#F28C28" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke="#1C2A39" strokeOpacity={0.06} />
                        <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#1C2A3970" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 9, fill: "#1C2A3970" }} axisLine={false} tickLine={false} width={30} />
                        <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8, border: "1px solid #1C2A3915" }} labelStyle={{ fontWeight: 600 }} />
                        <Area type="monotone" dataKey="value" stroke="#F28C28" strokeWidth={2} fill="url(#payrollAreaFill)" dot={{ r: 2, fill: "#F28C28", strokeWidth: 0 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-ak-ink/[0.07] p-3">
                  <div className="text-[10px] font-bold text-ak-ink/70">{hero.dashboard.compliance.title}</div>
                  <div className="mt-2 space-y-1.5">
                    {hero.dashboard.compliance.items.map((c) => (
                      <div key={c.label} className="flex items-center justify-between">
                        <span className="text-[10px] text-ak-ink/60">{c.label}</span>
                        <span className="text-[9px] font-bold text-emerald-600">{c.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* person photo — large, slides in on its own; sized and
                positioned so her head isn't clipped at the section's top
                and her feet land exactly at the marquee's top edge */}
            <motion.div
              initial={{ opacity: 0, x: 160 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute -bottom-10 right-0 z-20 hidden w-[50%] sm:block lg:right-0 lg:w-[52%] xl:right-0 xl:w-[54%]"
            >
              <img src={hero.person.src} alt={hero.person.alt} className="h-auto w-full drop-shadow-[0_30px_40px_rgba(28,42,57,0.25)]" />
            </motion.div>
          </div>
        </div>
      </div>

    </Container>

    {/* bottom marquee strip — scrolls right-to-left, ak.burgundy (#800020) per client spec.
        mt-10/14 creates breathing room between the CTA buttons and the
        marquee (was sitting too close); the photo's bottom-0 anchor
        inside the section above still lands her right at this strip's
        top edge since the section's own bottom padding grew to match. */}
    <div className="relative mt-10 overflow-hidden bg-ak-burgundy py-3 sm:mt-14">
      <div className="ak-marquee flex items-center gap-10 whitespace-nowrap">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex flex-shrink-0 items-center gap-10">
            <span className="text-sm font-bold text-white">{hero.marquee.label}</span>
            {hero.marquee.items.map((item, i) => (
              <span key={`${loopIdx}-${i}`} className="flex items-center gap-2 text-sm font-bold text-white">
                <Icon name="target" className="h-3.5 w-3.5 text-white/70" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
