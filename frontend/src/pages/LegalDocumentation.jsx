import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LegalDocHero } from "../components/categories/legal-documentation/LegalDocHero";
import { LegalDocSubNav } from "../components/categories/legal-documentation/LegalDocSubNav";
import { LegalDocFocus } from "../components/categories/legal-documentation/LegalDocFocus";
import { LegalDocHowWeWork } from "../components/categories/legal-documentation/LegalDocHowWeWork";
import { LegalDocFaqs } from "../components/categories/legal-documentation/LegalDocFaqs";
import { LegalDocCta } from "../components/categories/legal-documentation/LegalDocCta";

/**
 * Legal & Documentation — category landing page.
 * URL target: /legal-documentation
 *
 * Lean menu page for 18 services. Inherits Employment Agreements'
 * editorial/parchment visual identity (#FAF6EE background, document
 * preview motif) as its category-level sibling. Uses the collapsed
 * accordion (4 groups) for the 18-service list.
 */
export default function LegalDocumentation() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="legaldoc-page">
      <Header />
      <main>
        <LegalDocHero />
        <LegalDocSubNav />
        <LegalDocFocus />
        <LegalDocHowWeWork />
        <LegalDocFaqs />
        <LegalDocCta />
      </main>
      <Footer />
    </div>
  );
}
