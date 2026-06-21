import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { AkButton } from "../../common/AkButton";
import { Icon } from "../../../lib/icons";
import { hero } from "../../../data/svc-payroll-processing";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Payroll Processing hero — "live payslip dashboard" motif, distinct from
 * Registrations' tracker card and PF Compliance's dark/statutory hero.
 * Mac-window styled card with a real computed payslip breakdown that
 * builds line-by-line, "LIVE" badge pulsing.
 */
export const PayrollHero = () => (
  <section id="svc-hero" data-testid="payroll-hero-section" className="relative overflow-hidden bg-white pt-10 pb-0">
    <span className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[14rem] font-extrabold text-ak-ink/[0.025]">
      ₹
    </span>
    <Container className="relative z-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
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

        {/* RIGHT — Mac-window payroll dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 36, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        >
          <div data-testid="payroll-dashboard-card" className="overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white shadow-[0_40px_80px_-30px_rgba(28,42,57,0.35)]">
            <div className="flex items-center justify-between bg-ak-ink px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide text-white/45">{hero.dashboard.title}</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-ak-ink">{hero.dashboard.month}</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">{hero.dashboard.status}</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-b border-ak-ink/[0.07] pb-4">
                {hero.dashboard.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-lg font-extrabold text-ak-ink">{s.value}</div>
                    <div className="mt-0.5 text-[9px] leading-tight text-ak-ink/40">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="ak-mono-label mt-4 mb-2">{hero.dashboard.payslipLabel}</div>
              <div className="space-y-1.5">
                {hero.dashboard.rows.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between text-[12px]"
                  >
                    <span className="text-ak-ink/55">{r.label}</span>
                    <span className={r.deduction ? "font-medium text-red-500" : "font-medium text-ak-ink/75"}>{r.value}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between rounded-lg bg-ak-ink px-3 py-2.5">
                <span className="text-[11px] font-bold text-white/70">{hero.dashboard.netLabel}</span>
                <span className="font-display text-sm font-extrabold text-ak-orange">{hero.dashboard.netValue}</span>
              </div>
              <div className="mt-2 text-center text-[10px] text-ak-ink/35">{hero.dashboard.footer}</div>
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
