import React from 'react';
import { Box,Container,Grid,Card,CardContent,Typography,CardMedia } from "@mui/material";
import Slider from "react-slick";
import iieeLogo from "../../Resources/Images/iiiee.png";
const Collaborative = () => {
    const setting = {
        dots:true,
        infinite: true,
        speed:500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  dots: true,
                } 
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                }
            }
        ]
    }
    return (
        <>
            <Grid container sx={{overflow:"hidden",mb:5}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{textAlign:"center",margin:"85px 0px"}}>
                            <Typography variant='body1' component="div" gutterBottom sx={{fontSize:{md:"30px"},fontFamily:"Montserrat",lineHeight:1.25,fontWeight:600,color:"#33bc82"}}>Change is collaborative. hear from our collective</Typography>
                            <Typography variant='body1' component="div" gutterBottom sx={{fontSize:{md:"24px"},fontFamily:"Montserrat",lineHeight:1.25,fontWeight:500,color:"#0e5156"}}>join pioneers who are leading the movement</Typography>
                        </Box>
                        <Slider {...setting}>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#33bc82",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <Box sx={{display:"flex",borderRadius:"12px",boxShadow:"none",p:{md:3},}}>
                                <Box sx={{display:"flex",minHeight:"12.2px",backgroundColor:"#0e5156",position:"relative",top:"12.2px",borderRadius:"6px 6px 0 0"}}/>
                                <Card sx={{padding:{md:"32.5px 29.5px 17.3px 53.9px"},boxShadow:"none",border:"1px solid rgba(0, 0, 0, 0.2)"}}>
                                    <CardContent>
                                        <Typography variant="body1" component="div" gutterBottom paragraph sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.63,flexGrow:0,color:"#0e5156"}}>Techeco has been a strong partner to IFC’s ‘India E-waste Program’. Not only is Techeco is making an impact at the grassroots level by providing cleaner and more sustainable livelihoods but is impacting change across the value chain and is today a strong voice in the sector.</Typography>
                                    </CardContent>
                                    
                                    <Box sx={{display:"flex",padding:{md:"30.5px 14.2px 13.2px 28px"}}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:60,height:34}}
                                            image={iieeLogo}
                                            alt="Logo"
                                        />
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.88,fontWeight:500,flexGrow:0,color:"#000"}}>Thomas Lindhqvist<br/>IIIEE,Sweden</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Slider>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default Collaborative;