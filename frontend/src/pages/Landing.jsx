import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { GovernancePartner } from "../components/sections/GovernancePartner";
import { ComplianceLifecycle } from "../components/sections/ComplianceLifecycle";
import { GovernanceFramework } from "../components/sections/GovernanceFramework";
import { IntegratedWorkforce } from "../components/sections/IntegratedWorkforce";
import { RiskIntelligence } from "../components/sections/RiskIntelligence";
import { ComplianceArchitecture } from "../components/sections/ComplianceArchitecture";
import { ComplianceControl } from "../components/sections/ComplianceControl";
import { EngagementModel } from "../components/sections/EngagementModel";
import { InstitutionalMetrics } from "../components/sections/InstitutionalMetrics";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-ak-ink" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <GovernancePartner />
        <ComplianceLifecycle />
        <GovernanceFramework />
        <IntegratedWorkforce />
        <RiskIntelligence />
        <ComplianceArchitecture />
        <ComplianceControl />
        <EngagementModel />
        <InstitutionalMetrics />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
