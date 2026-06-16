import { Phone, Mail } from "lucide-react";
import { Container } from "../common/Container";
import { Icon } from "../../lib/icons";
import { company } from "../../data/content";

export const TopInfoBar = () => (
  <div
    data-testid="top-info-bar"
    className="hidden border-b border-ak-ink/5 bg-ak-mist/80 md:block"
  >
    <Container className="flex h-9 items-center justify-between">
      <div className="flex items-center gap-6 text-xs text-ak-ink/60">
        <a
          href={company.phoneHref}
          data-testid="top-info-phone"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-ak-orange"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={2} />
          {company.phone}
        </a>
        <a
          href={company.emailHref}
          data-testid="top-info-email"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-ak-orange"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={2} />
          {company.email}
        </a>
      </div>
      <div className="flex items-center gap-1">
        {company.socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            data-testid={`social-${s.icon}`}
            className="flex h-7 w-7 items-center justify-center rounded-full text-ak-ink/45 transition-all hover:bg-ak-orange/10 hover:text-ak-orange"
          >
            <Icon name={s.icon} className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
        ))}
      </div>
    </Container>
  </div>
);
