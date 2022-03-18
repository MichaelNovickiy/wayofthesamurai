import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={c.header}>
            <img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png"/>
            <div className={c.loginBlock}>
                {props.isAuth ? <div>Логин: {props.login}<div>ID: {props.id}</div></div>:
                    <NavLink to={'/login'}>Login
                    </NavLink>}
            </div>
        </header>
    )
}