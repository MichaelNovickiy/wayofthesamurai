import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControls";
import {required} from "../../utuls/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} validate={[required]} name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default connect(null, {login, logout})(Login);