import AuthService from "../../API/AuthService";
import {baseURL} from "../../API";
import axios from "axios";
import {AuthChange, ErrorChangeActionCreator, loadingCheck} from "./AuthActionCreator";


export const logins = (email, password) => async (dispatch) => {
    try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)

        dispatch(AuthChange(true))
        dispatch(ErrorChangeActionCreator(false))


    } catch (e) {
        dispatch(AuthChange(false))
        dispatch(ErrorChangeActionCreator(true))
    }
}


export const registrations = (data) => async dispatch => {
    try {
        const response = await AuthService.registration(data)
        localStorage.setItem('token', response.data.accessToken)

        dispatch(AuthChange(true))
    } catch (e) {
        dispatch(AuthChange(false))
    }
}


export const logout = () => async dispatch => {
    try {
        await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(AuthChange(false))
    } catch (e) {

    }
}

export const checkAuth = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/refresh`, {withCredentials: true})

        localStorage.setItem('token', response.data.accessToken)
        dispatch(AuthChange(true))
    } catch (e) {

        dispatch(AuthChange(false))

    }
    finally {
        dispatch(loadingCheck())
    }
}




