import React from 'react';
import { Box,Grid,Container,Tabs,Tab,Typography,Button,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { collectioncolumns,collectionCenter } from "../../Misc/EPR/Data";
import RecyclingPartner from "./RecyclingPartner";
import LogisticPartner from "./LogisticPartner";
import CPCBPartner from "./CPCBPartner";
import { stateList } from "../../Misc/State/State";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
}  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
const TabsComponent = () => {
    const [collectionList, setCollectionList] = React.useState();
    const [selectedState, setSelectedState] = React.useState();
    const [selectedCity, setSelectedCity] = React.useState();
    const [activeTabIndex, setActiveTabIndex] = React.useState(0)
    const submitFrom = (event) => {
        event.preventDefault();
        const dataToSubmit = {stateName: selectedState,cityName: selectedCity};
        const filterList = collectionCenter.filter((s,idx) => s.state === dataToSubmit.stateName && s.city === dataToSubmit.cityName);
        setCollectionList(filterList)
    }
    const handleChange = (value) => {
        setActiveTabIndex(value);
    };
    const availableCities = stateList.find(
        (s) => s.value === selectedState
    );
    return (
        <>
            <Grid container sx={{mb:8}}>
                <Container fixed>
                    <Box sx={{width:"100%"}}>
                        <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Tabs value={activeTabIndex} onChange={(event, value) => {handleChange(value)}} variant="scrollable" allowScrollButtonsMobile scrollButtons="auto" sx={{"& .Mui-selected":{color:"#33bc82 !important",fontWeight:"bold"},"& .MuiTabs-indicator":{backgroundColor:"#33bc82 !important"},"& .MuiTab-root":{fontFamily:"Montserrat",fontSize:{md:"20px"},color:"#0e5156",textTransform:"capitalize",pl:4,pr:4}}}>
                                <Tab label="Collection Centres list" {...a11yProps(0)}/>
                                <Tab label="Logistic partners" {...a11yProps(1)}/>
                                <Tab label="Recycling Partners" {...a11yProps(2)}/>
                                <Tab label="CPCB Notice" {...a11yProps(3)}/>
                            </Tabs>    
                        </Box>
                        <TabPanel value={activeTabIndex} index={0}>
                            <Box component="form" noValidate autoComplete="off" onSubmit={(event) => {submitFrom(event)}} sx={{mt:2}}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                                        <FormControl fullWidth sx={{m:1}}>
                                            <InputLabel id="stateName" sx={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156",marginBottom:"12.5px"}}>Select a State</InputLabel>
                                            <Select
                                                labelId="stateName"
                                                id="stateName"
                                                label="Select a State"
                                                name="state"
                                                value={selectedState || ""}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                                sx={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156",marginBottom:"12.5px"}}
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                {
                                                    stateList.map((item,index) => {
                                                        return (
                                                            <MenuItem
                                                                key={item.key}
                                                                value={item.value}
                                                            >
                                                                {item.value}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                                        <FormControl fullWidth sx={{m:1}}>
                                            <InputLabel id="cityName" sx={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156",marginBottom:"12.5px"}}>Choose city</InputLabel>
                                            <Select
                                                labelId="cityName"
                                                id="cityName"
                                                label="Choose city"
                                                name="city"
                                                value={selectedCity || ""}
                                                onChange={(e) => setSelectedCity(e.target.value)}
                                                sx={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156",marginBottom:"12.5px"}}
                                                variant="outlined"
                                                margin="dense"
                                            >
                                                {
                                                    availableCities?.city.map((item,index) => {
                                                        return (
                                                            <MenuItem
                                                                key={item.key}
                                                                value={item.value}
                                                            >
                                                                {item.value}
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                                        <Button variant="contained" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"6px",fontSize:"16px",fontWeight:600,fontFamily:"Montserrat",textTransform:"capitalize",'&:hover':{backgroundColor:"#33bc82"},mt:2,ml:1}} onClick={(element) => {submitFrom(element)}}>Search</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{borderRadius:"12px",height:"380px",textAlign:"center",width:"100%",mt:2,mb:2}}>
                                <DataGrid
                                    rows={collectionList || collectionCenter}
                                    columns={collectioncolumns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    disableSelectionOnClick
                                    sx={{"& .MuiDataGrid-renderingZone":{maxHeight: "none !important"},"& .MuiDataGrid-cell":{lineHeight: "unset !important",maxHeight: "none !important",whiteSpace: "normal"},"& .MuiDataGrid-row":{maxHeight: "none !important"},}}
                                />
                            </Box> 
                        </TabPanel>
                        <TabPanel value={activeTabIndex} index={1}><LogisticPartner/></TabPanel>
                        <TabPanel value={activeTabIndex} index={2}><RecyclingPartner/></TabPanel>
                        <TabPanel value={activeTabIndex} index={3}><CPCBPartner/></TabPanel> 
                    </Box>
                </Container>
            </Grid>
        </>
    );
};

export default TabsComponent;