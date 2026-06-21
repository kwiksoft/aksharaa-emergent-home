import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AgreementsHero } from "../components/services/employment-agreements/AgreementsHero";
import { AgreementsTypes } from "../components/services/employment-agreements/AgreementsTypes";
import { AgreementsClauses } from "../components/services/employment-agreements/AgreementsClauses";
import { AgreementsScope } from "../components/services/employment-agreements/AgreementsScope";
import { AgreementsProcess } from "../components/services/employment-agreements/AgreementsProcess";
import { AgreementsFaqs } from "../components/services/employment-agreements/AgreementsFaqs";
import { AgreementsRelated } from "../components/services/employment-agreements/AgreementsRelated";
import { AgreementsCta } from "../components/services/employment-agreements/AgreementsCta";

/**
 * Employment Agreements — service page. TEMPLATE for Legal & Documentation (18 services).
 * URL target: /legal-documentation/employment-agreements
 * Editorial/typographic identity - warm parchment background (#FAF6EE),
 * document-preview hero card with skeleton clause lines, dark legal
 * table-of-contents section for key clauses.
 */
export default function EmploymentAgreements() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="agreements-page">
      <Header />
      <main>
        <AgreementsHero />
        <AgreementsTypes />
        <AgreementsClauses />
        <AgreementsScope />
        <AgreementsProcess />
        <AgreementsFaqs />
        <AgreementsRelated />
        <AgreementsCta />
      </main>
      <Footer />
    </div>
  );
}
