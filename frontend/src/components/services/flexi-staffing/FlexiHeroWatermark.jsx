/**
 * Faint clipboard + shield watermark for the Flexi Staffing hero.
 * Rebuilt to match the reference exactly on a second pass: monochrome
 * soft-peach line art (NOT a coral/orange colour split — sampled pixels
 * from the reference's clipboard outline and shield checkmark converged
 * on the same tone, ~#F8D7C4), thicker rounded strokes than the original
 * foreground version, single colour throughout including the checkmarks.
 * Rendered as a low-opacity background layer, not a solid foreground
 * graphic — opacity is controlled by the parent, not baked in here.
 */
export const FlexiHeroWatermark = ({ className = "" }) => (
  <svg viewBox="0 0 520 560" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#F4925A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      {/* clipboard back/shadow offset */}
      <rect x="78" y="108" width="270" height="380" rx="22" opacity="0.55" />

      {/* clipboard main body */}
      <rect x="64" y="94" width="270" height="380" rx="22" />

      {/* clipboard clip */}
      <path d="M150 94 V74 a16 16 0 0 1 16-16 h56 a16 16 0 0 1 16 16 v20" />
      <circle cx="198" cy="82" r="10" />

      {/* checklist rows */}
      {[0, 1, 2].map((i) => {
        const y = 178 + i * 84;
        return (
          <g key={i}>
            <rect x="100" y={y} width="52" height="52" rx="13" strokeWidth="5.5" />
            <path d={`M112 ${y + 27} l11 11 l21 -24`} strokeWidth="6" />
            <line x1="168" y1={y + 17} x2="280" y2={y + 17} strokeWidth="6" />
            <line x1="168" y1={y + 38} x2="238" y2={y + 38} strokeWidth="6" opacity="0.75" />
          </g>
        );
      })}

      {/* shield, overlapping clipboard's bottom-right corner */}
      <g transform="translate(248, 360)">
        <path d="M76 0 L144 26 V82 C144 130 112 162 76 176 C40 162 8 130 8 82 V26 Z" strokeWidth="6" />
        <path d="M76 22 L122 40 V82 C122 118 98 142 76 154 C54 142 30 118 30 82 V40 Z" strokeWidth="4" opacity="0.7" />
        <path d="M50 82 l21 21 l44 -49" strokeWidth="9" />
      </g>
    </g>
  </svg>
);
