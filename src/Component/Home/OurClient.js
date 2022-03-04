import React from 'react';
import { Box,Container,Grid,Typography } from "@mui/material";
const OurClient = () => {
    return (
        <>
            <Grid container sx={{margin:"110px 0 0"}}>
                <Grid item xs={12}>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"48px",fontFamily:"Montserrat",fontWeight:600,lineHeight:0.94,color:"#33bc82"}}>Leading brands we work with</Typography>
                    </Box>    
                </Grid>    
            </Grid>
            <Grid container sx={{backgroundColor:"#effaf5",padding:{md:"26px 171px 62px"},margin:"29px 0 85px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mb:3}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>Our Clients</Typography>
                                </Box>    
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 1</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 2</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 3</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 4</Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 5</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 6</Grid> 
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mt:5,mb:2}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>PRO Clients</Typography>
                                </Box>    
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 1</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 2</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 3</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 4</Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 5</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 6</Grid> 
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mt:5,mb:2}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>EPR Clients</Typography>
                                </Box>    
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 1</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 2</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 3</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 4</Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 5</Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>Client 6</Grid> 
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default OurClient;