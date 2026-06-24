import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "../common/Container";
import { Icon } from "../../lib/icons";
import { company, footer } from "../../data/content";

/**
 * Site-wide Footer, rebuilt per direct reference image (image 1 -> image 2
 * transformation, with the background asset from image 3).
 *
 * Key visual changes from the previous build:
 *   - Background: the provided footer-bg.png (orange glow bottom-left,
 *     dark charcoal with wavy line/dot-particle decoration bottom-right)
 *     instead of a flat bg-ak-navy.
 *   - Top tagline bar: split-coloured text (white first clause, orange
 *     second clause) flanked by two short lines each ending in a solid
 *     dot, instead of plain grey centered text + a full-width divider.
 *   - Brand lockup: a circular orange-ringed icon badge (cropped from
 *     the existing combined logo+wordmark PNG -- see aksharaa-icon.png,
 *     since no standalone icon-only asset existed) + real text
 *     "AKSHARAA" / "CORPORATE SERVICES" beside it, rather than the
 *     shared Logo component's plain horizontal raster image. Built as
 *     real text rather than image so it can be coloured/sized to match
 *     the reference exactly.
 *   - Contact rows: solid orange square icon badges instead of bare
 *     orange icons.
 *   - Social icons: orange-ringed circles instead of white/grey-ringed.
 *   - Column headings: short orange underline accent instead of a
 *     full-width grey divider.
 *   - Link items: small orange arrow icon to the left of each link
 *     (new -- wasn't present before at all).
 *   - Bottom bar: a circular glowing orange-ringed icon badge centered
 *     on the divider line, and a vertical divider between the two legal
 *     links.
 *
 * Link hrefs (currently homepage anchor IDs like #architecture rather
 * than real sitemap URLs) and contact details (phone/email are stated
 * placeholders per the original spec, pending real business info from
 * Aksharaa) are intentionally left untouched here -- this pass is
 * visual only, per explicit scope; the broken-link issue is a separate,
 * already-flagged follow-up.
 */
export const Footer = () => (
  <footer
    id="footer"
    data-testid="site-footer"
    className="relative overflow-hidden bg-ak-navy"
    style={{
      backgroundImage: "url(/assets/sections/footer-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container className="relative pt-10 pb-8 md:pt-12">
      {/* top tagline bar -- split-coloured text flanked by two short
          lines ending in solid dots */}
      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-px flex-1 max-w-[220px] bg-gradient-to-r from-transparent to-ak-orange sm:block" />
        <span className="hidden h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ak-orange sm:block" />
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em]">
          <span className="text-white/85">{company.tagline.split(".")[0]}.</span>{" "}
          <span className="text-ak-orange">{company.tagline.split(".")[1]?.trim()}.</span>
        </span>
        <span className="hidden h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ak-orange sm:block" />
        <span className="hidden h-px flex-1 max-w-[220px] bg-gradient-to-l from-transparent to-ak-orange sm:block" />
      </div>

      <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          {/* brand lockup -- circular icon badge + real text wordmark */}
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-ak-orange/70 bg-white/5 p-2">
              <img src="/assets/aksharaa-icon.png" alt="" className="h-full w-full select-none object-contain" draggable="false" />
            </span>
            <div>
              <div className="font-display text-lg font-extrabold leading-tight text-ak-orange">
                {company.short.toUpperCase()}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">Corporate Services</div>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">{company.description}</p>

          <div className="mt-6 space-y-3">
            <a href={company.phoneHref} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-ak-orange text-white">
                <Phone className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              {company.phone}
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-ak-orange text-white">
                <Mail className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              {company.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-ak-orange text-white">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              {company.location}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ak-orange/50 text-ak-orange/80 transition-all hover:border-ak-orange hover:bg-ak-orange hover:text-white"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.head}>
            <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">{col.head}</h4>
            <span className="-mt-3 mb-4 block h-[2px] w-8 rounded-full bg-ak-orange" />
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-start gap-2 text-sm text-white/65 transition-colors hover:text-white">
                    <Icon
                      name="arrowRight"
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ak-orange transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2.4}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar -- divider line with a centered glowing circular
          icon badge, legal links with a vertical divider between them */}
      <div className="relative border-t border-white/10 pt-6">
        <span className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ak-orange bg-white p-2 shadow-[0_0_24px_4px_rgba(242,140,40,0.45)]">
          <img src="/assets/aksharaa-icon.png" alt="" className="h-full w-full select-none object-contain" draggable="false" />
        </span>

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-xs text-white/40">{footer.copyright}</span>
          <div className="flex items-center gap-4">
            {footer.legal.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                {i > 0 && <span className="h-3 w-px bg-white/20" />}
                <a href={l.href} className="text-xs text-white/40 transition-colors hover:text-white/80">
                  {l.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
