import React, { useState } from "react";
import Register from "./Register";
import Registrationsuccess from "./Registrationsuccess";

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{

        setFormIsSubmitted(true);
    }

    return (

        <div>
           {!formIsSubmitted ? (
            <Register submitForm={submitForm} />
            ) : (
            <Registrationsuccess />
           )} 
        </div>
    );
};

export default Form;