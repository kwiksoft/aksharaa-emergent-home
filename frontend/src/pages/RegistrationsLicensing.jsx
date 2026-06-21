import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { RegistrationsHero } from "../components/categories/registrations/RegistrationsHero";
import { RegistrationsWhy } from "../components/categories/registrations/RegistrationsWhy";
import { RegistrationsSubNav } from "../components/categories/registrations/RegistrationsSubNav";
import { RegistrationsFocus } from "../components/categories/registrations/RegistrationsFocus";
import { RegistrationsLifecycle } from "../components/categories/registrations/RegistrationsLifecycle";
import { RegistrationsHowWeWork } from "../components/categories/registrations/RegistrationsHowWeWork";
import { RegistrationsFaqs } from "../components/categories/registrations/RegistrationsFaqs";
import { RegistrationsCta } from "../components/categories/registrations/RegistrationsCta";

/**
 * Registrations & Licensing — category landing page.
 * URL target: /registrations-licensing
 *
 * Inherits the Emergent home page's design system in full (tokens, type,
 * motion, component library) while introducing a category-specific visual
 * concept: an "official registry / stamped certificate" motif throughout —
 * the dashed seal mark in the hero, the ledger-tab sub-domain table, and
 * the numbered registry rows — distinct from home's photographic,
 * dashboard-card treatment.
 *
 * The RegistrationsSubNav component (tabbed ledger sheet) is the reusable
 * pattern for the services-list problem across all 6 category pages — it
 * scales from 2 items (Filings) to 26 (this page) without redesign.
 */
export default function RegistrationsLicensing() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="registrations-page">
      <Header />
      <main>
        <RegistrationsHero />
        <RegistrationsWhy />
        <RegistrationsSubNav />
        <RegistrationsFocus />
        <RegistrationsLifecycle />
        <RegistrationsHowWeWork />
        <RegistrationsFaqs />
        <RegistrationsCta />
      </main>
      <Footer />
    </div>
  );
}
