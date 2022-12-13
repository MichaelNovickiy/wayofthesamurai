import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import {Button, Checkbox, Form, Input} from 'antd';

const Login = () => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const captchaUrl = useSelector((state) => state.auth.captchaUrl)
    const errorMessage = useSelector((state) => state.auth.error)

    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        dispatch(login(formData.username, formData.password, formData.remember, formData.captcha))
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <>
        <h1>Login</h1>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {captchaUrl && <div>
                <p style={{textAlign: 'center'}}><img src={captchaUrl} alt="captcha"/></p>
                <Form.Item
                    label="Captcha"
                    name="captcha"
                    rules={[
                        {
                            required: true,
                            message: 'Antibot symbols',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </div>}

            {errorMessage &&
                <div style={{
                    border: '#f32020 2px solid',
                    padding: '5px',
                    color: '#fc8d8d',
                    borderRadius: '7px',
                    margin: '10px 0'
                }}><p style={{textAlign: 'center', margin: '0'}}>{errorMessage}</p></div>
            }

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default Login;