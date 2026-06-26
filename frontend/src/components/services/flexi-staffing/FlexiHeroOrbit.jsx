import { motion } from "framer-motion";
import { Icon } from "../../../lib/icons";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Floating animated orbit element for the Flexi Staffing Hero — confirmed
 * direction after a video-recorded mockup comparison (two placement
 * options were built and compared; this in-Hero placement was the one
 * approved). Rebuilt bigger and more detailed per direct follow-up
 * feedback against the reference image:
 *
 * - Two concentric rings, not one: an outer ring with larger solid dots
 *   at the icon-midpoints, connected by a thin line, and an inner
 *   fainter ring with smaller, more frequent tick-dots — matches the
 *   reference's two-ring structure exactly (confirmed via a zoomed
 *   crop of the reference, not assumed).
 * - Centre hexagon rebuilt with a real drop shadow and a two-tone
 *   gradient "A" mark (darker crimson-orange left stroke, lighter
 *   orange right stroke) plus the AKSHARAA wordmark beneath it, rather
 *   than a flat single-colour letter in a plain hexagon.
 * - A soft pulsing ring around the hexagon that expands and fades
 *   ("subtly disappearing") on a slow loop, for the breathing-halo
 *   effect requested.
 * - 6 icon circles orbit the rings as before; size scaled up overall
 *   per "make it a little bigger".
 */
const orbitIcons = ["search", "user", "trendingUp", "fileText", "shield", "shield"];

export const FlexiHeroOrbit = ({ className = "" }) => {
  const size = 440;
  const outerR = 172;
  const innerR = 128;
  const center = size / 2;
  const duration = 30;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* outer ring: thin line + larger solid dots at icon-midpoints */}
      <div
        className="absolute rounded-full border border-ak-orange/25"
        style={{ width: outerR * 2, height: outerR * 2, left: center - outerR, top: center - outerR }}
      />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = ((i + 0.5) / 6) * 2 * Math.PI - Math.PI / 2;
        const x = center + outerR * Math.cos(angle);
        const y = center + outerR * Math.sin(angle);
        return (
          <span
            key={`outer-dot-${i}`}
            className="absolute h-2 w-2 rounded-full bg-ak-crimson shadow-sm"
            style={{ left: x - 4, top: y - 4 }}
          />
        );
      })}

      {/* inner ring: fainter, smaller, more frequent tick-dots */}
      <div
        className="absolute rounded-full border border-dashed border-ak-orange/15"
        style={{ width: innerR * 2, height: innerR * 2, left: center - innerR, top: center - innerR }}
      />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 2 * Math.PI;
        const x = center + innerR * Math.cos(angle);
        const y = center + innerR * Math.sin(angle);
        return (
          <span
            key={`inner-dot-${i}`}
            className="absolute h-1 w-1 rounded-full bg-ak-orange/30"
            style={{ left: x - 2, top: y - 2 }}
          />
        );
      })}

      {/* pulsing halo behind the hexagon — slow expand + fade loop */}
      <motion.div
        className="absolute rounded-full border-2 border-ak-orange/30"
        style={{ width: size * 0.46, height: size * 0.46, left: center - (size * 0.46) / 2, top: center - (size * 0.46) / 2 }}
        animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
      />

      {/* centre hexagon — logo mark + wordmark, real depth */}
      <div
        className="absolute flex flex-col items-center justify-center gap-1 bg-white"
        style={{
          width: size * 0.46,
          height: size * 0.46,
          left: center - (size * 0.46) / 2,
          top: center - (size * 0.46) / 2,
          clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          filter: "drop-shadow(0 14px 28px rgba(203,65,84,0.18))",
        }}
      >
        <svg viewBox="0 0 60 60" className="h-12 w-12">
          <defs>
            <linearGradient id="orbitLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CB4154" />
              <stop offset="100%" stopColor="#F28C28" />
            </linearGradient>
          </defs>
          <path d="M30 8 L46 50 H38 L34.5 40 H25.5 L22 50 H14 Z M30 22 L26.5 32 H33.5 Z" fill="url(#orbitLogoGrad)" />
        </svg>
        <span className="text-[10px] font-extrabold tracking-wide text-ak-orange">AKSHARAA</span>
      </div>

      {/* orbiting icon circles, counter-rotated to stay upright */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {orbitIcons.map((icon, i) => {
          const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
          const x = center + outerR * Math.cos(angle);
          const y = center + outerR * Math.sin(angle);
          const iconSize = 56;
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(28,42,57,0.18)]"
              style={{ width: iconSize, height: iconSize, left: x - iconSize / 2, top: y - iconSize / 2 }}
              animate={{ rotate: -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <Icon name={icon} className="h-5 w-5 text-ak-orange" strokeWidth={2} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
