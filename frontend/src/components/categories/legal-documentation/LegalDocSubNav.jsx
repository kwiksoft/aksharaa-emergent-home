import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { subNav } from "../../../data/legal-documentation";

const EASE = [0.22, 1, 0.36, 1];

/**
 * 18-service accordion — 4 groups (Business & Corporate / Property &
 * Real Estate / Notices & Disputes / Personal & Estate), demonstrating
 * the accordion pattern generalizes to yet another group count beyond
 * Registrations' 2 and Labour Law's 3.
 */
export const LegalDocSubNav = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="legal-services" data-testid="legaldoc-subnav-section" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <div className="ak-kicker mb-5">{subNav.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-ak-ink md:text-4xl">{subNav.heading}</h2>
          <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{subNav.sub}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 divide-y divide-ak-ink/[0.07] overflow-hidden rounded-2xl border border-ak-ink/[0.07] bg-[#FAF6EE]">
          {subNav.groups.map((g) => {
            const isOpen = openId === g.id;
            return (
              <div key={g.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : g.id)}
                  data-testid={`legaldoc-accordion-toggle-${g.id}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-white/60 md:px-8"
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${isOpen ? "bg-ak-orange text-white" : "bg-ak-ink text-white"}`}>
                      <Icon name={g.icon} className="h-5 w-5" strokeWidth={1.85} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ak-ink md:text-xl">{g.title}</h3>
                      <p className="mt-0.5 text-[12.5px] text-ak-ink/45">{g.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-4">
                    <span className="ak-mono-label hidden sm:inline-block">{g.count} services</span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-ak-orange bg-ak-orange/10 text-ak-orange" : "border-ak-ink/15 text-ak-ink/40"}`}>
                      <Icon name="chevronDown" className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
                      <div className="grid grid-cols-1 divide-y divide-ak-ink/[0.05] bg-white/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                        {[0, 1].map((col) => (
                          <div key={col} className="divide-y divide-ak-ink/[0.05]">
                            {g.items.filter((_, idx) => idx % 2 === col).map((item, idx) => {
                              const num = idx * 2 + col + 1;
                              return (
                                <a key={item.label} href={item.href} data-testid={`legaldoc-item-${g.id}-${num}`} className="group flex items-center gap-3.5 px-6 py-3.5 transition-colors hover:bg-white md:px-8">
                                  <span className="font-display w-6 flex-shrink-0 text-xs font-bold text-ak-ink/25 transition-colors group-hover:text-ak-orange">{String(num).padStart(2, "0")}</span>
                                  <span className="flex-1 text-[13px] font-medium leading-snug text-ak-ink/70 transition-colors group-hover:text-ak-ink">{item.label}</span>
                                  <Icon name="arrowUpRight" className="h-3.5 w-3.5 flex-shrink-0 text-ak-ink/15 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ak-orange" strokeWidth={2.2} />
                                </a>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
};
