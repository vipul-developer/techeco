import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid } from "@mui/material";
import techEco from "../../Resources/Images/techeco-ff.png"
const HeroImage = () => {
    return (
        <Box sx={{maxHeight:"591px",margin:{md:"97px 0 0"},paddingBottom:"49px",backgroundColor:"#499960",backgroundImage:`url(${techEco})`,backgroundPosition:"right",backgroundRepeat:"no-repeat"}}>
           <Container fixed>
                <Grid container>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid item xl={6} lg={6} md={8} sm={8} xs={12} sx={{margin:{md:"117px 0px 130px 0px"},}}>
                            <Typography variant="body1" component="p" sx={{fontSize:"54px",textAlign:"left",lineHeight:"1.19 !important",fontFamily:"Montserrat",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"normal",color:"#FFF",padding:{xs:"96px 0px 33px 0px",md:"0px"}}}>
                                The time is now.<br/>Let us make <br/><span style={{color:"#0e5156"}}>the change</span> <br/>possible.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
           </Container> 
        </Box>
    );
};

export default withRouter(HeroImage);