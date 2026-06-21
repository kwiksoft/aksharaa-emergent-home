import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

export const RegSvcFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="svc-faqs" data-testid="reg-svc-faqs-section" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <div className="ak-kicker mb-5">{faqs.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
            {faqs.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{faqs.sub}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 divide-y divide-ak-ink/[0.08] rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30">
          {faqs.items.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  data-testid={`reg-svc-faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                >
                  <span className="font-display text-[14.5px] font-semibold leading-snug text-ak-ink md:text-[15px]">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? "border-ak-orange bg-ak-orange text-white" : "border-ak-ink/15 text-ak-ink/40"
                    }`}
                  >
                    <Icon name={isOpen ? "x" : "arrowUpRight"} className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-ak-ink/55 md:px-7">{f.a}</p>
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
