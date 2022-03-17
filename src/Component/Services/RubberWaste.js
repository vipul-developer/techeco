import React from 'react';
import { Box,Grid,Container,Typography,CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import imageService from "../../Resources/Images/service_img1.jpg";
const RubberWaste = () => {
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 66px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                    Rubber Services
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
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        We can mention- Worldwide information- 
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Every year, over one billion tyres are manufactured worldwide, and an equal number of tyres are permanently removed from vehicles, becoming waste.<br/>
                                        The U.S. is the largest producer of waste tyres, about 290 million a year, although increases in new vehicles sales in China and India are rapidly contributing to waste tyre volumes.<br/>
                                        Although modern tyres are fundamentally rubber products, they are a complex mix of natural and synthetic rubbers, and various structural reinforcing elements including metals and chemical additives.<br/>
                                        This complexity has led to stockpiling, dumping and diversion to landfill. This has exposed communities to environmental and health risks and has squandered valuable resources locked up in tyre dumps.<br/>
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Or For India-  
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        India’s waste tyres account for about 6-7% of the global total. With the local tyre industry growing at 12% per annum, waste volumes are rising.<br/>
                                        India has been recycling and reusing waste tyres for four decades, although it is estimated that 60% are disposed of through illegal dumping.<br/>
                                        Despite this, India is the second largest producer of reclaimed rubber after China. In 2011, India produced 90,000 metric tonnes of reclaimed rubber from waste tyres.<br/>
                                        By 2016, some 100,000 kms of Indian roads had been laid with asphalt blended with recycled rubber, and over 500 000 tonnes of crumb rubber modified bitumen (CRMB) is used annually in road construction. New regulations introduced in 2016 allow for import of waste tyres for recycling.<br/>
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

export default RubberWaste;