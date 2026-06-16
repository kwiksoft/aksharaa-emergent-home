import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Scroll-triggered soft fade + translate. Used everywhere for staggered reveals. */
export const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 36,
  once = true,
  duration = 0.7,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

/** Container that staggers its direct <RevealItem> children on scroll. */
export const RevealGroup = ({ children, className = "", stagger = 0.12, once = true }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, margin: "-80px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, className = "", y = 36 }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);
