import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RegistrationsLicensing from "./pages/RegistrationsLicensing";
import PfEsiRegistration from "./pages/PfEsiRegistration";
import PfCompliance from "./pages/PfCompliance";
import PayrollProcessing from "./pages/PayrollProcessing";
import FlexiStaffing from "./pages/FlexiStaffing";
import PfEsiReturnsFiling from "./pages/PfEsiReturnsFiling";
import EmploymentAgreements from "./pages/EmploymentAgreements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registrations-licensing" element={<RegistrationsLicensing />} />
        <Route path="/registrations-licensing/pf-esi-registration" element={<PfEsiRegistration />} />
        <Route path="/labour-law-compliance/pf-compliance" element={<PfCompliance />} />
        <Route path="/payroll-hr-operations/payroll-processing" element={<PayrollProcessing />} />
        <Route path="/staffing-manpower/flexi-staffing" element={<FlexiStaffing />} />
        <Route path="/compliance-filings-taxation/pf-esi-returns-filing" element={<PfEsiReturnsFiling />} />
        <Route path="/legal-documentation/employment-agreements" element={<EmploymentAgreements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
