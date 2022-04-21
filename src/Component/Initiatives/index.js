import React from 'react';
import { Box,Grid,Container,Typography,CardMedia,Card,CardContent,Button } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactUs/ContactForm";
import Slider from "react-slick";
import img1 from "../../Resources/Images/ini_img1.jpeg";
import img2 from "../../Resources/Images/ini_img2.jpg";
import img3 from "../../Resources/Images/ini_img3.jpg";
import wallImage1 from "../../Resources/Images/Wall painiting/Techeco-Initiatives-wall-painting1.jpg";
import wallImage2 from "../../Resources/Images/Wall painiting/Techeco-Initiatives-wall-painting2.jpeg";
import wallImage3 from "../../Resources/Images/Wall painiting/Techeco-Initiatives-wall-painting3.jpeg";
import safetyImage1 from "../../Resources/Images/Safety/Techeco-Initiatives-safety1.jpg";
import safetyImage2 from "../../Resources/Images/Safety/Techeco-Initiatives-safety2.jpg";
import safetyImage3 from "../../Resources/Images/Safety/Techeco-Initiatives-safety3.jpg";
import safetyImage4 from "../../Resources/Images/Safety/Techeco-Initiatives-safety4.jpg";
import safetyImage5 from "../../Resources/Images/Safety/Techeco-Initiatives-safety5.jpg";
import safetyImage6 from "../../Resources/Images/Safety/Techeco-Initiatives-safety6.jpg";
import safetyImage7 from "../../Resources/Images/Safety/Techeco-Initiatives-safety7.jpg";
import safetyImage8 from "../../Resources/Images/Safety/Techeco-Initiatives-safety8.jpg";
import mumbaiImage1 from "../../Resources/Images/Garware Institute Mumbai/Techeco-Initiatives-Garware2.jpg";
import mumbaiImage2 from "../../Resources/Images/Garware Institute Mumbai/Techeco-Initiatives-Garware3.jpg";
import mumbaiImage3 from "../../Resources/Images/Garware Institute Mumbai/Techeco-Initiatives-Garware5.jpg";
import mumbaiImage4 from "../../Resources/Images/Garware Institute Mumbai/Techeco-Initiatives-Garware7.jpg";
import collegeImage1 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans1.jpg";
import collegeImage2 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans2.jpg";
import collegeImage3 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans3.jpg";
import collegeImage4 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans4.jpg";
import collegeImage5 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans5.jpg";
import collegeImage6 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans6.jpg";
import collegeImage7 from "../../Resources/Images/NDMVP COLLEGE NASHIK/Techeco-Initiatives-Cans7.jpg";
import PuneExibition1 from "../../Resources/Images/PuneExibition/PuneExibition1.PNG";
import PuneExibition2 from "../../Resources/Images/PuneExibition/PuneExibition2.jpeg";
import PuneExibition3 from "../../Resources/Images/PuneExibition/PuneExibition3.jpeg";
import PuneExibition4 from "../../Resources/Images/PuneExibition/PuneExibition4.jpeg";
import PuneExibition5 from "../../Resources/Images/PuneExibition/PuneExibition5.jpeg";
import PuneExibition6 from "../../Resources/Images/PuneExibition/PuneExibition6.jpeg";
import PuneExibition7 from "../../Resources/Images/PuneExibition/PuneExibition7.jpeg";
import PuneExibition8 from "../../Resources/Images/PuneExibition/PuneExibition8.jpeg";

