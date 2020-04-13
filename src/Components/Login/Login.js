import React from 'react';
import { connect } from 'react-redux';
import { loginTC } from '../../Redux/authReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css';
import ProductBlockContainer from '../ProductBlock/ProductBlockContainer';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    console.log('login props');
    console.log(props);
    if(props.isAuth){
        return <ProductBlockContainer />
    }
    else {
    return (
    <div>
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Required';
            } 
            // else if (
            // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            // errors.email = 'Invalid email address';
            // }
            return errors;
        }}
        onSubmit={(values) => {
            props.loginTC(values.email, values.password);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
            <div>
                <Field className={s.divEmail} name="email" />
                <ErrorMessage name="email" component="div" />
            </div>
            <div>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
            </Form>
        )}
        </Formik>
    </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginTC })(Login);





  