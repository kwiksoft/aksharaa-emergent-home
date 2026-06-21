import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RegistrationsLicensing from "./pages/RegistrationsLicensing";
import PfEsiRegistration from "./pages/PfEsiRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registrations-licensing" element={<RegistrationsLicensing />} />
        <Route path="/registrations-licensing/pf-esi-registration" element={<PfEsiRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
