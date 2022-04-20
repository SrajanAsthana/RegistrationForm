import React from "react";

import useForm from "./useForm";

const Register = ({ submitForm }) => {

    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );

    
    return(

        <div className="container">
            <div className = "app-wrapper">
                <div>
                    <h2 className="title">Registration</h2>
                </div>

                <form className="form-wrapper">

                    <div className="firstname">
                        <label className="label"> FirstName </label>
                        <input 
                          className="input" 
                          type="text" 
                          name="firstname" 
                          values={values.firstname}
                          onChange={handleChange}
                        />
                        { errors.firstname && <p className="error"> {errors.firstname} </p> }
                    </div>

                    <div className="lastname">
                        <label className="label"> LastName </label>
                        <input
                          className="input" 
                          type="text" 
                          name="lastname" 
                          values={values.lastname} 
                          onChange={handleChange}
                        />
                        { errors.lastname && <p className="error"> {errors.lastname} </p> }
                    </div>

                    <div className="email">
                        <label className="label"> Email </label>
                        <input 
                          className="input" 
                          type="email" 
                          name="email" 
                          values={values.email} 
                          onChange={handleChange}
                        />
                        { errors.email && <p className="error"> {errors.email} </p> }
                    </div>

                    <div className="password">
                        <label className="label"> Password </label>
                        <input 
                          className="input" 
                          type="password" 
                          name="password" 
                          values={values.password} 
                          onChange={handleChange}
                        />
                        { errors.password && <p className="error"> {errors.password} </p> }
                    </div>

                    <div className="confirmpasswd">
                        <label className="label"> Confirmpasswd </label>
                        <input 
                          className="input" 
                          type="password" 
                          name="confirmpasswd" 
                          values={values.confirmpasswd}
                          onChange={handleChange} 
                        />
                        { errors.confirmpasswd && <p className="error"> {errors.confirmpasswd} </p> }
                    </div>

                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                             Register 
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;