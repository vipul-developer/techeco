import React,{ useState } from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { menuList } from '../../Misc/MenuList';
import { Box,AppBar,Toolbar,IconButton,Typography,Menu,MenuItem,Container,Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Resources/Images/techeco-logo.svg";
import PhoneIcon from '@mui/icons-material/Phone';
const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const renderMenu = (list,type) => {
        let menuTemplate = null;
        switch (type) {
            case ("primary"):
                menuTemplate = list.map((item,index) => (
                    item.public ? 
                        item.isActive ? 
                        <NavLink exact to={item.linkTo} activeStyle={{color:item.name === "1800-889-3121" ? "#fff":"#33bc82"}} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:item.name === "1800-889-3121" ? "#fff":"#000"}} key={item.id}>
                            <Button onClick={handleCloseNavMenu} sx={{borderRadius:item.name === "1800-889-3121" ? "33px":"inherit",textTransform:"capitalize",backgroundColor:item.name === "1800-889-3121" ? "#33bc82":"inherit","&:hover":{backgroundColor:item.name === "1800-889-3121" ? "#33bc82":"inherit",color:item.name === "1800-889-3121" ? "inherit":"#33bc82"},ml:item.name === "1800-889-3121" ? 1 : 0}} variant={item.name === "1800-889-3121" ? "contained":null} disableElevation startIcon={item.name === "1800-889-3121" ? <PhoneIcon/> : null}>
                                {item.name}
                            </Button>
                        </NavLink>
                        :
                        null
                    :
                    null
                ))
                break;
            case ("mobileMenu"):
                menuTemplate = list.map((item,index) => (
                    item.public ?
                        item.isActive ?
                        <NavLink exact to={item.linkTo} activeStyle={{color:item.name === "1800-889-3121" ? "#fff":"#33bc82"}} style={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:item.name === "1800-889-3121" ? "#fff":"#000"}} key={item.id}>
                            <MenuItem onClick={handleCloseNavMenu} sx={{borderRadius:item.name === "1800-889-3121" ? "6px":"inherit",backgroundColor:item.name === "1800-889-3121" ? "#33bc82":"inherit","&:hover":{backgroundColor:item.name === "1800-889-3121" ? "#33bc82":"inherit",color:item.name === "1800-889-3121" ? "inherit":"#33bc82"},}} variant={item.name === "1800-889-3121" ? "contained":null}>
                                <Typography textAlign="center">{item.name}</Typography>
                            </MenuItem>
                        </NavLink>
                        :
                        null
                    :
                    null
                ))
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
                                <img src={Logo} alt="Logo" className="img-fluid"/>
                            </Typography>
                        </NavLink>
                        <Box sx={{display: { xs:'none',md:'flex'} }}>
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
                                sx={{display: {xs:'block',md:'none'},"& .MuiPaper-elevation":{width:"100%",pl:3,pr:3,pb:5,top:{sm:"68px !important",xs:"61px !important"},},}}
                            >
                                {renderMenu(menuList,"mobileMenu")}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>  
        </>
    );
};

export default withRouter(Navigation);