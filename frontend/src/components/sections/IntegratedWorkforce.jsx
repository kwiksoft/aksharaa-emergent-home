import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Icon } from "../../lib/icons";
import { workforce } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

const colStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const FeatureItem = ({ area, align }) => {
  const fromRight = align === "right";
  return (
    <motion.div
      data-testid={`workforce-feature-${area.icon}`}
      variants={{
        hidden: { opacity: 0, x: fromRight ? 28 : -28 },
        show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      whileHover={{ y: -4 }}
      className={`group flex items-start gap-4 ${fromRight ? "lg:flex-row-reverse lg:text-right" : ""}`}
    >
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#960018]/10 text-[#960018] ring-1 ring-[#960018]/20 transition-all duration-300 group-hover:bg-[#960018] group-hover:text-white group-hover:shadow-[0_14px_30px_-10px_rgba(150,0,24,0.6)]">
        <Icon name={area.icon} className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold leading-snug text-ak-ink md:text-lg">
          {area.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ak-ink/55">{area.sub}</p>
      </div>
    </motion.div>
  );
};

export const IntegratedWorkforce = () => {
  const left = workforce.areas.slice(0, 3);
  const right = workforce.areas.slice(3, 6);

  return (
    <section id="workforce" data-testid="workforce-section" className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* light flow-field background (inverted contour lines) */}
      <img
        src="/assets/workforce-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-[0.12]"
        style={{ filter: "invert(1)" }}
        draggable="false"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-white/50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#960018]/[0.06] blur-[120px]" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="ak-kicker mb-5 justify-center">{workforce.kicker}</div>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-ak-ink md:text-5xl">
            Integrated Workforce &amp; Compliance{" "}
            <span style={{ WebkitTextStroke: "2px #960018", color: "transparent" }}>Systems</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ak-ink/60">{workforce.intro}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          {/* LEFT three features */}
          <motion.div
            className="order-2 flex flex-col gap-9 lg:order-1 lg:col-span-4"
            variants={colStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {left.map((area) => (
              <FeatureItem key={area.title} area={area} align="right" />
            ))}
          </motion.div>

          {/* CENTER arch image */}
          <div className="order-1 lg:order-2 lg:col-span-4">
            <motion.div
              className="relative mx-auto w-full max-w-[20rem]"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {/* soft arch glow */}
              <div
                className="absolute inset-0 -z-10 rounded-t-full blur-2xl"
                style={{ backgroundColor: "rgba(150,0,24,0.12)" }}
              />
              {/* arch ring */}
              <div
                className="absolute -top-4 left-1/2 -z-0 h-[80%] w-[110%] -translate-x-1/2 rounded-t-full border-[3px]"
                style={{ borderColor: "rgba(150,0,24,0.32)" }}
              />
              {/* floating image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-[0_45px_95px_-45px_rgba(150,0,24,0.5)]"
              >
                <img
                  src={workforce.image}
                  alt={workforce.imageAlt}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                  style={{ backgroundImage: "linear-gradient(to top, rgba(150,0,24,0.45), transparent)" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT three features */}
          <motion.div
            className="order-3 flex flex-col gap-9 lg:col-span-4"
            variants={colStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {right.map((area) => (
              <FeatureItem key={area.title} area={area} align="left" />
            ))}
          </motion.div>
        </div>

        {/* closing statement */}
        <Reveal className="mt-16">
          <div
            className="mx-auto max-w-4xl rounded-2xl border bg-ak-mist/40 px-7 py-7 text-center md:py-9"
            style={{ borderColor: "rgba(150,0,24,0.18)" }}
          >
            <p className="font-display text-lg font-medium leading-snug text-ak-ink md:text-2xl">
              {workforce.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
