import React, { Component } from 'react';
import { Box,Grid,Container,Tabs,Tab,Typography,Button } from "@mui/material";
import FormFileds from "../../Util/Form/FormFileds";
import { update,generateData,isFormValid,populateOptionFields } from "../../Util/Form/FormAction";
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
          <Box sx={{p:5}}>
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
class TabsComponent extends Component {
    state = {
        activeTabIndex:0,
        formError: false,
        formSuccess: "",
        formdata:{
            stateName:{
                element: "select",
                value: "",
                config:{
                    name: "state",
                    type: "text",
                    label:"Select a State",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
                    options:[
                        {key:"AP_01",value:"Andhra Pradesh"},
                        {key:"CG_01",value:"Chhattisgarh"},
                        {key:"GJ_01",value:"Gujarat"},
                        {key:"MH_01",value:"Maharashtra"},
                        {key:"MP_01",value:"Madhya Pradesh"}
                    ]
                },
                validation: {
                    required: true,
                    email: false
                },
                valid: false,
                touched:false,
                validationMessage: ""
            },
            cityName:{
                element: "select",
                value: "",
                config:{
                    name: "city",
                    type: "text",
                    label:"Choose city",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
                    options:[
                        {key:"MH_01",value:"Mumbai"},
                        {key:"MH_02",value:"Pune"},
                        {key:"MH_03",value:"Nashik"},
                        {key:"MH_04",value:"Aurangabad"},
                        {key:"MH_05",value:"Solapur"}
                    ]
                },
                validation: {
                    required: true,
                    email: false
                },
                valid: false,
                touched:false,
                validationMessage: ""
            }
        }
    }
    handleChange = (value) => {
        this.setState({
            activeTabIndex: value
        })
    }
    submitFrom = (event) => {
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formdata,"EPR");
        let formIsValid = isFormValid(this.state.formdata,"EPR");
        if(formIsValid){
            console.log(dataToSubmit)
        }else{
            this.setState({
                formError: true
            })
        }
    }
    updateForm = (element) => {
        const newFormData = update(element,this.state.formdata,"EPR");
        this.setState({
            formError: false,
            formdata: newFormData
        })
    }
    render() {
        return (
            <>
                <Grid container sx={{mb:"97px"}}>
                    <Container fixed>
                        <Box sx={{width:"100%",mb:"62px"}}>
                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Tabs value={this.state.activeTabIndex} onChange={(event, value) => {this.handleChange(value)}} variant="scrollable" allowScrollButtonsMobile scrollButtons="auto" sx={{"& .Mui-selected":{color:"#33bc82 !important",fontWeight:"bold"},"& .MuiTabs-indicator":{backgroundColor:"#33bc82 !important"},"& .MuiTab-root":{fontFamily:"Montserrat",fontSize:{md:"20px"},color:"#0e5156",textTransform:"capitalize",pl:4,pr:4}}}>
                                    <Tab label="Collection Centres list" {...a11yProps(0)}/>
                                    <Tab label="Logistic partners" {...a11yProps(1)}/>
                                    <Tab label="Recycling Partners" {...a11yProps(2)}/>
                                    <Tab label="CPCB Notice" {...a11yProps(3)}/>
                                </Tabs>    
                            </Box>
                            <TabPanel value={this.state.activeTabIndex} index={0}>
                                <Box component="form" noValidate autoComplete="off" onSubmit={(event) => {this.submitFrom(event)}} sx={{pl:{md:5}}}>
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                                            <FormFileds
                                                id={"stateName"}
                                                formdata={this.state.formdata.stateName}
                                                change={(element) => this.updateForm(element)}
                                            />    
                                        </Grid>
                                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                                            <FormFileds
                                                id={"cityName"}
                                                formdata={this.state.formdata.cityName}
                                                change={(element) => this.updateForm(element)}
                                            />    
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                                            <Button variant="contained" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"6px",fontSize:"16px",fontWeight:600,fontFamily:"Montserrat",textTransform:"capitalize",'&:hover':{backgroundColor:"#33bc82"},mt:2}} onClick={(element) => {this.submitFrom(element)}}>Search</Button>
                                        </Grid>    
                                    </Grid>
                                </Box>
                                <Box sx={{backgroundColor:"rgba(14, 81, 86, 0.12)",borderRadius:"12px",height:"460px",mt:"62px"}}>

                                </Box> 
                            </TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={1}>Logistic partners</TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={2}>Recycling Partners</TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={3}>CPCB Notice Tab</TabPanel>     
                        </Box> 
                    </Container>   
                </Grid>
            </>
        );
    }
}

export default TabsComponent;