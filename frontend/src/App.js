import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RegistrationsLicensing from "./pages/RegistrationsLicensing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registrations-licensing" element={<RegistrationsLicensing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
