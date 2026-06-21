import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { documents } from "../../../data/svc-payroll-processing";

export const PayrollDocuments = () => (
  <section id="svc-documents" data-testid="payroll-documents-section" className="bg-white py-20 md:py-28">
    <Container>
      <Reveal className="max-w-2xl">
        <div className="ak-kicker mb-5">{documents.kicker}</div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">{documents.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-ak-ink/60">{documents.sub}</p>
      </Reveal>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.05}>
        {documents.items.map((d) => (
          <RevealItem key={d} className="flex items-start gap-3 rounded-xl border border-ak-ink/[0.07] bg-ak-mist/30 p-4">
            <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-ak-orange" strokeWidth={2.2} />
            <span className="text-[13px] leading-snug text-ak-ink/65">{d}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  </section>
);
