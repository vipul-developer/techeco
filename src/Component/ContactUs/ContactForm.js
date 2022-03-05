import React, { Component } from 'react';
import { Box,Grid,Container,Typography,Button } from "@mui/material";
import FormFileds from "../../Util/Form/FormFileds";
import { update,generateData,isFormValid } from "../../Util/Form/FormAction";
class ContactForm extends Component {
    state = {
        formError: false,
        formSuccess: "",
        formdata:{
            fullName:{
                element: "input",
                value: "",
                config:{
                    name: "fullname",
                    type: "text",
                    label:"Full Name",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
                },
                validation: {
                    required: true,
                    email: false
                },
                valid: false,
                touched:false,
                validationMessage: ""
            },
            email:{
                element: "input",
                value: "",
                config:{
                    name: "email",
                    type: "email",
                    label:"Email",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched:false,
                validationMessage: ""
            },
            phoneNumber:{
                element: "input",
                value: "",
                config:{
                    name: "phonenumber",
                    type: "text",
                    label:"Phone Number",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
                },
                validation: {
                    required: true,
                    email: false
                },
                valid: false,
                touched:false,
                validationMessage: ""
            },
            supportYou:{
                element: "input",
                value: "",
                config:{
                    name: "support",
                    type: "text",
                    label:"how would you like us to support you?",
                    required:true,
                    margin:"dense",
                    variant:"outlined",
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
    submitFrom = (event) => {
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formdata,"contact");
        let formIsValid = isFormValid(this.state.formdata,"contact");
        if(formIsValid){
            console.log(dataToSubmit)
        }else{
            this.setState({
                formError: true
            })
        }
    }
    updateForm = (element) => {
        const newFormData = update(element,this.state.formdata,"contact");
        this.setState({
            formError: false,
            formdata: newFormData
        })
    }
    render() {
        return (
            <>
                <Grid container sx={{backgroundColor:"#effaf5",padding:{md:"76px 100.5px 76px 100px"},pb:5}}>
                    <Grid item xs={12}>
                        <Container fixed>
                            <Grid container>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={{mb:3}}>
                                    <Box>
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"20px",fontFamily:"Montserrat",color:"#000"}}>Contact us</Typography>
                                        <Typography variant="body1" component="div" gutterBottom sx={{fontSize:"48px",fontWeight:600,fontFamily:"Montserrat",color:"#0e5156",lineHeight:1.21,margin:"27px 0 0 0"}}>Let’s make<br/>this possible.<br/><span style={{color:"#33bc82"}}>Together</span></Typography>
                                    </Box>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <Box component="form" noValidate autoComplete="off" onSubmit={(event) => {this.submitFrom(event)}}>
                                        <FormFileds
                                            id={"fullName"}
                                            formdata={this.state.formdata.fullName}
                                            change={(element) => this.updateForm(element)}
                                        />
                                        <FormFileds
                                            id={"email"}
                                            formdata={this.state.formdata.email}
                                            change={(element) => this.updateForm(element)}
                                        />
                                        <FormFileds
                                            id={"phoneNumber"}
                                            formdata={this.state.formdata.phoneNumber}
                                            change={(element) => this.updateForm(element)}
                                        />
                                        <FormFileds
                                            id={"supportYou"}
                                            formdata={this.state.formdata.supportYou}
                                            change={(element) => this.updateForm(element)}
                                        />
                                        <Button variant="contained" sx={{padding:{md:"18.3px 36.6px 19.3px 35.6px"},color:"#FFF",backgroundColor:"#0e5156",borderRadius:"12px",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat",textTransform:"capitalize",'&:hover':{backgroundColor:"#0e5156"},}} onClick={(element) => {this.submitFrom(element)}}>Submit</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>    
                </Grid>
            </>
        );
    }
}

export default ContactForm;