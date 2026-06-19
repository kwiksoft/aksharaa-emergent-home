/** KINETIQ-style corner-bracket button. tone="light" for light surfaces, "dark" for dark. */
export const BracketButton = ({ children, href = "#", tone = "dark", className = "", ...props }) => {
  const text = tone === "light" ? "text-ak-ink" : "text-white";
  const bracket = tone === "light" ? "border-ak-ink/40" : "border-white/40";
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-wide ${text} transition-colors hover:text-ak-orange md:text-base ${className}`}
      {...props}
    >
      <span className={`pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 ${bracket} transition-colors group-hover:border-ak-orange`} />
      <span className={`pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 ${bracket} transition-colors group-hover:border-ak-orange`} />
      <span className={`pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 ${bracket} transition-colors group-hover:border-ak-orange`} />
      <span className={`pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 ${bracket} transition-colors group-hover:border-ak-orange`} />
      {children}
    </a>
  );
};
