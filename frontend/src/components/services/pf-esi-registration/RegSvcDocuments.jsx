import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { documents } from "../../../data/svc-pf-esi-registration";

const COL_OFFSET = ["md:mt-0", "md:mt-8", "md:mt-2"];

export const RegSvcDocuments = () => (
  <section id="svc-documents" data-testid="reg-svc-documents-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{documents.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
          {documents.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{documents.sub}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6" stagger={0.12}>
        {documents.groups.map((g, i) => (
          <RevealItem key={g.title} className={COL_OFFSET[i % 3]}>
            <div className="rounded-2xl border border-ak-ink/[0.07] bg-ak-mist/30 p-6">
              <div className="flex items-center gap-3 border-b border-ak-ink/[0.07] pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ak-ink text-white">
                  <Icon name={g.icon} className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="font-display text-sm font-bold text-ak-ink">{g.title}</div>
              </div>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-ak-ink/60">
                    <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.2} className="mt-8 flex items-start gap-3 rounded-2xl border border-ak-orange/20 bg-ak-orange/5 p-5">
        <Icon name="folderCheck" className="mt-0.5 h-5 w-5 flex-shrink-0 text-ak-orange" strokeWidth={1.9} />
        <p className="text-[13px] leading-relaxed text-ak-ink/65">{documents.note}</p>
      </Reveal>
    </Container>
  </section>
);
