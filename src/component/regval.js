const regval = (values) => {
    let errors={};

    if(!values.username){
        errors.username = "UserName is Required";
    }

    if(!values.email){
        errors.email = "Email is Required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    
    if(!values.phnumber){
        errors.phnumber = "Phone Number is Required";
    }else if(values.phnumber.length < 10 || values.phnumber.length > 10){
        errors.phnumber="Enter Valid Number"
    }

    if(!values.password){
        errors.password = "Password is Required";
    }else if(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]$/g.test(values.password)){
        errors.password="Password contain at least one spacial character"
    }else if(values.password.length < 8 ){
        errors.password="Password length must be 8character"
    }

    return errors;
}
export default regval;