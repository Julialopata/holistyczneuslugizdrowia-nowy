import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PricingPage from "./Pages/PricingPage.jsx";
import OtherServicesPage from "./Pages/OtherServicesPage.jsx";
import MeasuringDevicesPage from "./Pages/MeasuringDevicesPage.jsx";
import ForeverPage from "./Pages/ForeverPage.jsx";
import SativaLifePage from "./Pages/SativaLifePage.jsx";
import SanoplasmaPage from "./Pages/SanoplasmaPage.jsx";
import HealthAndBeautyWorkshopsPage from "./Pages/HealthAndBeautyWorkshopsPage.jsx";
import ChlorofilPage from "./Pages/ChlorofilPage";
import DezodorantPage from "./Pages/DezodorantPage";
import GalaretkaPage from "./Pages/GalaretkaPage";
import KonopiePage from "./Pages/KonopiePage";
import WodaPage from "./Pages/WodaPage";
import TianDePage from "./Pages/TianDePage.jsx";







const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/o-mnie" element={<AboutPage />} />
                    <Route path="/pozostale-uslugi" element={<OtherServicesPage />} />
                    <Route path="/urzadzenia-pomiarowe" element={<MeasuringDevicesPage />} />
                    <Route path="/sativa-life" element={<SativaLifePage />} />
                    <Route path="/forever" element={<ForeverPage />} />
                    <Route path="/cennik" element={<PricingPage />} />
                    <Route path="/sanoplasma" element={<SanoplasmaPage />} />
                    <Route path="/warsztaty-zdrowia-i-urody" element={<HealthAndBeautyWorkshopsPage />} />
                    <Route path="/chlorofil" element={<ChlorofilPage />} />
                    <Route path="/dezodorant" element={<DezodorantPage />} />
                    <Route path="/galaretka" element={<GalaretkaPage />} />
                    <Route path="/konopie" element={<KonopiePage />} />
                    <Route path="/woda" element={<WodaPage />} />
                    <Route path="/TianDe" element={<TianDePage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;