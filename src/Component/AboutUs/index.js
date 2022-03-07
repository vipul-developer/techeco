import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import { Box,Grid,Container,Typography,CardMedia } from "@mui/material";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import ContactForm from '../ContactUs/ContactForm';
import aboutHero from "../../Resources/Images/about_hero.jpg";
import aboutMap from "../../Resources/Images/about_map.jpg";
import ParikshitDeshmukh from "../../Resources/Images/pd.jpg";
import BhushanKapase from "../../Resources/Images/bk.jpg";
import AkshayJain from "../../Resources/Images/aj.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import aboutC1 from "../../Resources/Images/about_c1.jpg";
import aboutC2 from "../../Resources/Images/about_c2.jpg";
import aboutC3 from "../../Resources/Images/about_c3.jpg";
const AboutUs = () => {
    const setting = {
        dots:true,
        infinite: true,
        speed:500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  infinite: true,
                  dots: true,
                  autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  autoplay: true,
                  dots: true,
                } 
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    dots: true,
                }
            }
        ]
    }
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 35%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 258px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"50px"}}>
                                    Be a hero.<br/>Save mother nature
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.5,color:"#0e5156",mb:5,mt:5}}>
                                    Techeco was founded in 2018 with a strong focus on bringing waste management infrastructure, recycling and upcycling services across India;Techeco envisions a sustainable future that is inclusive,responsible and climate-conscious.
                                </Typography>
                            </Fade> 
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",position:"relative",backgroundImage:`url(${aboutHero})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:481,mb:5}}>
                                <div style={{backgroundImage:"linear-gradient(to bottom, rgba(14, 81, 86, 0) 59%, #0e5156 100%)",position:"absolute",width:"100%",height:"100%",top:0,left:0,borderRadius:"12px"}}></div>
                            </Box>
                        </Box>    
                    </Container>
                </Grid> 
            </Grid>
            <Grid container>
                <Container fixed>
                    <Grid container item xs={12} sx={{marginBottom:"242px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box sx={{position:"relative",top:"25%"}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#0e5156",mb:4}}>
                                    The binding element<br/>Our presence
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.5,color:"#0e5156",mb:5,mt:5}}>
                                    With our growing interventions, collection centers have been established across the country.
                                </Typography>     
                            </Box>   
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <img src={aboutMap} alt="About Map" className="img-fluid"/>
                        </Grid>   
                    </Grid> 
                </Container>    
            </Grid>
            <Grid container>
                <Container fixed>
                    <Grid container item xs={12}>
                        <Box sx={{display:"inline-block",width:"100%",textAlign:"center",mb:"55px"}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:0.94,color:"#0e5156",mb:4}}>
                                    Our Leadership
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"20px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.5,color:"#0e5156"}}>
                                    Techeco Waste Management LLP provides comprehensive<br/>complete and responsible recycling service.
                                </Typography>
                            </Fade>
                        </Box>  
                    </Grid>
                    <Grid container item xs={12} spacing={3} sx={{p:3,mb:"209px"}}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                            <Box className="member">
                                <Box className="member-img">
                                    <CardMedia
                                        component="img"
                                        alt="Parikshit Deshmukh"
                                        height="343"
                                        image={ParikshitDeshmukh}
                                        sx={{borderRadius:"14.9px"}}
                                    />
                                    <Box className="social">
                                        <Link to={"/parikshit/twitter"}><TwitterIcon /></Link>
                                        <Link to={"/parikshit/facebook"}><FacebookIcon /></Link>
                                        <Link to={"/parikshit/instagram"}><InstagramIcon /></Link>
                                        <Link to={"/parikshit/linkedin"}><LinkedInIcon /></Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ml:1,mt:3,mb:5}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156",mb:1}}>
                                    Parikshit Deshmukh
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"normal",fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>Founder</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                            <Box className="member">
                                <Box className="member-img">
                                    <CardMedia
                                        component="img"
                                        alt="Bhushan Kapase"
                                        height="343"
                                        image={BhushanKapase}
                                        sx={{borderRadius:"14.9px"}}
                                    />
                                    <Box className="social">
                                        <Link to={"/bhushan/twitter"}><TwitterIcon /></Link>
                                        <Link to={"/bhushan/facebook"}><FacebookIcon /></Link>
                                        <Link to={"/bhushan/instagram"}><InstagramIcon /></Link>
                                        <Link to={"/bhushan/linkedin"}><LinkedInIcon /></Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ml:1,mt:3,mb:5}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156",mb:1}}>
                                    Bhushan Kapase
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"normal",fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>Founder</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                            <Box className="member">
                                <Box className="member-img">
                                    <CardMedia
                                        component="img"
                                        alt="Akshay Jain"
                                        height="343"
                                        image={AkshayJain}
                                        sx={{borderRadius:"14.9px"}}
                                    /> 
                                    <Box className="social">
                                        <Link to={"/akshay/twitter"}><TwitterIcon /></Link>
                                        <Link to={"/akshay/facebook"}><FacebookIcon /></Link>
                                        <Link to={"/akshay/instagram"}><InstagramIcon /></Link>
                                        <Link to={"/akshay/linkedin"}><LinkedInIcon /></Link>
                                    </Box>
                                </Box>
                            </Box>  
                            <Box sx={{ml:1,mt:3,mb:5}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156",mb:1}}>
                                    Akshay Jain
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:"normal",fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>Founder</Typography>
                            </Box> 
                        </Grid>
                    </Grid>
                </Container>    
            </Grid>
            <Grid container sx={{mb:"152px"}}>
                <Container fixed>
                    <Grid container item xs={12}>
                        <Box sx={{display:"inline-block",width:"100%",textAlign:"center",mb:"55px"}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:0.94,color:"#0e5156",mb:4}}>
                                    Glimpse of Techeco
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156"}}>
                                    we’ve made it possible with your support and love
                                </Typography>
                            </Fade>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} sx={{overflow:"hidden",pb:5}}>
                        <Slider {...setting}>
                            <div style={{borderRadius:"15px"}}>
                                <CardMedia
                                    component="img"
                                    alt="Slider 1"
                                    height="563"
                                    image={aboutC1}
                                    sx={{borderRadius:"15px"}}
                                />
                            </div>
                            <div style={{borderRadius:"15px"}}>
                                <CardMedia
                                    component="img"
                                    alt="Slider 2"
                                    height="563"
                                    image={aboutC2}
                                    sx={{borderRadius:"15px"}}
                                />    
                            </div>
                            <div style={{borderRadius:"15px"}}>
                                <CardMedia
                                    component="img"
                                    alt="Slider 3"
                                    height="563"
                                    image={aboutC3}
                                    sx={{borderRadius:"15px"}}
                                />    
                            </div>
                        </Slider>
                    </Grid>   
                </Container>    
            </Grid>
            <ContactForm/>
        </>
    );
};

export default (withRouter(AboutUs));