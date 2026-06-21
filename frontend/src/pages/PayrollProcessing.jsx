import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PayrollHero } from "../components/services/payroll-processing/PayrollHero";
import { PayrollOverview } from "../components/services/payroll-processing/PayrollOverview";
import { PayrollWho } from "../components/services/payroll-processing/PayrollWho";
import { PayrollObligations } from "../components/services/payroll-processing/PayrollObligations";
import { PayrollScope } from "../components/services/payroll-processing/PayrollScope";
import { PayrollProcess } from "../components/services/payroll-processing/PayrollProcess";
import { PayrollDocuments } from "../components/services/payroll-processing/PayrollDocuments";
import { PayrollFaqs } from "../components/services/payroll-processing/PayrollFaqs";
import { PayrollRelated } from "../components/services/payroll-processing/PayrollRelated";
import { PayrollCta } from "../components/services/payroll-processing/PayrollCta";

/**
 * Payroll Processing — service page. TEMPLATE for Payroll & HR Operations (9 services).
 * URL target: /payroll-hr-operations/payroll-processing
 * Distinct "live payslip dashboard" visual identity - Mac-window styled
 * card with animating payslip computation, horizontal day-based timeline.
 */
export default function PayrollProcessing() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="payroll-page">
      <Header />
      <main>
        <PayrollHero />
        <PayrollOverview />
        <PayrollWho />
        <PayrollObligations />
        <PayrollScope />
        <PayrollProcess />
        <PayrollDocuments />
        <PayrollFaqs />
        <PayrollRelated />
        <PayrollCta />
      </main>
      <Footer />
    </div>
  );
}
