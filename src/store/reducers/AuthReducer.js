import {AUTH_TYPES} from "../actions/actionTypes";


const initialState = {
    isAuth: false,
    isError: false,
    isLoadind: true
}

export default function AuthReducer(state = initialState, action) {

    switch (action.type) {

        case AUTH_TYPES.IS_AUTH :
            return {
                ...state, isAuth: action.isAuth
            }
        case  AUTH_TYPES.IS_ERROR:
            return {
                ...state, isError: action.isError
            }
        case AUTH_TYPES.IS_LOADING:
            return{
                ...state, isLoadind: false
            }


        default:
            return state
    }
}