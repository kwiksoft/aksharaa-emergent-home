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
  <section id="svc-hero" data-testid="payroll-hero-section" className="relative overflow-hidden bg-white pt-10 pb-0">
    <span className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[14rem] font-extrabold text-ak-ink/[0.025]">
      ₹
    </span>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-wrap gap-2">
            {hero.chips.map((c) => (
              <span key={c} className="flex items-center gap-1.5 rounded-full border border-ak-ink/10 px-3 py-1.5 text-[11px] font-medium text-ak-ink/55">
                <span className="h-1.5 w-1.5 rounded-full bg-ak-orange" />
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Aksharaa Payroll Dashboard (multi-panel) */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        >
          <div
            data-testid="payroll-dashboard-card"
            className="overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white shadow-[0_40px_80px_-30px_rgba(28,42,57,0.35)]"
          >
            {/* header bar */}
            <div className="flex items-center justify-between bg-ak-ink px-5 py-4">
              <span className="text-sm font-bold text-white">{hero.dashboard.title}</span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="p-5">
              {/* month selector pill */}
              <div className="flex items-center justify-end">
                <span className="flex items-center gap-1.5 rounded-full border border-ak-ink/10 px-3 py-1.5 text-[11px] font-semibold text-ak-ink/70">
                  <Icon name="calendar" className="h-3.5 w-3.5 text-ak-ink/50" strokeWidth={2} />
                  {hero.dashboard.monthLabel}
                </span>
              </div>

              {/* stat tiles */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {hero.dashboard.statTiles.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                    className="rounded-xl border border-ak-ink/[0.07] bg-ak-mist/60 p-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ak-orange/10">
                      <Icon name={t.icon} className="h-3.5 w-3.5 text-ak-orange" strokeWidth={2.2} />
                    </span>
                    <div className="mt-2 font-display text-base font-extrabold text-ak-ink">{t.value}</div>
                    <div className="mt-0.5 text-[10px] leading-tight text-ak-ink/45">{t.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* chart + compliance panel */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr]">
                <div className="rounded-xl border border-ak-ink/[0.07] p-4">
                  <div className="text-[11px] font-bold text-ak-ink/70">{hero.dashboard.chart.title}</div>
                  <div className="mt-2 h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={hero.dashboard.chart.months.map((m, i) => ({
                          month: m,
                          value: hero.dashboard.chart.values[i],
                        }))}
                        margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="payrollAreaFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F28C28" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="#F28C28" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke="#1C2A39" strokeOpacity={0.06} />
                        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#1C2A3970" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10, fill: "#1C2A3970" }} axisLine={false} tickLine={false} width={40} />
                        <Tooltip
                          contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #1C2A3915" }}
                          labelStyle={{ fontWeight: 600 }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#F28C28" strokeWidth={2} fill="url(#payrollAreaFill)" dot={{ r: 2.5, fill: "#F28C28", strokeWidth: 0 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="rounded-xl border border-ak-ink/[0.07] p-4">
                  <div className="text-[11px] font-bold text-ak-ink/70">{hero.dashboard.compliance.title}</div>
                  <div className="mt-3 space-y-2.5">
                    {hero.dashboard.compliance.items.map((c) => (
                      <div key={c.label} className="flex items-center justify-between">
                        <span className="text-[11px] text-ak-ink/60">{c.label}</span>
                        <span className="text-[10px] font-bold text-emerald-600">{c.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* footer strip */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ak-ink/[0.07] bg-ak-mist/60 px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="calendar" className="h-4 w-4 text-ak-ink/40" strokeWidth={2} />
                    <div>
                      <div className="text-[9px] uppercase tracking-wide text-ak-ink/40">{hero.dashboard.footer.nextPayrollLabel}</div>
                      <div className="text-[11px] font-bold text-ak-ink">{hero.dashboard.footer.nextPayrollValue}</div>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <Icon name="fileText" className="h-4 w-4 text-ak-ink/40" strokeWidth={2} />
                    <div>
                      <div className="text-[9px] uppercase tracking-wide text-ak-ink/40">{hero.dashboard.footer.upcomingFilingLabel}</div>
                      <div className="text-[11px] font-bold text-ak-ink">{hero.dashboard.footer.upcomingFilingValue}</div>
                    </div>
                  </div>
                </div>
                <a
                  href={hero.dashboard.footer.cta.href}
                  className="flex items-center gap-1.5 rounded-full border border-ak-orange/30 px-3 py-1.5 text-[11px] font-bold text-ak-orange transition-colors hover:bg-ak-orange hover:text-white"
                >
                  <Icon name="calendar" className="h-3.5 w-3.5" strokeWidth={2.2} />
                  {hero.dashboard.footer.cta.label}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ak-ink/[0.08] py-7"
      >
        {hero.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-2xl font-extrabold text-ak-ink">
              {s.text ? s.text : <>{s.value}<sup className="text-ak-orange">{s.suffix}</sup></>}
            </div>
            <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-ak-ink/40">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);
