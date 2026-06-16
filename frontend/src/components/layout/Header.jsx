import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Logo } from "./Logo";
import { TopInfoBar } from "./TopInfoBar";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { navLinks } from "../../data/navigation";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50"
        onMouseLeave={() => setActiveMega(null)}
        data-testid="site-header"
      >
        <div className={scrolled ? "hidden" : "block"}>
          <TopInfoBar />
        </div>

        <div
          className={`border-b transition-all duration-300 ${
            scrolled || activeMega
              ? "border-ak-ink/8 bg-white/85 backdrop-blur-xl"
              : "border-transparent bg-white/60 backdrop-blur-md"
          }`}
        >
          <Container
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <Logo size={scrolled ? "md" : "lg"} />

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) =>
                link.mega ? (
                  <button
                    key={link.label}
                    type="button"
                    onMouseEnter={() => setActiveMega(link.mega)}
                    onClick={() => setActiveMega((c) => (c === link.mega ? null : link.mega))}
                    className={`group flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                      activeMega === link.mega ? "text-ak-orange" : "text-ak-ink hover:text-ak-orange"
                    }`}
                    data-testid={`nav-${link.mega}`}
                    aria-expanded={activeMega === link.mega}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        activeMega === link.mega ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setActiveMega(null)}
                    className="group relative rounded-full px-3.5 py-2 text-[15px] font-semibold text-ak-ink transition-colors hover:text-ak-orange"
                    data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-ak-orange transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                )
              )}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search"
                data-testid="nav-search"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-ak-ink/60 transition-colors hover:bg-ak-mist hover:text-ak-ink sm:flex"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={2} />
              </button>
              <a
                href="#final-cta"
                onMouseEnter={() => setActiveMega(null)}
                data-testid="nav-cta"
                className="hidden items-center gap-2 rounded-full bg-ak-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-ak-orange sm:inline-flex"
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                data-testid="mobile-menu-open"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ak-ink lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </Container>
        </div>

        <AnimatePresence>
          {activeMega && <MegaMenu active={activeMega} />}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
