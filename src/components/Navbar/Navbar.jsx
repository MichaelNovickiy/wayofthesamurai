import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.active}>
                    Profile
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/users" activeClassName={c.active}>
                    Users
                </NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/dialogs" activeClassName={c.active}>
                    Messages
                </NavLink>
            </div>
            <div className={c.item}>
                <a>
                    News
                </a>
            </div>
            <div className={c.item}>
                <a>
                    Settings
                </a>
            </div>
        </nav>
    )
}