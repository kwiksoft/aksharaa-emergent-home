import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "../../lib/icons";
import { navLinks, servicesMega, industriesMega } from "../../data/navigation";
import { company } from "../../data/content";

export const MobileNav = ({ open, onClose }) => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (key) => setExpanded((cur) => (cur === key ? null : key));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
          data-testid="mobile-nav-panel"
        >
          <div className="flex items-center justify-between border-b border-ak-ink/8 px-6 py-4">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              data-testid="mobile-nav-close"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ak-mist text-ak-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => {
                if (!link.mega) {
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                      className="border-b border-ak-ink/8 py-4 font-display text-xl font-semibold tracking-tight text-ak-ink"
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </motion.a>
                  );
                }
                const data = link.mega === "services" ? servicesMega.columns : industriesMega.items;
                return (
                  <div key={link.label} className="border-b border-ak-ink/8">
                    <button
                      type="button"
                      onClick={() => toggle(link.mega)}
                      className="flex w-full items-center justify-between py-4 font-display text-xl font-semibold tracking-tight text-ak-ink"
                      data-testid={`mobile-nav-${link.mega}-toggle`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-5 w-5 text-ak-orange transition-transform ${
                          expanded === link.mega ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expanded === link.mega && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-1.5 pb-4 sm:grid-cols-2">
                            {(link.mega === "services"
                              ? data.map((c) => c.title)
                              : data.map((c) => c.title)
                            ).map((label) => (
                              <a
                                key={label}
                                href={link.mega === "services" ? "#architecture" : "#"}
                                onClick={onClose}
                                className="py-1.5 text-sm text-ak-ink/65"
                              >
                                {label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <a
              href="#final-cta"
              onClick={onClose}
              data-testid="mobile-nav-cta"
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-ak-orange py-4 font-medium text-white"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>

            <div className="mt-7 space-y-3 text-sm text-ak-ink/60">
              <a href={company.phoneHref} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-ak-orange" /> {company.phone}
              </a>
              <a href={company.emailHref} className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-ak-orange" /> {company.email}
              </a>
              <div className="flex items-center gap-2 pt-2">
                {company.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ak-mist text-ak-ink/60"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
