import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { Sparkline } from "../common/Sparkline";
import { workforce } from "../../data/content";

const consoleRows = [
  { label: "PF & ESI Returns", status: "Filed", tone: "ok" },
  { label: "Professional Tax — TN", status: "Scheduled", tone: "warn" },
  { label: "Shops & Establishment", status: "Renewed", tone: "ok" },
  { label: "CLRA Licence", status: "Under Review", tone: "neutral" },
];
const toneClass = {
  ok: "bg-emerald-500/15 text-emerald-600",
  warn: "bg-ak-orange/15 text-ak-orange",
  neutral: "bg-ak-slate/10 text-ak-slate",
};

export const IntegratedWorkforce = () => (
  <section id="workforce" data-testid="workforce-section" className="bg-white py-20 md:py-32">
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="ak-kicker mb-5">{workforce.kicker}</div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-ak-ink md:text-5xl">
              Integrated Workforce &amp; Compliance <span className="ak-outline-ink">Systems</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ak-ink/60">{workforce.intro}</p>
            <div className="mt-6 border-l-2 border-ak-orange bg-ak-mist/50 py-3 pl-4 pr-3">
              <p className="font-display text-sm font-medium leading-snug text-ak-ink">
                {workforce.note}
              </p>
            </div>
          </Reveal>

          <RevealGroup
            className="mt-8 divide-y divide-ak-ink/8 border-y border-ak-ink/8"
            stagger={0.08}
          >
            {workforce.areas.map((area) => (
              <RevealItem key={area.title} y={16}>
                <div className="group flex items-center gap-4 py-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-ak-mist text-ak-ink transition-colors group-hover:bg-ak-orange group-hover:text-white">
                    <Icon name={area.icon} className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[15px] font-semibold text-ak-ink">
                      {area.title}
                    </div>
                    <div className="text-xs text-ak-ink/50">{area.sub}</div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl border border-ak-ink/10 bg-white shadow-[0_40px_80px_-40px_rgba(28,42,57,0.4)]"
            >
              <div className="flex items-center justify-between border-b border-ak-ink/8 bg-ak-mist/50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-ak-orange" />
                  <span className="ak-mono-label text-ak-ink/60">Compliance Console</span>
                </div>
                <span className="ak-mono-label text-ak-ink/40">Live · v1.0</span>
              </div>

              <div className="p-5 md:p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-ak-ink/8 p-4">
                    <div className="ak-mono-label text-ak-ink/45">On-time filings</div>
                    <div className="mt-1 font-display text-3xl font-bold text-ak-ink">99.2%</div>
                    <Sparkline
                      data={[92, 94, 93, 96, 97, 98, 99, 99.2]}
                      className="mt-2 h-8 w-full"
                    />
                  </div>
                  <div className="rounded-xl border border-ak-ink/8 p-4">
                    <div className="ak-mono-label text-ak-ink/45">Active mandates</div>
                    <div className="mt-1 font-display text-3xl font-bold text-ak-ink">128</div>
                    <Sparkline
                      data={[88, 95, 101, 110, 116, 120, 124, 128]}
                      stroke="#2E3B4E"
                      className="mt-2 h-8 w-full"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {consoleRows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between rounded-lg bg-ak-mist/50 px-4 py-3"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium text-ak-ink">
                        <CheckCircle2 className="h-4 w-4 text-ak-ink/30" strokeWidth={2} />
                        {r.label}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${toneClass[r.tone]}`}
                      >
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl border border-ak-orange/20 bg-ak-orange/5 px-4 py-3">
                  <span className="ak-mono-label text-ak-ink/50">Next statutory deadline</span>
                  <span className="font-mono text-xs font-semibold text-ak-orange">15 days · PT-TN</span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
