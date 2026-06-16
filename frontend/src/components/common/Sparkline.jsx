import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Minimal animated sparkline. `data` = array of numbers (any scale).
 * The line draws itself when scrolled into view (encodes "measured trend").
 */
export const Sparkline = ({
  data = [],
  stroke = "#F28C28",
  className = "",
  width = 120,
  height = 36,
  fill = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / range) * (height - 6) - 3;
    return [x, y];
  });
  const line = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`)
    .join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {fill && <path d={area} fill={stroke} opacity="0.1" />}
      <motion.path
        d={line}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.circle
        cx={last[0]}
        cy={last[1]}
        r="2.6"
        fill={stroke}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.25, duration: 0.3 }}
      />
    </svg>
  );
};
