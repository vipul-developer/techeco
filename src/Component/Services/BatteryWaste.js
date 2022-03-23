import React from 'react';
import { Box,Grid,Container,Typography,CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import imageService from "../../Resources/Images/battery-waste.jpeg";
const BatteryWaste = () => {
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 66px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                    Battery Waste Services
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.7,color:"#0e5156"}}>
                                    Creating an EPR and PRO Framework for battery waste recycling. 
                                </Typography>
                            </Fade>
                            </Box>
                        </Box>
                    </Container>    
                </Grid>        
            </Grid>
            <Grid container sx={{mb:"61px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{backgroundColor:"#33bc82",borderRadius:"12px",padding:{md:"125px 175px 138px 175px",xs:3},width:"100%",textAlign:"center"}}>
                            <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"36px"},fontFamily:"Palatino",lineHeight:1.39,color:"#FFF",mb:"38px"}}>
                                When depleted batteries are tossed into the trash, they end up in landfills where they decay and leak. As batteries corrode, their chemicals soak into soil and contaminate groundwater and surface water 
                            </Typography>
                        </Box>    
                    </Container>
                </Grid>    
            </Grid>
            <Grid container sx={{mb:"368px"}}>
                <Container fixed>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
                            <Box sx={{width:"100%",backgroundColor:"#effaf5",borderRadius:"12px",border:"0.5px solid #effaf5",p:5}}>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        EPR and PRO Services 
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Creating an EPR and PRO Framework for battery waste recycling 
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Responsible Recycling 
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Accountability and transparency form the foundation of a solid business partnership. We provide deﬁned and tracked processes and complete documentation of Recycling. 
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Logistic Management  
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Reliable network of logistics partners to support transporting batteries from PAN India 
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    alt="Image 1"
                                    height="384"
                                    image={imageService}
                                    sx={{borderRadius:"12px"}}
                                />
                            </Box>
                            <Box sx={{border:"solid 0.5px #0e5156",borderRadius:"9px",width:"100%",p:2,mt:3}}>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"18px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156"}}>
                                    World wide 
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"48.1px"},fontFamily:"Montserrat",fontWeight:"bold",color:"#0e5156"}}>
                                    15 billion 
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"18px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156"}}>
                                    primary batteries are thrown away every year 
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>    
                </Container>
            </Grid>
            <ContactForm/>  
        </>
    );
};

export default BatteryWaste;