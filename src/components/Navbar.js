import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">

        <div className="navbar-brand">
            Заметки
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    exact
                    to="/">Главная
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/about">Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;