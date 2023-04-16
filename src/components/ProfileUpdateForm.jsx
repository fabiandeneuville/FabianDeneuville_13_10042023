import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const updateValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required field"),
    lastName: Yup.string().required("Required field")
});

function ProfileUpdateForm(props){

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    const submitForm = (values) => {
        const firstName = values.firstName;
        const lastName = values.lastName;
        console.log({firstName, lastName});
    };

    return (
        <div className="profileUpdateForm__container">
            <button
            className="button"
            onClick={() => toggleForm()}
                >Edit Name
            </button>
            {showForm &&
                <Formik
                validationSchema={updateValidationSchema}
                initialValues={{
                    firstName: props.firstName,
                    lastName: props.lastName,
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
                    resetForm
                }) => (
                        <Form className="profileUpdateForm__form">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                type="text" 
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                id="firstName"
                                />
                                {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                type="text" 
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                id="lastName"
                                />
                                {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                            </div>
                            <button className="button" type="submit">Update Profile</button>
                            <button className="button danger" 
                            onClick={() => {
                                resetForm();
                                toggleForm();
                            }}>Cancel</button>
                        </Form>
                    )} 
                </Formik>
            }
        </div>
    );
};

export default ProfileUpdateForm;