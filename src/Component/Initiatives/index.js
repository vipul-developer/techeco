import React from 'react';
import { Box,Grid,Container,Typography,CardMedia,Card,CardActions,CardContent,Button } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import Slider from "react-slick";
import img1 from "../../Resources/Images/ini_img1.jpeg";
import img2 from "../../Resources/Images/ini_img2.jpg";
import img3 from "../../Resources/Images/ini_img3.jpg";

const Initiatives = () => {
    const setting = {
        dots:true,
        infinite: true,
        speed:500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 30px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                                <Fade direction="up">
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                        Our Initiatives
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>
                                        Make recycling a way of life for a billion people 
                                    </Typography>
                                </Fade>
                            </Box>
                        </Box>
                    </Container>    
                </Grid>        
            </Grid>
            <Grid container sx={{mb:"83px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{overflow:"hidden",pb:5}}>
                            <Slider {...setting}>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 1"
                                        height="474"
                                        image={img1}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 2"
                                        height="474"
                                        image={img2}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 3"
                                        height="474"
                                        image={img3}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                            </Slider>
                        </Box>    
                    </Container>
                </Grid>    
            </Grid>
            <Grid container sx={{mb:"112px"}}>
                <Container fixed>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px"}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>
                                                Mural Paiting in Nashik 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                A PRO can assist a producer or producers in achieving collection targets, setting up of collection centers/ points/ implementing take back, carrying awareness programmes etc. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}}>know More</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px"}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156"}}>
                                                Fire and Safety Training at Techeco Factory 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                Being familiar with basic fire protection systems including the basics of fire extinguishers and how to use them. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:5,pt:1}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}}>know More</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>    
                        </Grid> 
                    </Grid>    
                </Container>    
            </Grid>
            <ContactForm/>
        </>
    );
};

export default Initiatives;