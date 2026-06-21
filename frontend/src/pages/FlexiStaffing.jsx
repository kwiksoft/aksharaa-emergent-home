import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FlexiHero } from "../components/services/flexi-staffing/FlexiHero";
import { FlexiOverview } from "../components/services/flexi-staffing/FlexiOverview";
import { FlexiWho } from "../components/services/flexi-staffing/FlexiWho";
import { FlexiDifference } from "../components/services/flexi-staffing/FlexiDifference";
import { FlexiScope } from "../components/services/flexi-staffing/FlexiScope";
import { FlexiProcess } from "../components/services/flexi-staffing/FlexiProcess";
import { FlexiCompliance } from "../components/services/flexi-staffing/FlexiCompliance";
import { FlexiIndustries } from "../components/services/flexi-staffing/FlexiIndustries";
import { FlexiFaqs } from "../components/services/flexi-staffing/FlexiFaqs";
import { FlexiRelated } from "../components/services/flexi-staffing/FlexiRelated";
import { FlexiCta } from "../components/services/flexi-staffing/FlexiCta";

/**
 * Flexi Staffing — service page. TEMPLATE for Staffing & Manpower (10 services).
 * URL target: /staffing-manpower/flexi-staffing
 * Warmest, most photography-led template — full-bleed people photo in hero,
 * orange-filled final CTA (distinct from other templates' dark CTA band).
 */
export default function FlexiStaffing() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="flexi-page">
      <Header />
      <main>
        <FlexiHero />
        <FlexiOverview />
        <FlexiWho />
        <FlexiDifference />
        <FlexiScope />
        <FlexiProcess />
        <FlexiCompliance />
        <FlexiIndustries />
        <FlexiFaqs />
        <FlexiRelated />
        <FlexiCta />
      </main>
      <Footer />
    </div>
  );
}
