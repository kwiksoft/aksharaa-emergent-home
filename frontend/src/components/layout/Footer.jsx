import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "../common/Container";
import { Logo } from "./Logo";
import { Icon } from "../../lib/icons";
import { company, footer } from "../../data/content";

export const Footer = () => (
  <footer id="footer" data-testid="site-footer" className="bg-ak-navy">
    <Container className="pt-16 pb-8 md:pt-20">
      <div className="border-b border-white/8 pb-8 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/30">
          {company.tagline}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
            {company.description}
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-ak-orange" strokeWidth={2} />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-ak-orange" strokeWidth={2} />
              {company.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-white/55">
              <MapPin className="h-4 w-4 text-ak-orange" strokeWidth={2} />
              {company.location}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-ak-orange hover:text-ak-orange"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.head}>
            <h4 className="mb-4 border-b border-white/8 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
              {col.head}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-start gap-1 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="mt-0.5 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
        <span className="text-xs text-white/30">{footer.copyright}</span>
        <div className="flex items-center gap-6">
          {footer.legal.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);
