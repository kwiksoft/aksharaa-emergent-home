import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StaffingCatHero } from "../components/categories/staffing-manpower/StaffingCatHero";
import { StaffingCatServices } from "../components/categories/staffing-manpower/StaffingCatServices";
import { StaffingCatFaqs } from "../components/categories/staffing-manpower/StaffingCatFaqs";
import { StaffingCatCta } from "../components/categories/staffing-manpower/StaffingCatCta";

/**
 * Staffing & Manpower — category landing page.
 * URL target: /staffing-manpower
 *
 * Lean menu page for 10 services, direct list (no accordion needed).
 * Inherits Flexi Staffing's warm, photography-led visual identity and
 * orange-filled CTA pattern.
 */
export default function StaffingManpower() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="staffingcat-page">
      <Header />
      <main>
        <StaffingCatHero />
        <StaffingCatServices />
        <StaffingCatFaqs />
        <StaffingCatCta />
      </main>
      <Footer />
    </div>
  );
}
