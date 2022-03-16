import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,Card,CardMedia,CardContent } from "@mui/material";
import JohnCameron from "../../Resources/Images/john-cameron.jpg";
import { Fade } from "react-awesome-reveal";
const MakeWaste = () => {
    return (
        <>
            <Grid container>
                <Fade direction='up' style={{textAlign:"center",width:"100%"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box sx={{marginBottom:"33px"}}>
                                <Box sx={{textAlign:"center",margin:"0 0 103px 0"}}>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"20px"},lineHeight:0.7,margin:"77px 0 26px 0",fontFamily:"Montserrat",color:"#000"}}>Take-make-waste is obsolete</Typography>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,lineHeight:0.94,margin:"0 0 21px 0",color:"#33bc82",fontFamily:"Montserrat"}}>Rethink your legacy</Typography>
                                    <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,lineHeight:1.42,fontFamily:"Montserrat",color:"#000"}}>Techeco Waste Management LLP provides comprehensive <br/> complete and responsible recycling service.</Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Fade>
                <Container fixed>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                            <Card sx={{minWidth:{lg:"328.5px",md:"240px",xs:"200px"},borderRadius:"12px",mb:{xs:2}}}>
                                <CardMedia
                                    component="img"
                                    height="503"
                                    image={JohnCameron}
                                    alt="Make Waste Image"
                                />
                            </Card>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                            <Card sx={{minWidth:{lg:"328.5px",md:"240px",xs:"200px"},background:" linear-gradient(90deg, rgba(14,81,86,1) 0%, rgba(51,188,130,1) 50%)",margin:{md:"0 0 0 50px",xs:"0 0 15px 0"},borderRadius:"12px"}}>
                                <CardContent sx={{p:0}}>
                                    <Box sx={{padding:"38.3px 30.1px 30.8px 30.8px",color:"#FFF"}}>
                                        <Typography variant="body" component="p" gutterBottom sx={{margin:"0 0 1.5px",fontSize:{md:"18px"},fontWeight:500,textAlign:"justify"}}>India generates close to</Typography>
                                        <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"18px"},fontWeight:500,textAlign:"justify",letterSpacing:"normal",lineHeight:"normal"}}><span style={{fontSize:"48.1px",fontWeight:"bold"}}>2 million</span> tons</Typography>
                                        <Typography variant="body" component="p" gutterBottom sx={{margin:"6px 0 0",fontSize:{md:"18px"},fontWeight:500,textAlign:"justify"}}>e-waste p.a</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card sx={{minWidth:{lg:"328.5px",md:"240px",xs:"200px"},background:" linear-gradient(90deg, rgba(14,81,86,1) 0%, rgba(51,188,130,1) 50%)",margin:{md:"15px 0 0 50px"},borderRadius:"12px"}}>
                                <CardContent sx={{p:0}}>
                                    <Box sx={{padding:"81.9px 30.1px 48.9px 30.8px",color:"#FFF"}}>
                                        <Typography variant="body" component="p" gutterBottom sx={{fontSize:{md:"18px"},fontWeight:500,textAlign:"justify"}}>Techeco’s mission is urgent and ambitious. we want to make recycling a way of life for a billion people.</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={{mt:{xs:2},mb:{xs:5}}}>
                            <Box sx={{margin:{lg:"103px 0 355px 107.2px"},}}>
                                <Typography variant="body" component="p" gutterBottom paragraph sx={{fontSize:{md:"16px"},lineHeight:{md:1.88},letterSpacing:"normal",fontFamily:"Montserrat",fontWeight:"normal"}}>
                                    The “Zero Waste living” motto takes centre stage @Techeco. At its most basic level, the goal of zero waste living is to push economies towards the target of sending no waste to landfill, incinerators, and the ocean. The “Reduce, Reuse &amp; Recycle” approach to production and consumption, encourages a more circular approach to the way we use resources and is the first step towards Zero Waste living.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            
        </>
    );
};

export default (withRouter(MakeWaste));