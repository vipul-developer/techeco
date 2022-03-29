import React,{ useLayoutEffect } from 'react';
import { Switch,Route,useLocation  } from 'react-router-dom';
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
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/about_us"} exact component={AboutUs}/>
          <Route path={"/contacts"} exact component={ContactUs}/>
          <Route path={"/epr_for_e-waste"} exact component={EPR}/>
          <Route path={"/initiatives"} exact component={Initiatives}/>
          <Route path={"/services/e_waste"} exact component={EWaste}/>
          <Route path={"/services/battery_waste"} exact component={BatteryWaste}/>
          <Route path={"/services/plastic_waste"} exact component={PlasticWaste}/>
          <Route path={"/services/automobile_waste"} exact component={AutomobileWaste}/>
          <Route path={"/services/glass_waste"} exact component={GlassWaste}/>
          <Route path={"/services/rubber_waste"} exact component={RubberWaste}/>
      </Switch>
    </Layout>
  );
};

export default App;
