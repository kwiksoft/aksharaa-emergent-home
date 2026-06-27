import { Container } from "../../common/Container";
import { Reveal, RevealGroup, RevealItem } from "../../common/Reveal";
import { Icon } from "../../../lib/icons";
import { documents } from "../../../data/svc-pf-compliance";

export const PfCompDocuments = () => (
  <section id="svc-documents" data-testid="pfcomp-documents-section" className="bg-ak-mist/40 py-10 md:py-14">
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <div className="ak-kicker mb-5">{documents.kicker}</div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ak-ink md:text-4xl">
              {documents.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ak-ink/60">{documents.sub}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2" stagger={0.05}>
            {documents.items.map((d) => (
              <RevealItem key={d} className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 text-[13px] leading-snug text-ak-ink/65">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" strokeWidth={2.2} />
                {d}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* ECR document mockup, simplified card representation */}
        <Reveal delay={0.2} className="hidden lg:block">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-ak-ink/10 bg-white shadow-2xl">
            <div className="bg-ak-ink px-5 py-4">
              <div className="font-display text-xs font-bold text-ak-orange">EPFO · ECR FILING</div>
              <div className="mt-1 text-[10px] uppercase tracking-wide text-white/40">Electronic Challan cum Return</div>
            </div>
            <div className="space-y-3 p-5">
              {[
                ["UAN", "100100100xxxx"],
                ["Member Name", "—"],
                ["EPF Amount", "₹ —"],
              ].map((row) => (
                <div key={row[0]} className="flex items-center justify-between rounded-lg bg-ak-mist/50 px-3 py-2 text-[11px]">
                  <span className="font-semibold text-ak-ink/50">{row[0]}</span>
                  <span className="text-ak-ink/40">{row[1]}</span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-lg bg-ak-ink px-3 py-2.5 text-[11px]">
                <span className="font-semibold uppercase text-white/60">Total Contribution</span>
                <span className="font-bold text-ak-orange">₹ —</span>
              </div>
              <div className="flex justify-center pt-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-ak-orange/40 text-[8px] font-bold text-ak-orange">
                  AKSHARAA
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
