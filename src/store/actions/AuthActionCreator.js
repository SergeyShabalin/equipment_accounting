import {AUTH_TYPES} from '../actions/actionTypes'

export function AuthChange(isAuth) {
    return {
        type: AUTH_TYPES.IS_AUTH,
        isAuth: isAuth,
    }
}

export function ErrorChangeActionCreator(isError) {
    return {
        type: AUTH_TYPES.IS_ERROR,
        isError: isError
    }
}

export function loadingCheck() {
    return {
        type: AUTH_TYPES.IS_LOADING,
    }
}
