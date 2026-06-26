import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { difference } from "../../../data/svc-flexi-staffing";

/**
 * Flexi Staffing "The Aksharaa Difference" section.
 *
 * Correction round: the previous round misread "refer to the image for
 * background colour/image clarity" as "rebuild the section using that
 * photo as a literal layout reference" and flipped the whole section
 * light, including the cards. That was wrong on both counts. The actual
 * ask: (1) background should be a gradient, with the photo itself taken
 * as the reference for tone/clarity (NOT its content — explicitly told
 * not to pull anything from the photo itself), and (2) the 6 cards go
 * back to the original dark treatment with hover motion preserved.
 *
 * Background: the reference photo's own tonal range runs light
 * (bright white marble foreground) toward dark (black marble wall /
 * teal curtains, background) — that light-to-dark direction is what's
 * echoed here, not any visual content from the photo. Section
 * background is now a gradient from a light sage tone down to the
 * established dark sage (#4E5654, the same dark tone used two rounds
 * ago), rather than a flat colour in either direction.
 *
 * Photo: shown at much higher opacity than the previous round's 30%
 * (which was a genuine over-correction — the brief there was "semi
 * opacity", not "barely visible") so it reads with real clarity,
 * sitting on the lighter half of the gradient where it has enough
 * contrast to be seen properly.
 *
 * Cards: reverted to the dark treatment (bg-white/[0.03],
 * border-white/[0.08], white text) used before the light-section
 * detour, with the icon badge / number / accent-bar / glow / spring-
 * lift hover motion unchanged throughout every round so far.
 */
export const FlexiDifference = () => (
  <section
    id="svc-difference"
    data-testid="flexi-difference-section"
    className="relative overflow-hidden bg-gradient-to-b from-[#C7D6C9] via-[#7E8987] to-[#3E4543] py-20 md:py-28"
  >
    <Container className="relative">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <Reveal className="max-w-xl">
            <div className="ak-kicker ak-kicker--light mb-5">{difference.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl">{difference.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">{difference.sub}</p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
            {difference.items.map((d) => (
              <RevealItem key={d.num}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-ak-orange/40 hover:bg-white/[0.1]"
                >
                  {/* left accent bar, grows on hover */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-ak-orange/0 transition-all duration-300 group-hover:w-1 group-hover:bg-ak-orange" />

                  {/* soft glow on hover */}
                  <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ak-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-ak-orange/15" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ak-orange/30 to-ak-orange/10 text-ak-orange ring-1 ring-ak-orange/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-display text-2xl font-extrabold text-white/20 transition-colors duration-300 group-hover:text-ak-orange/50">{d.num}</span>
                  </div>

                  <h3 className="relative mt-4 font-display text-base font-bold text-white">{d.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-relaxed text-white/65">{d.desc}</p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* RIGHT — client-supplied team photo, clear visibility on the lighter half of the gradient */}
        <Reveal delay={0.15} className="sticky top-24 hidden lg:block">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/assets/sections/flexi-difference-bg.jpg"
              alt="The Aksharaa team reviewing a client engagement together"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
