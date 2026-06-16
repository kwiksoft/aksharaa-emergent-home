import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Container } from "../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../common/Reveal";
import { risk } from "../../data/content";

export const RiskIntelligence = () => (
  <section
    id="risk"
    data-testid="risk-section"
    className="relative overflow-hidden bg-ak-ink py-20 md:py-32"
  >
    <div className="pointer-events-none absolute inset-0 ak-grid-dark opacity-80" />

    <Container className="relative">
      <Reveal className="max-w-3xl">
        <div className="ak-kicker mb-5">{risk.kicker}</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-6xl">
          Risk Intelligence &amp; Compliance <span className="ak-outline-white">Control</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">{risk.sub}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-7 md:p-9">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50">
                  <AlertTriangle className="h-4 w-4" strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  {risk.zones.head}
                </h3>
              </div>
              <span className="ak-mono-label text-white/30">Exposure</span>
            </div>
            <RevealGroup className="space-y-px" stagger={0.07}>
              {risk.zones.items.map((it) => (
                <RevealItem key={it} y={16}>
                  <div className="flex items-center gap-3.5 border-b border-white/5 py-3.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/25" />
                    <span className="text-sm text-white/65">{it}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-ak-orange/25 bg-ak-slate/40 p-7 shadow-[0_30px_70px_-40px_rgba(242,140,40,0.4)] md:p-9">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ak-orange/15 text-ak-orange">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  {risk.mitigation.head}
                </h3>
              </div>
              <span className="ak-mono-label text-ak-orange/60">Controlled</span>
            </div>
            <RevealGroup className="space-y-px" stagger={0.07}>
              {risk.mitigation.items.map((it) => (
                <RevealItem key={it} y={16}>
                  <div className="flex items-center gap-3.5 border-b border-white/5 py-3.5">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                    <span className="text-sm font-medium text-white/85">{it}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <div className="rounded-2xl border border-white/8 bg-gradient-to-r from-ak-orange/10 via-transparent to-transparent px-7 py-8 text-center md:py-10">
          <p className="font-display text-xl font-medium leading-snug text-white md:text-3xl">
            Risk does not arise from complexity.{" "}
            <span className="text-ak-orange">It arises from unmanaged systems.</span>
          </p>
        </div>
      </Reveal>
    </Container>
  </section>
);
