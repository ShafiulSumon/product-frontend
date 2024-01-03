const Validate = (values) => {
    console.log(values);
    const errors = {
        "username": "",
        "email": "",
        "password": ""
    };
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!values.username){
        errors.username = "Username is required!";
    }
    if(!values.email) {
        errors.email = "Email is required!";
    }
    else if(!regex.test(values.email)) {
        errors.email = "Email is in wrong format.(e.g. abc@xyz.com)";
    }
    if(!values.password) {
        errors.password = "Password is required!";
    }
    console.log("errors: ", errors)

    return errors;
}

export default Validate;