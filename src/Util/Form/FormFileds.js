import React from 'react';
import { FormControl,TextField,InputLabel,Select,MenuItem } from "@mui/material";
const FormFileds = ({ formdata, change, id }) => {
    const showError = () => {
        let errorMessage = null;
        if(formdata.validation && !formdata.valid){
            errorMessage = formdata.validationMessage
        }
        return errorMessage;
    };
    const renderTemplate = () => {
        let formTemplate = null;
        switch(formdata.element){
            case("input"):
                formTemplate = (
                    <>
                        <InputLabel id={id} sx={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:500,color:"#0e5156",marginBottom:"12.5px"}}>{formdata.config.label}</InputLabel>
                        <TextField
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={ (event)=> change({ event, id, blur:true }) }
                            onChange={ (event)=> change({ event, id }) }
                            helperText = { showError() }
                            fullWidth
                            sx={{marginBottom:"28.5px","&:focus":{outline:"1px solid #000 !important",color:"#0e5156"},}}
                        />
                    </>
                )
            break;
            case("select"):
                formTemplate = (
                    <FormControl variant="outlined" fullWidth sx={{m:1}}>
                        <InputLabel id={id}>{formdata.config.label}</InputLabel>
                        <Select
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={ (event)=> change({ event, id, blur:true }) }
                            onChange={ (event)=> change({ event, id }) }
                        >
                            {
                                formdata.config.options.map(item => (
                                    <MenuItem
                                        key={item.key}
                                        value={item.value}
                                    >
                                        {item.value}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                ); 
            break;
            default:
                formTemplate = null;
            break;
        }
        return formTemplate;
    }
    return (
        <>
          {renderTemplate()}  
        </>
    );
};

export default FormFileds;