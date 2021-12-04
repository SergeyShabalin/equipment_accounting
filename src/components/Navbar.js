import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (

    <nav className="navbar navbar-dark  bg-primary bg-opacity-78 navbar-expand-lg">
        <div className="navbar-expand">
            Учёт оборудования
        </div>
        <ul className="navbar-nav">

            <li className="nav-item">
                <NavLink exact to="/devices" className="nav-link">Оборудование</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/about" className="nav-link">Отделы</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/worker" className="nav-link">Ответственные</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/registered" className="nav-link">Оприходовано</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/archive" className="nav-link">Списано</NavLink>
            </li>
        </ul>
    </nav>
)