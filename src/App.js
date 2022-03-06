import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
const App = () => {
  return (
    <Layout>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/techeco/about_us"} exact component={AboutUs}/>
          <Route path={"/tecteco/contacts"} exact component={ContactUs}/>
      </Switch>
    </Layout>
  );
};

export default App;
