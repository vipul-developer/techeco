import React from 'react';
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

export default Layout;