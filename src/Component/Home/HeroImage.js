import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid } from "@mui/material";
import techEco from "../../Resources/Images/techeco-ff.png"
import { Fade } from "react-awesome-reveal";
const HeroImage = () => {
    return (
        <Box sx={{minHeight:"100vh",margin:{md:"97px 0 0"},paddingBottom:"49px",backgroundColor:"#499960"}}>
           <Container fixed>
                <Grid container>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={{margin:{md:"30vh 0px 130px 0px"},}}>
                            <Fade direction="left">
                            <Typography variant="body1" component="p" sx={{fontSize:{md:"54px",xs:"38px"},textAlign:"left",lineHeight:"1.19 !important",fontFamily:"Montserrat",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"normal",color:"#FFF",padding:{xs:"96px 0px 33px 0px",md:"0px"}}}>
                                The time is now.<br/>Let us make <br/><span style={{color:"#0e5156"}}>the change</span> <br/>possible.
                            </Typography>
                            </Fade>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={{margin:{md:"22vh 0 0 0"}}}>
                            <img src={techEco} alt="Hero" className='img-fluid'/>
                        </Grid>
                    </Grid>
                </Grid>
           </Container> 
        </Box>
    );
};

export default withRouter(HeroImage);