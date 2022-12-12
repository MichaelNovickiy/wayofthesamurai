import React from 'react';
import style from './Header.module.css'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/auth-reducer';

import {Layout, Menu} from 'antd';

const {Header} = Layout;


export const HeaderMy = () => {
    const {isAuth, login, id} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout)
    }

    return (
        <Header className="header">
            {/*<div className="logo"/>*/}
            <div style={{color: 'white'}}>
                {isAuth ?
                    <div>Логин: {login} - <button onClick={logoutHandler}>Log out</button>
                        <div>ID: {id}</div>
                    </div> :
                    <Link to={'/login'}>Login</Link>}
            </div>
        </Header>
    )
}