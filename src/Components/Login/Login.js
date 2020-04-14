import React from 'react';
import { connect } from 'react-redux';
import { loginTC } from '../../Redux/authReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    console.log('login props');
    console.log(props);
    if(props.isAuth){
        return <Redirect to='/products'/>
    }
    else {
    return (
    <div className={s.container}>
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'This field is required!';
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
            <Form className={s.authBlock}>
                <div className={s.inputBlock}>
                    <p>Логин</p>
                    <Field placeholder={'Введите Email'} className={s.input} name="email" />
                    <ErrorMessage className={s.errorMessage} name="email" component="div" />
                </div>
                
                <div className={s.inputBlock}>
                    <p>Пароль</p>
                    <Field placeholder={'Введите пароль'} className={s.input} type="password" name="password" />
                    <ErrorMessage className={s.errorMessage} name="password" component="div" />
                </div>
                
                <div className={s.inputBlock}>
                    <button className={s.buttonSubmit} type="submit">
                        Войти
                    </button>
                </div>
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





  