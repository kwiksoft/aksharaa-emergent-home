import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { faqs } from "../../../data/svc-employment-agreements";

const EASE = [0.22, 1, 0.36, 1];

const orbitPositions = [
  { left: "8%", top: "6%" },
  { left: "88%", top: "2%" },
  { left: "62%", top: "92%" },
];

/**
 * FAQs — FULL REDESIGN per client reference image (Section 6). See the
 * data-file comment above `faqs` for content-level rationale. This file
 * implements the visual side: 2-col layout (illustration + accordion),
 * a genuine open/closed visual distinction per item, and new section-
 * level background decoration.
 */
export const AgreementsFaqs = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="svc-faqs" data-testid="agreements-faqs-section" className="relative overflow-hidden bg-[#FFFBF8] py-10 md:py-14">
      {/* soft diagonal wave, bottom of section */}
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 120 C 360 40, 1080 200, 1440 80 V 200 H 0 Z" fill="#FA8021" fillOpacity="0.05" />
      </svg>
      {/* dot-grid watermarks, bottom corners */}
      <svg className="pointer-events-none absolute bottom-8 left-6 h-20 w-28 hidden sm:block" viewBox="0 0 110 80" fill="none" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle key={`l-${row}-${col}`} cx={6 + col * 18} cy={6 + row * 18} r="2" fill="#FA8021" opacity="0.25" />
          ))
        )}
      </svg>
      <svg className="pointer-events-none absolute bottom-8 right-6 h-20 w-28 hidden sm:block" viewBox="0 0 110 80" fill="none" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle key={`r-${row}-${col}`} cx={6 + col * 18} cy={6 + row * 18} r="2" fill="#FA8021" opacity="0.25" />
          ))
        )}
      </svg>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* LEFT — kicker, heading, sub, illustration */}
          <div>
            <Reveal>
              <div className="ak-kicker mb-5">{faqs.kicker}</div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{faqs.heading}</h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ak-ink/60">{faqs.sub}</p>
            </Reveal>

            {/* illustration: two overlapping speech-bubble "?" shapes +
                3 orbiting icon badges on dashed arcs, same construction
                pattern as the Hero/Section 5 orbit badges. */}
            <Reveal delay={0.15} className="relative mx-auto mt-10 hidden h-[340px] w-full max-w-sm lg:block">
              {/* soft blob shapes behind, for depth */}
              <span className="absolute left-0 top-20 h-44 w-44 rounded-full bg-ak-agreementsOrange/10" />
              <span className="absolute left-10 top-32 h-32 w-32 rounded-full bg-ak-agreementsOrange/10" />

              {/* dashed orbit arcs */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
                <circle cx="42" cy="48" r="38" stroke="#FA8021" strokeOpacity="0.3" strokeWidth="0.6" strokeDasharray="1 4" fill="none" />
              </svg>

              {orbitPositions.map((pos, i) => (
                <span
                  key={faqs.illustrationIcons[i]}
                  className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_26px_-10px_rgba(28,42,57,0.2)]"
                  style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
                >
                  <Icon name={faqs.illustrationIcons[i]} className="h-4.5 w-4.5 text-ak-agreementsOrange" strokeWidth={1.9} />
                </span>
              ))}

              {/* large bubble — orange gradient, white "?" */}
              <svg className="absolute left-[6%] top-[16%] h-[62%] w-[62%]" viewBox="0 0 200 190" fill="none">
                <defs>
                  <linearGradient id="faqBubbleGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FA9A45" />
                    <stop offset="100%" stopColor="#E8650F" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 0 C 150 0 190 35 190 80 C 190 118 164 150 128 162 L 110 190 L 108 165 C 56 161 10 124 10 80 C 10 35 50 0 100 0 Z"
                  fill="url(#faqBubbleGrad)"
                />
                <text x="100" y="103" textAnchor="middle" fontSize="78" fontWeight="800" fill="white" fontFamily="inherit">?</text>
              </svg>

              {/* small bubble — cream, orange "?" */}
              <svg className="absolute left-[46%] top-[40%] h-[44%] w-[44%]" viewBox="0 0 200 190" fill="none">
                <path
                  d="M100 0 C 150 0 190 35 190 80 C 190 118 164 150 128 162 L 110 190 L 108 165 C 56 161 10 124 10 80 C 10 35 50 0 100 0 Z"
                  fill="#FFF6EC"
                />
                <text x="100" y="103" textAnchor="middle" fontSize="78" fontWeight="800" fill="#EB7416" fontFamily="inherit">?</text>
              </svg>
            </Reveal>
          </div>

          {/* RIGHT — accordion */}
          <Reveal delay={0.1} className="space-y-4">
            {faqs.items.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-ak-agreementsOrange/20 bg-[#FAF6EE]" : "border-ak-ink/[0.07] bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    data-testid={`agreements-faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                  >
                    <span className="font-display text-[14.5px] font-bold leading-snug text-ak-ink md:text-[15px]">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-ak-agreementsOrange bg-ak-agreementsOrange text-white"
                          : "border-ak-agreementsOrange/50 text-ak-agreementsOrange"
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
                        <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-ak-ink/60 md:px-7">{f.a}</p>
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
