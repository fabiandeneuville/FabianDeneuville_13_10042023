import { Formik, Form } from "formik";
import * as Yup from "yup";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Required field").email("Invalid Email format !"),
    password: Yup.string().required("Required field"),
    rememberUser: Yup.boolean().required()
});

function submitForm(values){
    console.log(values)
}

function SignInForm(){
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
                    setFieldValue
                }) => (
                    <div className="signInForm__container">
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
                                value={values.email}
                                id="email"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                id="password"
                                />
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
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
                            <button type="submit">Sign In</button>
                        </Form>
                    </div>
                )} 

            </Formik>
        </>
    );
};

export default SignInForm;