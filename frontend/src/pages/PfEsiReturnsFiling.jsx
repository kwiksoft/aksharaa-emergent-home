import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ReturnsHero } from "../components/services/pf-esi-returns-filing/ReturnsHero";
import { ReturnsWhat } from "../components/services/pf-esi-returns-filing/ReturnsWhat";
import { ReturnsCalendar } from "../components/services/pf-esi-returns-filing/ReturnsCalendar";
import { ReturnsScope } from "../components/services/pf-esi-returns-filing/ReturnsScope";
import { ReturnsPenalties } from "../components/services/pf-esi-returns-filing/ReturnsPenalties";
import { ReturnsFaqs } from "../components/services/pf-esi-returns-filing/ReturnsFaqs";
import { ReturnsRelated } from "../components/services/pf-esi-returns-filing/ReturnsRelated";
import { ReturnsCta } from "../components/services/pf-esi-returns-filing/ReturnsCta";

/**
 * PF & ESI Returns Filing — service page. TEMPLATE for Compliance, Filings
 * & Taxation (2 services — smallest category).
 * URL target: /compliance-filings-taxation/pf-esi-returns-filing
 * Most spacious/calm template — generous whitespace, deadline-clock hero
 * motif, unique month-grid calendar visualization section.
 */
export default function PfEsiReturnsFiling() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="returns-page">
      <Header />
      <main>
        <ReturnsHero />
        <ReturnsWhat />
        <ReturnsCalendar />
        <ReturnsScope />
        <ReturnsPenalties />
        <ReturnsFaqs />
        <ReturnsRelated />
        <ReturnsCta />
      </main>
      <Footer />
    </div>
  );
}
