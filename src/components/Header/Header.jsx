import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {geAuthSelector, logout} from '../../redux/auth-reducer';
import {Button, Layout} from 'antd';

export const HeaderContainer = () => {
    const {isAuth, login} = useSelector((state) => geAuthSelector(state))
    const dispatch = useDispatch()
    const {Header} = Layout;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Header className="header">
            <div style={{color: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                {isAuth
                    ?
                    <div>{login} - <Button onClick={logoutHandler}>Log out</Button></div>
                    :
                    <div><Button><Link to={'/login'}>Login</Link></Button></div>
                }
            </div>
        </Header>
    )
}