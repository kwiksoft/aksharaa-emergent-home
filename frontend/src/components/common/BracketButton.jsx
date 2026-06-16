/** KINETIQ-style corner-bracket button (secondary CTA on dark surfaces). */
export const BracketButton = ({ children, href = "#", className = "", ...props }) => (
  <a
    href={href}
    className={`group relative inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-ak-orange md:text-base ${className}`}
    {...props}
  >
    <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-white/40 transition-colors group-hover:border-ak-orange" />
    <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-white/40 transition-colors group-hover:border-ak-orange" />
    <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-white/40 transition-colors group-hover:border-ak-orange" />
    <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white/40 transition-colors group-hover:border-ak-orange" />
    {children}
  </a>
);
