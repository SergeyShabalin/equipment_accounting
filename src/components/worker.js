import React from 'react'
import {useLocation} from 'react-router-dom'
import $api from "../API/index";

export const Worker = () => {

const location = useLocation()


    console.log(location.pathname.split('/')[2])
async function getUserData(){
    $api.get('http://localhost:1000/api')
}
    return (
        <div>
            {/*<h2>Фамилия: {initState.bossSurName}</h2>*/}
            {/*<h2>Имя: {initState.bossName}</h2>*/}
            {/*<h2>Отчество:{initState.bossMiddleName}</h2>*/}
            {/*<h2>email: {initState.email}</h2>*/}
        {/*<button onClick={transferInfoWork}>тык</button>*/}
        </div>
    )
}