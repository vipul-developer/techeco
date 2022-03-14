import React,{ useState } from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { menuList } from '../../Misc/MenuList';
import { Box,Grid,AppBar,Toolbar,IconButton,Typography,Menu,MenuItem,Container,Button,useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Resources/Images/techeco-logo.svg";
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const Navigation = () => {
    const matches = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElMobile, setAnchorElMobile] = React.useState(null);
    const open = Boolean(anchorEl);
    const openMobile = Boolean(anchorElMobile);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleDropDown = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDropDown = () => {
        setAnchorEl(null)
    }
    const handleMobileDropDown = (event) => {
        setAnchorElMobile(event.currentTarget);
    };
    const handleMobileCloseDropDown = () => {
        setAnchorElMobile(null)
    }
    const renderMenu = (list,type) => {
        let menuTemplate = null;
        switch (type) {
            case ("primary"):
                menuTemplate = list.map((item,index) => {
                    if(item.linkTo){
                        if(item.public && item.isActive){
                            return(
                                <NavLink key={item.id} exact to={item.linkTo} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000"}} activeStyle={{color:"#33bc82"}}>
                                    <Button onClick={handleCloseNavMenu}  variant="text" sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"inherit",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"},mr:{lg:2}}}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                            )
                        }
                    }else{
                        if(item.subMenu){
                            return(
                                <Box key={item.id}>
                                    <Button onClick={handleDropDown} id="dropdown" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}  variant="text" sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"},mr:{lg:2}}} endIcon={ open ? <ExpandLess /> : <ExpandMore />}>
                                        {item.name}
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        keepMounted
                                        onClose={handleCloseDropDown}
                                        anchorOrigin={{vertical:"top",horizontal:"center"}}
                                        transformOrigin={{vertical:"top",horizontal:"center"}}
                                        sx={{mt:"65px","& .MuiPaper-elevation":{width:"180px",borderRadius:0},boxShadow:"none"}}
                                        MenuListProps={{
                                            'aria-labelledby': 'dropdown',
                                          }}
                                    >
                                        {
                                            item.subMenu.map((submenu,index) => (
                                                <NavLink key={submenu.id} exact to={submenu.linkTo} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000"}} activeStyle={{color:"#33bc82"}}>
                                                    <MenuItem onClick={handleCloseDropDown} sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"}}}>{submenu.name}</MenuItem>
                                                </NavLink>
                                            ))
                                        }
                                    </Menu>
                                </Box>
                            )
                        }else{
                            return(
                                <Button onClick={handleCloseNavMenu}  variant="contained" key={item.id} sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#FFF",backgroundColor:"#33bc82",textTransform:"capitalize",borderRadius:"33px","&:hover":{backgroundColor:"#33bc82",color:"#FFF"}}} startIcon={<PhoneIcon/>}>
                                    {item.name}
                                </Button>
                            )
                        }
                    }
                })
            break;
            case ("mobileMenu"):
                menuTemplate = list.map((item,index) => {
                    if(item.linkTo){
                        if(item.public && item.isActive){
                            return(
                                <NavLink key={item.id} exact to={item.linkTo} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000"}} activeStyle={{color:"#33bc82"}}>
                                    <MenuItem onClick={handleCloseNavMenu}  variant="text" sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"inherit",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"},"&:focus":{backgroundColor:"transparent"},mr:{lg:2}}}>
                                        {item.name}
                                    </MenuItem>
                                </NavLink>
                            )
                        }
                    }else{
                        if(item.subMenu){
                            return(
                                <Box key={item.id}>
                                    <Button onClick={handleMobileDropDown} id="mobiledropdown" aria-controls={openMobile ? 'mobile-basic-menu' : undefined} aria-haspopup="true" aria-expanded={openMobile ? 'true' : undefined}  variant="text" sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"},"&:focus":{backgroundColor:"transparent"},"& span":{position:"relative",left:"62%",top:"1px"},width:"100%",justifyContent:"flex-start",mr:{lg:2},ml:1}} endIcon={ openMobile ? <ExpandLess /> : <ExpandMore />}>
                                        {item.name}
                                    </Button>
                                    <Menu
                                        id="mobile-basic-menu"
                                        anchorEl={anchorElMobile}
                                        open={openMobile}
                                        keepMounted
                                        onClose={handleMobileCloseDropDown}
                                        anchorOrigin={{vertical:"top",horizontal:"left"}}
                                        transformOrigin={{vertical:"top",horizontal:"left"}}
                                        sx={{mt:"40px","& .MuiPaper-elevation":{width:"80%",p:0,borderRadius:0},boxShadow:"none"}}
                                        MenuListProps={{
                                            'aria-labelledby': 'mobiledropdown',
                                          }}
                                    >
                                        {
                                            item.subMenu.map((submenu,index) => (
                                                <NavLink key={submenu.id} exact to={submenu.linkTo} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000"}} activeStyle={{color:"#33bc82"}}>
                                                    <MenuItem onClick={handleCloseDropDown} sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#000",textTransform:"capitalize","&:hover":{backgroundColor:"transparent",color:"#33bc82"},"&:focus":{backgroundColor:"transparent"}}}>{submenu.name}</MenuItem>
                                                </NavLink>
                                            ))
                                        }
                                    </Menu>
                                </Box>
                            )
                        }else{
                            return(
                                <Button onClick={handleCloseNavMenu}  variant="contained" key={item.id} sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#FFF",backgroundColor:"#33bc82",textTransform:"capitalize",borderRadius:"33px","&:hover":{backgroundColor:"#33bc82",color:"#FFF"},"&:focus":{backgroundColor:"#33bc82"}}} startIcon={<PhoneIcon/>} fullWidth>
                                    {item.name}
                                </Button>
                            )
                        }
                    }
                })
            break;
            default:
                menuTemplate = null;
                break;
        }
        return menuTemplate;
    }
    return (
        <>
            <AppBar position="fixed" sx={{backgroundColor:"#FFF",height:{md:"97px"},boxShadow:"none"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Container fixed sx={{pt:{md:2}}}>
                            <Toolbar disableGutters>
                                <NavLink exact to={"/"} style={{flexGrow:1}}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        color="#000"
                                        sx={{flexGrow:1}}
                                    >
                                        <img src={Logo} alt="Logo" className="img-fluid" style={{height: matches ? "26px" : "auto" }}/>
                                    </Typography>
                                </NavLink>
                                <Box sx={{display: { xs:'none',md:'flex'},mt:1 }}>
                                    {renderMenu(menuList,"primary")}
                                </Box>
                                <Box sx={{display: { xs:'flex',md:'none'} }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        sx={{color:"#000"}}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                                        keepMounted
                                        transformOrigin={{vertical:'top',horizontal:'right'}}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{display: {xs:'block',md:'none'},"& .MuiPaper-elevation":{width:"100%",borderRadius:0,pl:3,pr:3,pb:5,top:{sm:"68px !important",xs:"61px !important"},},}}
                                    >
                                        {renderMenu(menuList,"mobileMenu")}
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </Grid>
                </Grid>
            </AppBar>  
        </>
    );
};

export default withRouter(Navigation);