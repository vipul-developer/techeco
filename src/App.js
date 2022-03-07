import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Services from "./Component/Services";
import EPR from "./Component/EPR";
import Initiatives from "./Component/Initiatives";
const App = () => {
  return (
    <Layout>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/techeco/about_us"} exact component={AboutUs}/>
          <Route path={"/tecteco/contacts"} exact component={ContactUs}/>
          <Route path={"/tecteco/services"} exact component={Services}/>
          <Route path={"/tecteco/epr_for_e-waste"} exact component={EPR}/>
          <Route path={"/tecteco/initiatives"} exact component={Initiatives}/>
      </Switch>
    </Layout>
  );
};

export default App;
