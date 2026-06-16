import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Reveal } from "../common/Reveal";
import { Counter } from "../common/Counter";
import { metrics } from "../../data/content";

export const InstitutionalMetrics = () => (
  <section
    data-testid="metrics-section"
    className="relative overflow-hidden bg-ak-navy py-20 md:py-28"
  >
    <div className="pointer-events-none absolute inset-0 ak-grid-dark opacity-50" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-ak-orange/10 blur-3xl" />

    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="ak-kicker-bare mb-5">{metrics.kicker}</div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {metrics.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
        {metrics.items.map((m, i) => (
          <Reveal
            key={m.label}
            delay={0.1 * i}
            className={`px-4 text-center lg:px-8 ${
              i !== 0 ? "lg:border-l lg:border-white/10" : ""
            }`}
          >
            <div className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              {m.text ? m.text : <Counter value={m.value} suffix={m.suffix} />}
            </div>
            <motion.div
              className="mx-auto mt-5 h-0.5 rounded-full bg-ak-orange"
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + 0.1 * i, ease: "easeInOut" }}
            />
            <div className="mx-auto mt-4 max-w-[12rem] text-sm font-medium leading-snug text-white/55">
              {m.label}
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
