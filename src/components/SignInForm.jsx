import { Formik, Form } from "formik";
import * as Yup from "yup";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from "react-redux";

import { loginStarted } from '../store/action';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Required field").email("Invalid Email format !"),
    password: Yup.string().required("Required field"),
    rememberUser: Yup.boolean().required()
});

function SignInForm(){

    const errorMessage = useSelector(state => state.error);

    const Dispatch = useDispatch();
    
    const submitForm = (values) => {
        const email = values.email;
        const password = values.password;
        const rememberUser = values.rememberUser;
        Dispatch(loginStarted(email, password, rememberUser))
    };

    return (
        <>
            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
                email: "",
                password: "",
                rememberUser: false
            }}
            onSubmit={(values) => {
                submitForm(values)
            }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue
                }) => (
                    <div className="signInForm__container">
                        {errorMessage && <div className="apiError">{errorMessage}</div>}
                        <div>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </div>
                        <div>
                            <h2>Sign In</h2>
                        </div>
                        <Form className="signInForm__form">
                            <div>
                                <label htmlFor="email">Username</label>
                                <input 
                                type="email" 
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                id="email"
                                />
                                {errors.email && touched.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                id="password"
                                />
                                {errors.password && touched.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div>
                                <input 
                                type="checkbox"
                                name="rememberUser"
                                id="rememberUser"
                                onChange={() => setFieldValue('rememberUser', !values.rememberUser)}
                                />
                                <span>Remember me</span>
                            </div>
                            <button className="button" type="submit">Sign In</button>
                        </Form>
                    </div>
                )} 

            </Formik>
        </>
    );
};

export default SignInForm;