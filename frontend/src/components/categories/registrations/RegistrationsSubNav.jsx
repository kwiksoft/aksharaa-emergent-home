import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { subNav } from "../../../data/registrations";

const EASE = [0.22, 1, 0.36, 1];

/**
 * The 26-item density problem, solved as a two-tab registry ledger
 * rather than a 26-card grid. Each sub-domain group is a single
 * accordion-like "ledger sheet" with numbered line-items — the visual
 * metaphor of an actual statutory register, not a generic services grid.
 * This pattern is the template every other category's services-list
 * section should borrow (scales from 2 items to 26 without redesign).
 */
export const RegistrationsSubNav = () => {
  const [active, setActive] = useState(subNav.groups[0].id);
  const activeGroup = subNav.groups.find((g) => g.id === active);

  return (
    <section
      id="registry-table"
      data-testid="registrations-subnav-section"
      className="bg-white py-20 md:py-28"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <div className="ak-kicker mb-5">{subNav.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.04] tracking-tight text-ak-ink md:text-4xl">
            {subNav.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ak-ink/60 md:text-lg">{subNav.sub}</p>
        </Reveal>

        {/* tab selector — ledger spine tabs */}
        <Reveal delay={0.1} className="mt-12 flex gap-3 border-b border-ak-ink/10">
          {subNav.groups.map((g) => {
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                data-testid={`registry-tab-${g.id}`}
                className={`group relative flex items-center gap-3 pb-4 pr-2 pt-1 text-left transition-colors ${
                  isActive ? "text-ak-ink" : "text-ak-ink/40 hover:text-ak-ink/70"
                }`}
              >
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive ? "bg-ak-ink text-white" : "bg-ak-ink/5 text-ak-ink/40"
                  }`}
                >
                  <Icon name={g.icon} className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold leading-tight md:text-base">{g.title}</span>
                  <span className="block text-[11px] font-medium text-ak-ink/40">{g.count} registrations</span>
                </span>
                {isActive && (
                  <motion.span
                    layoutId="registry-tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-ak-orange"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </Reveal>

        {/* ledger sheet */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-2 overflow-hidden rounded-2xl border border-ak-ink/[0.07]"
          >
            <div className="flex flex-col gap-4 bg-ak-mist/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <p className="max-w-xl text-sm leading-relaxed text-ak-ink/55">{activeGroup.desc}</p>
              <span className="ak-mono-label inline-flex w-fit items-center gap-2 rounded-full border border-ak-ink/10 bg-white px-4 py-2 text-ak-orange">
                Sub-Domain {activeGroup.num} · {activeGroup.count} Registrations
              </span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-ak-ink/[0.06] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {[0, 1].map((col) => (
                <div key={col} className="divide-y divide-ak-ink/[0.06]">
                  {activeGroup.items
                    .filter((_, idx) => idx % 2 === col)
                    .map((label, idx) => {
                      const num = idx * 2 + col + 1;
                      return (
                        <a
                          key={label}
                          href="#category-cta"
                          data-testid={`registry-item-${activeGroup.id}-${num}`}
                          className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-ak-orange/[0.04] md:px-8"
                        >
                          <span className="font-display w-7 flex-shrink-0 text-xs font-bold text-ak-ink/25 transition-colors group-hover:text-ak-orange">
                            {String(num).padStart(2, "0")}
                          </span>
                          <span className="flex-1 text-sm font-medium leading-snug text-ak-ink/75 transition-colors group-hover:text-ak-ink">
                            {label}
                          </span>
                          <Icon
                            name="arrowUpRight"
                            className="h-4 w-4 flex-shrink-0 text-ak-ink/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ak-orange"
                            strokeWidth={2.2}
                          />
                        </a>
                      );
                    })}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
