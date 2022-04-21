import React,{ useLayoutEffect,lazy,Suspense } from 'react';
import { Routes,Route,useLocation  } from 'react-router-dom';
import { CircularProgress } from "@mui/material";
import Layout from "./Layout";
// import Home from "./Component/Home";
// import AboutUs from "./Component/AboutUs";
// import ContactUs from "./Component/ContactUs";
// import EWaste from "./Component/Services/EWaste";
// import BatteryWaste from './Component/Services/BatteryWaste';
// import AutomobileWaste from './Component/Services/AutomobileWaste';
// import GlassWaste from './Component/Services/GlassWaste';
// import PlasticWaste from './Component/Services/PlasticWaste';
// import RubberWaste from './Component/Services/RubberWaste';
// import EPR from "./Component/EPR";
// import Initiatives from "./Component/Initiatives";
const Home = lazy(() => import("./Component/Home"));
const AboutUs = lazy(() => import("./Component/AboutUs"));
const ContactUs = lazy(() => import("./Component/ContactUs"));
const EWaste = lazy(() => import("./Component/Services/EWaste"));
const BatteryWaste = lazy(() => import("./Component/Services/BatteryWaste"));
const AutomobileWaste = lazy(() => import("./Component/Services/AutomobileWaste"));
const GlassWaste = lazy(() => import("./Component/Services/GlassWaste"));
const PlasticWaste = lazy(() => import("./Component/Services/PlasticWaste"));
const RubberWaste = lazy(() => import("./Component/Services/RubberWaste"));
const EPR = lazy(() => import("./Component/EPR"));
const Initiatives = lazy(() => import("./Component/Initiatives"));
const App = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])
  return (
    <Layout>
      <Suspense fallback={<div><CircularProgress thickness={5}/></div>}>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about_us"} element={<AboutUs/>}/>
            <Route path={"/contacts"} element={<ContactUs/>}/>
            <Route path={"/epr_for_e-waste"} element={<EPR/>}/>
            <Route path={"/initiatives"} element={<Initiatives/>}/>
            <Route path={"/services/e_waste"} element={<EWaste/>}/>
            <Route path={"/services/battery_waste"} element={<BatteryWaste/>}/>
            <Route path={"/services/plastic_waste"} element={<PlasticWaste/>}/>
            <Route path={"/services/automobile_waste"} element={<AutomobileWaste/>}/>
            <Route path={"/services/glass_waste"} element={<GlassWaste/>}/>
            <Route path={"/services/rubber_waste"} element={<RubberWaste/>}/>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
