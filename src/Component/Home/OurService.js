import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,Card,ButtonBase,CardContent,CardHeader } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EngineeringIcon from '@mui/icons-material/Engineering';
const OurService = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{marginBottom:"192px"}}>
                            <Box sx={{textAlign:"center"}}>
                                <Typography variant="body" component="p" gutterBottom sx={{fontSize:"20px",lineHeight:0.7,fontFamily:"Montserrat",color:"#000",pb:2}}>Our services</Typography>
                                <Typography variant="body" component="p" gutterBottom sx={{fontSize:"48px",fontWeight:600,lineHeight:1.17,color:"#33bc82",fontFamily:"Montserrat",pb:2}}>Your organisation can <br/>make a difference</Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Container fixed>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<FolderIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="E-Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<AutorenewIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Battery Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<PhoneIphoneIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Plastic Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<EngineeringIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Automobile Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<PhoneIphoneIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Glass Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Card sx={{backgroundColor:"#effaf5",p:2,boxShadow:0}}>
                                <CardHeader
                                    avatar={<EngineeringIcon sx={{fontSize:"60px",backgroundColor:"#33bc82",color:"#FFF",p:1,borderRadius:"50px 0px 50px 50px",m:1}}/>}
                                    title="Rubber Waste"
                                    subheader="On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site to our R2 certified recycling plant to ensure a complete end to life."
                                    sx={{
                                        '& .MuiCardHeader-avatar':{backgroundColor:"#FFF",width:"75px",height:"75px",position:"relative",top:"-23px"},
                                        '& .MuiCardHeader-title':{fontSize:"24px",fontWeight:600,fontFamily:"Montserrat",ml:5,mb:2},
                                        '& .MuiCardHeader-subheader':{fontSize:"14px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.57,color:"#0e5156",ml:5}

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