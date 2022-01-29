import React from 'react'
import {Input} from "../components/elements/Input";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logins} from "../store/actions/Auth";

import '../styles/Login.css'
import AuthReducer from "../store/reducers/AuthReducer";
import {ErrorChangeActionCreator} from "../store/actions/AuthActionCreator";


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
    }


    const dispatch = useDispatch()
    const isError = useSelector((store) => store.AuthReducer.isError)

    const entrance = () => {
        dispatch(logins(login.email, login.password))

    }

    function isErrorSet(){
        dispatch(ErrorChangeActionCreator(false))
    }
    setTimeout(isErrorSet, 2200)


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


                <div className='error'  >
                    {isError &&  <>Неверный логин или пароль</> }
                </div>
                <div>


                    <button
                        type="button"
                        className=' buttons btn btn-success button '
                        onClick={entrance}
                    >Вход
                    </button>


                    <NavLink
                        to="/registration"
                        className=" button"
                    >
                        <button
                            type="button"
                            className=' buttons btn btn-secondary button'
                        >Регистрация
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}