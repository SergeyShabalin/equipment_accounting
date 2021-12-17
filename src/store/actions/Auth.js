import AuthService from "../../API/AuthService";
import {baseURL} from "../../API";
import axios from "axios";
import {AuthChange} from "./AuthActionCreator";


export const logins = (email, password) => async (dispatch) => {
    try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        console.log('login: ', response.data)
        dispatch(AuthChange(true))

    } catch (e) {
        console.log(e)
        dispatch(AuthChange(false))
    }
}


export const registrations = (data) => async dispatch => {
    try {
        const response = await AuthService.registration(data)
        localStorage.setItem('token', response.data.accessToken)
        console.log('registration', response.data)
        dispatch(AuthChange(true))
    } catch (e) {
        console.log(e)
        dispatch(AuthChange(false))
    }
}


// TODO сделать эту хуйню

export const logout = () => async dispatch => {
    try {
        await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(AuthChange(false))
    } catch (e) {
        console.log(e)
    }
}

export const checkAuth = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/refresh`, {withCredentials: true})
        console.log('checkAuth:', response.data)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(AuthChange(true))
    } catch (e) {
        console.log(e)
        dispatch(AuthChange(false))
    }
}




