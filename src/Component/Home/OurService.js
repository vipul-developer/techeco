import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,Card,CardHeader } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
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
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:1.17,color:"#33bc82",fontFamily:"Montserrat",pb:2}}>Your organisation can <br/>make a difference</Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Fade>
                <Container fixed>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="E-Waste"
                                    subheader="We use a wide range of data erasing, sanitation and destruction services that meet the latest protection standards to eliminate the potential security risks"
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-35px",xs:"-115px"},},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,pb:"58px"}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Battery Waste"
                                    subheader="Creating an EPR and PRO Framework for battery waste recycling"
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-12px",xs:"-51px"}},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Plastic Waste"
                                    subheader="Catalyse innovation in post-consumer plastic waste management and strengthen awareness on plastic waste management."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-95px"}},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0,pb:"39px"}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Automobile Waste"
                                    subheader="End of vehicles are collected from owner and aggregators and taken to the recycling plant."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-12px",xs:"-63px"}},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Glass Waste"
                                    subheader="ur dedicated collection and recycling service for waste glass is simple to use, convenient and environmentally friendly."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-85px"}},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Rubber Waste"
                                    subheader="we assure that your rubber waste is handled with full compliance and using the latest environmental regulations."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{width:"75px",height:"75px",position:"relative",top:{md:"-23px",xs:"-85px"}},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:{md:5},mb:{md:2}},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:{md:5}}

                                    }}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Container> 
            </Grid>
        </>
    );
};

export default (withRouter(OurService));