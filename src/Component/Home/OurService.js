import React from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,Container,Grid,Card,CardHeader } from "@mui/material";
import eWaste from "../../Resources/Images/ewaste.svg";
import batteryWaste from "../../Resources/Images/battery-waste.svg";
import plasticWaste from "../../Resources/Images/plastic-waste.svg";
import autoWaste from "../../Resources/Images/automotive-waste.svg";
import glassWaste from "../../Resources/Images/glass-waste.svg";
import rubberWaste from "../../Resources/Images/rubber-waste.svg";
import { Fade } from "react-awesome-reveal";
const OurService = () => {
    return (
        <>
            <Grid container>
                <Fade direction="up" delay={400} triggerOnce style={{textAlign:"center",width:"100%"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box sx={{marginBottom:"33px"}}>
                                <Box sx={{textAlign:"center"}}>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"20px"},lineHeight:0.7,fontFamily:"Montserrat",color:"#000",pb:2}}>Our services</Typography>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:1.17,color:"#33bc82",fontFamily:"Montserrat",pb:2}}>Together we can make<br/> a difference</Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Fade>
                <Container fixed>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/e_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={eWaste}/>}
                                        title="E-Waste"
                                        subheader="We use a wide range of data erasing, sanitation and destruction services that meet the latest protection standards to eliminate the potential security risks"
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-35px",xs:"-65px"},},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/battery_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,pb:"58px",borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={batteryWaste}/>}
                                        title="Battery Waste"
                                        subheader="Creating an EPR and PRO Framework for battery waste recycling"
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-12px",xs:"-32px"}},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/plastic_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={plasticWaste}/>}
                                        title="Plastic Waste"
                                        subheader="Catalyse innovation in post-consumer plastic waste management and strengthen awareness on plastic waste management."
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-48px"}},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/automobile_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,pb:"39px",borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={autoWaste}/>}
                                        title="Automobile Waste"
                                        subheader="End of vehicles are collected from owner and aggregators and taken to the recycling plant."
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-12px",xs:"-48px"}},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/glass_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={glassWaste}/>}
                                        title="Glass Waste"
                                        subheader="Your dedicated collection and recycling service for waste glass is simple to use, convenient and environmentally friendly."
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-53px"}},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Link to={"/services/rubber_waste"}>
                                <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,borderRadius:"12px"}}>
                                    <CardHeader
                                        avatar={<img alt="e-waste" src={rubberWaste}/>}
                                        title="Rubber Waste"
                                        subheader="We assure that your rubber waste is handled with full compliance and using the latest environmental regulations."
                                        sx={{
                                            '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-70px"}},
                                            '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                            '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                        }}
                                    />
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Container> 
            </Grid>
        </>
    );
};

export default OurService;