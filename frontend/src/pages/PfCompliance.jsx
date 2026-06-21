import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PfCompHero } from "../components/services/pf-compliance/PfCompHero";
import { PfCompOverview } from "../components/services/pf-compliance/PfCompOverview";
import { PfCompApplicability } from "../components/services/pf-compliance/PfCompApplicability";
import { PfCompObligations } from "../components/services/pf-compliance/PfCompObligations";
import { PfCompScope } from "../components/services/pf-compliance/PfCompScope";
import { PfCompProcess } from "../components/services/pf-compliance/PfCompProcess";
import { PfCompDocuments } from "../components/services/pf-compliance/PfCompDocuments";
import { PfCompFaqs } from "../components/services/pf-compliance/PfCompFaqs";
import { PfCompRelated } from "../components/services/pf-compliance/PfCompRelated";
import { PfCompCta } from "../components/services/pf-compliance/PfCompCta";

/**
 * PF Compliance — service page. TEMPLATE for Labour Law & HR Compliance (18 services).
 * URL target: /labour-law-compliance/pf-compliance
 * Distinct dark/statutory visual identity vs. Registrations' light/cream template -
 * grid+dot hero texture, penalty severity gauge, circular monthly-cycle motif.
 */
export default function PfCompliance() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="pfcomp-page">
      <Header />
      <main>
        <PfCompHero />
        <PfCompOverview />
        <PfCompApplicability />
        <PfCompObligations />
        <PfCompScope />
        <PfCompProcess />
        <PfCompDocuments />
        <PfCompFaqs />
        <PfCompRelated />
        <PfCompCta />
      </main>
      <Footer />
    </div>
  );
}
