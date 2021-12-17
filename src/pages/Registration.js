import React from 'react'
import {Input} from "../components/input";
import {useDispatch} from "react-redux";
import {registrations} from "../store/actions/Auth";
import data from "bootstrap/js/src/dom/data";

export const Registration = () => {

    const  initState = {
        name: '',
        lastname: '',
        surname: '',
        phone:'',
        email: '',
        password: ''

    }

    const [registration, setRegistration] = React.useState(initState)

    const addRegistrationInputs = ({target})=>{
        setRegistration({
            ...registration, [target.name]: target.value,
        })
        console.log(registration)
    }

  const dispatch = useDispatch()

    const registrationSubmit = () => {
        dispatch(registrations(registration))
    }

    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h2 className='modalTitle'>Регистрация</h2>
                </div>

            </div>
            <Input
                label="Имя"
                name='name'
                value = {registration.name}
                onChange = {addRegistrationInputs}
            />
            <Input
                label="Фамилия"
                name = 'lastname'
                value = {registration.lastname}
                onChange={addRegistrationInputs}
            />

            <Input
                label="Отчество"
                name = 'surname'
                value = {registration.surname}
                onChange={addRegistrationInputs}
            />
            <Input
                label="Телефон"
                name = 'phone'
                type = 'phone'
                value = {registration.phone}
                onChange={addRegistrationInputs}
            />
            <Input
                label='Эл. почта'
                name = 'email'
                value = {registration.email}
                onChange={addRegistrationInputs}
            />

            <Input
                label="Пароль"
                name = 'password'
                type = 'password'
                value = {registration.password}
                onChange={addRegistrationInputs}
            />
            <button
                type="button"
                className=' btn btn-warning '
                onClick={
                    registrationSubmit
                }
            >Зарегистрироваться
            </button>

            <button
                type="button"
                className=' btn btn-secondary '
                onClick={
                    registrationSubmit
                }
            >Назад
            </button>



        </div>
    )
}