import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext'; 
import Sales from './components/Sales';
import Community from './components/Community';
import Careers from './components/Careers';
import FactorySolutions from './components/FactorySolutions';
import TermsAndConditions from './components/Termsconditions';
import OpenCPUOpenWRT from "./services/OpenCPUOpenWRT";
import PCBFabrication from "./services/PCBFabrication";
import ComponentProcurement from "./services/ComponentProcurement";
import SolderingRework from './services/SolderingRework';
import PCBDesign from './services/PCBDesign';
import EmbeddedDevelopment from './services/EmbeddedDevelopment';
import ThreeDPrinting from './services/Threedprinting';
import PlasticInjectionMolding from './services/Plasticinjectionmolding';
import FullstackDevelopment from './services/Fullstackdevelopment';
import TestingDebugging from './services/Threedprinting';
import ESDCompliance from './services/Plasticinjectionmolding';
import MechanicalCAD from './services/Mechanicalcad';




function App() {
  return (
    <LanguageProvider>  {/* WRAP HERE */}
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/factory-solutions" element={<FactorySolutions />} />
            <Route path="/legal" element={<TermsAndConditions />} />
            <Route path="/open-cpu-openwrt" element={<OpenCPUOpenWRT />} />
            <Route path="/pcb-fabrication" element={<PCBFabrication />} />
            <Route path="/component-procurement" element={<ComponentProcurement />} />
            <Route path="/soldering-rework" element={<SolderingRework />} />
            <Route path="/pcb-design" element={<PCBDesign />} />
            <Route path="/embedded-development" element={<EmbeddedDevelopment />} />
            <Route path="/services/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/services/injection-molding" element={<PlasticInjectionMolding />} />
            <Route path="/services/fullstack" element={<FullstackDevelopment />} />
            <Route path="/services/testing-debugging" element={<TestingDebugging />} />
            <Route path="/services/esd-compliance" element={<ESDCompliance />} />
            <Route path="/services/mechanical-cad" element={<MechanicalCAD />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider> 
  );
}

export default App;