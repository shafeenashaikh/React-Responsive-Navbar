import React from 'react';
import {MenuList} from './MenuList'
import "./Navbar.css";
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">
                    {title}
                </NavLink>
            </li>
        )
    });
    return(
        <nav>
            <div className="logo">
            VPN<font>Lab</font>
            </div>
            <ul className="menu-list">
                 {menuList}
            </ul>
        </nav>
    )
}
export default Navbar;