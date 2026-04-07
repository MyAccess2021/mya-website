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
import TestingDebugging from './services/Testingdebugging';
import ESDCompliance from './services/Esdcompliance';
import MechanicalCAD from './services/Mechanicalcad';
import EMSAssembly from './services/EmsAssembly';
import Moldpipeline from './services/Moldpipeline';
import CloudService from './services/Cloudservice';
import Cicd from './services/cicd';
import PatentPage from './services/patentfilling';
import MouseFollower from './components/MouseFollower';




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
            <Route path="/services/open-cpu-openwrt" element={<OpenCPUOpenWRT />} />
            <Route path="/services/pcb-fabrication" element={<PCBFabrication />} />
            <Route path="/services/component-procurement" element={<ComponentProcurement />} />
            <Route path="/services/soldering-rework" element={<SolderingRework />} />
            <Route path="/services/pcb-design" element={<PCBDesign />} />
            <Route path="/services/embedded-development" element={<EmbeddedDevelopment />} />
            <Route path="/services/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/services/injection-molding" element={<PlasticInjectionMolding />} />
            <Route path="/services/fullstack" element={<FullstackDevelopment />} />
            <Route path="/services/testing-debugging" element={<TestingDebugging />} />
            <Route path="/services/esd-compliance" element={<ESDCompliance />} />
            <Route path="/services/mechanical-cad" element={<MechanicalCAD />} />
            <Route path="/services/ems-assembly" element={<EMSAssembly />} />
            <Route path="/services/mold-pipeline" element={<Moldpipeline />} />
            <Route path="/services/cloud-service" element={<CloudService />} />
            <Route path="/services/cicd" element={<Cicd />} />
            <Route path="/services/patent-filing" element={<PatentPage />} />
          </Routes>
        </div>
      </Router>
       <MouseFollower />
    </LanguageProvider> 
  );
}

export default App;