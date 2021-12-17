import {AUTH_TYPES} from '../actions/actionTypes'

export function AuthChange(isAuth) {
    return {
        type: AUTH_TYPES.IS_AUTH,
        isAuth: isAuth,
    }
}

