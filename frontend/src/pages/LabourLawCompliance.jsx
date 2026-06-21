import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LabourLawHero } from "../components/categories/labour-law/LabourLawHero";
import { LabourLawWhy } from "../components/categories/labour-law/LabourLawWhy";
import { LabourLawSubNav } from "../components/categories/labour-law/LabourLawSubNav";
import { LabourLawFocus } from "../components/categories/labour-law/LabourLawFocus";
import { LabourLawHowWeWork } from "../components/categories/labour-law/LabourLawHowWeWork";
import { LabourLawFaqs } from "../components/categories/labour-law/LabourLawFaqs";
import { LabourLawCta } from "../components/categories/labour-law/LabourLawCta";

/**
 * Labour Law & HR Compliance — category landing page.
 * URL target: /labour-law-compliance
 *
 * Lean menu page (per the corrected category-page principle): lists and
 * links to all 18 services, doesn't explain any one in depth. Inherits
 * the PF Compliance service template's dark/statutory visual identity
 * as its category-level sibling. Uses the collapsed-by-default accordion
 * pattern (3 groups instead of Registrations' 2) for the 18-service list.
 */
export default function LabourLawCompliance() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="labourlaw-page">
      <Header />
      <main>
        <LabourLawHero />
        <LabourLawWhy />
        <LabourLawSubNav />
        <LabourLawFocus />
        <LabourLawHowWeWork />
        <LabourLawFaqs />
        <LabourLawCta />
      </main>
      <Footer />
    </div>
  );
}
