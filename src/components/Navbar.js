import React from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../store/actions/Auth";
import Drawer from "./Drawer";


export const Navbar = () => {

    const dispatch = useDispatch()

    const exitAuth = () => {
        const confirm = window.confirm('Вы действительно хотите выйти?')
        if (confirm) {
            dispatch(logout())
        }
    }


    return (
        <nav className="navbar navbar-dark  bg-primary   navbar-expand-lg">
            <div className="navbar-brand p-3">
                Учёт оборудования
                 </div>

            <ul className="navbar-nav">

                <li className="nav-item">
                    <NavLink exact to="/devices" className="nav-link">Оборудование</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/department" className="nav-link">Отделы</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/workers" className="nav-link">Ответственные</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/registered" className="nav-link">Оприходовано</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/archive" className="nav-link">Списано</NavLink>
                </li>

                <li className="nav-item"
                    onClick={exitAuth}>
                    <NavLink to="/exit" className="nav-link">Выход</NavLink>
                </li>

            </ul>

        </nav>
    )
}