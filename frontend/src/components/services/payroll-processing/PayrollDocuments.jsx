import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { documents } from "../../../data/svc-payroll-processing";

export const PayrollDocuments = () => (
  <section id="svc-documents" data-testid="payroll-documents-section" className="bg-white py-14 md:py-20">
    <Container>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <Reveal>
          <div className="ak-kicker mb-5">{documents.kicker}</div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{documents.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ak-ink/60">{documents.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-ak-orange/[0.08] to-ak-orange/[0.03] p-6">
            <span className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
              <Icon name="folderCheck" className="h-12 w-12 text-ak-orange" strokeWidth={1.5} />
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-ak-orange text-white">
                <Icon name="checkCircle" className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </span>
            <div>
              <div className="font-display text-base font-bold text-ak-ink">{documents.intro.heading}</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ak-ink/55">{documents.intro.sub}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.05}>
        {documents.items.map((d, i) => (
          <RevealItem key={d.title} className="flex items-start gap-4 rounded-2xl border border-ak-ink/[0.07] bg-white p-5">
            <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange/10">
              <Icon name={d.icon} className="h-5 w-5 text-ak-orange" strokeWidth={2} />
              <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ak-orange text-[11px] font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
            <div>
              <div className="font-display text-[15px] font-bold text-ak-ink">{d.title}</div>
              <p className="mt-1 text-[13px] leading-relaxed text-ak-ink/55">{d.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-ak-orange/[0.06] to-ak-orange/[0.02] p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ak-orange text-white">
              <Icon name="shield" className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-base font-bold text-ak-ink">{documents.helpBanner.heading}</div>
              <p className="mt-0.5 text-[13px] text-ak-ink/55">{documents.helpBanner.sub}</p>
            </div>
          </div>
          <a
            href={documents.helpBanner.cta.href}
            className="flex items-center gap-2 rounded-full border border-ak-orange/30 bg-white px-5 py-2.5 text-[13px] font-bold text-ak-orange transition-colors hover:bg-ak-orange hover:text-white"
          >
            <Icon name="headset" className="h-4 w-4" strokeWidth={2.2} />
            {documents.helpBanner.cta.label}
          </a>
        </div>
      </Reveal>
    </Container>
  </section>
);
