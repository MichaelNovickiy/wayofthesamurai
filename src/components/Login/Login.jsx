import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from '../Common/FormsControl/FormsControls';
import {required} from '../../utuls/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import style from '../Common/FormsControl/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", [required], "email", Input)}
            {createField("Password", [required], "password", Input, {type: "password"})}
            {createField(null, null, "rememberMe", Input, {type: "checkbox"}, "Remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Antibot symbols', [required], "captcha", Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);