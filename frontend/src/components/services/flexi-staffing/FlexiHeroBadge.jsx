/**
 * Small badge icon above the Flexi Staffing hero headline — three people
 * figures enclosed by a circular arrow sweeping from upper-left to a
 * downward arrowhead at lower-right, gradient coral-to-orange. Built as
 * inline SVG to match the reference's custom line-art exactly; no lucide
 * icon combination reproduces this composition.
 */
export const FlexiHeroBadge = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flexiBadgeGrad" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#EB5061" />
        <stop offset="100%" stopColor="#F28C28" />
      </linearGradient>
    </defs>

    {/* circular arrow sweep */}
    <path
      d="M22 38 A40 40 0 1 1 78 88"
      stroke="url(#flexiBadgeGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* arrowhead */}
    <path d="M78 88 L90 84 M78 88 L82 100" stroke="#F28C28" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* left small person */}
    <circle cx="38" cy="58" r="8" stroke="#F28C28" strokeWidth="3" fill="none" />
    <path d="M26 84 c0 -10 6 -16 12 -16 s12 6 12 16" stroke="#F28C28" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* right small person */}
    <circle cx="82" cy="58" r="8" stroke="#F28C28" strokeWidth="3" fill="none" />
    <path d="M70 84 c0 -10 6 -16 12 -16 s12 6 12 16" stroke="#F28C28" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* center tall person */}
    <circle cx="60" cy="46" r="11" stroke="#EB5061" strokeWidth="3.5" fill="none" />
    <path d="M44 84 c0 -14 7 -22 16 -22 s16 8 16 22" stroke="#EB5061" strokeWidth="3.5" strokeLinecap="round" fill="none" />
  </svg>
);
