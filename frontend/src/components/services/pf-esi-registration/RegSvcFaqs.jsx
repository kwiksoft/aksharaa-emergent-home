import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-pf-esi-registration";

const EASE = [0.22, 1, 0.36, 1];

/**
 * FAQs — two-column layout per client reference (faq_image03):
 * left = kicker/heading/sub-copy + 3D illustration sitting directly on the
 * textured page background; right = accordion rebuilt as separate floating
 * cards (not one divided container) — open card gets an orange left-border
 * accent + solid minus-circle, closed cards get an outlined plus-circle.
 * Full-bleed decorative background image behind the whole section.
 */
export const RegSvcFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="svc-faqs" data-testid="reg-svc-faqs-section" className="relative overflow-hidden bg-ak-mist/20 py-14 md:py-20">
      {/* decorative full-bleed background texture, behind everything */}
      <img
        src="/assets/sections/reg-faqs-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.15fr] lg:gap-10">
          {/* LEFT — heading/copy + illustration */}
          <div>
            <Reveal>
              <div className="ak-kicker mb-5">{faqs.kicker}</div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
                {faqs.heading}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ak-ink/60">{faqs.sub}</p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 hidden justify-center lg:flex lg:justify-start">
              <img
                src="/assets/sections/reg-faqs-illustration.png"
                alt="Aksharaa compliance specialist managing PF & ESI registration documents"
                className="w-full max-w-[420px]"
              />
            </Reveal>
          </div>

          {/* RIGHT — accordion, separate floating cards */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {faqs.items.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl bg-white shadow-[0_2px_18px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                    isOpen ? "border-l-[3px] border-l-ak-orange" : "border-l-[3px] border-l-transparent"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    data-testid={`reg-svc-faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                  >
                    <span className="font-display text-[14.5px] font-semibold leading-snug text-ak-ink md:text-[15px]">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? "border-ak-orange bg-ak-orange text-white" : "border-ak-orange/40 text-ak-orange"
                      }`}
                    >
                      <Icon name={isOpen ? "minus" : "plus"} className="h-3.5 w-3.5" strokeWidth={2.4} />
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
        </div>
      </Container>
    </section>
  );
};
