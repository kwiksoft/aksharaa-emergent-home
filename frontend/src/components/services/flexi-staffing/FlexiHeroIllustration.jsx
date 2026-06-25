/**
 * Hero illustration for Flexi Staffing — clipboard checklist + shield.
 * Built as inline SVG (not a sourced image) to match the reference's
 * flat line-art style exactly: coral outline strokes with a duplicated
 * offset stroke beneath for a layered-depth effect, orange checklist
 * rows, and an orange-gold shield with a coral checkmark overlapping
 * the clipboard's bottom-right corner.
 *
 * Colours reference ak-coral (#EB5061) and ak-orange (#F28C28) tokens
 * directly via gradient stops rather than Tailwind classes, since SVG
 * gradients don't resolve Tailwind's CSS variables reliably across browsers.
 */
export const FlexiHeroIllustration = ({ className = "" }) => (
  <svg viewBox="0 0 460 460" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flexiShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB648" />
        <stop offset="100%" stopColor="#F28C28" />
      </linearGradient>
    </defs>

    {/* Clipboard — back/shadow stroke, offset down-right for depth */}
    <g opacity="0.75">
      <rect x="62" y="82" width="230" height="320" rx="18" stroke="#EB5061" strokeWidth="5" />
    </g>

    {/* Clipboard — main body */}
    <rect x="48" y="68" width="230" height="320" rx="18" fill="#FFFBFA" stroke="#EB5061" strokeWidth="5" />

    {/* Clipboard clip */}
    <path d="M122 68 V52 a14 14 0 0 1 14-14 h48 a14 14 0 0 1 14 14 v16"
      fill="#FFFBFA" stroke="#EB5061" strokeWidth="5" strokeLinejoin="round" />
    <circle cx="163" cy="58" r="9" fill="#FFFBFA" stroke="#EB5061" strokeWidth="5" />

    {/* Checklist rows */}
    {[0, 1, 2].map((i) => {
      const y = 140 + i * 70;
      return (
        <g key={i}>
          <rect x="80" y={y} width="44" height="44" rx="10" fill="#FFFBFA" stroke="#EB5061" strokeWidth="4.5" />
          <path d={`M91 ${y + 23} l9 9 l18 -20`} stroke="#EB5061" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="140" y1={y + 14} x2="240" y2={y + 14} stroke="#F28C28" strokeWidth="5" strokeLinecap="round" />
          <line x1="140" y1={y + 32} x2="205" y2={y + 32} stroke="#F28C28" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
        </g>
      );
    })}

    {/* Shield — overlapping clipboard's bottom-right corner */}
    <g transform="translate(215, 300)">
      <path
        d="M65 0 L122 22 V70 C122 110 95 138 65 150 C35 138 8 110 8 70 V22 Z"
        fill="#FFFBFA"
        stroke="url(#flexiShieldGrad)"
        strokeWidth="6"
      />
      <path
        d="M65 18 L104 34 V70 C104 100 84 122 65 132 C46 122 26 100 26 70 V34 Z"
        fill="none"
        stroke="url(#flexiShieldGrad)"
        strokeWidth="3.5"
        opacity="0.85"
      />
      <path d="M42 70 l18 18 l38 -42" stroke="#EB5061" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
);
