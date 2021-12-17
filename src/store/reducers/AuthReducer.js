import {AUTH_TYPES} from "../actions/actionTypes";



const initialState = {
  isAuth: false
}

export default function AuthReducer(state= initialState, action) {

    console.log('экшн', action)


if (AUTH_TYPES.IS_AUTH === action.type )
    return   {
    ...state,isAuth: action.isAuth
}

    return state


}