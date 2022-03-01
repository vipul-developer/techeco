import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from '../Component/Navigation';
const Layout = (props) => {
    return (
        <>
           <Navigation/>
           {props.children}
        </>
    );
};

export default (withRouter(Layout));