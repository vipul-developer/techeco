import React from 'react';
import { Box,Container,Grid,Typography } from "@mui/material";
import Slider from "react-slick";
import vs from "../../Resources/Images/vs.png";
import am from "../../Resources/Images/am.png";
import mp from "../../Resources/Images/mp.png";
import ri from "../../Resources/Images/ri.png";
import sl from "../../Resources/Images/sl.png";
const Collaborative = () => {
    const setting = {
        dots:true,
        infinite: true,
        speed:500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                  autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  dots: true,
                } 
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                }
            }
        ]
    }
    return (
        <>
            <Grid container sx={{mb:5}}>
                <Grid item xs={12} sx={{overflow:"hidden",pb:5}}>
                    <Container fixed>
                        <Box sx={{textAlign:"center",margin:"35px 0px"}}>
                            <Typography variant='body1' component="div" gutterBottom sx={{fontSize:{md:"30px"},fontFamily:"Montserrat",lineHeight:1.25,fontWeight:600,color:"#33bc82"}}>Change is collaborative. hear from our collective</Typography>
                            <Typography variant='body1' component="div" gutterBottom sx={{fontSize:{md:"24px"},fontFamily:"Montserrat",lineHeight:1.25,fontWeight:500,color:"#0e5156"}}>join pioneers who are leading the movement</Typography>
                        </Box>
                        <Slider {...setting}>
                            <Box sx={{p:{md:3,xs:1},}}>
                                <Box sx={{boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"12px"}}>
                                    <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:0,borderRadius:"6px 6px 0 0"}}/>
                                    <Box sx={{mt:1,mb:1,padding:{md:"22px 29.5px 17.3px 53.9px",xs:"20px"}}}>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>
                                            We were provided excellent customer service for Disposal of E-Waste by Techeco Waste Management LLP.  All responses were prompt and professional. The E-waste Collection service from Customer End and Disposal at their Plant was properly monitored and informed which gives peace of mind to Customer.
                                        </Typography>
                                        <Box sx={{display:"flex",pt:{lg:3}}}>
                                            <img alt="img" src={vs} height="70px"/>
                                            <Box sx={{mt:1,ml:2}}>
                                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Vikas Shrivastav<br/>Sahney Kirkwood Pvt Ltd</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{p:{md:3,xs:"12.5px"},}}>
                                <Box sx={{boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"12px"}}>
                                    <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:0,borderRadius:"6px 6px 0 0"}}/>
                                    <Box sx={{mt:1,mb:1,padding:{md:"22px 29.5px 17.3px 53.9px",xs:"20px"}}}>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>
                                            Services provided are good and very satisfactory. We would really like to continue working with you in the coming future also. I think you did a great job when you ran the all-hands meeting. It showed that you are capable of getting people to work together and communicate effectively. I admire your communication skills.
                                        </Typography>
                                        <Box sx={{display:"flex",pt:{md:"30px",lg:0},}}>
                                            <img alt="img" src={am} height="70px"/>
                                            <Box sx={{mt:2,ml:2}}>
                                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Anirudha Mhaske<br/></Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{p:{md:3,xs:1},}}>
                                <Box sx={{boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"12px"}}>
                                    <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:0,borderRadius:"6px 6px 0 0"}}/>
                                    <Box sx={{mt:1,mb:1,padding:{md:"22px 29.5px 17.3px 53.9px",xs:"20px"}}}>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>
                                            Techeco E-Waste Management is a fantastic organisation. Great customer support from start to end of the process. They have all the authorised certification regarding service. Great valuation for your goods, timely pickup and on-time payment are their key points. The team are really informed and go the extra mile at every stage.
                                        </Typography>
                                        <Box sx={{display:"flex"}}>
                                            <img alt="img" src={mp} height="70px"/>
                                            <Box sx={{mt:1,ml:2}}>
                                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Mantu Patel<br/>Desai Agrifoods Pvt. Ltd.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{p:{md:3,xs:1},}}>
                                <Box sx={{boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"12px"}}>
                                    <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:0,borderRadius:"6px 6px 0 0"}}/>
                                    <Box sx={{mt:1,mb:1,padding:{md:"22px 29.5px 17.3px 53.9px",xs:"20px"}}}>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>
                                            It's a great experience working with your team with prompt response to requirements. Something I really appreciate about you is your aptitude for problem-solving.
                                        </Typography>
                                        <Box sx={{display:"flex",pt:{lg:"67px",md:15,xs:10}}}>
                                            <img alt="img" src={ri} height="70px"/>
                                            <Box sx={{mt:2,ml:2}}>
                                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Rahul Iche<br/>(Hindustan Unilever)</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{p:{md:3,xs:1},}}>
                                <Box sx={{boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"12px"}}>
                                    <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:0,borderRadius:"6px 6px 0 0"}}/>
                                    <Box sx={{mt:1,mb:1,padding:{md:"22px 29.5px 17.3px 53.9px",xs:"20px"}}}>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>
                                            The service is smooth and straightforward. My advisor was very helpful. I would recommend dealing directly.
                                        </Typography>
                                        <Box sx={{display:"flex",pt:{lg:16,md:20,xs:15}}}>
                                            <img alt="img" src={sl} height="70px"/>
                                            <Box sx={{mt:2,ml:2}}>
                                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Suraj Londhe<br/></Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Slider>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default Collaborative;