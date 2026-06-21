import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-pf-compliance";

const EASE = [0.22, 1, 0.36, 1];

export const PfCompFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="svc-faqs" data-testid="pfcomp-faqs-section" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <div className="ak-kicker mb-5">{faqs.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{faqs.heading}</h2>
          <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{faqs.sub}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          {faqs.items.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  data-testid={`pfcomp-faq-${i}`}
                  className="flex w-full items-start gap-3 p-5 text-left"
                >
                  <span className="font-display text-[11px] font-bold text-ak-orange/60">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[13.5px] font-semibold leading-snug text-ak-ink">{f.q}</span>
                  <Icon name={isOpen ? "x" : "arrowUpRight"} className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ak-ink/30" strokeWidth={2.4} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-9 text-[12.5px] leading-relaxed text-ak-ink/55">{f.a}</p>
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
