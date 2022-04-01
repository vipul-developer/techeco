import React from 'react';
import { Box,Grid,Container } from "@mui/material";

const GoogleMaps = () => {
    return (
        <Grid container sx={{mb:"108px"}}>
            <Grid item xs={12}>
                <Container fixed>
                    <Box sx={{borderRadius:"12px"}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59951.79169249497!2d73.77513577612979!3d20.09283108651279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdde99cc8e8452b%3A0x2344c29faf696b9!2sTecheco%20eWaste%20Namo%20LLP!5e0!3m2!1sen!2sin!4v1648836082176!5m2!1sen!2sin" width="100%" height="500"></iframe>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
}
export default GoogleMaps;
// AIzaSyBwt-Pv34It1G-2rymYE2m6MU_Y0KCc9Xw