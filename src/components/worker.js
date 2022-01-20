import React from 'react'
import {useLocation} from 'react-router-dom'
import $api from "../API/index";

export const Worker = () => {

    const [user, setUser] = React.useState({})
    const location = useLocation()


    async function getUser() {
        let userId = location.pathname.split('/')[2]
        let resp = await $api.get('/users/' + userId)
        setUser(resp.data)
    }

    React.useEffect(() => {
        getUser()
    }, [])




    return (
        <div>

            <h2>Фамилия: {user.surname}</h2>
            <h2>Имя: {user.name}</h2>
            <h2>Отчество: {user.lastname}</h2>
            <h2>email: {user.email}</h2>
        </div>
    )
}