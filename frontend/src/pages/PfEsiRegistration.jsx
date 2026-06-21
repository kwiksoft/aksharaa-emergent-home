import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { RegSvcHero } from "../components/services/pf-esi-registration/RegSvcHero";
import { RegSvcOverview } from "../components/services/pf-esi-registration/RegSvcOverview";
import { RegSvcApplicability } from "../components/services/pf-esi-registration/RegSvcApplicability";
import { RegSvcDocuments } from "../components/services/pf-esi-registration/RegSvcDocuments";
import { RegSvcProcess } from "../components/services/pf-esi-registration/RegSvcProcess";
import { RegSvcPenalties } from "../components/services/pf-esi-registration/RegSvcPenalties";
import { RegSvcFaqs } from "../components/services/pf-esi-registration/RegSvcFaqs";
import { RegSvcRelated } from "../components/services/pf-esi-registration/RegSvcRelated";
import { RegSvcCta } from "../components/services/pf-esi-registration/RegSvcCta";

/**
 * PF & ESI Registration — service page.
 * URL target: /registrations-licensing/pf-esi-registration
 *
 * THIS IS THE TEMPLATE for all 26 services under Registrations & Licensing.
 * Section order, motion vocabulary, and component patterns here should be
 * inherited (with content swapped, not structure) by every other service
 * page in this category — see hero (tracker card), overview (asymmetric
 * threshold pair), applicability (side-by-side comparison, NOT tabs —
 * deliberately distinct from the category page's tabbed ledger), documents
 * (staggered offset columns), process (vertical timeline, dark), penalties
 * (photo-integrated asymmetric split), faqs, related, cta.
 *
 * Content faithfully ported from the live, client-approved
 * pf-esi-registration.html — structure preserved, presentation rebuilt.
 */
export default function PfEsiRegistration() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="reg-svc-page">
      <Header />
      <main>
        <RegSvcHero />
        <RegSvcOverview />
        <RegSvcApplicability />
        <RegSvcDocuments />
        <RegSvcProcess />
        <RegSvcPenalties />
        <RegSvcFaqs />
        <RegSvcRelated />
        <RegSvcCta />
      </main>
      <Footer />
    </div>
  );
}
