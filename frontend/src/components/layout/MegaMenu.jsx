import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "../common/Container";
import { Icon } from "../../lib/icons";
import { servicesMega, industriesMega } from "../../data/navigation";

const panelMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

const ServicesPanel = () => (
  <Container className="py-9">
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
        {servicesMega.columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3 flex items-baseline justify-between border-b border-ak-ink/8 pb-2.5">
              <span className="font-display text-[13px] font-semibold tracking-tight text-ak-ink">
                {col.title}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-ak-orange">
                {col.count}
              </span>
            </div>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#architecture"
                    className="group flex items-center gap-2 text-[13px] text-ak-ink/65 transition-colors hover:text-ak-orange"
                  >
                    <span className="h-1 w-1 rounded-full bg-ak-ink/20 transition-colors group-hover:bg-ak-orange" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="col-span-12 lg:col-span-3">
        <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ak-ink p-7 ak-grid-dark">
          <div>
            <div className="ak-kicker-bare mb-3">{servicesMega.featured.eyebrow}</div>
            <p className="font-display text-lg font-semibold leading-snug text-white">
              {servicesMega.featured.title}
            </p>
          </div>
          <div className="mt-7 space-y-2.5">
            <a
              href={servicesMega.featured.primary.href}
              className="inline-flex w-full items-center justify-between rounded-full bg-ak-orange px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ak-orange-dark"
            >
              {servicesMega.featured.primary.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
            <a
              href={servicesMega.featured.secondary.href}
              className="inline-flex w-full items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              {servicesMega.featured.secondary.label}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

const IndustriesPanel = () => (
  <Container className="py-9">
    <div className="mb-6 max-w-2xl">
      <p className="font-display text-sm text-ak-ink/60">{industriesMega.intro}</p>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industriesMega.items.map((ind) => (
        <a
          key={ind.title}
          href="#"
          className="group flex items-start gap-4 rounded-xl border border-ak-ink/8 bg-ak-mist/50 p-5 transition-all hover:-translate-y-0.5 hover:border-ak-orange/40 hover:bg-white hover:shadow-lg"
        >
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white text-ak-ink shadow-sm transition-colors group-hover:bg-ak-orange group-hover:text-white">
            <Icon name={ind.icon} className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <span>
            <span className="block font-display text-[15px] font-semibold tracking-tight text-ak-ink">
              {ind.title}
            </span>
            <span className="mt-0.5 block text-xs text-ak-ink/55">{ind.desc}</span>
          </span>
        </a>
      ))}
    </div>
  </Container>
);

export const MegaMenu = ({ active }) => (
  <motion.div
    {...panelMotion}
    className="absolute left-0 right-0 top-full border-t border-ak-ink/8 bg-white/95 shadow-[0_28px_60px_-24px_rgba(28,42,57,0.35)] backdrop-blur-xl"
    data-testid={`mega-${active}`}
  >
    {active === "services" ? <ServicesPanel /> : <IndustriesPanel />}
  </motion.div>
);
