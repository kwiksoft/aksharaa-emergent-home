import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PayrollCatHero } from "../components/categories/payroll-hr-operations/PayrollCatHero";
import { PayrollCatServices } from "../components/categories/payroll-hr-operations/PayrollCatServices";
import { PayrollCatFaqs } from "../components/categories/payroll-hr-operations/PayrollCatFaqs";
import { PayrollCatCta } from "../components/categories/payroll-hr-operations/PayrollCatCta";

/**
 * Payroll & HR Operations — category landing page.
 * URL target: /payroll-hr-operations
 *
 * Lean menu page for 9 services. Small enough that a direct list
 * (always visible, no accordion) is the right density treatment -
 * unlike the 18-26 service categories which need the collapsed
 * accordion. Inherits Payroll Processing's identity at a lighter weight.
 */
export default function PayrollHrOperations() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="payrollcat-page">
      <Header />
      <main>
        <PayrollCatHero />
        <PayrollCatServices />
        <PayrollCatFaqs />
        <PayrollCatCta />
      </main>
      <Footer />
    </div>
  );
}
