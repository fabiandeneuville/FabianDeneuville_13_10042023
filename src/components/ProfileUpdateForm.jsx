import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import { updateProfileStarted } from "../store/action";

const updateValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required field"),
    lastName: Yup.string().required("Required field")
});

function ProfileUpdateForm(props){

    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.error);
    const isRequesting = useSelector(state => state.isRequesting);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const submitForm = (values) => {
        const firstName = values.firstName;
        const lastName = values.lastName;
        dispatch(updateProfileStarted({firstName, lastName}));
    };

    return (
        <div className="profileUpdateForm__container">
            <button
            className="button"
            onClick={() => toggleForm()}
            >
                {showForm ? "Close" : "Edit Name"}
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
                            {errorMessage && <div className="apiError">{errorMessage}</div>}
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
                            <button 
                            className="button danger"
                            disabled={isRequesting}
                            onClick={() => {
                                resetForm();
                            }}>Cancel</button>
                        </Form>
                    )} 
                </Formik>
            }
        </div>
    );
};

export default ProfileUpdateForm;

ProfileUpdateForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};