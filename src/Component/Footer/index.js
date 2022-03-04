import React from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { Box,Grid,Container,Toolbar,Typography,List,ListItem,ListItemButton,ListItemText,Button  } from "@mui/material";
import Logo from "../../Resources/Images/techeco-white.svg";
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
    return (
        <>
            <Grid container sx={{backgroundColor:"#033e43",padding:{md:"82.6px 100px 0 56.8px"}}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Toolbar disableGutters>
                            <NavLink exact to={"/"} style={{flexGrow:1}}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    color="#000"
                                    sx={{flexGrow:1,ml:{md:2},pt:{xs:3}}}
                                >
                                    <img src={Logo} alt="Logo" className="img-fluid"/>
                                </Typography>
                            </NavLink>
                        </Toolbar>
                    </Container>
                </Grid>
                <Container fixed>
                    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                            <Box sx={{margin:{md:"63.7px 0 0 0"},ml:{md:1}}}>
                                <Typography variant='body1' component="p" gutterBottom sx={{ml:1,mt:2,fontSize:{md:"20px"},fontFamily:"Montserrat",lineHeight:2.14,color:"#FFF",fontWeight:"bold"}}>Techeco Waste Management LLP</Typography>
                                <Typography variant='body1' component="p" gutterBottom sx={{ml:1,fontSize:"16px",fontFamily:"Montserrat",lineHeight:2.14,color:"#FFF",fontWeight:"bold",mt:{md:"53px"}}}>Corporate Office</Typography>
                                <Typography variant='body1' component="p" gutterBottom sx={{ml:1,fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.14,color:"#FFF",fontWeight:500,}}>2A 2nd Floor Building No.11/12, Raghuvanshi Mill Compound,SB Road, Lower Parel (W), Mumbai-400013</Typography>
                                <Typography variant='body1' component="p" gutterBottom sx={{ml:1,fontSize:"16px",fontFamily:"Montserrat",lineHeight:2.14,color:"#FFF",fontWeight:"bold",mt:{md:"53px"}}}>Factory</Typography>
                                <Typography variant='body1' component="p" gutterBottom sx={{ml:1,fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.14,color:"#FFF",fontWeight:500,}}>Gut no. 155 B/2, Village: Dhakambe, Tal: Dindori, Dist: Nashik Maharashtra, India.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                            <nav aria-label="menuList">
                                <Box sx={{margin:{md:"58.7px 0 0 75px"},width:"100%"}}>
                                    <List>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/techeco/about_us"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="About Us" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/tecteco/services"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="Services" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/tecteco/initiatives"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="Initiatives" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/tecteco/epr_for_e-waste"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="EPR" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/tecteco/blogs"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="Blogs" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <NavLink exact to={"/tecteco/contacts"} style={{fontSize:"14px",fontFamily:"Montserrat",lineHeight:2.75,color:"#FFF",fontWeight:500,}}>
                                                <ListItemButton sx={{"&:hover":{backgroundColor:"transparent"},"&:foces":{backgroundColor:"transparent"}}}>
                                                    <ListItemText primary="Contact Us" />
                                                </ListItemButton>
                                            </NavLink>
                                        </ListItem>
                                    </List>
                                </Box>
                            </nav>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                            <Box sx={{margin:{md:"63.7px 0 102px 19px"},padding:{md:"33px 42px 40px 36px"},borderRadius:"12px",border:"solid 1px #33bc82",width:"100%",textAlign:"center",pb:{xs:3},pt:{xs:3}}}>
                                <Typography variant='body1' component="p" gutterBottom sx={{fontSize:"24px",fontFamily:"Montserrat",lineHeight:1.88,color:"#FFF",fontWeight:600}}>Schedule your pickup</Typography>
                                <Typography variant='body1' component="p" gutterBottom sx={{fontSize:"16px",fontFamily:"Montserrat",lineHeight:2.81,color:"#FFF",fontWeight:500,margin:{md:"46px 0 0 0"},}}>Call us on our toll free number</Typography>
                                <Button variant='contained' disableElevation startIcon={<PhoneIcon size="large"/>} size="large" sx={{fontFamily:"Montserrat",fontSize:{md:"28px"},fontWeight:"bold",lineHeight:0.93,padding:{md:"22px 30px 18px 34px"},backgroundColor:"#33bc82",borderRadius:"33px","&:hover":{backgroundColor:"#33bc82"},}}>1800-889-3121</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default (withRouter(Footer));