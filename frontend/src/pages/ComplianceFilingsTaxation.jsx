import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FilingsCatHero } from "../components/categories/compliance-filings-taxation/FilingsCatHero";
import { FilingsCatServices } from "../components/categories/compliance-filings-taxation/FilingsCatServices";
import { FilingsCatFaqs } from "../components/categories/compliance-filings-taxation/FilingsCatFaqs";
import { FilingsCatCta } from "../components/categories/compliance-filings-taxation/FilingsCatCta";

/**
 * Compliance, Filings & Taxation — category landing page.
 * URL target: /compliance-filings-taxation
 *
 * Smallest category (2 services) - most spacious of all 6 category
 * pages, matching its service template's calm/deadline-driven identity.
 * No list or accordion needed - just two generously-spaced cards.
 */
export default function ComplianceFilingsTaxation() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="filingscat-page">
      <Header />
      <main>
        <FilingsCatHero />
        <FilingsCatServices />
        <FilingsCatFaqs />
        <FilingsCatCta />
      </main>
      <Footer />
    </div>
  );
}
