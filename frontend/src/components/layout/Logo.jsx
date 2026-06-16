/** Dependency-free typographic brand mark. `tone` swaps for dark surfaces. */
export const Logo = ({ tone = "light", className = "" }) => {
  const isDark = tone === "dark";
  return (
    <a
      href="#hero"
      aria-label="Aksharaa Home"
      data-testid="brand-logo"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-ak-ink shadow-sm">
        <span className="font-display text-lg font-bold leading-none text-white">A</span>
        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-ak-orange" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[17px] font-bold tracking-tight ${
            isDark ? "text-white" : "text-ak-ink"
          }`}
        >
          Aksharaa
        </span>
        <span
          className={`mt-0.5 block text-[9px] font-medium uppercase tracking-[0.28em] ${
            isDark ? "text-white/45" : "text-ak-ink/45"
          }`}
        >
          Corporate Services
        </span>
      </span>
    </a>
  );
};
