import { ArrowRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 px-7 py-3.5 text-sm md:text-[15px]";

const variants = {
  primary:
    "bg-ak-orange text-white shadow-[0_8px_24px_-6px_rgba(242,140,40,0.55)] hover:bg-ak-orange-dark hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(242,140,40,0.6)]",
  secondary:
    "border border-ak-ink/15 text-ak-ink hover:border-ak-ink hover:bg-ak-ink hover:text-white",
  ghost:
    "border border-white/25 text-white hover:bg-white hover:text-ak-ink",
  darkSecondary:
    "border border-white/20 text-white hover:bg-white hover:text-ak-ink",
};

export const AkButton = ({
  children,
  variant = "primary",
  href = "#",
  withArrow = false,
  className = "",
  ...props
}) => (
  <a href={href} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
    {children}
    {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.4} />}
  </a>
);