const Initiatives = () => {
    const [ college, setCollege ] = React.useState(false);
    const [ wall, setWall ] = React.useState(false);
    const [ safety, setSafety ] = React.useState(false);
    const [ mumbai, setMumbai ] = React.useState(false);
    const [ pune, setPune ] = React.useState(false)
    const [ photoIndex, setPhotoIndex ] = React.useState(0);
    const collegeImages = [collegeImage1,collegeImage2,collegeImage3,collegeImage4,collegeImage5,collegeImage6,collegeImage7];
    const wallImages = [wallImage1,wallImage2,wallImage3];
    const safetyImages = [safetyImage1,safetyImage2,safetyImage3,safetyImage4,safetyImage5,safetyImage6,safetyImage7,safetyImage8];
    const mumbaiImages = [mumbaiImage1,mumbaiImage2,mumbaiImage3,mumbaiImage4];
    const puneExibition = [PuneExibition2,PuneExibition3,PuneExibition4,PuneExibition5,PuneExibition6,PuneExibition7,PuneExibition8,PuneExibition1];
    const setting = {
        dots:true,
        infinite: true,
        speed:500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const renderWallLight = (index) => {
        setWall(true);
        setPhotoIndex(index);
    }
    const renderCollegeLight = (index) => {
        setCollege(true);
        setPhotoIndex(index);
    }
    const renderSafetyLight = (index) => {
        setSafety(true);
        setPhotoIndex(index);
    }
    const renderMumbaiLight = (index) => {
        setMumbai(true);
        setPhotoIndex(index);
    }
    const renderPuneLight = (index) => {
        setPune(true);
        setPhotoIndex(index);
    }
    return (
        <>
            <Grid container sx={{margin:{md:"97px 0 0",xs:"59px 0 0"},backgroundImage:"linear-gradient(to bottom, rgba(51, 188, 130, 0.3) 0%, rgba(51, 188, 130, 0) 45%)"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{padding:{md:"99px 155px 30px 155px"},textAlign:"center"}}>
                            <Box sx={{mt:5}}>
                                <Fade direction="up">
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"48px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.21,color:"#33bc82",marginBottom:"30px"}}>
                                        Our Initiatives
                                    </Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:500,fontFamily:"Montserrat",lineHeight:1.88,color:"#0e5156"}}>
                                        Make recycling a way of life for a billion people 
                                    </Typography>
                                </Fade>
                            </Box>
                        </Box>
                    </Container>    
                </Grid>        
            </Grid>
            <Grid container sx={{mb:"83px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{overflow:"hidden",pb:5}}>
                            <Slider {...setting}>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 1"
                                        height="474"
                                        image={img1}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 2"
                                        height="474"
                                        image={img2}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="Initiatives 3"
                                        height="474"
                                        image={img3}
                                        sx={{borderRadius:"12px"}}
                                    />
                                </div>
                            </Slider>
                        </Box>    
                    </Container>
                </Grid>    
            </Grid>
            <Grid container sx={{mb:"112px"}}>
                <Container fixed>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px",minHeight:365}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.3,color:"#0e5156"}}>
                                                Wall Painting initiatives across the Nashik city. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:3,minHeight:105}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                We have done wall painting initiatives across the nashik city to celebrate Azadi ka amrut mahotsav and creating awareness about waste management along with Nashik Municipal Corporations. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}} onClick={() => renderWallLight(0)}>See Photos</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px",minHeight:365}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.3,color:"#0e5156"}}>
                                                Fire and Safety Training at Techeco Factory 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:3,minHeight:105}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                Being familiar with basic fire protection systems including the basics of fire extinguishers and how to use them. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}} onClick={() => renderSafetyLight(0)}>See Photos</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>    
                        </Grid> 
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px",minHeight:365}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.3,color:"#0e5156"}}>
                                                Industry Visit by Garware Institute of Career &amp; Management, Mumbai 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:3,minHeight:105}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                Detailed Industrial site visit of Techeco Waste Management LLP was done and students were  educated about e waste recycling under guidance of Plant Director Mr. Parikshit Deshmukh. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}} onClick={() => renderMumbaiLight(0)}>See Photos</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px",minHeight:365}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.3,color:"#0e5156"}}>
                                                Industry Visit by NDMVP’S College of Architecture, Nashik 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:3,minHeight:105}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                                Detailed Industrial site visit of Techeco Waste Management LLP was done and students were  educated about e waste recycling under guidance of Plant Director Bhushan Kapase. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}} onClick={() => renderCollegeLight(0)}>See Photos</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>    
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Card sx={{padding:"31px 37px 39px 42px",boxShadow:"none",border:"solid 0.5px rgba(14, 81, 86, 0.2)",borderRadius:"12px",minHeight:365}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:{md:"24px"},fontWeight:600,fontFamily:"Montserrat",lineHeight:1.3,color:"#0e5156"}}>
                                                Pune Exibition 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:3,minHeight:105}}>
                                            <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",lineHeight:1.79,color:"#0e5156"}}>
                                            Pune Exibition Detailed Industrial site visit of Techeco Waste Management LLP was done and students were  educated about e waste recycling under guidance of Plant Director Bhushan Kapase. 
                                            </Typography>
                                        </Box>
                                        <Box sx={{mt:2}}>
                                            <Button variant="outlined" sx={{border:"solid 1px #33bc82",padding:"12px 19px 11px 24px",borderRadius:"33px",fontSize:"14px",fontWeight:500,fontFamily:"Montserrat",color:"#33bc82",textTransform:"capitalize","&:hover":{border:"solid 1px #33bc82",backgroundColor:"transparent"},}} onClick={() => renderPuneLight(0)}>See Photos</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>    
                        </Grid> 
                    </Grid>    
                </Container>    
            </Grid>
            <ContactForm/>
            {
                wall && (
                    <Lightbox
                        mainSrc={wallImages[photoIndex]}
                        nextSrc={wallImages[(photoIndex + 1) % wallImages.length]}
                        prevSrc={wallImages[(photoIndex + wallImages.length - 1) % wallImages.length]}
                        onCloseRequest={() => setWall(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + wallImages.length - 1) % wallImages.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % wallImages.length)}
                       
                    />
                )
            }
            {
                college && (
                    <Lightbox
                        mainSrc={collegeImages[photoIndex]}
                        nextSrc={collegeImages[(photoIndex + 1) % collegeImages.length]}
                        prevSrc={collegeImages[(photoIndex + collegeImages.length - 1) % collegeImages.length]}
                        onCloseRequest={() => setCollege(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + collegeImages.length - 1) % collegeImages.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % collegeImages.length)}
                       
                    />
                )
            }
            {
                mumbai && (
                    <Lightbox
                        mainSrc={mumbaiImages[photoIndex]}
                        nextSrc={mumbaiImages[(photoIndex + 1) % mumbaiImages.length]}
                        prevSrc={mumbaiImages[(photoIndex + mumbaiImages.length - 1) % mumbaiImages.length]}
                        onCloseRequest={() => setMumbai(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + mumbaiImages.length - 1) % mumbaiImages.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % mumbaiImages.length)}
                       
                    />
                )
            }
            {
                safety && (
                    <Lightbox
                        mainSrc={safetyImages[photoIndex]}
                        nextSrc={safetyImages[(photoIndex + 1) % safetyImages.length]}
                        prevSrc={safetyImages[(photoIndex + safetyImages.length - 1) % safetyImages.length]}
                        onCloseRequest={() => setSafety(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + safetyImages.length - 1) % safetyImages.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % safetyImages.length)}
                       
                    />
                )
            }
            {
                pune && (
                    <Lightbox
                        mainSrc={puneExibition[photoIndex]}
                        nextSrc={puneExibition[(photoIndex + 1) % puneExibition.length]}
                        prevSrc={puneExibition[(photoIndex + puneExibition.length - 1) % puneExibition.length]}
                        onCloseRequest={() => setPune(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + puneExibition.length - 1) % puneExibition.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % puneExibition.length)}
                       
                    />
                )
            }
        </>
    );
};

export default Initiatives;