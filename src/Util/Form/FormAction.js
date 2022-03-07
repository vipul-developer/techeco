export const validate = (element,formdata=[]) => {
    let error = [true,""];
    if(element.validation.email){
        const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(element.value);
        const message = `${ !valid ? "Must be a valid email !":""}`;
        error = !valid ? [valid,message] : error;
    }
    if(element.validation.password){
        const valid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(element.value);
        const message = `${ !valid ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character":""}`;
        error = !valid ? [valid,message] : error;
    }
    if(element.validation.required){
        const valid = element.value.trim() !== "";
        const message = `${ !valid ? "This filed is required !":""}`;
        error = !valid ? [valid,message] : error;
    }
    return error;
};

export const update = (element,formdata,formname) => {
    const newFormdata = {
        ...formdata
    };
    const newElement = {
        ...newFormdata[element.id]
    };
    newElement.value = element.event.target.value;
    if(element.blur){
        let validData = validate(newElement,formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;
    return newFormdata;
};

export const generateData = (formdata,formname) => {
    let dataToSubmit = {};
    for(let key in formdata){
        dataToSubmit[key] = formdata[key].value;
    }
    return dataToSubmit;
}

export const isFormValid = (formdata,formname) => {
    let formIsValid = true;
    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid;
    }
    return formIsValid;
};

export const populateOptionFields = (formdata,arrayData=[],field) => {
    const newArray = [];
    const newFormData = { ...formdata};
    arrayData.forEach(item => {
        newArray.push({key:item._id,value:item.name})
    })
    newFormData[field].config.options = newArray;
    return newFormData;
}