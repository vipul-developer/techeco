import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box,Typography,Container,Grid,Card,ButtonBase,CardContent,CardHeader } from "@mui/material";
import testImage from "../../Resources/Images/TestSimpleProcess.jpg";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
const SimpleProcess = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box>
                            <Box sx={{textAlign:"center"}}>
                                <Typography variant="body" component="p" gutterBottom sx={{fontSize:"48px",fontWeight:600,lineHeight:0.94,color:"#33bc82",fontFamily:"Montserrat",pb:5,mb:2,pt:5}}>A simple process</Typography>
                                <Typography variant="body" component="p" gutterBottom sx={{fontSize:"16px",lineHeight:1.88,fontFamily:"Montserrat",color:"#0e5156",fontWeight:500}}>
                                    On scheduling your e-waste pickup through our call centre, we will ensure a timely pick up from your site <br/>to our R2 certified recycling plant to ensure a complete end to life solution of your e-waste disposal.The reverse <br/>logistics is managed by our own fleet of vehicles and channel partners from nation-wide locations.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{margin:"59.2px 0 53.1px 0",backgroundImage:`url(${testImage})`,height:555,backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:1,backgroundColor:"rbga(60,60,60,0.7)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"}}>
                            <DeliveryDiningIcon sx={{fontSize:"65px",color:"#FFF",mt:5}}/>
                            <Typography variant="body" component="p" gutterBottom sx={{fontSize:"48px",fontWeight:600,lineHeight:0.94,color:"#fff",fontFamily:"Montserrat"}}>Schedule Pickup for location</Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default (withRouter(SimpleProcess));