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
          <Route path={"/techeco/about_us"} exact component={AboutUs}/>
          <Route path={"/tecteco/contacts"} exact component={ContactUs}/>
          <Route path={"/tecteco/epr_for_e-waste"} exact component={EPR}/>
          <Route path={"/tecteco/initiatives"} exact component={Initiatives}/>
          <Route path={"/techeco/services/e_waste"} exact component={EWaste}/>
          <Route path={"/techeco/services/battery_waste"} exact component={BatteryWaste}/>
          <Route path={"/techeco/services/plastic_waste"} exact component={PlasticWaste}/>
          <Route path={"/techeco/services/automobile_waste"} exact component={AutomobileWaste}/>
          <Route path={"/techeco/services/glass_waste"} exact component={GlassWaste}/>
          <Route path={"/techeco/services/rubber_waste"} exact component={RubberWaste}/>
      </Switch>
    </Layout>
  );
};

export default App;
