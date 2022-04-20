import  { useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => {

    const [values, setValues] = useState({
      firstname:     "",
      lastname:      "",
      email:         "",
      password:      "",
      confirmpasswd: "",
    });
    

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
            console.log( values.firstname,
               values.lastname,
               values.email,
               values.password,
               values.confirmpasswd
            );
        }
    }, [errors,submitForm,dataIsCorrect,values.firstname,values.lastname,values.email,values.password,values.confirmpasswd]);

    return { handleChange, handleFormSubmit, errors, values };

};

export default useForm;