import React from 'react';
import { Box,Grid,Container,Typography,Button } from "@mui/material";
import ContactForm from "./ContactForm";
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleMaps from "../GoogleMaps";
import { Fade } from "react-awesome-reveal";
const ContactUs = () => {
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 50%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"125px 155px 134px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                                <Fade direction="up">
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:0.29,color:"#33bc82",marginBottom:"26px"}}>
                                        Get in Touch
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>
                                        We are all in this together
                                    </Typography>
                                </Fade>
                            </Box>
                        </Box>    
                    </Container>    
                </Grid>    
            </Grid>
            <Grid container sx={{mb:"67px"}}>
                <Container fixed>
                    <Grid container item xs={12}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box sx={{padding:"39px 20px 39px 20px"}}>
                                <Box sx={{border:"solid 0.5px rgba(0, 0, 0, 0.2)",borderRadius:"12px",p:3}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Techeco Waste Management LLP
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Corporate Office
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        2A 2nd Floor Building No.11/12, Raghuvanshi Mill Compound,
                                        SB Road, Lower Parel (W), Mumbai-400013
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Factory
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Gut no. 155 B/2, Village: Dhakambe, Tal: Dindori, Dist: Nashik
                                        Maharashtra, India.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>  
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box sx={{padding:"39px 20px 39px 20px"}}>
                                <Box sx={{border:"solid 0.5px rgba(0, 0, 0, 0.2)",borderRadius:"12px",p:3}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Accounts
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Atul Sakhre : +91 9988776655  |   Info@techeco.co.in
                                        LLPI No: AAN-4466  | GST No. : 12345678909876
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Marketing
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Sidharth K : +91 9988776655  |   marketing@techeco.co.in
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Marketing &amp; Procurement
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:2.14,color:"#0e5156"}}>
                                        Sidharth K : +91 9988776655  |   marketing@techeco.co.in
                                    </Typography>
                                </Box>
                            </Box>    
                        </Grid>  
                    </Grid>    
                </Container>    
            </Grid>
            <Grid container sx={{mb:"88px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{pt:3,textAlign:"center"}}>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:0.94,color:"#0e5156",fontFamily:"Montserrat"}}>Schedule your pickup</Typography>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:600,lineHeight:2.25,color:"#0e5156",fontFamily:"Montserrat"}}>Call us on our toll free number</Typography>
                            <Button variant='contained' disableElevation startIcon={<PhoneIcon size="large"/>} size="large" sx={{fontFamily:"Montserrat",fontSize:{md:"36px"},fontWeight:"bold",lineHeight:0.72,padding:{md:"23px 31px 19px 35px"},backgroundColor:"#33bc82",borderRadius:"33px","&:hover":{backgroundColor:"#33bc82"},}}>1800-889-3121</Button>
                        </Box>
                    </Container>  
                </Grid>    
            </Grid>
            <GoogleMaps/>
            <ContactForm/>
        </>
    );
}

export default ContactUs;