/** Official Aksharaa brand lockup (transparent PNG, works on light & dark surfaces). */
const SIZES = {
  sm: "h-10 md:h-12",
  md: "h-12 md:h-14",
  lg: "h-14 md:h-[4.25rem]",
};

export const Logo = ({ tone = "light", size = "md", className = "", imgClassName = "" }) => (
  <a
    href="#hero"
    aria-label="Aksharaa Home"
    data-testid="brand-logo"
    className={`inline-flex items-center ${className}`}
  >
    <img
      src="/assets/aksharaa-logo.png"
      alt="Aksharaa Corporate Services"
      className={`${SIZES[size]} w-auto select-none object-contain transition-all duration-300 ${imgClassName}`}
      draggable="false"
    />
  </a>
);
