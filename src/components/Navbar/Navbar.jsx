import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? c.active : c.item}>
                    Profile
                </NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? c.active : c.item}>
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