import React from 'react'
import {Input} from "../components/input";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logins} from "../store/actions/Auth";

import '../styles/Login.css'


export const Login = () => {

    const initState = {
        email: '',
        password: ''

    }

    const [login, setLogin] = React.useState(initState)

    const addLoginPass = ({target}) => {
        setLogin({
            ...login, [target.name]: target.value,
        })
        console.log(login)
    }

    const dispatch = useDispatch()

    const entrance = () => {
        dispatch(logins(login.email, login.password))
    }


    return (
        <div className='backLogin'>
            <div className="Login">
                <div className="jumbotron">
                    <div className="container">
                        <h2 className='modalTitle'>Авторизация</h2>
                    </div>

                </div>
                <Input
                    label="Логин"
                    name='email'
                    type='email'
                    value={login.email}
                    onChange={addLoginPass}
                />
                <Input
                    label="Пароль"
                    name='password'
                    value={login.password}
                    type='password'
                    onChange={addLoginPass}
                />

                <div className= "buttons">
                <button
                    type="button"
                    className='buttons btn btn-success '
                    onClick={entrance}
                >Вход
                </button>


                <NavLink
                    to="/registration"
                    className="nav-link">
                    <button
                        type="button"
                        className='buttons btn btn-secondary '
                    >Регистрация
                    </button>
                </NavLink>
            </div>
            </div>
        </div>
    )
}