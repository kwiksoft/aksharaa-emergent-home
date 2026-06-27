import { ArrowRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-3 rounded-full font-medium transition-all duration-300 px-7 py-3.5 text-sm md:text-[15px]";

const variants = {
  primary:
    "bg-ak-orange text-white shadow-[0_8px_24px_-6px_rgba(242,140,40,0.55)] hover:bg-ak-orange-dark hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(242,140,40,0.6)]",
  secondary:
    "border border-ak-ink/15 text-ak-ink hover:border-ak-ink hover:bg-ak-ink hover:text-white",
  ghost:
    "border border-white/25 text-white hover:bg-white hover:text-ak-ink",
  darkSecondary:
    "border border-white/20 text-white hover:bg-white hover:text-ak-ink",
  // Flexi Staffing hero only — sampled from reference image's filled CTA.
  // Separate variant rather than changing `primary`, since primary's
  // ak-orange fill is used as the standard CTA colour across every other
  // template page and is already client-approved there.
  coral:
    "bg-ak-coral text-white shadow-[0_8px_24px_-6px_rgba(235,80,97,0.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(235,80,97,0.55)] hover:brightness-110",
};

// Arrow-chip colour per variant: a solid white circle behind the arrow,
// with the arrow itself rendered in each variant's accent colour so it
// reads correctly against the white fill — sampled from the client's
// Penalties-section CTA reference ("Talk To Us Now" button: white circle,
// orange arrow). Applied globally to every withArrow button site-wide
// per explicit client instruction, not scoped to a single section —
// this replaces the previous bare ArrowRight icon (no circle) everywhere
// withArrow is used.
const arrowChipIconColor = {
  primary: "text-ak-orange",
  secondary: "text-ak-ink",
  ghost: "text-ak-ink",
  darkSecondary: "text-ak-ink",
  coral: "text-ak-coral",
};

export const AkButton = ({
  children,
  variant = "primary",
  href = "#",
  withArrow = false,
  largeArrowChip = false,
  className = "",
  ...props
}) => (
  <a href={href} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
    {children}
    {withArrow && (
      // largeArrowChip: opt-in override for a single button (Penalties
      // CTA strip's "Talk To Us Now") per explicit client request — the
      // circle should be "almost the size of the orange button," not
      // the standard small h-7/w-7 chip used everywhere else. Default
      // false so all 24+ other withArrow usages site-wide are completely
      // unaffected; this is the opposite scope decision from the earlier
      // global arrow-circle change, made deliberately per this request
      // being explicitly about one button, not a site-wide style.
      <span
        className={`flex flex-shrink-0 items-center justify-center rounded-full bg-white ${
          largeArrowChip ? "h-12 w-12" : "h-7 w-7"
        }`}
      >
        <ArrowRight className={`${largeArrowChip ? "h-5 w-5" : "h-3.5 w-3.5"} ${arrowChipIconColor[variant] || arrowChipIconColor.primary}`} strokeWidth={2.6} />
      </span>
    )}
  </a>
);
