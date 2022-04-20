const validation = (values) => {

    let errors={};

    if(!values.firstname){
        errors.firstname="Mandatory Field."
    }

    if(!values.lastname){
        errors.lastname="Mandatory Field."
    }

    if(!values.email){
        errors.email="Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }

    if(!values.password){
        errors.password="Password is required."
    }
    else if(values.password.length < 8){
        errors.password="Password must be more than 8 characters."
    }

    if(!values.confirmpasswd){
        errors.confirmpasswd="Confirmpasswd is required."
    }
    else if(values.confirmpasswd!== values.password){
        errors.confirmpasswd="Confirmpasswd does not match Password"
    }

    return errors;
}

export default validation;