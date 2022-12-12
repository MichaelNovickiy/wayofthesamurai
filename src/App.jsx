import React, {useEffect} from 'react';
import './App.css';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import Preloader from './components/Common/Preloader/Preloader';
import {initializeApp} from './redux/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderMy} from './components/Header/Header'

import {Layout, Menu, theme} from 'antd';
import {CalendarOutlined, MailOutlined,} from '@ant-design/icons';

const {Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {key, icon, children, label,};
}

const items = [
    getItem(<Link to="/profile">Profile</Link>, 'One', <MailOutlined/>),
    getItem(<Link to="/users">Users</Link>, 'Two', <CalendarOutlined/>),
    getItem(<Link to="/dialogs">Messages</Link>, 'Three', <CalendarOutlined/>),
];


const App = () => {
    const {token: {colorBgContainer}} = theme.useToken();

    const initialized = useSelector(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return (
        <>
            {initialized
                ?
                <Layout>
                    <HeaderMy/>
                    <Content style={{padding: '0 50px'}}>
                        <Layout style={{padding: '24px 0', background: colorBgContainer}}>
                            <Sider style={{background: colorBgContainer}} width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{height: '100%'}}
                                    items={items}
                                />
                            </Sider>
                            <Content style={{padding: '0 24px', minHeight: 280}}>
                                <Switch>
                                    <Route path="/dialogs"
                                           render={() => <DialogsContainer/>}/>
                                    <Route path="/profile/:userId?"
                                           render={() => <ProfileContainer/>}/>
                                    <Route path="/users"
                                           render={() => <UsersContainer/>}/>
                                    <Route path="/login"
                                           render={() => <Login/>}/>
                                    <Route path="*"
                                           render={() => <h1 style={{display: 'flex', justifyContent: 'center'}}>
                                               404 PAGE NOT FOUND</h1>}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Social Network ©2022 Created by Mikhail Novickiy</Footer>
                </Layout>
                :
                <Preloader/>}
        </>
    )
}

export default withRouter(App);