import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Box,Grid,Container } from "@mui/material";
const MyMapComponent = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 20.593683, lng: 78.962883 }}
        >
        {
            props.isMarkerShown && 
                <Marker position={{ lat: 18.99261266468024, lng: 72.82475429671553 }} />
        }
    </GoogleMap>
));
const GoogleMaps = () => {
    return (
        <React.StrictMode>
            <Grid container sx={{mb:"108px"}}>
                <Grid item xs={12}>
                    <Container fixed>
                        <Box sx={{borderRadius:"12px"}}>
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwt-Pv34It1G-2rymYE2m6MU_Y0KCc9Xw&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `460px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </React.StrictMode>
    );
}

export default GoogleMaps;
// AIzaSyBwt-Pv34It1G-2rymYE2m6MU_Y0KCc9Xw