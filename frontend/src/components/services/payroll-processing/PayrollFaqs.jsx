import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-payroll-processing";

const EASE = [0.22, 1, 0.36, 1];

export const PayrollFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="svc-faqs" data-testid="payroll-faqs-section" className="bg-white">
      {/* hero band — per client reference: heading/sub on light, gently
          gradiented blue, real desk photo alongside (not a stretched
          full-bleed background — kept as a discrete image, same pattern
          as Section 7's photo, since the source asset is a product/stock
          photo with its own backdrop, not a seamless full-bleed panel) */}
      <div className="bg-gradient-to-br from-payrollFaqBandLight to-payrollFaqBandDeep py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ak-ink md:text-4xl">{faqs.heading}</h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-ak-orange" />
              <p className="mt-5 max-w-md text-base leading-relaxed text-ak-ink/65">{faqs.sub}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src={faqs.photo.src}
                alt={faqs.photo.alt}
                className="h-[220px] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(28,42,57,0.35)] md:h-[300px]"
              />
            </Reveal>
          </div>
        </Container>
      </div>

      {/* accordion list — individual bordered cards per reference, replacing
          the previous single divided-list container. Same open/close
          mechanic as before (single-open, height-animate) — the reference
          is a static screenshot so it only shows closed state; interaction
          pattern is unchanged, just the card chrome and the toggle icon
          (chevron on the left, rotates on open, instead of a right-side
          circular badge that swapped between arrow/x). */}
      <div className="bg-white py-14 md:py-20">
        <Container>
          <RevealGroup className="space-y-3" stagger={0.05}>
            {faqs.items.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <RevealItem key={f.q} className="overflow-hidden rounded-2xl border border-ak-ink/[0.08] bg-white">
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    data-testid={`payroll-faq-${i}`}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-7"
                  >
                    <Icon
                      name="chevronDown"
                      className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-ak-orange" : "text-ak-ink/40"}`}
                      strokeWidth={2.4}
                    />
                    <span className="font-display text-[14.5px] font-semibold leading-snug text-ak-ink md:text-[15px]">{f.q}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                        <p className="px-6 pb-5 pl-[3.25rem] text-[13.5px] leading-relaxed text-ak-ink/55 md:px-7 md:pl-[3.5rem]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </div>
    </section>
  );
};
