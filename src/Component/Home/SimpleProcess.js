import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,Button } from "@mui/material";
import testImage from "../../Resources/Images/techeco-process-1.png";
import PhoneIcon from '@mui/icons-material/Phone';
import { Fade } from "react-awesome-reveal";
const SimpleProcess = () => {
    return (
        <>
            <Grid container>
                <Fade direction="up" delay={300} triggerOnce style={{textAlign:"center",width:"100%",marginTop:"33px"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box>
                                <Box sx={{textAlign:"center"}}>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:0.94,color:"#33bc82",fontFamily:"Montserrat",pb:5,mb:2,pt:5}}>A simple process</Typography>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"16px"},lineHeight:{md:1.88},fontFamily:"Montserrat",color:"#0e5156",fontWeight:500}}>
                                        On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site <br/>to our R2 certified recycling plant to ensure a complete end to life solution of your e-waste disposal.The reverse <br/>logistics is managed by our own fleet of vehicles and channel partners from nation-wide locations.
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Fade>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{margin:"59.2px 0 53.1px 0",borderRadius:1,}}>
                            {/* <DeliveryDiningIcon sx={{fontSize:"65px",color:"#FFF",mt:5}}/>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:"48px",fontWeight:600,lineHeight:0.94,color:"#fff",fontFamily:"Montserrat"}}>Schedule Pickup for location</Typography> */}
                            <img src={testImage} alt="Logo" className="img-fluid"/>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{pt:3,textAlign:"center"}}>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:0.94,color:"#0e5156",fontFamily:"Montserrat"}}>Schedule your pickup</Typography>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:600,lineHeight:2.25,color:"#0e5156",fontFamily:"Montserrat"}}>Call us on our toll free number</Typography>
                            <Button variant='contained' disableElevation startIcon={<PhoneIcon size="large"/>} size="large" sx={{fontFamily:"Montserrat",fontSize:{md:"36px"},fontWeight:"bold",lineHeight:0.72,padding:"23px 31px 19px 35px",backgroundColor:"#33bc82",borderRadius:"33px","&:hover":{backgroundColor:"#33bc82"},}}>1800-889-3121</Button>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default (withRouter(SimpleProcess));