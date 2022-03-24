import React from 'react';
import { Box,Grid,Container,Typography,CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import imageService from "../../Resources/Images/glass-waste.png";
const GlassWaste = () => {
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 66px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                            <Fade direction="up">
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                    Glass Waste Services
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.7,color:"#0e5156"}}>
                                    Making glass recycling more efficient and more profitable. 
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
                                Recycling glass reduces the space in landfills that would otherwise be taken up by used bottles and jars. 
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
                                        Glass Waste
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Approximately only 45% glass waste gets recycled in India every year.
                                        EPA measures the generation, recycling, composting, combustion with energy recovery and landfilling of glass materials. 
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Glass Waste 
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        EPA used statistics from the Glass Packaging Institute’s numbers on glass container shipment to estimate glass container generation. In 2018, glass generation in all products was 3 million tons in India. 
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Glass Waste 
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Glass can be melted down and made into many different forms from drinking glasses to glass fiber. When the glass is taken to a manufacturing or recycling plant, it is broken up into smaller pieces called cullet.
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Glass Waste 
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        The broken pieces are crushed, sorted, cleaned, and prepared to be mixed with other raw materials like soda ash and sand. The raw materials and glass pieces are melted in a furnace and then shaped into moulds to make new bottles of different colours and sizes. New recycled bottles and jars are made in this way.
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    {/* <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Glass Waste 
                                    </Typography> */}
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        In countries like USA, there are kerbside recycling schemes, which have specially demarcated boxes to collect glass that can be recycled. Some supermarkets, car parks and other public areas have glass bottle banks, where you can take your recyclable jars and bottles
                                    </Typography>
                                </Box>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"20px"},fontFamily:"Montserrat",color:"#000",fontWeight:600,mb:2}}>
                                        Advantages 
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        The cost savings of recycling is in the use of energy. Compared to making glass from raw materials for the first time, cullet melts at a lower temperature. So we can save on energy needed to melt the glass.
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Glass produced from recycled glass reduces related air pollution by 20% and related water pollution by 50%.
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Recycling glass reduces the space in landfills that would otherwise be taken up by used bottles and jars.
                                    </Typography>
                                    <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        Using glass for recycling means there are less glass objects lying around in he landfill or bin.
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
                                    Worldwide
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:{md:"48.1px"},fontFamily:"Montserrat",fontWeight:"bold",color:"#0e5156"}}>
                                    130 million 
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"18px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156"}}>
                                    tonnes of glass are currently produced annually.  
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

export default GlassWaste;