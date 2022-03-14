import React from 'react';
import { Box,Container,Grid,Typography } from "@mui/material";
import ourClientImg1 from "../../Resources/Images/Our Clients/Group 13234.png";
import ourClientImg2 from "../../Resources/Images/Our Clients/Group 13235.png";
import ourClientImg3 from "../../Resources/Images/Our Clients/Group 13236.png";
import ourClientImg4 from "../../Resources/Images/Our Clients/Group 13237.png";
import ourClientImg5 from "../../Resources/Images/Our Clients/Group 13238.png";
import ourClientImg6 from "../../Resources/Images/Our Clients/Group 13240.png";
import ourClientImg7 from "../../Resources/Images/Our Clients/Group 13241.png";
import ourClientImg8 from "../../Resources/Images/Our Clients/Group 13242.png";
import ourClientImg9 from "../../Resources/Images/Our Clients/Group 13243.png";
import ourClientImg10 from "../../Resources/Images/Our Clients/Group 13244.png";
import proClientImg1 from "../../Resources/Images/PRO CLIENTS/Group 13245.png";
import proClientImg2 from "../../Resources/Images/PRO CLIENTS/Group 13246.png";
import proClientImg3 from "../../Resources/Images/PRO CLIENTS/Group 13247.png";
import proClientImg4 from "../../Resources/Images/PRO CLIENTS/Group 13248.png";
import proClientImg5 from "../../Resources/Images/PRO CLIENTS/Group 13249.png";
import erpClientImg1 from "../../Resources/Images/ERP CLIENTS/Group 13215.png";
import erpClientImg2 from "../../Resources/Images/ERP CLIENTS/Group 13250.png";
import erpClientImg3 from "../../Resources/Images/ERP CLIENTS/Group 13251.png";
import erpClientImg4 from "../../Resources/Images/ERP CLIENTS/Group 13252.png";
import erpClientImg5 from "../../Resources/Images/ERP CLIENTS/Group 13253.png";
const OurClient = () => {
    return (
        <>
            <Grid container sx={{margin:"110px 0 0"}}>
                <Grid item xs={12}>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontFamily:"Montserrat",fontWeight:600,lineHeight:0.94,color:"#33bc82",textAlign:"center"}}>Leading brands we work with</Typography>
                    </Box>    
                </Grid>    
            </Grid>
            <Grid container sx={{backgroundColor:"#effaf5",padding:{md:"26px 171px 62px"},margin:"29px 0 85px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Grid container sx={{justifyContent:"center"}}>
                            {/* <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mb:3}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>Our Clients</Typography>
                                </Box>    
                            </Grid> */}
                            <Grid container item xs={12} sx={{mt:3,justifyContent:"center"}} spacing={3}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg1} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg2} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg3} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg4} className="img-fluid" alt="Our Client"/></Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg5} className="img-fluid" alt="Our Client"/></Grid>  
                            </Grid>
                            <Grid container item xs={12} sx={{mt:3,justifyContent:"center"}} spacing={3}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg6} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg7} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg8} className="img-fluid" alt="Our Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg9} className="img-fluid" alt="Our Client"/></Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={ourClientImg10} className="img-fluid" alt="Our Client"/></Grid>  
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mt:5,mb:2}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>PRO Clients</Typography>
                                </Box>    
                            </Grid> */}
                            <Grid container item xs={12} sx={{mt:3,justifyContent:"center"}} spacing={3}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={proClientImg1} className="img-fluid" alt="PRO Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={proClientImg2} className="img-fluid" alt="PRO Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={proClientImg3} className="img-fluid" alt="PRO Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={proClientImg4} className="img-fluid" alt="PRO Client"/></Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={proClientImg5} className="img-fluid" alt="PRO Client"/></Grid>  
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Box sx={{display:"flex",justifyContent:"center",mt:5,mb:2}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",fontWeight:600,lineHeight:1.88,color:"#0e5156"}}>EPR Clients</Typography>
                                </Box>    
                            </Grid> */}
                            <Grid container item xs={12} sx={{mt:3,justifyContent:"center"}} spacing={3}>
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={erpClientImg1} className="img-fluid" alt="EPR Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={erpClientImg2} className="img-fluid" alt="EPR Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={erpClientImg3} className="img-fluid" alt="EPR Client"/></Grid> 
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={erpClientImg4} className="img-fluid" alt="EPR Client"/></Grid>    
                                <Grid item xl={2} lg={2} md={2} sm={2} xs={12} sx={{justifyContent:"center",display:"flex"}}><img src={erpClientImg5} className="img-fluid" alt="EPR Client"/></Grid>  
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default OurClient;