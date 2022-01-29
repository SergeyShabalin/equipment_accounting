import React from 'react'
import {Input} from "../components/elements/Input";
import {useDispatch} from "react-redux";
import {registrations} from "../store/actions/Auth";
import data from "bootstrap/js/src/dom/data";
import {NavLink} from "react-router-dom";
import '../styles/Registrations.css'

export const Registration = () => {

    const initState = {
        name: '',
        lastname: '',
        surname: '',
        phone: '',
        email: '',
        password: ''

    }

    const [registration, setRegistration] = React.useState(initState)

    const addRegistrationInputs = ({target}) => {
        setRegistration({
            ...registration, [target.name]: target.value,
        })

    }

    const dispatch = useDispatch()

    const registrationSubmit = () => {
        dispatch(registrations(registration))
    }

    return (<div className='backRegistration'>
            <div className="registration">
                <div className="jumbotron">
                    <div className="container">
                        <h2 className='modalTitle'>Регистрация</h2>
                    </div>

                </div>
                <Input
                    label="Имя"
                    name='name'
                    value={registration.name}
                    onChange={addRegistrationInputs}
                />
                <Input
                    label="Фамилия"
                    name='lastname'
                    value={registration.lastname}
                    onChange={addRegistrationInputs}
                />

                <Input
                    label="Отчество"
                    name='surname'
                    value={registration.surname}
                    onChange={addRegistrationInputs}
                />
                <Input
                    label="Телефон"
                    name='phone'
                    type='phone'
                    value={registration.phone}
                    onChange={addRegistrationInputs}
                />
                <Input
                    label='Эл. почта'
                    name='email'
                    value={registration.email}
                    onChange={addRegistrationInputs}
                />

                <Input
                    label="Пароль"
                    name='password'
                    type='password'
                    value={registration.password}
                    onChange={addRegistrationInputs}
                />

                <button
                    type="button"
                    className='buttons btn btn-success '
                    onClick={
                        registrationSubmit
                    }
                >Зарегистрироваться
                </button>


                <NavLink to="/login"
                         className=" button">

                <button
                    type="button"
                    className='buttons btn btn-secondary '
                >Назад
                </button>
            </NavLink>
            </div>
        </div>
    )
}