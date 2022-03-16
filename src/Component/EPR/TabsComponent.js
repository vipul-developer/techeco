import React, { Component } from 'react';
import { Box,Grid,Container,Tabs,Tab,Typography,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FormFileds from "../../Util/Form/FormFileds";
import { update,generateData,isFormValid } from "../../Util/Form/FormAction";
import { collectioncolumns,collectionCenter } from "../../Misc/EPR/Data";
import RecyclingPartner from "./RecyclingPartner";
import LogisticPartner from "./LogisticPartner";
import CPCBPartner from "./CPCBPartner";
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
        data:"",
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
                        {key:"TN_01",value:"Tamil Nadu"},
                        {key:"HR_01",value:"Haryana"},
                        {key:"DL_01",value:"Delhi"},
                        {key:"MH_01",value:"Maharashtra"},
                        {key:"UP_01",value:"Uttar Pradesh"},
                        {key:"BH_01",value:"Bihar"},
                        {key:"CG_01",value:"Chhattisgarh"},
                        {key:"AP_01",value:"Andhra Pradesh"},
                        {key:"TL_01",value:"Telangana"},
                        {key:"GJ_01",value:"Gujrat"},
                        {key:"RJ_01",value:"Rajsthan"},
                        {key:"WB_01",value:"West Bangal"},
                        {key:"JH_01",value:"Jharkhand"},
                        {key:"UK_01",value:"Uttarakhand"}
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
                        {key:"CH_01",value:"Chennai"},
                        {key:"FA_01",value:"Faridabad"},
                        {key:"DL_01",value:"Delhi"},
                        {key:"TH_01",value:"Thane"},
                        {key:"GH_01",value:"Ghaziabad"},
                        {key:"DA_01",value:"Darbhanga"},
                        {key:"RA_01",value:"Raipur"},
                        {key:"VI_01",value:"Vijaywada"},
                        {key:"RR_01",value:"Ranga Reddy"},
                        {key:"AH_01",value:"Ahemdabad"},
                        {key:"JO_01",value:"Jodhpur"},
                        {key:"KO_01",value:"Kolkata"},
                        {key:"BO_01",value:"Bokaro"},
                        {key:"RU_01",value:"Rudrapur"}
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
        // if(formIsValid){
        //     console.log(dataToSubmit)
        // }else{
        //     this.setState({
        //         formError: true
        //     })
        // }
        const data = collectionCenter.filter((state,index) => state.state === dataToSubmit.stateName && state.city === dataToSubmit.cityName);
        this.setState({
            data:data
        })
    }
    updateForm = (element) => {
        const newFormData = update(element,this.state.formdata,"EPR");
        this.setState({
            formError: false,
            formdata: newFormData
        })
    }
    renderTable = (data=[]) => {
        if(data.length > 0){
            return(
                <DataGrid
                    rows={data}
                    columns={collectioncolumns}
                    pageSize={1}
                    rowsPerPageOptions={[1]}
                    disableSelectionOnClick
                    sx={{"& .MuiDataGrid-renderingZone":{maxHeight: "none !important"},"& .MuiDataGrid-cell":{lineHeight: "unset !important",maxHeight: "none !important",whiteSpace: "normal"},"& .MuiDataGrid-row":{maxHeight: "none !important"},}}
                />
            )
        }else{
            return(
                <Typography variant="h6" component="div" gutterBottom color="error.main">Data Not Found Please Select State And City !</Typography>
            )
        }

    }
    render() {
        return (
            <>
                <Grid container>
                    <Container fixed>
                        <Box sx={{width:"100%"}}>
                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Tabs value={this.state.activeTabIndex} onChange={(event, value) => {this.handleChange(value)}} variant="scrollable" allowScrollButtonsMobile scrollButtons="auto" sx={{"& .Mui-selected":{color:"#33bc82 !important",fontWeight:"bold"},"& .MuiTabs-indicator":{backgroundColor:"#33bc82 !important"},"& .MuiTab-root":{fontFamily:"Montserrat",fontSize:{md:"20px"},color:"#0e5156",textTransform:"capitalize",pl:4,pr:4}}}>
                                    <Tab label="Collection Centres list" {...a11yProps(0)}/>
                                    <Tab label="Logistic partners" {...a11yProps(1)}/>
                                    <Tab label="Recycling Partners" {...a11yProps(2)}/>
                                    <Tab label="CPCB Notice" {...a11yProps(3)}/>
                                </Tabs>    
                            </Box>
                            <TabPanel value={this.state.activeTabIndex} index={0}>
                                <Box component="form" noValidate autoComplete="off" onSubmit={(event) => {this.submitFrom(event)}} sx={{mt:2}}>
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
                                            <Button variant="contained" sx={{color:"#FFF",backgroundColor:"#33bc82",borderRadius:"6px",fontSize:"16px",fontWeight:600,fontFamily:"Montserrat",textTransform:"capitalize",'&:hover':{backgroundColor:"#33bc82"},mt:2,ml:1}} onClick={(element) => {this.submitFrom(element)}}>Search</Button>
                                        </Grid>    
                                    </Grid>
                                </Box>
                                <Box sx={{borderRadius:"12px",height:"180px",textAlign:"center",width:"100%",mt:2,mb:2}}>
                                    {this.renderTable(this.state.data)}
                                </Box> 
                            </TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={1}><LogisticPartner/></TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={2}><RecyclingPartner/></TabPanel>
                            <TabPanel value={this.state.activeTabIndex} index={3}><CPCBPartner/></TabPanel>     
                        </Box> 
                    </Container>   
                </Grid>
            </>
        );
    }
}

export default TabsComponent;