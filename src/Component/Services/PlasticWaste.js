import React from 'react';
import { Box,Grid,Container,Typography,CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import imageService from "../../Resources/Images/service_img1.jpg";
const PlasticWaste = () => {
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 66px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                    Plastic Services
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.7,color:"#0e5156"}}>
                                    Setting up an industry-first PRO solution. 
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
                        <Box sx={{backgroundColor:"#33bc82",borderRadius:"12px",padding:{md:"125px 175px 138px 175px"},width:"100%",textAlign:"center"}}>
                            <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"36px"},fontFamily:"Palatino",lineHeight:1.39,color:"#FFF",mb:"38px"}}>
                                Recycling raw materials from end-of-life<br/> electronics is the most effective solution to the<br/> growing e-waste problem. 
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
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Plastic Waste
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        The Centre said that more than 34 lakh tons of plastic waste was generated in 2019-20 and 30.59 lakh tons in 2018-19. New Delhi: India's plastic waste generation has more than doubled in the last five years with an average annual increase of 21.8 per cent. 
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Plastic Waste 
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        According to data shared by the minister, in the last five years, the quantity of plastic waste in the country has more than doubled, as the country produced 15.89 lakh tons of plastic waste in 2015-16.
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Stages of EPR Fulfilment  
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Step 1: Set your targets.<br/>
                                        Step 2: Choose your ULB and Disposal partners. Prepare an action plan as per PWM format.<br/>
                                        Step 3: Collection, Transportation,Recycling/ Coprocessing.<br/>
                                        Step 4: Half Yearly Return Filing.<br/>
                                        Step 5: Annual Return Filing.<br/>
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
                                    India generates close to 
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"48.1px"},fontFamily:"Montserrat",fontWeight:"bold",color:"#0e5156"}}>
                                    2 million
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"18px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156"}}>
                                    tons e-waste p.a 
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

export default PlasticWaste;