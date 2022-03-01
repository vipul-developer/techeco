import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from '../Component/Navigation';
import Footer from "../Component/Footer";
const Layout = (props) => {
    return (
        <>
           <Navigation/>
            {props.children}
           <Footer/>
        </>
    );
};

export default (withRouter(Layout));