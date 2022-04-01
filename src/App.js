import React,{ useLayoutEffect } from 'react';
import { Routes,Route,useLocation  } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import EWaste from "./Component/Services/EWaste";
import BatteryWaste from './Component/Services/BatteryWaste';
import AutomobileWaste from './Component/Services/AutomobileWaste';
import GlassWaste from './Component/Services/GlassWaste';
import PlasticWaste from './Component/Services/PlasticWaste';
import RubberWaste from './Component/Services/RubberWaste';
import EPR from "./Component/EPR";
import Initiatives from "./Component/Initiatives";
const App = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
