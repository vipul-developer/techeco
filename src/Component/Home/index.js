import React from 'react';
import { withRouter } from 'react-router-dom';
import HeroImage from "./HeroImage";
import MakeWaste from './MakeWaste';
import OurService from "./OurService";
import SimpleProcess from "./SimpleProcess";
const Home = () => {
    return (
        <>
            <HeroImage/>
            <MakeWaste/>
            <OurService/>
            <SimpleProcess/>
        </>
    );
};

export default (withRouter(Home));