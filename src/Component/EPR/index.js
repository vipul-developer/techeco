import React, { Component } from 'react';
import { Box,Grid,Container,Typography,CardMedia,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Fade } from "react-awesome-reveal";
import EPRImages1 from "../../Resources/Images/epr_img1.jpg";
import mobile1 from "../../Resources/Images/mobile1.jpg";
import mobile2 from "../../Resources/Images/mobile2.jpg";
import mobile3 from "../../Resources/Images/mobile3.jpg";
import processFlow from "../../Resources/Images/techeco-epr-flow.png";
import Slider from "react-slick";
import TabsComponent from "./TabsComponent";
import ContactForm from "../ContactUs/ContactForm";
class EPR extends Component {
    render() {
        const setting = {
            dots:true,
            infinite: true,
            speed:500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <>
                <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box sx={{padding:{md:"99px 155px 258px 155px"},textAlign:"center"}}>
                                <Box sx={{mt:5}}>
                                    <Fade direction="up">
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                            EPR For E-Waste
                                        </Typography>
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.7,color:"#0e5156",mb:5,mt:5}}>
                                            Techeco ensuring its responsibility for the entire lifecycle of their products especially in the take-back, recycling, and final 
                                        </Typography>
                                    </Fade>
                                </Box>
                            </Box>
                        </Container>    
                    </Grid>        
                </Grid>
                <Grid container sx={{marginBottom:"124.4px"}}>
                    <Container fixed>
                        <Grid container item xs={12}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:"bold",fontFamily:"Montserrat",lineHeight:1.42,color:"#0e5156",mb:"35px"}}>
                                        Producers under E-waste 2016 Rules
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:600,fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156",mb:"35px"}}>
                                        Producer means any person who is involved in sales of E-waste irrespective of the selling technique used such as dealer, retailer, e-retailer, etc.
                                    </Typography>
                                </Box>
                                <Box>
                                    <List dense={false}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Manufactures and offers to sell electrical and electronic equipment and their components or consumables or parts or spares under its own brand"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Offers to sell under its own brand, assembled electrical and electronic equipment and their components or consumables or parts or spares produced by other manufacturers or suppliers"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:3}} primary="Offers to sell imported electrical and electronic equipment and their components or consumables or parts or spares."/>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{pl:5,pr:5}}>
                                    <CardMedia
                                        component="img"
                                        alt="Image 1"
                                        height="520"
                                        image={EPRImages1}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </Box>
                            </Grid>
                        </Grid>    
                    </Container>    
                </Grid> 
                <Grid container sx={{mb:"65px"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box sx={{backgroundColor:"#0e5156",borderRadius:"12px",padding:{md:"14.4px 23.5px 14.4px 24px"},textAlign:"center"}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"36px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#33bc82",mb:2,mt:3}}>
                                    About E-Waste EPR 
                                </Typography>
                                <Typography variant="body1" component="div" paragraph gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:1.75,color:"#FFF",p:"3px 49.4px 10.1px 46px",mb:"38px"}}>
                                Extended Producer Responsibility (EPR) is the responsibility of every producer of Electrical and Electronic Equipment (EEE). This is in order to channelize e-waste to an authorised dismantler / recycler to ensure proper handling and disposal of such waste.
                                
                                Extended Producer Responsibility may comprise of implementation of take back system, setting up of collection centres or both of these. Along with having agreed arrangements with authorised dismantlers or recyclers either individually or collectively through a Producer Responsibility Organisation (PRO).
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:300,fontFamily:"Montserrat",lineHeight:1.86,color:"#FFF",fontStyle:"italic",mb:5}}>
                                    As per E-Waste (Management) Rules, 2016. EPR authorisation is has been made mandatory to all and has to be obtained by all the producers including importers, e-retailers/on-line sellers/e-bay etc. of EEE 
                                </Typography>
                            </Box>    
                        </Container>
                    </Grid>    
                </Grid> 
                <Grid container sx={{mb:"125px"}}>
                    <Container fixed>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{overflow:"hidden",pb:5}}>
                                    <Slider {...setting}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                alt="Mobile 1"
                                                height="397"
                                                image={mobile1}
                                                sx={{borderRadius:"12px"}}
                                            />
                                        </div>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                alt="Mobile 2"
                                                height="397"
                                                image={mobile2}
                                                sx={{borderRadius:"12px"}}
                                            />
                                        </div>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                alt="Mobile 3"
                                                height="397"
                                                image={mobile3}
                                                sx={{borderRadius:"12px"}}
                                            />
                                        </div>
                                    </Slider>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{pl:{md:"58px"}}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:"bold",fontFamily:"Montserrat",lineHeight:1.42,color:"#0e5156",mb:"25px"}}>
                                        Role &amp; Responsibilities of PRO
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156",mb:"41px"}}>
                                        Producer Responsibility Organization is a professional organization authorized or financed either collectively or individually by Producers, PRO's take the responsibility for collection and channelization of e-waste generated from the ‘end-of-life’ of Producers products to ensure environmentally sound management of such E-waste.
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"16px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.63,color:"#0e5156"}}>
                                        A PRO can assist a producer or producers in achieving collection targets, setting up of collection centers/ points/ implementing take back, carrying awareness programmes etc.)
                                        PRO shall have an agreement with producer(s) outlining the role and responsibility of PRO for managing EPR..
                                    </Typography>
                                    <List dense={false}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:"108px"}} primary="Achieving collection targets by Establishment of collection mechanism such as door to door collection.(This may include setting up of collection godowns or operating through warehouses as per the guidelines issued by Central Pollution Control Board) Implementation of buy back/take back"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:"60px"}} primary="Logistics arrangements Ensuring traceability of the e-waste collected and channelized. Disposal of processed waste & end of life e-waste. Ensuring Environmentally sound dismantling and recycling."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Conducting awareness programme among consumer's/ bulk consumers/ producers for collection and channelization of waste."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:3}} primary="Helping producers in filing of quarterly/annual returns as per the rules."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:3}} primary="Provide an extended producer's responsibility plan as legally required."/>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>    
                    </Container>    
                </Grid>
                <Grid container sx={{padding:{md:"50px 315px 56px 301px"},backgroundColor:"#effaf5",mb:"82px"}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Box sx={{textAlign:"center"}}>
                                <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"36px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.25,color:"#0e5156",mb:2,mt:3}}>
                                    Process Flow 
                                </Typography>
                                <CardMedia
                                    component="img"
                                    alt="Process Flow"
                                    height="509"
                                    image={processFlow}
                                />
                            </Box>    
                        </Container>    
                    </Grid>    
                </Grid>
                <TabsComponent/>
                <Grid container sx={{mb:"207px"}}>
                    <Container fixed>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{p:5,borderRadius:"12px",border:"solid 0.5px rgba(0, 0, 0, 0.2)"}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:"bold",fontFamily:"Montserrat",lineHeight:1.5,color:"#0e5156"}}>
                                        Do’s for E- Waste
                                    </Typography>
                                    <List dense={false}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="All electrical and electronic products are required to be handed over only to the Authorized Recycler for recycling."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:2}} primary="The e-waste product should be handed over only to authorized recyclers for disposal."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Conducting awareness programme among consumer's/ bulk consumers/ producers for collection and channelization of waste."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:2}} primary="Ensure that only Authorized Recyclers repair and handle your electronic products."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Keep the e-waste in an isolated area, after it becomes non-functional/un-repairable so as to prevent its accidental breakage."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:2}} primary="You can also deposit your e-waste directly at the collection centers."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:4}} primary="Always call our E-waste Authorized Collection centers / points to dispose of products that have reached end-of life."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Always drop your used electronic products batteries or any accessories when they reach the end of their life at your nearest Authorized E-waste collection centers point."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:4}} primary="Always disconnect the battery from the product and ensure any glass surface is protected against breakage."/>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{p:5,borderRadius:"12px",border:"solid 0.5px rgba(0, 0, 0, 0.2)"}}>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"20px"},fontWeight:"bold",fontFamily:"Montserrat",lineHeight:1.5,color:"#0e5156",marginBottom:"46px"}}>
                                        Don'ts for E- Waste
                                    </Typography>
                                    <List dense={false} sx={{pb:{md:"541px"},}}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CloseRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#ff6d5e",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}} primary="Do not dismantle your electronic products on your own."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CloseRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#ff6d5e",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="Do not give E-waste to informal (Kabadi) and unorganized sectors like Local Scrap Dealer Rag Pickers."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CloseRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#ff6d5e",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:5}} primary="The product should not be opened by the User himself/herself,but only by trained and authorized service personnel."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CloseRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#ff6d5e",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:2}} primary="Do not keep any replaced spare part(s) from the product in exposed area."/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CloseRoundedIcon fontSize="small" sx={{color:"#FFF",backgroundColor:"#ff6d5e",borderRadius:"50%"}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156",mt:2}} primary="Do not dispose of your product in garbage bins along with municipal waste that ultimately reaches landfills."/>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>    
                        </Grid>    
                    </Container>    
                </Grid>
                <ContactForm/>
            </>
        );
    }
}

export default EPR;