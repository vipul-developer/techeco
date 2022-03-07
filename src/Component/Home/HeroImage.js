import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,CardMedia } from "@mui/material";
import VideoClip from "../../Resources/Video/With Text.mp4";
import { Fade } from "react-awesome-reveal";
const HeroImage = () => {
    return (
        <Box sx={{margin:{md:"97px 0 0"},paddingBottom:"49px"}}>
            {/* <Grid container>
                <Grid container item xs={12}>
                    <Box sx={{overflow:"hidden"}}>
                        <Box sx={{pt:{md:"135px"},pl:{md:"105px"}}}>
                            <Fade direction="left">
                                <Typography variant="body1" component="p" sx={{fontSize:{md:"54px",xs:"38px"},textAlign:"left",lineHeight:"1.19 !important",fontFamily:"Montserrat",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"normal",color:"#FFF",padding:{xs:"96px 0px 33px 0px",md:"0px"}}}>
                                    The time is now.<br/>Let us make <br/><span style={{color:"#0e5156"}}>the change</span> <br/>possible.
                                </Typography>
                            </Fade>
                        </Box>
                        <Box sx={{position:"absolute",top:0,left:0,overflow:"hidden",zIndex:"-1",width:"100%",pt:"97px"}}>
                            <CardMedia
                                component="video"
                                autoPlay
                                loop
                                muted
                                preload="none"
                                src={VideoClip}
                            />
                        </Box>
                    </Box>    
                </Grid>  
            </Grid> */}
            <Grid container>
                <Grid container item xs={12}>
                    <CardMedia
                        component="video"
                        autoPlay
                        loop
                        muted
                        preload="none"
                        src={VideoClip}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default withRouter(HeroImage);