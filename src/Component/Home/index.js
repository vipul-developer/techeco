import React from 'react';
import { withRouter } from 'react-router-dom';
import HeroImage from "./HeroImage";
import MakeWaste from './MakeWaste';
import OurService from "./OurService";
import SimpleProcess from "./SimpleProcess";
import Collaborative from './Collaborative';
import OurClient from "./OurClient";
import ContactForm from "../ContactUs/ContactForm";
const Home = () => {
    return (
        <>
            <HeroImage/>
            <MakeWaste/>
            <OurService/>
            <SimpleProcess/>
            <OurClient/>
            <Collaborative/>
            <ContactForm/>
        </>
    );
};

export default (withRouter(Home));